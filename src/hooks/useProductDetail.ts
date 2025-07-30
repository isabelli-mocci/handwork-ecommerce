import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/productsDetails.data';
import type { Product } from '../models/product.model';

const useProductDetail = (id: string | undefined) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    if (!id) return;
    const found = products.find((p: Product) => p.id === id);
    if (found) {
      setProduct(found);
    } else {
      navigate('/404');
    }
  }, [id, navigate]);
  return product;
};

export default useProductDetail;
