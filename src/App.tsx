import { type ReactNode } from 'react';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import { FavoritesProvider } from './hooks/useFavorites';

type AppProps = {
  children: ReactNode;
};

const App = ({ children }: AppProps) => (
  <FavoritesProvider>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  </FavoritesProvider>
);

export default App;
