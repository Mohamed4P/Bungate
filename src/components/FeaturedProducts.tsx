import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import croissantImg from "@/assets/croissant.jpg";
import cakeImg from "@/assets/chocolate-cake.jpg";
import coffeeImg from "@/assets/specialty-coffee.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FeaturedProducts = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  const featuredItems = [
    {
      id: 1,
      name: "Signature Croissant",
      description: "Our most popular buttery, flaky pastry made with premium French butter",
      price: "$3.50",
      image: croissantImg,
      category: "Bestseller"
    },
    {
      id: 2,
      name: "House Special Coffee",
      description: "Single-origin beans from our exclusive roasting process",
      price: "$4.50",
      image: coffeeImg,
      category: "Signature"
    },
    {
      id: 3,
      name: "Chocolate Delight",
      description: "Decadent chocolate cake that melts in your mouth",
      price: "$4.50/slice",
      image: cakeImg,
      category: "Dessert"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Featured Creations
          </h2>
          <p className="text-xl text-muted-foreground">
            Taste our most loved and signature items
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <ProductCard {...item} />
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <Link to="/menu">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold hover-lift"
            >
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;