import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineHeart } from 'react-icons/hi2';
import catVioletImg from '../../assets/images/cat-violet.png';
import sheepMargotImg from '../../assets/images/sheep-margot.png';
import bunnyFleurDeLisImg from '../../assets/images/bunny-fleur-de-lis.png';
import cowDaisyImg from '../../assets/images/cow-daisy.png';

const popularToys = [
  {
    id: 1,
    name: 'Cat Violet',
    price: '$178',
    image: catVioletImg,
    link: '/products/cat-violet',
  },
  {
    id: 2,
    name: 'Sheep Margot',
    price: '$185',
    image: sheepMargotImg,
    link: '/products/sheep-margot',
  },
  {
    id: 3,
    name: 'Bunny Fleur de Lis',
    price: '$192',
    image: bunnyFleurDeLisImg,
    link: '/products/bunny-fleur-de-lis',
  },
  {
    id: 4,
    name: 'Cow Daisy',
    price: '$172',
    image: cowDaisyImg,
    link: '/products/cow-daisy',
  },
];

type Toy = (typeof popularToys)[number];

const PopularToyCard: React.FC<{ toy: Toy }> = ({ toy }) => (
  <article className='bg-secondary overflow-hidden group rounded-md flex flex-col'>
    <div className='relative w-full aspect-[4/5] md:aspect-[4/5] flex items-center justify-center bg-white/40 overflow-hidden'>
      <img
        src={toy.image}
        alt={toy.name}
        className='max-h-full max-w-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105 p-2'
        loading='lazy'
      />
      <button
        type='button'
        className='absolute top-0 right-0 p-2 group/heart'
        aria-label={`Favorite ${toy.name}`}
      >
        <HiOutlineHeart className='w-5 h-5 transition-transform duration-200 group-hover/heart:scale-125 group-hover/heart:text-primary text-text' />
      </button>
    </div>
    <div className='p-2 text-left flex-1 flex flex-col justify-between bg-background'>
      <div>
        <h3 className='text-sm lg:text-lg font-normal group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4 transition-all duration-200'>
          {toy.name}
        </h3>
        <p className='text-base lg:text-xl font-extralight mb-4'>{toy.price}</p>
      </div>
      <Link
        to={toy.link}
        className='inline-block w-full py-1 md:py-3 md:px-6 font-cardo font-bold text-xs lg:text-base uppercase border-2 border-text/50 text-center mt-auto'
      >
        Choose Options
      </Link>
    </div>
  </article>
);

const PopularToysSection: React.FC = () => (
  <section className='py-8'>
    <div className='container mx-auto px-4'>
      <h2 className='font-cardo text-2xl font-bold text-left mb-8 uppercase'>
        Popular Toys
      </h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {popularToys.map(toy => (
          <PopularToyCard
            key={toy.id}
            toy={toy}
          />
        ))}
      </div>
    </div>
  </section>
);

export default PopularToysSection;
