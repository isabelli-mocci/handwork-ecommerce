import React from 'react';
import type { ReactNode } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

interface AppProps {
  children: ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default App;