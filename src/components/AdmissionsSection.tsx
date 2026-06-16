import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, FileText, ClipboardList } from "lucide-react";
import { toast } from "sonner";
import { insertRow } from "@/lib/supabaseClient";

const steps = [
  { icon: ClipboardList, title: "Fill Inquiry Form", desc: "Submit the online inquiry form below." },
  { icon: FileText, title: "Submit Documents", desc: "Birth certificate, Aadhaar card, photos, transfer certificate." },
  { icon: CheckCircle, title: "Admission Confirmed", desc: "Complete fee payment and receive confirmation." },
];

const AdmissionsSection = () => {
  const [formData, setFormData] = useState({ parentName: "", phone: "", childName: "", classApplied: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await insertRow("admissions", {
        parent_name: formData.parentName,
        phone: formData.phone,
        child_name: formData.childName,
        class_applied: formData.classApplied,
        message: formData.message,
      });

      toast.success("Thank you! We'll contact you shortly regarding admission.");
      setFormData({ parentName: "", phone: "", childName: "", classApplied: "", message: "" });
    } catch (error: any) {
      console.error("Error submitting admission inquiry:", error);
      toast.error(error.message || "Failed to submit inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="admissions" className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="text-secondary font-bold text-sm tracking-widest uppercase">Join Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">Admissions Open 2025–26</h2>
          <p className="text-muted-foreground mt-3 text-lg">Playgroup to Class IX &amp; XI</p>
        </div>

        {/* Process */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-card rounded-2xl p-6 text-center shadow-sm" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="w-14 h-14 rounded-full bg-primary mx-auto flex items-center justify-center mb-4">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-muted-foreground">STEP {i + 1}</span>
              <h3 className="text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Inquiry Form */}
        <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 md:p-10 shadow-lg">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Admission Inquiry Form</h3>
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="parentName">Parent's Name</Label>
              <Input id="parentName" required value={formData.parentName} onChange={(e) => setFormData({ ...formData, parentName: e.target.value })} placeholder="Enter your name" maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Enter phone number" maxLength={15} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="childName">Child's Name</Label>
              <Input id="childName" required value={formData.childName} onChange={(e) => setFormData({ ...formData, childName: e.target.value })} placeholder="Enter child's name" maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="classApplied">Class Applying For</Label>
              <Select value={formData.classApplied} onValueChange={(v) => setFormData({ ...formData, classApplied: v })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  {["Playgroup", "Nursery", "LKG", "UKG", "Class I", "Class II", "Class III", "Class IV", "Class V", "Class VI", "Class VII", "Class VIII", "Class IX", "Class XI"].map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="sm:col-span-2 space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Any questions or special requirements?" maxLength={500} rows={3} />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="w-full text-base font-bold" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
