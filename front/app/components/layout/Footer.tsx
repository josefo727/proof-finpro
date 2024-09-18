import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  {
    href: "https://www.facebook.com/joserafael.gutierrezblanco",
    icon: FaFacebook,
    label: "Facebook"
  },
  {
    href: "https://x.com/josefo727",
    icon: FaTwitter,
    label: "Twitter"
  },
  {
    href: "https://www.linkedin.com/in/jose-gutierrez-5a2293128/",
    icon: FaLinkedin,
    label: "LinkedIn"
  },
  {
    href: "https://www.instagram.com/josefo1981/",
    icon: FaInstagram,
    label: "Instagram"
  }
];

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
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} FinPro. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
