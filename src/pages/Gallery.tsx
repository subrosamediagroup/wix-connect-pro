import { motion } from "framer-motion";
import pepperoniPizza from "@/assets/pepperoni-pizza.jpg";
import subSandwich from "@/assets/sub-sandwich.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import outdoorPatio from "@/assets/outdoor-patio.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const images = [
  { src: pepperoniPizza, alt: "Our signature pepperoni pizza", label: "Signature Pizza" },
  { src: subSandwich, alt: "Delicious submarine sandwich", label: "Submarines" },
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
