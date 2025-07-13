import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtém o parâmetro 'id' da URL
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold text-purple-600">Detalhes do Produto</h1>
      <p className="mt-2 text-gray-700">Você está vendo os detalhes do produto com ID: <span className="font-semibold">{id || 'Nenhum'}</span>.</p>
    </div>
  );
};

export default ProductDetailPage;