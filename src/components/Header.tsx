import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/buneste.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    // { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Header with Curved Bottom */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white shadow-2xl py-0" 
          : "bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#8B4513] py-2"
      }`}>
        
        {/* Curved Bottom Shape */}
        <div className={`absolute bottom-0 left-0 w-full transition-all duration-500 ${
          isScrolled ? "h-1" : "h-3"
        }`}>
          <svg 
            viewBox="0 0 1440 120" 
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0 L1440,0 L1440,120 Q720,80 0,120 Z" 
              fill={isScrolled ? "#ffffff" : "#5C3A21"}
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="flex items-center justify-between">
            {/* Logo - Left Side */}
          {/* Logo - Left Side */}
<Link 
  to="/" 
  className="flex items-center z-50 group relative"
>
  <img
    src={logoImage}
    alt="Buneste Logo"
    className={`transition-all duration-500 ${
      isScrolled ? "w-48 h-20" : "w-58 h-24"
    } object-contain transition-transform duration-300 group-hover:scale-110`}
  />
</Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-sans font-medium uppercase tracking-widest text-sm transition-all duration-300 group py-4 ${
                    location.pathname === item.path 
                      ? isScrolled ? "text-amber-700 font-bold" : "text-amber-300 font-bold"
                      : isScrolled ? "text-gray-700 hover:text-amber-600" : "text-amber-100 hover:text-amber-300"
                  }`}
                >
                  {item.name}
                  {/* Hover/Active Indicator */}
                  <span className={`absolute bottom-3 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.path ? "w-full" : ""
                  } ${
                    isScrolled ? "bg-amber-600" : "bg-amber-300"
                  }`}></span>
                  
                  {/* Curved accent */}
                  <svg 
                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-2 transition-opacity duration-300 ${
                      location.pathname === item.path ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                    }`}
                    viewBox="0 0 24 8"
                  >
                    <path 
                      d="M0,0 Q12,8 24,0" 
                      fill={isScrolled ? "#D97706" : "#FCD34D"}
                      opacity="0.8"
                    />
                  </svg>
                </Link>
              ))}
            </nav>

            {/* CTA Button - Right Side */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* <button className={`px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg ${
                isScrolled 
                  ? "bg-amber-600 text-white hover:bg-amber-700" 
                  : "bg-amber-300 text-amber-900 hover:bg-amber-400"
              }`}>
                Reserve Table
              </button> */}
              
              {/* Phone Number */}
              <div className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-gray-700" : "text-amber-100"
              }`}>
                <div className="flex items-center space-x-2">
                  {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
                    <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a1 1 0 00-.086-1.391l-4.064-3.696z"/>
                  </svg> */}
                  {/* <span>(555) 123-4567</span> */}
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden flex flex-col items-center justify-center w-10 h-10 relative z-50 rounded-full transition-all duration-300 ${
                isScrolled ? "bg-amber-100" : "bg-amber-900/30"
              } ${isMobileMenuOpen ? "bg-amber-500" : ""}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`w-5 h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-amber-700" : "bg-amber-100"
                } ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`w-5 h-0.5 transition-all duration-300 my-1.5 ${
                  isScrolled ? "bg-amber-700" : "bg-amber-100"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-5 h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-amber-700" : "bg-amber-100"
                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu with Curved Design */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 z-40 overflow-hidden ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 max-h-96"
              : "opacity-0 -translate-y-10 max-h-0 pointer-events-none"
          } ${isScrolled ? "bg-white shadow-2xl" : "bg-gradient-to-r from-[#5C3A21] to-[#7A4E2F]"}`}
        >
          {/* Curved bottom for mobile menu */}
          <div className="absolute bottom-0 left-0 w-full h-3">
            <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
              <path 
                d="M0,0 L1440,0 L1440,120 Q720,80 0,120 Z" 
                fill={isScrolled ? "#ffffff" : "#5C3A21"}
              />
            </svg>
          </div>
          
          <nav className="relative z-10 flex flex-col items-center py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-medium uppercase tracking-wider transition-all duration-300 py-3 px-8 rounded-full w-48 text-center ${
                  location.pathname === item.path 
                    ? isScrolled 
                      ? "bg-amber-600 text-white font-bold" 
                      : "bg-amber-300 text-amber-900 font-bold"
                    : isScrolled 
                      ? "text-gray-700 hover:bg-amber-100" 
                      : "text-amber-100 hover:bg-amber-900/30"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            {/* <button className={`px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 mt-4 ${
              isScrolled 
                ? "bg-amber-600 text-white hover:bg-amber-700" 
                : "bg-amber-300 text-amber-900 hover:bg-amber-400"
            }`}>
              Reserve Table
            </button> */}
          </nav>
        </div>
      </header>

      {/* Spacer for content */}
      <div className={`h-32 transition-all duration-300 ${isScrolled ? "h-24" : ""}`}></div>
    </>
  );
};

export default Header;