import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartProvider.tsx';
import './index.css';

import HomePage from './pages/HomePage.tsx';
import ProductsPage from './pages/ProductsPage.tsx';
import ProductDetailPage from './pages/ProductDetailPage.tsx';
import AboutUsPage from './pages/AboutUsPage.tsx';
import ContactUsPage from './pages/ContactUsPage.tsx';
import CartPage from './pages/CartPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx';
import ShippingReturnsPage from './pages/ShippingReturnsPage.tsx';
import FAQPage from './pages/FAQPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/shipping-returns" element={<ShippingReturnsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </App>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
