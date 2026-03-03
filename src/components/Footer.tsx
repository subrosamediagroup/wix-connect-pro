import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div>
          <img src={logo} alt="Pizza Rays logo" className="h-16 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
            Tradition meets taste. From Lawrence, MA to the Sunshine State.
          </p>
          <div className="mt-4 flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="rounded-full bg-primary-foreground/10 p-2 transition hover:bg-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          {["Home", "About", "Menu", "Location", "Gallery", "Contact"].map((l) => (
            <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="block py-1 text-sm text-primary-foreground/70 hover:text-primary transition-colors">
              {l}
            </Link>
          ))}
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Hours</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" /><div><p>Mon – Thu: 11am – 9pm</p><p>Fri – Sat: 11am – 10pm</p><p>Sun: 12pm – 8pm</p></div></div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><MapPin className="h-4 w-4 text-primary shrink-0" /> 123 Main St, Florida</a>
            <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone className="h-4 w-4 text-primary shrink-0" /> (555) 123-4567</a>
            <a href="mailto:info@pizzarays.com" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail className="h-4 w-4 text-primary shrink-0" /> info@pizzarays.com</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Pizza Rays Submarines. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
