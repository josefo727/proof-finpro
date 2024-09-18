import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;  // El texto o contenido del botón
  onClick?: () => void; // Evento onClick opcional
  type?: "button" | "submit" | "reset"; // Tipo de botón
}

const Button = ({ children, onClick, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50"
    >
      {children}
    </button>
  );
};

export default Button;
