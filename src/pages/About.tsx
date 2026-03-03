import { motion } from "framer-motion";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import outdoorPatio from "@/assets/outdoor-patio.jpg";
import pizzaRayTruck from "@/assets/pizza-ray-truck.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } })
};

const About = () =>
<>
    {/* Hero */}
    <section className="relative py-24 px-4 bg-foreground text-primary-foreground text-center">
      <div className="container mx-auto max-w-3xl">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">Our Story</motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="font-display text-4xl sm:text-5xl font-bold mt-2">
          Since 1962, Made with Love
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="mt-4 text-primary-foreground/70 text-lg">
          From the heart of Lawrence, Massachusetts to the sunshine of Florida.
        </motion.p>
      </div>
    </section>

    {/* How It Started */}
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl grid gap-12 md:grid-cols-2 items-center">
        <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} src={pizzaRayTruck} alt="Ray with the original Pizza Rays food truck" className="rounded-xl shadow-lg w-full h-96 object-cover" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp} custom={0} className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">How It Started</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl font-bold text-foreground mt-2">A Food Truck &amp; A Dream</motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-muted-foreground leading-relaxed">
            It all began in 1962 with a single turn of the key on Ray's first Pizza Rays food truck. After long hours at his day job, Ray would hit the streets, bringing his mouth-watering pizzas and submarines to local ballgames and community events. His food truck quickly became a sensation, loved by everyone who got a taste.
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="mt-4 text-muted-foreground leading-relaxed">
            Before long, the demand was off the charts—lines stretched far beyond the truck, and Ray knew he had something special. That's when Pizza Rays Submarines found a permanent home, where the flavors kept people coming back for more!
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-5xl grid gap-12 md:grid-cols-2 items-center">
        <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} alt="Pizza Rays interior" className="rounded-xl shadow-lg w-full h-80 object-cover" src="/lovable-uploads/861ba3ab-05cc-4679-b260-e4c8c0bfb6ca.png" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground">Our Roots</motion.h2>
          <motion.p variants={fadeUp} custom={1} className="mt-4 text-muted-foreground leading-relaxed">
            In 1962, a family with a passion for authentic Italian cuisine opened the doors of Pizza Rays in Lawrence, Massachusetts. What started as a small neighborhood pizzeria quickly became a beloved institution, known for hand-tossed dough, homemade sauces, and submarines piled high with the freshest ingredients.
          </motion.p>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-muted-foreground leading-relaxed">
            Every recipe has been passed down through generations, preserving the flavors that made our loyal customers keep coming back decade after decade.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Florida */}
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-5xl grid gap-12 md:grid-cols-2 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-2 md:order-1">
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground">A New Chapter in Florida</motion.h2>
          <motion.p variants={fadeUp} custom={1} className="mt-4 text-muted-foreground leading-relaxed">
            Now, Pizza Rays brings its legendary flavors to Florida. The same time-honored recipes, the same commitment to quality — with a touch of Sunshine State energy. Whether you're a local, a tourist, or a New Englander who followed the taste, we're here to serve you.
          </motion.p>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-muted-foreground leading-relaxed">
            Enjoy cozy indoor dining with classic Italian charm, or relax on our spacious outdoor patio under Florida's beautiful skies.
          </motion.p>
        </motion.div>
        <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} src={outdoorPatio} alt="Pizza Rays outdoor patio" className="rounded-xl shadow-lg w-full h-80 object-cover order-1 md:order-2" />
      </div>
    </section>

    {/* Values */}
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl font-bold text-foreground">What We Stand For</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
        { emoji: "👨‍👩‍👧‍👦", title: "Family First", desc: "We're family-owned and treat every customer like family." },
        { emoji: "🍕", title: "Quality Ingredients", desc: "Only the freshest, highest quality ingredients go into every dish." },
        { emoji: "❤️", title: "Community", desc: "We believe in giving back to the communities we serve." }].
        map((v, i) =>
        <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
              <div className="text-4xl mb-3">{v.emoji}</div>
              <h3 className="font-display text-xl font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{v.desc}</p>
            </motion.div>
        )}
        </div>
      </div>
    </section>
  </>;


export default About;