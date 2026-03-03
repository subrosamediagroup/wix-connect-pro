import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { format } from "date-fns";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

interface OrderWithItems {
  id: string;
  customer_name: string;
  status: string;
  total_price: number;
  created_at: string;
  notes: string | null;
  order_items: { item_name: string; category: string; price: number; quantity: number }[];
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  preparing: "bg-orange-100 text-orange-800",
  ready: "bg-green-100 text-green-800",
  completed: "bg-muted text-muted-foreground",
  cancelled: "bg-red-100 text-red-800",
};

const OrderHistory = () => {
  const { user, loading: authLoading } = useAuth();
  const [orders, setOrders] = useState<OrderWithItems[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("*, order_items(item_name, category, price, quantity)")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (!error && data) setOrders(data as OrderWithItems[]);
      setLoading(false);
    };
    fetchOrders();
  }, [user]);

  if (authLoading) return null;
  if (!user) return <Navigate to="/auth" replace />;

  return (
    <>
      <section className="relative py-24 px-4 bg-foreground text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">
            Your Account
          </motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="font-display text-4xl sm:text-5xl font-bold mt-2">
            Order History
          </motion.h1>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          {loading ? (
            <div className="flex justify-center py-12"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
          ) : orders.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No orders yet. Place your first order!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order, i) => (
                <motion.div key={order.id} initial="hidden" animate="visible" custom={i} variants={fadeUp}>
                  <Card className="border bg-card">
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {format(new Date(order.created_at), "MMM d, yyyy 'at' h:mm a")}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className={statusColors[order.status] || ""}>{order.status}</Badge>
                          <span className="font-display text-lg font-bold text-primary">${order.total_price.toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {order.order_items.map((item, j) => (
                          <div key={j} className="flex justify-between text-sm">
                            <span className="text-foreground">{item.quantity}× {item.item_name} <span className="text-muted-foreground">({item.category})</span></span>
                            <span className="text-muted-foreground">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                      {order.notes && (
                        <p className="text-xs text-muted-foreground mt-2 italic">Note: {order.notes}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default OrderHistory;
