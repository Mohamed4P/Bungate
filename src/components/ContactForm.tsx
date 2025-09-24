import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";

const MissionVision = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const location = useLocation();

  // Show ONLY on home page
  if (location.pathname !== "/") return null;

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Mission */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To deliver innovative, high-quality solutions that empower
              businesses and individuals to achieve excellence while creating
              lasting value for our community and partners.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be a global leader recognized for driving positive change,
              fostering creativity, and inspiring progress through technology
              and service excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
