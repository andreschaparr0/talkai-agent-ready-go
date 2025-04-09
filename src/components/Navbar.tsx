
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between w-full">
            <div className="flex-shrink-0 flex items-center">
            <img src="\favicon_w3cub\favicon-32x32.png" alt="Logo" className="h-6 w-6"/>
              <span className="text-2xl font-bold text-primary">TalkAI</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#features"
                className="border-transparent text-gray-600 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Características
              </a>
              <a
                href="#how-it-works"
                className="border-transparent text-gray-600 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                ¿Cómo funciona?
              </a>
              <a
                href="#testimonials"
                className="border-transparent text-gray-600 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Testimonios
              </a>
              <a
                href="#pricing"
                className="border-transparent text-gray-600 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Precios
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button variant="default">Contactar</Button>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Abrir menú</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="text-gray-600 hover:text-primary block pl-3 pr-4 py-2 text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Características
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-primary block pl-3 pr-4 py-2 text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              ¿Cómo funciona?
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-primary block pl-3 pr-4 py-2 text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonios
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-primary block pl-3 pr-4 py-2 text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Precios
            </a>
            <div className="pl-3 pr-4 py-2">
              <Button className="w-full" variant="default">
                Contactar
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
