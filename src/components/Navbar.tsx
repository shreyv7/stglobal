import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Facilities", href: "#facilities" },
  { label: "Admissions", href: "#admissions" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2 md:gap-3">
          <img src="/logo.jpeg" alt="ST. Global School Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-extrabold text-lg md:text-xl text-primary">ST. GLOBAL SCHOOL</span>
            <span className="text-[10px] md:text-xs font-semibold text-secondary tracking-widest">RISE &amp; SHINE</span>
          </div>
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors rounded-md">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:8506877137" className="flex items-center gap-1.5 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" /> 8506877137
          </a>
          <Button asChild size="sm">
            <a href="#admissions">Apply Now</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <ul className="flex flex-col p-4 gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-foreground/80 hover:bg-accent rounded-lg transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full">
                <a href="#admissions" onClick={() => setOpen(false)}>Apply Now</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
