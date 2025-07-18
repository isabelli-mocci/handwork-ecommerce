import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">Oops! Looks like you're lost. Return to the safety of our Home Page.</p>
    </div>
  );
};

export default NotFoundPage;