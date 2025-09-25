import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logoImage from "@/assets/buneeee.png"; // replace with your real logo path

// Simple TikTok SVG because lucide doesn't include a TikTok icon
// const TikTokIcon = ({ size = 20, className = "" }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 48 48"
//     fill="none"
//     className={className}
//     aria-hidden
//   >
//     <path d="M33.5 12.5v10.2c0 6.2-4.9 11.2-11 11.2-6.1 0-11-5-11-11.2S16.4 11.5 22.5 11.5c.8 0 1.6.1 2.3.3v4.2c-.7-.2-1.5-.3-2.3-.3-4.8 0-8.7 3.9-8.7 8.7S17.7 33 22.5 33c4.8 0 8.7-3.9 8.7-8.7V12.5h2.3z" fill="currentColor"/>
//   </svg>
// );

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fade-in flex flex-col gap-4">
            {/* Logo - swap logoImage path with your real picture */}
            <div className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="Bungate Cafe & Bakery"
                className="w-16 h-16 object-cover rounded-md shadow-md"
              />
              <div>
                <h3 className="text-2xl font-bold">Bungate Cafe & Bakery</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Crafting exceptional coffee and pastries for our community since 2010.
                </p>
              </div>
            </div>

            <p className="text-sm text-primary-foreground/60">
              Made for coffee lovers everywhere
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

            <div className="flex items-center space-x-4 mb-4">
              <a
                href="#"
                aria-label="Facebook - Bungate"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-primary-foreground/10 transition"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                aria-label="Instagram - Bungate"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-primary-foreground/10 transition"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                aria-label="Twitter - Bungate"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-primary-foreground/10 transition"
                title="Twitter"
              >
                <Twitter size={20} />
              </a>

              {/* <a
                href="#"
                aria-label="TikTok - Bungate"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-primary-foreground/10 transition"
                title="TikTok"
              >
                <TikTokIcon size={20} />
              </a> */}

              <a
                href="#"
                aria-label="YouTube - Bungate"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-primary-foreground/10 transition"
                title="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>

            <p className="text-sm text-primary-foreground/80">
              <strong>Email:</strong> info@bungate.com
            </p>
            {/* <p className="text-sm text-primary-foreground/80 mt-2">
              <strong>Phone:</strong> (555) 123-4567
            </p> */}
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">© {year} Bungate Cafe & Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
