import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { menuData, parsePrice, parseSizes } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

const orderCategories = Object.keys(menuData).filter((c) => menuData[c].length > 0);

const SizeableItem = ({
  item,
  category,
  index,
}: {
  item: { name: string; desc: string; price: string };
  category: string;
  index: number;
}) => {
  const sizes = parseSizes(item.price);
  const [size, setSize] = useState<"small" | "large">("small");
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAdd = () => {
    if (sizes) {
      const price = size === "small" ? sizes.small : sizes.large;
      const label = `${item.name} (${size === "small" ? "Sm" : "Lg"})`;
      addItem(category, label, price);
      toast({ title: `${label} added to cart`, description: `$${price.toFixed(2)}` });
    } else {
      const price = parsePrice(item.price);
      addItem(category, item.name, price);
      toast({ title: `${item.name} added to cart`, description: `$${price.toFixed(2)}` });
    }
  };

  return (
    <motion.div key={item.name} initial="hidden" animate="visible" custom={index} variants={fadeUp}>
      <Card className="h-full border bg-card hover:shadow-md transition-shadow">
        <CardContent className="p-5 flex flex-col gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
            {item.desc && <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>}
          </div>

          {sizes ? (
            <div className="flex flex-col gap-2">
              <div className="flex rounded-md overflow-hidden border border-border w-fit">
                <button
                  onClick={() => setSize("small")}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                    size === "small"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  Sm ${sizes.small.toFixed(2)}
                </button>
                <button
                  onClick={() => setSize("large")}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                    size === "large"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  Lg ${sizes.large.toFixed(2)}
                </button>
              </div>
              <div className="flex items-center justify-end">
                <Button size="sm" className="shrink-0 bg-primary hover:bg-primary/90 gap-1.5" onClick={handleAdd}>
                  <Plus className="h-4 w-4" /> Add
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-3">
              <span className="font-display text-lg font-bold text-primary">{item.price}</span>
              <Button size="sm" className="shrink-0 bg-primary hover:bg-primary/90 gap-1.5" onClick={handleAdd}>
                <Plus className="h-4 w-4" /> Add
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const OrderPage = () => {
  const [active, setActive] = useState(orderCategories[0]);
  const { totalItems } = useCart();

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
            Add items to your cart and checkout for pickup or delivery
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
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

          <div className="grid gap-4 sm:grid-cols-2">
            {(menuData[active] || []).map((item, i) => (
              <SizeableItem key={item.name} item={item} category={active} index={i} />
            ))}
          </div>

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
