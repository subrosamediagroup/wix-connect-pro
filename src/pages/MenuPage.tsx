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
  "Build Your Own Pizza": [],
  "Specialty Pizzas": [
    { name: "White", desc: "White Sauce and Cheese. Available as Calzone.", price: "Sm $14.99 / Lg $18.99" },
    { name: "White Spinach", desc: "Feta Cheese. Available as Calzone.", price: "Sm $17.99 / Lg $21.99" },
    { name: "Pastrami", desc: "Pickles and Mustard. Available as Calzone.", price: "Sm $17.99 / Lg $21.99" },
    { name: "Rays Original", desc: "Onions, Tomato, Pickles, and hots topped with melted Provolone Cheese. Available as Calzone.", price: "Sm $17.99 / Lg $21.99" },
    { name: "Buffalo Chicken", desc: "Buffalo and Ranch Drizzle. Available as Calzone.", price: "Sm $17.99 / Lg $21.99" },
    { name: "Hawaiian", desc: "Red Sauce with Ham and Pineapple. Available as Calzone.", price: "Sm $17.99 / Lg $21.99" },
    { name: "Hot Hawaiian", desc: "Red Sauce with Extra Ham and Pineapple with Hot Cherry Relish. Available as Calzone.", price: "Sm $19.99 / Lg $23.99" },
    { name: "Steak & Cheese", desc: "Available as Calzone.", price: "Sm $17.99 / Lg $21.99" },
    { name: "Steak & Cheese Bomb", desc: "Available as Calzone.", price: "Sm $19.99 / Lg $23.99" },
  ],
  "Cold Submarines": [
    { name: "Ray's Original Italian", desc: "Provolone, Ham, Salami, Mortadella", price: "$12.99" },
    { name: "Ham & Cheese", desc: "Imported Ham and American Cheese", price: "$11.99" },
    { name: "Salami & Cheese", desc: "Genoa Salami and Provolone", price: "$11.99" },
    { name: "BLT Sub", desc: "Bacon, Lettuce, Tomato", price: "$11.99" },
    { name: "Roast Turkey Breast", desc: "Home Baked Turkey Breast and Provolone", price: "$11.99" },
    { name: "Chicken Salad", desc: "Home Made Chicken Salad, All White Meat", price: "$11.99" },
    { name: "Tuna Salad", desc: "Home Made Tuna Salad", price: "$11.99" },
    { name: "Roast Beef", desc: "", price: "$12.99" },
  ],
  "Hot Submarines": [
    { name: "Pastrami and Cheese", desc: "Thin Sliced Grilled with Yellow Mustard, Pickles, and Provolone", price: "$12.99" },
    { name: "Italian Meatball Parm", desc: "In-House Made Meatballs with Marinara and Provolone", price: "$12.99" },
    { name: "Italian Sausage Parm", desc: "In-House Made Sausage with Marinara and Provolone", price: "$12.99" },
    { name: "Italian Sausage", desc: "Grilled Sweet Sausage with Peppers and Onions", price: "$12.99" },
    { name: "Pepper Egg and Cheese", desc: "Pepper Egg Omelette Style with Provolone and Bead of Marinara", price: "$12.99" },
    { name: "Sirloin Tip Kabob", desc: "Our Own House Marinate Sirloin Tips Grilled with Peppers and Onions", price: "$12.99" },
    { name: "Chicken Tender Parm", desc: "In-House Made Breast Meat Tenders", price: "$12.99" },
    { name: "Cheeseburger Sub", desc: "", price: "$12.99" },
    { name: "French Dip", desc: "", price: "$13.99" },
    { name: "Steak & Cheese", desc: "Steak with Grilled Peppers, Onions, Mushrooms, and Provolone Cheese", price: "$12.99" },
    { name: "Steak & Cheese Bomb", desc: "Steak with Grilled Peppers, Onions, Mushrooms, Salami, and Provolone Cheese", price: "$13.99" },
  ],
  Calzones: [
    { name: "Ray's Original Italian", desc: "", price: "$16.99" },
    { name: "Coldcut Calzone", desc: "Salami, Mortadella, Ham", price: "$17.99" },
    { name: "Steak & Cheese", desc: "", price: "$17.99" },
    { name: "Veggie", desc: "Pepper, Onion, Tomato, and Mushroom", price: "$17.99" },
    { name: "Pastrami", desc: "", price: "$17.99" },
    { name: "Meatball Parm", desc: "", price: "$17.99" },
    { name: "Sausage", desc: "Pepper and Onion", price: "$17.99" },
    { name: "Steak Bomb", desc: "Salami, Pepper, Onion, and Mushroom", price: "$20.99" },
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
          {active === "Build Your Own Pizza" ? (
            <div className="max-w-2xl mx-auto">
              <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                <Card className="border bg-card">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-2">ITALIAN-STYLE PIZZA</h2>
                    <p className="text-muted-foreground text-sm mb-6">
                      Thin Crust With In-house Made Dough, Sauce, and Our Own Blended Mozzarella
                    </p>
                    <div className="mb-6">
                      <div className="grid grid-cols-3 gap-4 font-display font-semibold text-foreground border-b pb-2 mb-2">
                        <span></span>
                        <span className="text-center">Small 12"</span>
                        <span className="text-center">Large 16"</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <span className="font-semibold text-foreground">Cheese</span>
                        <span className="text-center text-primary font-bold">$12.99</span>
                        <span className="text-center text-primary font-bold">$16.99</span>
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">Choice of Toppings</h3>
                    <div className="mb-4">
                      <p className="font-semibold text-foreground text-sm">Meat: $2.00 per topping</p>
                      <p className="text-muted-foreground text-sm">
                        Bacon, Ham, Sweet Sausage, Pepperoni, Meatball, Ground Beef
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold text-foreground text-sm">Veggies: $1.50 per topping</p>
                      <p className="text-muted-foreground text-sm">
                        Mushroom, Pepper, Onion, Tomato, Black Olive, Pineapple, Fresh Spinach, Fresh Pressed Garlic
                      </p>
                    </div>
                    <p className="font-semibold text-foreground text-sm">Extra Cheese $1.50</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ) : (
          <>
          {active === "Specialty Pizzas" && (
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Specialty Pizzas</h2>
              <p className="text-muted-foreground text-sm">All Specialty Pizzas Are Available As Calzones</p>
            </div>
          )}
          {active === "Cold Submarines" && (
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Cold Submarines</h2>
              <p className="text-muted-foreground text-sm">Topped with onions, pickles, tomatoes, hots, oil, salt, pepper, and oregano.</p>
            </div>
          )}
          {active === "Hot Submarines" && (
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Hot Submarines</h2>
              <p className="text-muted-foreground text-sm">Salt, Pepper, and Oregano by Request. Add cheese $1.50 if not included.</p>
            </div>
          )}
          {active === "Calzones" && (
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Calzones</h2>
              <p className="text-muted-foreground text-sm">A Blend Of Mozzarella And Provolone Cheese. Marinara By Request - On The Side.</p>
            </div>
          )}
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
          </>
          )}

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
