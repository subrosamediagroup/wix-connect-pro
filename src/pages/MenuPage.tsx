import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

type MenuItem = { name: string; desc: string; price: string };

const menuData: Record<string, MenuItem[]> = {
  "Classic Pizzas": [
    { name: "Cheese Pizza", desc: "Our signature hand-tossed dough with rich tomato sauce and premium mozzarella", price: "$12.99" },
    { name: "Pepperoni", desc: "Loaded with crispy pepperoni and melted mozzarella", price: "$14.99" },
    { name: "Sausage & Peppers", desc: "Italian sausage, roasted peppers, onions, mozzarella", price: "$15.99" },
    { name: "Margherita", desc: "Fresh mozzarella, tomatoes, basil, olive oil", price: "$14.99" },
    { name: "Hawaiian", desc: "Ham, pineapple, mozzarella", price: "$14.99" },
    { name: "Meat Lovers", desc: "Pepperoni, sausage, ham, bacon, mozzarella", price: "$17.99" },
  ],
  "Specialty Pizzas": [
    { name: "The Lawrence Original", desc: "Our 1962 secret recipe — a customer favorite for decades", price: "$18.99" },
    { name: "Florida Sunshine", desc: "Grilled chicken, sun-dried tomatoes, artichoke hearts, garlic", price: "$17.99" },
    { name: "BBQ Chicken", desc: "BBQ sauce, grilled chicken, red onion, cilantro, mozzarella", price: "$16.99" },
    { name: "White Pizza", desc: "Ricotta, mozzarella, garlic, olive oil, fresh herbs", price: "$15.99" },
    { name: "Veggie Supreme", desc: "Mushrooms, peppers, onions, olives, tomatoes, spinach", price: "$15.99" },
  ],
  Submarines: [
    { name: "Italian Sub", desc: "Ham, salami, pepperoni, provolone, lettuce, tomato, oil & vinegar", price: "$11.99" },
    { name: "Meatball Parm", desc: "Homemade meatballs, marinara sauce, melted provolone", price: "$12.99" },
    { name: "Chicken Parm", desc: "Breaded chicken cutlet, marinara, melted mozzarella", price: "$12.99" },
    { name: "Turkey & Cheese", desc: "Oven-roasted turkey, provolone, lettuce, tomato, mayo", price: "$11.99" },
    { name: "Steak & Cheese", desc: "Shaved steak, melted American cheese, grilled onions & peppers", price: "$13.99" },
    { name: "Veggie Sub", desc: "Grilled vegetables, provolone, pesto, mixed greens", price: "$10.99" },
  ],
  Sides: [
    { name: "Garlic Knots", desc: "Fresh-baked, brushed with garlic butter and herbs", price: "$5.99" },
    { name: "Mozzarella Sticks", desc: "Hand-breaded, served with marinara", price: "$7.99" },
    { name: "Garden Salad", desc: "Mixed greens, tomatoes, cucumbers, red onion, Italian dressing", price: "$6.99" },
    { name: "Caesar Salad", desc: "Romaine, parmesan, croutons, house Caesar dressing", price: "$7.99" },
    { name: "French Fries", desc: "Crispy golden fries, seasoned", price: "$4.99" },
    { name: "Onion Rings", desc: "Beer-battered, golden fried", price: "$6.99" },
  ],
  Drinks: [
    { name: "Fountain Soda", desc: "Coke, Diet Coke, Sprite, Dr Pepper", price: "$2.49" },
    { name: "Italian Lemonade", desc: "Fresh-squeezed with a hint of basil", price: "$3.99" },
    { name: "Iced Tea", desc: "Freshly brewed, sweetened or unsweetened", price: "$2.49" },
    { name: "Bottled Water", desc: "Still or sparkling", price: "$1.99" },
  ],
};

const categories = Object.keys(menuData);

const MenuPage = () => {
  const [active, setActive] = useState(categories[0]);

  return (
    <>
      <section className="relative py-24 px-4 bg-foreground text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">Our Menu</motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="font-display text-4xl sm:text-5xl font-bold mt-2">
            Taste the Tradition
          </motion.h1>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
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
            {menuData[active].map((item, i) => (
              <motion.div key={item.name} initial="hidden" animate="visible" custom={i} variants={fadeUp}>
                <Card className="h-full border bg-card hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                    </div>
                    <span className="font-display text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm mb-4">Ready to order? Call us or visit in person!</p>
            <a href="tel:+15551234567">
              <Button size="lg" className="bg-primary hover:bg-primary/90">Order Now — (555) 123-4567</Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
