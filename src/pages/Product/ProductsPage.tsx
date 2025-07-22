import React from 'react';
import ProductCard from '../../components/common/ProductCard';
import type { Product } from '../../components/common/ProductCard';
const allProducts: Product[] = [
  {
    id: 1,
    name: 'Bear Lady Velvet',
    price: '$199',
    image: '/src/assets/images/bear-lady-velvet.png',
    link: '/products/bear-lady-velvet',
  },
  {
    id: 2,
    name: 'Bunny Dahlia',
    price: '$175',
    image: '/src/assets/images/bunny-dahlia.png',
    link: '/products/bunny-dahlia',
  },
  {
    id: 3,
    name: 'Bunny Fleur de Lis',
    price: '$192',
    image: '/src/assets/images/bunny-fleur-de-lis.png',
    link: '/products/bunny-fleur-de-lis',
  },
  {
    id: 4,
    name: 'Cat Lord Crimson',
    price: '$180',
    image: '/src/assets/images/cat-lord-crimson.png',
    link: '/products/cat-lord-crimson',
  },
  {
    id: 5,
    name: 'Cat Violet',
    price: '$178',
    image: '/src/assets/images/cat-violet.png',
    link: '/products/cat-violet',
  },
  {
    id: 6,
    name: 'Chicken Willowbelle',
    price: '$160',
    image: '/src/assets/images/chicken-willowbelle.png',
    link: '/products/chicken-willowbelle',
  },
  {
    id: 7,
    name: 'Cow Daisy',
    price: '$172',
    image: '/src/assets/images/cow-daisy.png',
    link: '/products/cow-daisy',
  },
  {
    id: 8,
    name: 'Deer Charlie',
    price: '$188',
    image: '/src/assets/images/deer-charlie.png',
    link: '/products/deer-charlie',
  },
  {
    id: 9,
    name: 'Dog Gigi',
    price: '$170',
    image: '/src/assets/images/dog-gigi.png',
    link: '/products/dog-gigi',
  },
  {
    id: 10,
    name: 'Duck Peony',
    price: '$155',
    image: '/src/assets/images/duck-peony.png',
    link: '/products/duck-peony',
  },
  {
    id: 11,
    name: 'Elephant Princess Pearl',
    price: '$210',
    image: '/src/assets/images/elephant-princess-pearl.png',
    link: '/products/elephant-princess-pearl',
  },
  {
    id: 12,
    name: 'Fox Celeste',
    price: '$165',
    image: '/src/assets/images/fox-celeste.png',
    link: '/products/fox-celeste',
  },
  {
    id: 13,
    name: 'Giraffe Sylvie',
    price: '$185',
    image: '/src/assets/images/giraffe-sylvie.png',
    link: '/products/giraffe-sylvie',
  },
  {
    id: 14,
    name: 'Monkey Sunny',
    price: '$168',
    image: '/src/assets/images/monkey-sunny.png',
    link: '/products/monkey-sunny',
  },
  {
    id: 15,
    name: 'Mouse Crystal',
    price: '$158',
    image: '/src/assets/images/mouse-crystal.png',
    link: '/products/mouse-crystal',
  },
  {
    id: 16,
    name: 'Owl Penelope',
    price: '$150',
    image: '/src/assets/images/owl-penelope.png',
    link: '/products/owl-penelope',
  },
  {
    id: 17,
    name: 'Penguin Blossom',
    price: '$162',
    image: '/src/assets/images/penguin-blossom.png',
    link: '/products/penguin-blossom',
  },
  {
    id: 18,
    name: 'Pig Olivia',
    price: '$159',
    image: '/src/assets/images/pig-olivia.png',
    link: '/products/pig-olivia',
  },
  {
    id: 19,
    name: 'Sheep Margot',
    price: '$185',
    image: '/src/assets/images/sheep-margot.png',
    link: '/products/sheep-margot',
  },
  {
    id: 20,
    name: 'Squirrel Lilybelle',
    price: '$163',
    image: '/src/assets/images/squirrel-lilybelle.png',
    link: '/products/squirrel-lilybelle',
  },
];

const ProductListPage: React.FC = () => {
  return (
    <div className='py-8'>
      <div className='container mx-auto px-4'>
        {/* Título da página de produtos */}
        <h1 className='font-cardo text-2xl md:text-3xl lg:text-5xl font-bold text-center text-primary m-6 lg:m-10 uppercase'>
          Our Collection
        </h1>
        <p className='lg:max-w-5xl mx-auto mb-10 text-xs md:text-sm lg:text-lg text-center text-text/80 leading-relaxed'>
          Our charming plush friends are made for both playtime adventures and
          quiet cuddles.
          <br />
          Whether you’re tucking them in for a nap or setting up a little tea
          party, they’re always ready to join the fun.
          <br />
          <br />
          <strong>
            Choose your companion and start a memory worth holding onto.
          </strong>
        </p>

        {/* Grid para exibir os produtos */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8'>
          {allProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
