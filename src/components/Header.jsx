import { useState } from "react";
import { Menu } from "lucide-react";
import ThemeSwitch from "./ThemeSwitch.jsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border fixed top-0 left-0 w-full z-50 font-sans px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="sp-container flex items-center justify-between h-16">
        
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-primary dark:text-primary">
          Malwa Roadways
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-content hover:text-primary transition">
            Home
          </a>
          <a href="/about" className="text-content hover:text-primary transition">
            About
          </a>
          <a href="/services" className="text-content hover:text-primary transition">
            Services
          </a>
          <a href="/contact" className="text-content hover:text-primary transition">
            Contact
          </a>
          <ThemeSwitch /> {/* Desktop toggle */}
        </nav>

        {/* Mobile Menu + ThemeSwitch */}
        <div className="flex items-center space-x-3 md:hidden">
          <ThemeSwitch /> {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-700 dark:text-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-40 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <span className="text-xl font-bold text-primary dark:text-primary">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <a href="/" className="text-content hover:text-primary transition">Home</a>
          <a href="/about" className="text-content hover:text-primary transition">About</a>
          <a href="/services" className="text-content hover:text-primary transition">Services</a>
          <a href="/contact" className="text-content hover:text-primary transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
