import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Bungate Cafe & Bakery</h3>
            <p className="text-primary-foreground/80 mb-4">
              Crafting exceptional coffee and pastries for our community since 2010.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Made with for coffee lovers everywhere
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-xl"
              >
                📘
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-xl"
              >
                📷
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-xl"
              >
                🐦
              </a>
            </div>
            <p className="text-sm text-primary-foreground/80">
              {/* <strong>Phone:</strong> (555) 123-4567<br /> */}
              <strong>Email:</strong> info@bungate.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2022 Bungate Cafe & Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;