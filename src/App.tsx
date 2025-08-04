import { type ReactNode } from 'react';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import { FavoritesProvider } from './hooks/useFavorites';
import { Toaster } from 'react-hot-toast';
import { NotificationProvider } from './context/NotificationProvider';

type AppProps = {
  children: ReactNode;
};

const App = ({ children }: AppProps) => (
  <FavoritesProvider>
    <NotificationProvider>
      <div className="min-h-screen flex flex-col">
        <Toaster
          position="top-center"
          toastOptions={{
            style: { borderRadius: '1rem', fontSize: '1rem' },
          }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </NotificationProvider>
  </FavoritesProvider>
);

export default App;
