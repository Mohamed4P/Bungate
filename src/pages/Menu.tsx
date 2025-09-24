import ProductCard from "@/components/ProductCard";
import croissantImg from "@/assets/croissant.jpg";
import breadImg from "@/assets/artisan-bread.jpg";
import cakeImg from "@/assets/chocolate-cake.jpg";
import coffeeImg from "@/assets/specialty-coffee.jpg";
import muffinImg from "@/assets/blueberry-muffin.jpg";
import cappuccinoImg from "@/assets/cappuccino.jpg";

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Croissant",
      description: "Buttery, flaky pastry made with French butter",
      price: "$3.50",
      image: croissantImg,
      category: "Pastries"
    },
    {
      id: 2,
      name: "Artisan Bread",
      description: "Freshly baked sourdough with a crispy crust",
      price: "$5.00",
      image: breadImg,
      category: "Bread"
    },
    {
      id: 3,
      name: "Chocolate Cake",
      description: "Rich, moist chocolate cake with ganache frosting",
      price: "$4.50/slice",
      image: cakeImg,
      category: "Cakes"
    },
    {
      id: 4,
      name: "Specialty Coffee",
      description: "Single-origin beans expertly roasted and brewed",
      price: "From $4.00",
      image: coffeeImg,
      category: "Coffee"
    },
    {
      id: 5,
      name: "Blueberry Muffin",
      description: "Fresh blueberries in soft, fluffy muffin",
      price: "$2.75",
      image: muffinImg,
      category: "Pastries"
    },
    {
      id: 6,
      name: "Cappuccino",
      description: "Espresso with steamed milk and rich foam",
      price: "$4.25",
      image: cappuccinoImg,
      category: "Coffee"
    },
    {
      id: 7,
      name: "Almond Croissant",
      description: "Classic croissant filled with sweet almond cream",
      price: "$4.00",
      image: croissantImg,
      category: "Pastries"
    },
    {
      id: 8,
      name: "Espresso",
      description: "Rich, bold shot of our signature blend",
      price: "$2.50",
      image: coffeeImg,
      category: "Coffee"
    }
  ];

  const categories = ["All", "Coffee", "Pastries", "Bread", "Cakes"];

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 animate-slide-up">
              Our Menu
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              Discover our delicious creations made with love and finest ingredients
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 animate-scale-in">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;