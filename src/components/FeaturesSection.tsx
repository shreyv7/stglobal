import { Bus, Monitor, Lightbulb, MessageCircle, Heart } from "lucide-react";

const features = [
  { icon: Bus, title: "Safe, AC Transport", desc: "Air-conditioned buses with GPS tracking for a safe, comfortable commute." },
  { icon: Monitor, title: "Smart Classrooms", desc: "Digital learning with interactive boards and modern infrastructure." },
  { icon: Lightbulb, title: "Activity-Based Learning", desc: "High quality, hands-on learning experiences that make education fun." },
  { icon: MessageCircle, title: "English Communication", desc: "Focused development of strong English communication skills." },
  { icon: Heart, title: "Caring Faculty", desc: "Experienced, passionate teachers who genuinely care about every child." },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding" style={{ background: "var(--section-gradient)" }}>
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="text-secondary font-bold text-sm tracking-widest uppercase">Why Choose Us</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">Salient Features</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="bg-card rounded-2xl p-6 shadow-sm card-hover flex flex-col items-start gap-4" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
              <f.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
