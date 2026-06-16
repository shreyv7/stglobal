import { Facebook, Instagram, Youtube, Twitter, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-xl font-extrabold mb-1">ST. GLOBAL SCHOOL</h3>
          <p className="text-sm text-primary-foreground/60 font-semibold tracking-widest mb-4">RISE & SHINE</p>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            A modern CBSE school dedicated to academic excellence and holistic development in Govind Puram, Ghaziabad.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-base mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About", "Features", "Facilities", "Admissions", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-base mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> NH-09, Govind Puram, Ghaziabad</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> 8506877137 / 8506877138</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> info@stglobalschool.com</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold text-base mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-5">
      <p className="text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} ST. Global School, Govind Puram, Ghaziabad. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
