import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <Link href="#/privacy-policy">
            <span className="text-white hover:text-secondary transition">
              Política de Privacidad
            </span>
          </Link>
          {' | '}
          <Link href="#/terms-of-service">
            <span className="text-white hover:text-secondary transition">
              Términos del Servicio
            </span>
          </Link>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.facebook.com/joserafael.gutierrezblanco"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://x.com/josefo727"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jose-gutierrez-5a2293128/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/josefo1981/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} FinPro. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
