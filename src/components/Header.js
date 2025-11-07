import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-primary text-white fixed w-full top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-accent">
            <span className="text-accent">Fer</span>Art
          </div>

          {/* Menu hamburger pour mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden focus:outline-none"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation desktop */}
          <ul className="hidden lg:flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('accueil')}
                className="hover:text-accent transition-colors duration-300"
              >
                Accueil
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('realisations')}
                className="hover:text-accent transition-colors duration-300"
              >
                Réalisations
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-accent transition-colors duration-300"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('apropos')}
                className="hover:text-accent transition-colors duration-300"
              >
                À propos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-accent text-primary px-6 py-2 rounded-full hover:bg-yellow-500 transition-all duration-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <ul className="lg:hidden mt-4 space-y-4 pb-4">
            <li>
              <button
                onClick={() => scrollToSection('accueil')}
                className="block w-full text-left hover:text-accent transition-colors duration-300"
              >
                Accueil
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('realisations')}
                className="block w-full text-left hover:text-accent transition-colors duration-300"
              >
                Réalisations
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left hover:text-accent transition-colors duration-300"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('apropos')}
                className="block w-full text-left hover:text-accent transition-colors duration-300"
              >
                À propos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-accent text-primary px-6 py-2 rounded-full hover:bg-yellow-500 transition-all duration-300 w-full"
              >
                Contact
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
