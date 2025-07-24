import React from 'react';
import ProductList from '../common/ProductList';
import type { Product } from '../../models/product.model';
import catVioletImg from '../../assets/images/cat-violet.png';
import sheepMargotImg from '../../assets/images/sheep-margot.png';
import bunnyFleurDeLisImg from '../../assets/images/bunny-fleur-de-lis.png';
import cowDaisyImg from '../../assets/images/cow-daisy.png';
import { useFavorites } from '../../hooks/useFavoritesHooks';

const popularToys: Product[] = [
  {
    id: 1,
    name: 'Cat Violet',
    price: '$178',
    priceValue: 178,
    image: catVioletImg,
    link: '/products/cat-violet',
    category: 'FAIRYCORE TOYS',
    color: 'Pink',
  },
  {
    id: 2,
    name: 'Sheep Margot',
    price: '$185',
    priceValue: 185,
    image: sheepMargotImg,
    link: '/products/sheep-margot',
    category: 'FARMCORE TOYS',
    color: 'White',
  },
  {
    id: 3,
    name: 'Bunny Fleur de Lis',
    price: '$192',
    priceValue: 192,
    image: bunnyFleurDeLisImg,
    link: '/products/bunny-fleur-de-lis',
    category: 'COTTAGECORE TOYS',
    color: 'Beige',
  },
  {
    id: 4,
    name: 'Cow Daisy',
    price: '$172',
    priceValue: 172,
    image: cowDaisyImg,
    link: '/products/cow-daisy',
    category: 'FARMCORE TOYS',
    color: 'Black',
  },
];

const PopularToysSection: React.FC = () => {
  const { toggleFavorite, isFavorite } = useFavorites();
  return (
    <section
      id='popular-toys-section'
      className='py-8'
    >
      <div className='container mx-auto px-4'>
        <h2 className='font-cardo text-2xl font-black text-left mb-8 uppercase'>
          Popular Toys
        </h2>
        <ProductList
          products={popularToys}
          onFavoriteClick={toggleFavorite}
          isFavorite={product => isFavorite(String(product.id))}
          className='grid-cols-2 lg:grid-cols-4 gap-4'
        />
      </div>
    </section>
  );
};

export default PopularToysSection;
