import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

import HomePage from './pages/Home/HomePage.tsx';
import ProductsPage from './pages/Product/ProductsPage.tsx';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage.tsx';
import AboutUsPage from './pages/About/AboutUsPage.tsx';
import ContactUsPage from './pages/Contact/ContactUsPage.tsx';
import NotFoundPage from './pages/NotFound/NotFoundPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {' '}
      <App> 
        {' '}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
