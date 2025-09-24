import aboutInteriorImg from "@/assets/about-interior.jpg";
import bakerWorkingImg from "@/assets/baker-working.jpg";
import baristaArtImg from "@/assets/barista-latte-art.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 animate-slide-up">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Bungate Cafe & Bakery was founded in 2010 with a simple mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-up">
              <p className="text-lg text-muted-foreground mb-6">
                Bungate Cafe & Bakery was founded in 2010 with a simple mission: to create a
                welcoming space where community and craftsmanship come together. Our passion
                for quality ingredients and artisanal techniques drives everything we do.
              </p>
              <p className="text-lg text-muted-foreground">
                From our carefully sourced coffee beans to our handcrafted pastries, each
                item is made with attention to detail and a commitment to excellence.
              </p>
            </div>
            <div className="animate-scale-in">
              <img
                src={aboutInteriorImg}
                alt="Warm cafe interior with customers enjoying coffee"
                className="w-full h-80 object-cover rounded-2xl shadow-soft hover-lift"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center animate-fade-in">
              <img
                src={bakerWorkingImg}
                alt="Professional baker kneading dough"
                className="w-full h-48 object-cover rounded-xl mb-4 hover-lift"
              />
              <h3 className="text-xl font-bold text-primary mb-2">Artisan Craftsmanship</h3>
              <p className="text-muted-foreground">
                Every loaf and pastry is handcrafted by our skilled bakers using traditional techniques.
              </p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <img
                src={baristaArtImg}
                alt="Barista creating latte art"
                className="w-full h-48 object-cover rounded-xl mb-4 hover-lift"
              />
              <h3 className="text-xl font-bold text-primary mb-2">Coffee Excellence</h3>
              <p className="text-muted-foreground">
                Our experienced baristas create the perfect cup using premium single-origin beans.
              </p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src={aboutInteriorImg}
                alt="Cozy cafe atmosphere"
                className="w-full h-48 object-cover rounded-xl mb-4 hover-lift"
              />
              <h3 className="text-xl font-bold text-primary mb-2">Community Hub</h3>
              <p className="text-muted-foreground">
                A welcoming space where neighbors gather, friendships form, and memories are made.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-soft hover-lift">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To enrich our community by providing exceptional coffee and bakery
                experiences crafted with passion, quality ingredients, and sustainable
                practices.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-soft hover-lift">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the neighborhood's favorite gathering place, known for our warm
                atmosphere, outstanding products, and commitment to local partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;