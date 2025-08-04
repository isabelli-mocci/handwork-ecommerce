import React from 'react';
import SectionTitle from '../../common/display/SectionTitle';
import { recommendedProductsMock } from '../../../data/recommendedProducts.data';
import ProductCard from '../../features/product/ProductCard';
import { products } from '../../../data/productsDetails.data';

const RecommendedProducts: React.FC = () => {
  return (
    <div className='mt-16 w-full'>
      <SectionTitle>You Might Also Like</SectionTitle>
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
        {recommendedProductsMock.slice(0, 4).map(recommended => {
          const product = products.find(p => p.id === recommended.id);
          if (!product) return null;

          return (
            <ProductCard
              key={product.id}
              product={product}
              actionLabel='View Details'
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecommendedProducts;
