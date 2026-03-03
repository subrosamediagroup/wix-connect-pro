import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus, Trash2, Loader2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";

const CartSheet = () => {
  const { user } = useAuth();
  const { items, updateQuantity, removeItem, clearCart, totalItems, totalPrice } = useCart();
  const [step, setStep] = useState<"cart" | "checkout" | "confirmed">("cart");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim()) {
      toast({ title: "Please fill in your name and phone number", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      // Insert order
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          customer_name: name.trim(),
          customer_phone: phone.trim(),
          notes: notes.trim() || null,
          total_price: totalPrice,
          user_id: user?.id || null,
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Insert order items
      const orderItems = items.map((item) => ({
        order_id: order.id,
        category: item.category,
        item_name: item.name,
        price: item.price,
        quantity: item.quantity,
      }));

      const { error: itemsError } = await supabase.from("order_items").insert(orderItems);
      if (itemsError) throw itemsError;

      setStep("confirmed");
      clearCart();
    } catch (err: any) {
      console.error("Order submission error:", err);
      toast({ title: "Failed to place order", description: err.message || "Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setStep("cart");
    setName("");
    setPhone("");
    setNotes("");
  };

  return (
    <Sheet onOpenChange={(open) => { if (!open) resetAndClose(); }}>
      <SheetTrigger asChild>
        <Button size="sm" className="relative gap-1.5 bg-primary hover:bg-primary/90">
          <ShoppingCart className="h-4 w-4" />
          <span className="hidden sm:inline">Cart</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-xl">
            {step === "cart" && "Your Order"}
            {step === "checkout" && "Checkout"}
            {step === "confirmed" && "Order Confirmed!"}
          </SheetTitle>
        </SheetHeader>

        {step === "cart" && (
          <div className="flex flex-col flex-1 overflow-hidden">
            {items.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Your cart is empty. Add items from the menu!</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 rounded-lg border bg-card p-3">
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-foreground truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.category}</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                        <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <span className="text-sm font-bold text-primary w-16 text-right">${(item.price * item.quantity).toFixed(2)}</span>
                      <Button size="icon" variant="ghost" className="h-7 w-7 text-muted-foreground hover:text-destructive" onClick={() => removeItem(item.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4 mt-4 space-y-3">
                  <div className="flex justify-between font-display text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">${totalPrice.toFixed(2)}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg" onClick={() => setStep("checkout")}>
                    Proceed to Checkout
                  </Button>
                </div>
              </>
            )}
          </div>
        )}

        {step === "checkout" && (
          <div className="flex flex-col flex-1 gap-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(386) 555-0000" />
              </div>
              <div>
                <Label htmlFor="notes">Special Instructions</Label>
                <Textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Any special requests..." rows={3} />
              </div>
            </div>
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between font-display text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">${totalPrice.toFixed(2)}</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg" onClick={handleSubmit} disabled={submitting}>
                {submitting ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Placing Order...</> : "Place Order"}
              </Button>
              <Button variant="ghost" className="w-full" onClick={() => setStep("cart")} disabled={submitting}>
                Back to Cart
              </Button>
            </div>
          </div>
        )}

        {step === "confirmed" && (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <ShoppingCart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold">Thank you, {name}!</h3>
            <p className="text-muted-foreground text-sm">Your order has been placed. We'll call you at {phone} when it's ready for pickup.</p>
            <p className="text-muted-foreground text-xs">Estimated wait: 20–30 minutes</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
