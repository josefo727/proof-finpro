'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        <div className="text-2xl font-bold flex items-center space-x-2">
          <Link href="/">
            <span className="flex items-center">
              <Image
                src="/images/finpro.png" 
                width={50}
                height={50}
                title='FinPro'
                alt="FinPro web site" 
                className="h-10 md:h-12 object-contain"
                loading="lazy"
              />
              <span className="ml-2 hover:text-secondary transition">FinPro</span>
            </span>
          </Link>
        </div>

        {/* Botón de menú en móvil */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menú de navegación */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#home">
            <span className="hover:text-secondary transition">Inicio</span>
          </Link>
          <Link href="#services">
            <span className="hover:text-secondary transition">Servicios</span>
          </Link>
          <Link href="#testimonials">
            <span className="hover:text-secondary transition">Testimonios</span>
          </Link>
          <Link href="#contact">
            <span className="hover:text-secondary transition">Contacto</span>
          </Link>
        </nav>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <nav className="md:hidden bg-primary py-2">
          <Link href="#home">
            <span onClick={toggleMenu} className="block px-4 py-2 hover:text-secondary transition">
              Inicio
            </span>
          </Link>
          <Link href="#services">
            <span onClick={toggleMenu} className="block px-4 py-2 hover:text-secondary transition">
              Servicios
            </span>
          </Link>
          <Link href="#testimonials">
            <span onClick={toggleMenu} className="block px-4 py-2 hover:text-secondary transition">
              Testimonios
            </span>
          </Link>
          <Link href="#contact">
            <span onClick={toggleMenu} className="block px-4 py-2 hover:text-secondary transition">
              Contacto
            </span>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
