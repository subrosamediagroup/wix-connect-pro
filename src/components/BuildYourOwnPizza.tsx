import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Pizza } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

const MEAT_TOPPINGS = [
  "Bacon",
  "Ham",
  "Sweet Sausage",
  "Pepperoni",
  "Meatball",
  "Ground Beef",
];

const VEGGIE_TOPPINGS = [
  "Mushroom",
  "Pepper",
  "Onion",
  "Tomato",
  "Black Olive",
  "Pineapple",
  "Fresh Spinach",
  "Fresh Pressed Garlic",
];

const BASE_PRICES = { small: 12.99, large: 16.99 };
const MEAT_PRICE = 2.0;
const VEGGIE_PRICE = 1.5;
const EXTRA_CHEESE_PRICE = 1.5;

const BuildYourOwnPizza = () => {
  const [size, setSize] = useState<"small" | "large">("small");
  const [selectedMeats, setSelectedMeats] = useState<string[]>([]);
  const [selectedVeggies, setSelectedVeggies] = useState<string[]>([]);
  const [extraCheese, setExtraCheese] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();

  const toggleTopping = (
    topping: string,
    list: string[],
    setList: (v: string[]) => void
  ) => {
    setList(
      list.includes(topping)
        ? list.filter((t) => t !== topping)
        : [...list, topping]
    );
  };

  const totalPrice =
    BASE_PRICES[size] +
    selectedMeats.length * MEAT_PRICE +
    selectedVeggies.length * VEGGIE_PRICE +
    (extraCheese ? EXTRA_CHEESE_PRICE : 0);

  const handleAddToCart = () => {
    const toppings = [
      ...selectedMeats,
      ...selectedVeggies,
      ...(extraCheese ? ["Extra Cheese"] : []),
    ];
    const sizeLabel = size === "small" ? 'Sm 12"' : 'Lg 16"';
    const label =
      toppings.length > 0
        ? `Custom Pizza (${sizeLabel}) - ${toppings.join(", ")}`
        : `Cheese Pizza (${sizeLabel})`;

    addItem("Build Your Own Pizza", label, totalPrice);
    toast({
      title: "Custom Pizza added to cart",
      description: `$${totalPrice.toFixed(2)}`,
    });

    // Reset
    setSelectedMeats([]);
    setSelectedVeggies([]);
    setExtraCheese(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <Card className="border bg-card">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Pizza className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Build Your Own Pizza
              </h2>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Thin Crust With In-house Made Dough, Sauce, and Our Own Blended
              Mozzarella
            </p>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-display text-base font-semibold text-foreground mb-3">
                Choose Your Size
              </h3>
              <div className="flex gap-3">
                {(["small", "large"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`flex-1 rounded-lg border-2 p-4 text-center transition-all ${
                      size === s
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-muted-foreground/30"
                    }`}
                  >
                    <span className="block font-display text-lg font-bold text-foreground">
                      {s === "small" ? 'Small 12"' : 'Large 16"'}
                    </span>
                    <span className="block text-primary font-bold mt-1">
                      ${BASE_PRICES[s].toFixed(2)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Meat Toppings */}
            <div className="mb-5">
              <h3 className="font-display text-base font-semibold text-foreground mb-1">
                Meat Toppings
              </h3>
              <p className="text-muted-foreground text-xs mb-3">
                $2.00 per topping
              </p>
              <div className="grid grid-cols-2 gap-2">
                {MEAT_TOPPINGS.map((t) => (
                  <label
                    key={t}
                    className={`flex items-center gap-2.5 rounded-md border px-3 py-2.5 cursor-pointer transition-colors ${
                      selectedMeats.includes(t)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:bg-muted/50"
                    }`}
                  >
                    <Checkbox
                      checked={selectedMeats.includes(t)}
                      onCheckedChange={() =>
                        toggleTopping(t, selectedMeats, setSelectedMeats)
                      }
                    />
                    <span className="text-sm text-foreground">{t}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Veggie Toppings */}
            <div className="mb-5">
              <h3 className="font-display text-base font-semibold text-foreground mb-1">
                Veggie Toppings
              </h3>
              <p className="text-muted-foreground text-xs mb-3">
                $1.50 per topping
              </p>
              <div className="grid grid-cols-2 gap-2">
                {VEGGIE_TOPPINGS.map((t) => (
                  <label
                    key={t}
                    className={`flex items-center gap-2.5 rounded-md border px-3 py-2.5 cursor-pointer transition-colors ${
                      selectedVeggies.includes(t)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:bg-muted/50"
                    }`}
                  >
                    <Checkbox
                      checked={selectedVeggies.includes(t)}
                      onCheckedChange={() =>
                        toggleTopping(t, selectedVeggies, setSelectedVeggies)
                      }
                    />
                    <span className="text-sm text-foreground">{t}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Extra Cheese */}
            <div className="mb-6">
              <label
                className={`flex items-center gap-2.5 rounded-md border px-3 py-2.5 cursor-pointer transition-colors w-fit ${
                  extraCheese
                    ? "border-primary bg-primary/5"
                    : "border-border hover:bg-muted/50"
                }`}
              >
                <Checkbox
                  checked={extraCheese}
                  onCheckedChange={(checked) =>
                    setExtraCheese(checked === true)
                  }
                />
                <span className="text-sm text-foreground font-medium">
                  Extra Cheese — $1.50
                </span>
              </label>
            </div>

            {/* Total & Add to Cart */}
            <div className="flex items-center justify-between border-t pt-5">
              <div>
                <p className="text-muted-foreground text-xs">Total</p>
                <p className="font-display text-2xl font-bold text-primary">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
              <Button
                className="bg-primary hover:bg-primary/90 gap-1.5 text-base px-6"
                onClick={handleAddToCart}
              >
                <Plus className="h-4 w-4" /> Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default BuildYourOwnPizza;
