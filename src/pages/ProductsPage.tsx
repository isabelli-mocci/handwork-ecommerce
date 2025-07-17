import React from 'react';
import ProductCard from '../components/ProductCard';

// Dados de produtos de exemplo
const sampleProducts = [
  {
    id: '1',
    name: 'Bolsa de Crochê Artesanal',
    price: 120.0,
    imageUrl:
      'https://via.placeholder.com/300x200/B0E0E6/000000?text=Bolsa+Croche',
  },
  {
    id: '2',
    name: 'Cachecol Tricotado à Mão',
    price: 85.5,
    imageUrl:
      'https://via.placeholder.com/300x200/F08080/000000?text=Cachecol+Tricot',
  },
  {
    id: '3',
    name: 'Amigurumi de Coelhinho',
    price: 55.0,
    imageUrl:
      'https://via.placeholder.com/300x200/98FB98/000000?text=Amigurumi+Coelho',
  },
  {
    id: '4',
    name: 'Kit de Sabonetes Artesanais',
    price: 65.0,
    imageUrl:
      'https://via.placeholder.com/300x200/DDA0DD/000000?text=Sabonetes+Artesanais',
  },
  {
    id: '5',
    name: 'Vela Aromática Decorada',
    price: 40.0,
    imageUrl:
      'https://via.placeholder.com/300x200/FFDAB9/000000?text=Vela+Aromatica',
  },
  {
    id: '6',
    name: 'Pintura em Tela Abstrata',
    price: 250.0,
    imageUrl:
      'https://via.placeholder.com/300x200/87CEEB/000000?text=Pintura+Tela',
  },
  {
    id: '7',
    name: 'Conjunto de Cerâmica Feita à Mão',
    price: 180.0,
    imageUrl:
      'https://via.placeholder.com/300x200/FFE4B5/000000?text=Ceramica+Artesanal',
  },
  {
    id: '8',
    name: 'Caderno Artesanal Couro',
    price: 70.0,
    imageUrl:
      'https://via.placeholder.com/300x200/ADD8E6/000000?text=Caderno+Couro',
  },
];

const ProductsPage: React.FC = () => {
  return (
    <div className='container mx-auto p-4 flex flex-col md:flex-row gap-6'>
      {/* Sidebar */}
      <aside className='w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md'>
        <h2 className='text-xl font-bold text-gray-800 mb-4'>Filtros</h2>
        {/* Exemplo de Filtro por Categoria */}
        <div className='mb-6'>
          <h3 className='font-semibold text-gray-700 mb-2'>Categorias</h3>
          <ul className='space-y-2'>
            <li>
              <a
                href='#'
                className='text-indigo-600 hover:underline'
              >
                Bolsas
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-indigo-600 hover:underline'
              >
                Decoração
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-indigo-600 hover:underline'
              >
                Acessórios
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-indigo-600 hover:underline'
              >
                Cuidados Pessoais
              </a>
            </li>
            {/* Adicione mais categorias */}
          </ul>
        </div>
        {/* Exemplo de Filtro por Preço */}
        <div className='mb-6'>
          <h3 className='font-semibold text-gray-700 mb-2'>Preço</h3>
          <input
            type='range'
            min='0'
            max='300'
            className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg'
          />
          <p className='text-sm text-gray-500 mt-1'>Até R$ 300</p>
        </div>
        <button className='w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors duration-300'>
          Aplicar Filtros
        </button>
      </aside>

      {/* Área Principal de Produtos */}
      <section className='flex-1'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6'>
          Nossos Produtos Artesanais
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {sampleProducts.map(product => (
            <ProductCard
              key={product.id} // Chave única para cada item na lista (obrigatório no React)
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
