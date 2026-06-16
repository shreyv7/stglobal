import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-school.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center">
    <img src={heroImg} alt="ST. Global School campus with happy students" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 hero-overlay" />
    <div className="relative container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-2xl animate-fade-in-up">
        <span className="inline-block bg-secondary text-secondary-foreground font-bold text-xs md:text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
          CBSE AFFILIATED
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
          Admissions Open –<br />Play to IX &amp; XI
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-medium">
          Best CBSE School with Excellent Commute — Govind Puram, Ghaziabad
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="text-base font-bold px-8 shadow-lg">
            <a href="#admissions">Apply Now</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base font-bold px-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
            <a href="#contact">Book a Campus Visit</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
