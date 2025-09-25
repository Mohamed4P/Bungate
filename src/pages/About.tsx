import { useRef } from 'react';
import { useInView } from 'framer-motion';
import aboutInteriorImg from "@/assets/about-interior.jpg";
import bakerWorkingImg from "@/assets/baker-working.jpg";
import baristaArtImg from "@/assets/barista-latte-art.jpg";
import cafeExteriorImg from "@/assets/coffee.jpeg";
import coffeeBeansImg from "@/assets/premium.jpg";
import pastryDisplayImg from "@/assets/sawir.jpeg";
import teamPhotoImg from "@/assets/maqayad.jpeg";
import localIngredientsImg from "@/assets/koob.jpeg";

// Animation wrapper component
const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
      }}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-amber-800 to-orange-600 bg-clip-text text-transparent">
              Our Story
            </h1>
            <p className="text-2xl text-muted-foreground font-light">
              Crafting community connections through exceptional coffee and artisanal baked goods since 2010
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection>
              <div className="relative">
                <img
                  src={cafeExteriorImg}
                  alt="Bungate Cafe exterior with welcoming facade"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-64 h-64">
                  <img
                    src={coffeeBeansImg}
                    alt="Premium coffee beans"
                    className="w-full h-full object-cover rounded-2xl shadow-lg border-8 border-background"
                  />
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">From Humble Beginnings</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2010 by passionate coffee enthusiasts Sarah and Michael Chen, 
                  Bungate Cafe started as a small neighborhood spot with just six tables. 
                  What began as a dream to share exceptional coffee has blossomed into a 
                  beloved community institution.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Today, we proudly serve over 1,000 customers weekly while maintaining 
                  our commitment to artisanal quality and personal service that made us 
                  fall in love with this business.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-card rounded-xl">
                    <div className="text-2xl font-bold text-primary">14+</div>
                    <div className="text-sm text-muted-foreground">Years Serving</div>
                  </div>
                  <div className="p-4 bg-card rounded-xl">
                    <div className="text-2xl font-bold text-primary">1K+</div>
                    <div className="text-sm text-muted-foreground">Weekly Guests</div>
                  </div>
                  <div className="p-4 bg-card rounded-xl">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Local Partners</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Craftsmanship Section */}
          <div className="text-center mb-20">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-foreground mb-4">The Art of Perfection</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every cup of coffee and every pastry tells a story of dedication, quality, 
                and the pursuit of culinary excellence.
              </p>
            </AnimatedSection>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <AnimatedSection delay={0.1}>
              <div className="group text-center p-8 bg-card rounded-3xl shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={bakerWorkingImg}
                    alt="Professional baker kneading dough"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Artisan Craftsmanship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our master bakers blend traditional European techniques with innovative 
                  approaches, ensuring every croissant, loaf, and pastry achieves perfect 
                  texture and flavor balance.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="group text-center p-8 bg-card rounded-3xl shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={baristaArtImg}
                    alt="Barista creating latte art"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Coffee Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We source premium single-origin beans from sustainable farms, 
                  roast in small batches, and train our baristas to extract the 
                  perfect espresso shot every time.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="group text-center p-8 bg-card rounded-3xl shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={localIngredientsImg}
                    alt="Fresh local ingredients"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Local Partnerships</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We collaborate with 30+ local farms and producers to bring you 
                  the freshest seasonal ingredients while supporting our regional 
                  economy.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-shadow duration-500">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="leading-relaxed opacity-95">
                  To enrich daily life by creating meaningful connections through 
                  exceptional coffee experiences, artisanal baked goods, and warm 
                  hospitality. We're committed to sustainable practices that honor 
                  our planet and support local communities.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-shadow duration-500">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="leading-relaxed opacity-95">
                  To be the heart of our neighborhood—a place where everyone feels 
                  at home, where quality is never compromised, and where every visit 
                  leaves you inspired and refreshed. We aim to set the standard for 
                  community-focused cafes worldwide.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Team Section - Enhanced with Large Picture */}
          <div className="mb-20">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Family</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  The passionate team behind every perfect cup and pastry
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img
                    src={teamPhotoImg}
                    alt="Bungate Cafe team members"
                    className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <div className="text-3xl font-bold">15+</div>
                      <div className="text-sm">Team Members</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">Our Passionate Team</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our diverse family of 15+ passionate professionals includes award-winning 
                    baristas, pastry chefs trained in Paris, and hospitality experts who share 
                    one common goal: to make your experience unforgettable.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    From our head baker who starts at 4 AM daily to craft the freshest pastries, 
                    to our baristas who remember your usual order, we're not just staff—we're 
                    a family dedicated to serving your family.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card p-4 rounded-xl">
                      <div className="text-lg font-bold text-primary mb-1">5+ Years</div>
                      <div className="text-sm text-muted-foreground">Average Experience</div>
                    </div>
                    <div className="bg-card p-4 rounded-xl">
                      <div className="text-lg font-bold text-primary mb-1">100+</div>
                      <div className="text-sm text-muted-foreground">Training Hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Additional Gallery Section */}
          <AnimatedSection>
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-foreground text-center mb-8">Behind the Scenes</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={pastryDisplayImg}
                    alt="Pastry display case"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">Fresh Pastries Daily</span>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={aboutInteriorImg}
                    alt="Cafe interior"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">Cozy Atmosphere</span>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={coffeeBeansImg}
                    alt="Coffee beans closeup"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">Premium Beans</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">Experience the Difference</h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Join us for a cup of excellence and taste the passion in every bite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Visit Us Today
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-amber-700 transition-all duration-300">
                View Our Menu
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;