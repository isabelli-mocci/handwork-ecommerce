import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineHeart } from 'react-icons/hi2';

export type Product = {
  id: number;
  name: string;
  price: string;
  priceValue: number;
  image: string;
  link: string;
  category: string;
  color: string;
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <article className='bg-secondary overflow-hidden group rounded-md flex flex-col'>
    <div className='relative w-full aspect-[4/5] md:aspect-[4/5] flex items-center justify-center bg-white/40 overflow-hidden'>
      <img
        src={product.image}
        alt={product.name}
        className='max-h-full max-w-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105 p-2'
        loading='lazy'
      />
      <button
        type='button'
        className='absolute top-0 right-0 p-2 group/heart'
        aria-label={`Favorite ${product.name}`}
      >
        <HiOutlineHeart className='w-5 h-5 transition-transform duration-200 group-hover/heart:scale-125 group-hover/heart:text-primary text-text' />
      </button>
    </div>
    <div className='p-2 text-left flex-1 flex flex-col justify-between bg-background'>
      <div>
        <h3 className='text-sm lg:text-lg font-normal group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4 transition-all duration-200'>
          {product.name}
        </h3>
        <p className='text-base lg:text-xl font-extralight mb-4'>
          {product.price}
        </p>
      </div>
      <Link
        to={product.link}
        className='inline-block w-full py-1 md:py-3 md:px-6 font-cardo font-bold text-xs lg:text-base uppercase border-2 border-text/50 text-center mt-auto'
      >
        Choose Options
      </Link>
    </div>
  </article>
);

export default ProductCard;
