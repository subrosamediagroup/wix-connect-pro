import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import CartSheet from "@/components/CartSheet";
import { useAuth } from "@/context/AuthContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/order", label: "Order Online" },
  { to: "/location", label: "Location" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm text-primary-foreground">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Pizza Rays - Made Old School The Ray Way, Est. 1962" className="h-12 sm:h-14 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary" : "text-primary-foreground/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <CartSheet />
          {user ? (
            <>
              <Link to="/order-history">
                <Button size="sm" className="gap-1.5 bg-primary hover:bg-primary/90">
                  <User className="h-3.5 w-3.5" /> My Orders
                </Button>
              </Link>
              <Button size="sm" variant="ghost" className="gap-1.5 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10" onClick={signOut}>
                <LogOut className="h-3.5 w-3.5" /> Sign Out
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button size="sm" className="gap-1.5 bg-primary hover:bg-primary/90">
                <User className="h-3.5 w-3.5" /> Sign In
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-primary-foreground/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    location.pathname === l.to
                      ? "bg-primary text-primary-foreground"
                      : "text-primary-foreground/80 hover:bg-primary-foreground/10"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              {user ? (
                <>
                  <Link to="/order-history" onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-primary-foreground/80 hover:bg-primary-foreground/10">
                    My Orders
                  </Link>
                  <button onClick={() => { signOut(); setOpen(false); }} className="rounded-md px-3 py-2.5 text-sm font-medium text-left text-primary-foreground/80 hover:bg-primary-foreground/10">
                    Sign Out
                  </button>
                </>
              ) : (
                <Link to="/auth" onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-primary-foreground/80 hover:bg-primary-foreground/10">
                  Sign In
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
