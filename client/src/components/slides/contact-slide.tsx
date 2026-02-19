import { DollarSign, Rocket, Globe, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSlide = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your interest! We will contact you soon.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="slide-section gradient-bg hero-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="title-join-revolution">
          Join the UCTS Revolution
        </h2>
        <img 
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400" 
          alt="Solar panels in a landscape representing clean renewable energy future" 
          className="rounded-xl shadow-2xl w-full h-64 object-cover mb-8"
          data-testid="img-solar-landscape"
        />
        
        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <DollarSign />
              </div>
              <h3 className="font-semibold text-foreground mb-2" data-testid="title-investment-opportunity">
                Invest $500,000
              </h3>
              <p className="text-muted-foreground" data-testid="text-investment-amount">
                In Phase 1 for equity stake
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Rocket />
              </div>
              <h3 className="font-semibold text-foreground mb-2" data-testid="title-transform-industries">
                Transform
              </h3>
              <p className="text-muted-foreground" data-testid="text-transform-description">
                Energy and waste sectors together
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Globe />
              </div>
              <h3 className="font-semibold text-foreground mb-2" data-testid="title-global-impact">
                Global Impact
              </h3>
              <p className="text-muted-foreground" data-testid="text-global-description">
                Sustainable energy future
              </p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 mb-6" data-testid="form-contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleInputChange}
                required
                data-testid="input-name"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleInputChange}
                required
                data-testid="input-email"
              />
            </div>
            <Input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleInputChange}
              data-testid="input-company"
            />
            <Textarea
              name="message"
              placeholder="Your Message *"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
              data-testid="input-message"
            />
            <Button 
              type="submit" 
              className="w-full"
              disabled={contactMutation.isPending}
              data-testid="button-send-inquiry"
            >
              {contactMutation.isPending ? "Sending..." : "Send Investment Inquiry"}
            </Button>
          </form>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground" data-testid="title-contact-info">
              Contact
            </h3>
            <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-2 md:space-y-0">
              <a 
                href="mailto:legalgreenplanet@gmail.com" 
                className="flex items-center justify-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
                <span>legalgreenplanet@gmail.com</span>
              </a>
              <a 
                href="tel:+4916094940930" 
                className="flex items-center justify-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                data-testid="link-phone"
              >
                <Phone className="w-5 h-5" />
                <span>+49 160 94940930</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSlide;
