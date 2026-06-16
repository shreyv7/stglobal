import { GraduationCap, Users, BookOpen } from "lucide-react";
import studentsImg from "@/assets/students-learning.jpg";

const stats = [
  { icon: GraduationCap, label: "Years of Excellence", value: "10+" },
  { icon: Users, label: "Happy Students", value: "2000+" },
  { icon: BookOpen, label: "Qualified Faculty", value: "100+" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={studentsImg} alt="Students learning at ST. Global School" className="w-full h-80 md:h-[400px] object-cover" />
        </div>
        <div>
          <span className="text-secondary font-bold text-sm tracking-widest uppercase">About Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
            Nurturing Tomorrow's Leaders
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            ST. Global School is a modern CBSE institution located in Govind Puram, Ghaziabad, dedicated to academic excellence, holistic development, and building strong communication skills. We provide a nurturing environment where every child is encouraged to explore, learn, and grow into confident individuals ready to face the future.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-accent rounded-xl p-4 text-center">
                <s.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <span className="block text-2xl font-extrabold text-primary">{s.value}</span>
                <span className="text-xs text-muted-foreground font-semibold">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
