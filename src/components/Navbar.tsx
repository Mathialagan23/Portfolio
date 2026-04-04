import { useState } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import resume from "../assets/Resume-MathialaganT.pdf";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#home" },
    { ame: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gradient font-poppins">
              Mathialagan T
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-navy dark:text-gray-200 hover:text-teal transition-colors duration-300 font-medium font-inter"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Resume Button + Theme Toggle - Desktop */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-navy dark:text-gray-200 hover:text-teal hover:bg-navy/5 dark:hover:bg-white/10 transition-all duration-300"
            >
              <span className="transition-transform duration-300 ease-in-out">
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </span>
            </button>
            <a href={resume} download="Resume-MathialaganT-1.pdf">
              <Button variant="outline" className="hero-button-outline">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Theme Toggle + Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-navy dark:text-gray-200 hover:text-teal hover:bg-navy/5 dark:hover:bg-white/10 transition-all duration-300"
            >
              <span className="transition-transform duration-300 ease-in-out">
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy dark:text-gray-200 hover:text-teal transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-border animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-navy dark:text-gray-200 hover:text-teal transition-colors duration-300 font-medium font-inter"
              >
                {item.name}
              </button>
            ))}
            {/* Resume Button - Mobile */}
            <div className="px-3 py-2">
              <a href={resume} download="Resume-MathialaganT.pdf" className="block w-full">
                <Button variant="outline" size="sm" className="hero-button-outline w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
