import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroVideoImage from "@/assets/hero-video-bg.jpg";
import heroVideo from"@/assets/Ma Boulangerie Bakery Commercial Video.mp4"

const Hero = () => {
  return (
<section
  className="relative h-[70vh] md:h-[80vh] lg:h-[75vh] flex items-center justify-center text-center text-white overflow-hidden"
>
<video
  className="absolute top-0 left-0 w-full h-[110%] object-cover -translate-y-5"
  src={heroVideo}
  autoPlay
  loop
  muted
  playsInline
/>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-shadow-lg animate-slide-up">
            Welcome to{" "}
            <span className="text-gradient bg-gradient-to-r from-orange-200 to-amber-100 bg-clip-text text-transparent">
              Bungate
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-orange-100 animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: "0.2s" }}>
            Experience the art of coffee and bakery craftsmanship in our spacious, modern cafe
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-scale-in items-center" style={{ animationDelay: "0.4s" }}>
            <Link to="/menu">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-hover text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover-lift transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                Explore Our Menu
              </Button>
            </Link>
            <Link to="/about">
              {/* <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
              >
                Our Story
              </Button> */}
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-white rounded-full mt-1 md:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;