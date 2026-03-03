import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ShoppingCart } from "lucide-react";
import { menuData, parsePrice } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

// Categories available for ordering (skip Build Your Own for now since it has no items)
const orderCategories = Object.keys(menuData).filter((c) => menuData[c].length > 0);

const OrderPage = () => {
  const [active, setActive] = useState(orderCategories[0]);
  const { addItem, totalItems } = useCart();
  const { toast } = useToast();

  const handleAdd = (category: string, name: string, priceStr: string) => {
    const price = parsePrice(priceStr);
    addItem(category, name, price);
    toast({ title: `${name} added to cart`, description: `$${price.toFixed(2)}` });
  };

  return (
    <>
      <section className="relative py-24 px-4 bg-foreground text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">
            Order Online
          </motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="font-display text-4xl sm:text-5xl font-bold mt-2">
            Place Your Order
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="text-primary-foreground/70 mt-3 text-sm">
            Add items to your cart and checkout for pickup
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {orderCategories.map((cat) => (
              <Button
                key={cat}
                variant={active === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActive(cat)}
                className={active === cat ? "bg-primary hover:bg-primary/90" : ""}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Items */}
          <div className="grid gap-4 sm:grid-cols-2">
            {(menuData[active] || []).map((item, i) => (
              <motion.div key={item.name} initial="hidden" animate="visible" custom={i} variants={fadeUp}>
                <Card className="h-full border bg-card hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                      {item.desc && <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>}
                    </div>
                    <span className="font-display text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                    <Button
                      size="icon"
                      className="shrink-0 bg-primary hover:bg-primary/90 h-9 w-9"
                      onClick={() => handleAdd(active, item.name, item.price)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Cart reminder */}
          {totalItems > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 text-center">
              <p className="text-muted-foreground text-sm mb-2">
                You have {totalItems} item{totalItems > 1 ? "s" : ""} in your cart
              </p>
              <p className="text-muted-foreground text-xs">Open your cart from the top navigation to checkout</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default OrderPage;
