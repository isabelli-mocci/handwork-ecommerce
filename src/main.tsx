import React from 'react';
import ReactDOM from 'react-dom/client';
import LoadingPage from './components/common/feedback/LoadingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ScrollToTop from './utils/scrollToTop.utils';
import { CartProvider } from './context/CartProvider.tsx';
import App from './App.tsx';
import './index.css';

const routeConfig = [
  { path: '/', element: lazy(() => import('./pages/HomePage')) },
  { path: '/products', element: lazy(() => import('./pages/ProductsPage')) },
  {
    path: '/products/:id',
    element: lazy(() => import('./pages/ProductDetailPage')),
  },
  { path: '/about', element: lazy(() => import('./pages/AboutUsPage')) },
  { path: '/contact', element: lazy(() => import('./pages/ContactUsPage')) },
  { path: '/cart', element: lazy(() => import('./pages/CartPage')) },
  {
    path: '/privacy-policy',
    element: lazy(() => import('./pages/PrivacyPolicyPage')),
  },
  { path: '/wishlist', element: lazy(() => import('./pages/WishlistPage')) },
  {
    path: '/shipping-returns',
    element: lazy(() => import('./pages/ShippingReturnsPage')),
  },
  { path: '/faq', element: lazy(() => import('./pages/FAQPage')) },
  { path: '/checkout', element: lazy(() => import('./pages/CheckoutPage')) },
  { path: '*', element: lazy(() => import('./pages/NotFoundPage')) },
];

import ErrorPage from './components/common/feedback/ErrorPage';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      const handleReload = () => window.location.reload();
      return (
        <ErrorPage
          title='Something went wrong'
          message='An unexpected error occurred. Please reload the page or try again later.'
          buttonLabel='Reload'
          buttonAction={handleReload}
        />
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <App>
            <ScrollToTop />
            <Suspense fallback={<LoadingPage />}>
              <Routes>
                {routeConfig.map(({ path, element: Element }) => (
                  <Route
                    key={path}
                    path={path}
                    element={<Element />}
                  />
                ))}
              </Routes>
            </Suspense>
          </App>
        </ErrorBoundary>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
