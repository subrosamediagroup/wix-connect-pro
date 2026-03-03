import { motion } from "framer-motion";
import pepperoniPizza from "@/assets/pepperoni-pizza.jpg";
import subSandwich from "@/assets/sub-sandwich.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import outdoorPatio from "@/assets/outdoor-patio.jpg";
import graceOriginal from "@/assets/grace-original.png";
import fries from "@/assets/fries.png";
import supremePizza from "@/assets/supreme-pizza.png";
import onionRings from "@/assets/onion-rings.png";
import sirloinTipKabob from "@/assets/sirloin-tip-kabob.png";
import steakCheeseMushrooms from "@/assets/steak-cheese-mushrooms.png";
import superBeef from "@/assets/super-beef.png";
import whiteSpinachPizza from "@/assets/white-spinach-pizza.png";
import pepperEggCheese from "@/assets/pepper-egg-cheese.png";
import greekSalad from "@/assets/greek-salad.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const images = [
  { src: pepperoniPizza, alt: "Our signature pepperoni pizza", label: "Signature Pizza" },
  { src: subSandwich, alt: "Delicious submarine sandwich", label: "Submarines" },
  { src: supremePizza, alt: "Supreme pizza with sausage and peppers", label: "Supreme Pizza" },
  { src: whiteSpinachPizza, alt: "White pizza with spinach", label: "White Spinach Pizza" },
  { src: graceOriginal, alt: "Ray's Original Italian sub", label: "Ray's Original Italian" },
  { src: sirloinTipKabob, alt: "Sirloin tip kabob sub", label: "Sirloin Tip Kabob" },
  { src: steakCheeseMushrooms, alt: "Steak and cheese with mushrooms", label: "Steak & Cheese" },
  { src: pepperEggCheese, alt: "Pepper egg and cheese sub", label: "Pepper Egg & Cheese" },
  { src: superBeef, alt: "Super beef three ways", label: "Super Beef" },
  { src: fries, alt: "Golden french fries with ketchup", label: "French Fries" },
  { src: onionRings, alt: "Crispy onion rings with sauce", label: "Onion Rings" },
  { src: greekSalad, alt: "Fresh Greek salad with pita", label: "Greek Salad" },
  { src: restaurantInterior, alt: "Cozy indoor dining area", label: "Indoor Dining" },
  { src: outdoorPatio, alt: "Sunny outdoor patio", label: "Outdoor Patio" },
];

const Gallery = () => (
  <>
    <section className="relative py-24 px-4 bg-foreground text-primary-foreground text-center">
      <div className="container mx-auto max-w-3xl">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">Gallery</motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="font-display text-4xl sm:text-5xl font-bold mt-2">A Taste in Every Frame</motion.h1>
      </div>
    </section>

    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl grid gap-4 sm:grid-cols-2">
        {images.map((img, i) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="group relative overflow-hidden rounded-xl">
            <img src={img.src} alt={img.alt} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="font-display text-lg font-bold text-primary-foreground">{img.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-muted-foreground text-sm mt-8">More photos coming soon! Follow us on social media for the latest.</p>
    </section>
  </>
);

export default Gallery;
