import React from 'react';
import type { ReactNode } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { FavoritesProvider } from './hooks/useFavorites';

interface AppProps {
  children: ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <FavoritesProvider>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </div>
    </FavoritesProvider>
  );
};

export default App;
