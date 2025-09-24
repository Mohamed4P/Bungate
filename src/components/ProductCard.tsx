interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const ProductCard = ({ name, description, price, image, category }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover-lift transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-primary">
            {price}
          </span>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary-hover transition-colors duration-300 transform hover:scale-105">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;