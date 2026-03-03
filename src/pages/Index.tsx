import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { UtensilsCrossed, MapPin, Clock, Star, ArrowRight } from "lucide-react";
import heroPizza from "@/assets/hero-pizza.jpg";
import subSandwich from "@/assets/sub-sandwich.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import outdoorPatio from "@/assets/outdoor-patio.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } })
};

const Index = () =>
<>
    {/* Hero */}
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <img src={heroPizza} alt="Freshly baked pizza at Pizza Rays" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
      <motion.div initial="hidden" animate="visible" className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.p variants={fadeUp} custom={0} className="font-semibold uppercase tracking-[0.3em] text-sm mb-4 text-primary-foreground">SINCE 1962

      </motion.p>
        <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
          Tradition Meets Taste
        </motion.h1>
        <motion.p variants={fadeUp} custom={2} className="mt-4 text-primary-foreground/80 text-lg sm:text-xl max-w-xl mx-auto">Classic, mouthwatering pizzas and fresh, hearty subs — proudly serving Florida.

      </motion.p>
        <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link to="/menu">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              View Menu
            </Button>
          </Link>
          <Link to="/order">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-foreground hover:bg-primary-foreground/10 text-lg px-8">
              Order Now
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>

    {/* Welcome */}
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.div variants={fadeUp} custom={0} className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider">Welcome</span>
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            A Slice of History, Fresh Every Day
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Welcome to Pizza Rays, where tradition meets taste! Established in 1962 in the heart of Lawrence, Massachusetts, Pizza Rays Submarines serves classic, mouthwatering pizzas and fresh, hearty subs. Now proudly serving Florida.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
        { icon: UtensilsCrossed, title: "Family Recipes", desc: "Time-honored recipes passed down since 1962" },
        { icon: MapPin, title: "Two Coasts", desc: "Massachusetts roots, Florida sunshine" },
        { icon: Clock, title: "Open Daily", desc: "Dine in, take out, or order online" }].
        map((item, i) =>
        <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
              <Card className="border-none bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
        )}
        </div>
      </div>
    </section>

    {/* Featured */}
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.img variants={fadeUp} alt="Fresh submarine sandwich" className="rounded-lg shadow-xl w-full h-80 object-cover" src="/lovable-uploads/76f38902-6dac-41fa-8bf1-f1def73be2fd.jpg" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} custom={0} className="text-primary font-semibold text-sm uppercase tracking-wider">Our Specialty</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl sm:text-4xl font-bold mt-2 text-foreground">
              Legendary Subs & Pizzas
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-4 text-muted-foreground leading-relaxed">
              At Pizza Rays, we believe in great food, great company, and a great atmosphere. From our signature hand-tossed pizzas to our stacked submarines, every bite tells the story of 60+ years of family tradition.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <Link to="/menu">
                <Button className="mt-6 gap-2 bg-primary hover:bg-primary/90">
                  Explore Full Menu <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Atmosphere */}
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Dine Your Way
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="mt-3 text-muted-foreground text-lg">Cozy indoor dining or soak up the Florida sunshine.</motion.p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
        { img: restaurantInterior, title: "Indoor Dining", desc: "Warm, family-friendly atmosphere with classic Italian charm" },
        { img: outdoorPatio, title: "Outdoor Patio", desc: "Enjoy your meal under the Florida sun and palm trees" }].
        map((item, i) =>
        <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="group relative overflow-hidden rounded-xl">
              <img src={item.img} alt={item.title} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-primary-foreground">{item.title}</h3>
                  <p className="text-primary-foreground/80 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </motion.div>
        )}
        </div>
      </div>
    </section>

    {/* Reviews */}
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold">What Our Customers Say</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
        { name: "Maria S.", text: "Best pizza I've had since visiting Italy! The family atmosphere is the cherry on top." },
        { name: "James T.", text: "Their subs are incredible. You can taste the tradition in every bite. A new Florida favorite!" },
        { name: "The Rodriguezes", text: "Our kids love it here. Great food, friendly staff, and the outdoor patio is perfect." }].
        map((r, i) =>
        <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
              <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-left h-full">
                <CardContent className="pt-6">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) =>
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                )}
                  </div>
                  <p className="text-primary-foreground/90 text-sm italic leading-relaxed">"{r.text}"</p>
                  <p className="mt-4 font-semibold text-sm text-primary-foreground">{r.name}</p>
                </CardContent>
              </Card>
            </motion.div>
        )}
        </div>
      </div>
    </section>

    {/* Newsletter */}
    <section className="py-16 px-4 bg-card">
      <div className="container mx-auto max-w-lg text-center">
        <h2 className="font-display text-2xl font-bold text-foreground">Stay in the Loop</h2>
        <p className="mt-2 text-muted-foreground text-sm">Get exclusive deals, menu updates, and Pizza Rays news.</p>
        <form className="mt-6 flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" className="flex-1 rounded-md border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
          <Button type="submit" className="bg-primary hover:bg-primary/90">Subscribe</Button>
        </form>
      </div>
    </section>
  </>;


export default Index;