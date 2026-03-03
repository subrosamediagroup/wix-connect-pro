import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="relative py-24 px-4 bg-foreground text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">Get in Touch</motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="font-display text-4xl sm:text-5xl font-bold mt-2">Contact Us</motion.h1>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl grid gap-10 md:grid-cols-2">
          {/* Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</motion.h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div variants={fadeUp} custom={1}>
                <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} />
              </motion.div>
              <motion.div variants={fadeUp} custom={2}>
                <Input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} />
              </motion.div>
              <motion.div variants={fadeUp} custom={3}>
                <Textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} />
              </motion.div>
              <motion.div variants={fadeUp} custom={4}>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            <motion.h2 variants={fadeUp} className="font-display text-2xl font-bold text-foreground mb-6">Contact Info</motion.h2>
            {[
              { icon: MapPin, title: "Address", text: "3340 S. Nova Road, Port Orange, FL 32129" },
              { icon: Phone, title: "Phone", text: "386-366-7805" },
              { icon: Mail, title: "Email", text: "info@pizzarays.com" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i + 1}>
                <Card className="border bg-card">
                  <CardContent className="p-5 flex gap-4 items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
