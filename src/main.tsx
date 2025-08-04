import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ScrollToTop from './utils/scrollToTop.utils';
import { CartProvider } from './context/CartProvider.tsx';
import App from './App.tsx';
import './index.css';

const routeConfig = [
  { path: '/', element: lazy(() => import('./pages/HomePage')) },
  { path: '/products', element: lazy(() => import('./pages/ProductsPage')) },
  { path: '/products/:id', element: lazy(() => import('./pages/ProductDetailPage')) },
  { path: '/about', element: lazy(() => import('./pages/AboutUsPage')) },
  { path: '/contact', element: lazy(() => import('./pages/ContactUsPage')) },
  { path: '/cart', element: lazy(() => import('./pages/CartPage')) },
  { path: '/privacy-policy', element: lazy(() => import('./pages/PrivacyPolicyPage')) },
  { path: '/shipping-returns', element: lazy(() => import('./pages/ShippingReturnsPage')) },
  { path: '/faq', element: lazy(() => import('./pages/FAQPage')) },
  { path: '/checkout', element: lazy(() => import('./pages/CheckoutPage')) },
  { path: '*', element: lazy(() => import('./pages/NotFoundPage')) },
];

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
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
      return <div>Something went wrong. Please reload the page.</div>;
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App>
          <ScrollToTop />
          <ErrorBoundary>
            <Suspense fallback={<div>Loading page...</div>}>
              <Routes>
                {routeConfig.map(({ path, element: Element }) => (
                  <Route key={path} path={path} element={<Element />} />
                ))}
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </App>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
