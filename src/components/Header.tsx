import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegação

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Logo/Nome da Loja */}
        <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
          Handwork Store
        </Link>

        {/* Navegação Principal */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
            <li>
              <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300">
                Produtos
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300">
                Contato
              </Link>
            </li>
            {/* Ícones de Carrinho/Login podem vir aqui futuramente */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;