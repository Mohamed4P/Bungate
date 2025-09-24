import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Coffee, Croissant, Leaf, Users } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        {/* Heading & Description */}
        <div className="animate-slide-up mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
            Our Passion for Excellence
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Since 2010, Bungate has been more than just a cafe. We're a community
            gathering place where every cup of coffee tells a story and every pastry
            is crafted with love and dedication.
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our commitment to quality ingredients, sustainable practices, and artisanal
            techniques ensures that every visit to Bungate is a memorable experience.
          </p>
          <Link to="/about">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Learn Our Story
            </Button>
          </Link>
        </div>

        {/* Feature Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-scale-in">
          <div className="bg-muted rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <Coffee className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground">Premium Coffee</h3>
            <p className="text-sm text-muted-foreground">Single-origin beans</p>
          </div>
          <div className="bg-muted rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <Croissant className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground">Fresh Pastries</h3>
            <p className="text-sm text-muted-foreground">Baked daily</p>
          </div>
          <div className="bg-muted rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <Leaf className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground">Sustainable</h3>
            <p className="text-sm text-muted-foreground">Eco-friendly practices</p>
          </div>
          <div className="bg-muted rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <Users className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground">Community</h3>
            <p className="text-sm text-muted-foreground">Local partnerships</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
