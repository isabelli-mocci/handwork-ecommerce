import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800">404 - Página Não Encontrada</h1>
      <p className="mt-4 text-lg text-gray-600">Ops! Parece que você se perdeu. Volte para a segurança da nossa Home Page.</p>
    </div>
  );
};

export default NotFoundPage;