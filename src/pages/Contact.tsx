import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 animate-slide-up">
              Visit Us
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              We'd love to see you at our cozy cafe
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-soft animate-slide-up">
              <h3 className="text-2xl font-bold text-primary mb-6">Location & Hours</h3>
              
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p>Mogadishu,Somalia</p>
                </div>
                
                {/* <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p>(555) 123-4567</p>
                </div> */}
                
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p>info@bungate.com</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                  <p>Monday-Friday: 7am - 7pm</p>
                  <p>Saturday-Sunday: 8am - 6pm</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-soft animate-scale-in">
              <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
              
              <form className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="w-full h-32 resize-none"
                    required
                  />
                </div>
                
                <Button className="w-full hover-lift">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;