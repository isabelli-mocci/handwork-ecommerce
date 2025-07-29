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
    id: '5',
    name: 'Cat Violet',
    price: 178,
    currency: 'USD',
    images: [catVioletImg],
    description: [
      'Pink fairycore cat with a violet ribbon.',
      'A magical friend for imaginative play.'
    ],
    details: [
      { label: 'Material', value: 'Organic Cotton' },
      { label: 'Dimensions', value: '26 cm (height)' },
      { label: 'Care', value: 'Hand wash recommended' },
    ],
    category: 'FAIRYCORE TOYS',
    stock: 9,
    reviewsCount: 19,
    rating: 4.7,
    color: 'Pink',
    link: '/products/5',
  },
  {
    id: '19',
    name: 'Sheep Margot',
    price: 185,
    currency: 'USD',
    images: [sheepMargotImg],
    description: [
      'White sheep plush with soft wool and farmcore style.',
      'Gentle and calming for little ones.'
    ],
    details: [
      { label: 'Material', value: 'Organic Cotton' },
      { label: 'Dimensions', value: '25 cm (height)' },
      { label: 'Care', value: 'Hand wash recommended' },
    ],
    category: 'FARMCORE TOYS',
    stock: 7,
    reviewsCount: 9,
    rating: 4.7,
    color: 'White',
    link: '/products/19',
  },
  {
    id: '3',
    name: 'Bunny Fleur de Lis',
    price: 192,
    currency: 'USD',
    images: [bunnyFleurDeLisImg],
    description: [
      'Beige bunny with a fleur de lis motif, cottagecore charm.',
      'Soft and huggable for bedtime.'
    ],
    details: [
      { label: 'Material', value: 'Organic Cotton' },
      { label: 'Dimensions', value: '29 cm (height)' },
      { label: 'Care', value: 'Machine wash cold' },
    ],
    category: 'COTTAGECORE TOYS',
    stock: 12,
    reviewsCount: 18,
    rating: 4.8,
    color: 'Beige',
    link: '/products/3',
  },
  {
    id: '7',
    name: 'Cow Daisy',
    price: 172,
    currency: 'USD',
    images: [cowDaisyImg],
    description: [
      'Black and white cow plush with daisy embroidery.',
      'A farmcore favorite for all ages.'
    ],
    details: [
      { label: 'Material', value: 'Organic Cotton' },
      { label: 'Dimensions', value: '28 cm (height)' },
      { label: 'Care', value: 'Spot clean only' },
    ],
    category: 'FARMCORE TOYS',
    stock: 6,
    reviewsCount: 11,
    rating: 4.4,
    color: 'Black & White',
    link: '/products/7',
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
