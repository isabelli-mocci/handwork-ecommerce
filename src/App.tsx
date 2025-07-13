import React from 'react';
import type { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

interface AppProps {
  children: ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        {children} {/* renderizar a página das rotas aqui */}
      </main>
      <Footer />
    </div>
  );
};

export default App;