import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtém o parâmetro 'id' da URL
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold text-purple-600">Product Details</h1>
      <p className="mt-2 text-gray-700">You are viewing the details of the product with ID: <span className="font-semibold">{id || 'Nenhum'}</span>.</p>
    </div>
  );
};

export default ProductDetailPage;