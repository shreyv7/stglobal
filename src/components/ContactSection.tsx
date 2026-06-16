import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Globe } from "lucide-react";
import { toast } from "sonner";
import { insertRow } from "@/lib/supabaseClient";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await insertRow("contact_messages", {
        name: form.name,
        email: form.email,
        message: form.message,
      });

      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error submitting contact message:", error);
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="text-secondary font-bold text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">Contact Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info + Map */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Address</h4>
                <p className="text-muted-foreground text-sm">NH-09, Govind Puram, Ghaziabad</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Phone</h4>
                <p className="text-muted-foreground text-sm">
                  <a href="tel:8506877137" className="hover:text-primary transition-colors">8506877137</a> / <a href="tel:8506877138" className="hover:text-primary transition-colors">8506877138</a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Website</h4>
                <p className="text-muted-foreground text-sm">www.stglobalschool.com</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mt-4">
              <iframe
                title="ST. Global School Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3500.1831321499644!2d77.49065807550267!3d28.68416797563659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQxJzAzLjAiTiA3N8KwMjknMzUuNiJF!5e0!3m2!1sen!2sin!4v1772951834173!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="contactName">Your Name</Label>
                <Input id="contactName" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" maxLength={100} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Email Address</Label>
                <Input id="contactEmail" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" maxLength={255} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactMsg">Message</Label>
                <Textarea id="contactMsg" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help you?" maxLength={1000} rows={4} />
              </div>
              <Button type="submit" size="lg" className="w-full font-bold" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
