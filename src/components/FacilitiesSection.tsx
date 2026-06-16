import smartClassroom from "@/assets/smart-classroom.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import library from "@/assets/library.jpg";
import sports from "@/assets/sports.jpg";
import schoolBus from "@/assets/schoolbus.jpg";

const facilities = [
  { img: smartClassroom, title: "Smart Classrooms" },
  { img: computerLab, title: "Computer Lab" },
  { img: library, title: "Library" },
  { img: sports, title: "Sports Activities" },
  { img: schoolBus, title: "School Transport" },
];

const FacilitiesSection = () => (
  <section id="facilities" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="text-secondary font-bold text-sm tracking-widest uppercase">Our Campus</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">World-Class Facilities</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((f) => (
          <div key={f.title} className="group rounded-2xl overflow-hidden bg-card shadow-sm card-hover" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="overflow-hidden h-52">
              <img src={f.img} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
