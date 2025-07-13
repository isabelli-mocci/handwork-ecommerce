import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-4">Handwork Store</p>
        <nav className="mb-4">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {/* Futuros links para políticas */}
            <li>
              <Link to="/privacy-policy" className="hover:text-indigo-400 transition-colors duration-300">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link to="/shipping-policy" className="hover:text-indigo-400 transition-colors duration-300">
                Política de Envio
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="hover:text-indigo-400 transition-colors duration-300">
                Termos e Condições
              </Link>
            </li>
            {/* Adicione mais links de política conforme necessário */}
          </ul>
        </nav>
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} Handwork Store. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;