import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Car, Sun, Wifi } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Location = () => (
  <>
    <SEOHead
      title="Location & Hours | Pizza Rays — 3340 S Nova Rd, Port Orange FL"
      description="Find Pizza Rays at 3340 S Nova Rd, Port Orange FL 32129. Open Mon–Sat 10am–9pm. Free delivery, outdoor patio, free Wi-Fi. Pizza & subs near Daytona Beach."
      canonical="https://pizzarays.com/location"
    />
    <section className="relative py-24 px-4 bg-foreground text-primary-foreground text-center">
      <div className="container mx-auto max-w-3xl">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">Find Us</motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="font-display text-4xl sm:text-5xl font-bold mt-2">Visit Pizza Rays</motion.h1>
      </div>
    </section>

    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Map placeholder */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-xl overflow-hidden shadow-lg bg-muted min-h-[350px] flex items-center justify-center">
            <iframe
              title="Pizza Rays Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.0!2d-81.0731!3d29.1283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6d8a1f2e5b3c7%3A0x1!2s3340+S+Nova+Rd%2C+Port+Orange%2C+FL+32129!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 350 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            {[
              { icon: MapPin, title: "Address", content: "3340 S. Nova Road\nPort Orange, FL. 32129" },
              { icon: Phone, title: "Phone", content: "386-366-7805" },
              { icon: Clock, title: "Hours", content: "Mon - Sat  10am - 9pm\nClosed Sunday" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <Card className="border bg-card">
                  <CardContent className="p-5 flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line mt-1">{item.content}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Amenities */}
        <div className="mt-16 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">Amenities</h2>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 max-w-lg mx-auto">
            {[
              { icon: Car, label: "Free Delivery" },
              { icon: Sun, label: "Outdoor Patio" },
              { icon: Wifi, label: "Free Wi-Fi" },
            ].map((a, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card">
                <a.icon className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-foreground">{a.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Location;
