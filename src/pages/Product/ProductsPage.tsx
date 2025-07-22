import React, { useState, useMemo } from 'react';
import ProductCard from '../../components/common/ProductCard';
import type { Product } from '../../components/common/ProductCard';

import bearLadyVelvetImg from '../../assets/images/bear-lady-velvet.png';
import bunnyDahliaImg from '../../assets/images/bunny-dahlia.png';
import bunnyFleurDeLisImg from '../../assets/images/bunny-fleur-de-lis.png';
import catLordCrimsonImg from '../../assets/images/cat-lord-crimson.png';
import catVioletImg from '../../assets/images/cat-violet.png';
import chickenWillowbelleImg from '../../assets/images/chicken-willowbelle.png';
import cowDaisyImg from '../../assets/images/cow-daisy.png';
import deerCharlieImg from '../../assets/images/deer-charlie.png';
import dogGigiImg from '../../assets/images/dog-gigi.png';
import duckPeonyImg from '../../assets/images/duck-peony.png';
import elephantPrincessPearlImg from '../../assets/images/elephant-princess-pearl.png';
import foxCelesteImg from '../../assets/images/fox-celeste.png';
import giraffeSylvieImg from '../../assets/images/giraffe-sylvie.png';
import monkeySunnyImg from '../../assets/images/monkey-sunny.png';
import mouseCrystalImg from '../../assets/images/mouse-crystal.png';
import owlPenelopeImg from '../../assets/images/owl-penelope.png';
import penguinBlossomImg from '../../assets/images/penguin-blossom.png';
import pigOliviaImg from '../../assets/images/pig-olivia.png';
import sheepMargotImg from '../../assets/images/sheep-margot.png';
import squirrelLilybelleImg from '../../assets/images/squirrel-lilybelle.png';

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Bear Lady Velvet',
    price: '$199',
    priceValue: 199,
    image: bearLadyVelvetImg,
    link: '/products/bear-lady-velvet',
    category: 'VICTORIAN TOYS',
    color: 'Brown',
  },
  {
    id: 2,
    name: 'Bunny Dahlia',
    price: '$175',
    priceValue: 175,
    image: bunnyDahliaImg,
    link: '/products/bunny-dahlia',
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
    name: 'Cat Lord Crimson',
    price: '$180',
    priceValue: 180,
    image: catLordCrimsonImg,
    link: '/products/cat-lord-crimson',
    category: 'VICTORIAN TOYS',
    color: 'Orange',
  },
  {
    id: 5,
    name: 'Cat Violet',
    price: '$178',
    priceValue: 178,
    image: catVioletImg,
    link: '/products/cat-violet',
    category: 'FAIRYCORE TOYS',
    color: 'Pink',
  },
  {
    id: 6,
    name: 'Chicken Willowbelle',
    price: '$160',
    priceValue: 160,
    image: chickenWillowbelleImg,
    link: '/products/chicken-willowbelle',
    category: 'FARMCORE TOYS',
    color: 'White',
  },
  {
    id: 7,
    name: 'Cow Daisy',
    price: '$172',
    priceValue: 172,
    image: cowDaisyImg,
    link: '/products/cow-daisy',
    category: 'FARMCORE TOYS',
    color: 'Black',
  },
  {
    id: 8,
    name: 'Deer Charlie',
    price: '$188',
    priceValue: 188,
    image: deerCharlieImg,
    link: '/products/deer-charlie',
    category: 'COTTAGECORE TOYS',
    color: 'Brown',
  },
  {
    id: 9,
    name: 'Dog Gigi',
    price: '$170',
    priceValue: 170,
    image: dogGigiImg,
    link: '/products/dog-gigi',
    category: 'VICTORIAN TOYS',
    color: 'Brown',
  },
  {
    id: 10,
    name: 'Duck Peony',
    price: '$155',
    priceValue: 155,
    image: duckPeonyImg,
    link: '/products/duck-peony',
    category: 'VICTORIAN TOYS',
    color: 'Beige',
  },
  {
    id: 11,
    name: 'Elephant Princess Pearl',
    price: '$210',
    priceValue: 210,
    image: elephantPrincessPearlImg,
    link: '/products/elephant-princess-pearl',
    category: 'VICTORIAN TOYS',
    color: 'Grey',
  },
  {
    id: 12,
    name: 'Fox Celeste',
    price: '$165',
    priceValue: 165,
    image: foxCelesteImg,
    link: '/products/fox-celeste',
    category: 'FAIRYCORE TOYS',
    color: 'Orange',
  },
  {
    id: 13,
    name: 'Giraffe Sylvie',
    price: '$185',
    priceValue: 185,
    image: giraffeSylvieImg,
    link: '/products/giraffe-sylvie',
    category: 'VICTORIAN TOYS',
    color: 'Orange',
  },
  {
    id: 14,
    name: 'Monkey Sunny',
    price: '$168',
    priceValue: 168,
    image: monkeySunnyImg,
    link: '/products/monkey-sunny',
    category: 'COTTAGECORE TOYS',
    color: 'Beige',
  },
  {
    id: 15,
    name: 'Mouse Crystal',
    price: '$158',
    priceValue: 158,
    image: mouseCrystalImg,
    link: '/products/mouse-crystal',
    category: 'FAIRYCORE TOYS',
    color: 'White',
  },
  {
    id: 16,
    name: 'Owl Penelope',
    price: '$150',
    priceValue: 150,
    image: owlPenelopeImg,
    link: '/products/owl-penelope',
    category: 'COTTAGECORE TOYS',
    color: 'Beige',
  },
  {
    id: 17,
    name: 'Penguin Blossom',
    price: '$162',
    priceValue: 162,
    image: penguinBlossomImg,
    link: '/products/penguin-blossom',
    category: 'FAIRYCORE TOYS',
    color: 'Black',
  },
  {
    id: 18,
    name: 'Pig Olivia',
    price: '$159',
    priceValue: 159,
    image: pigOliviaImg,
    link: '/products/pig-olivia',
    category: 'FARMCORE TOYS',
    color: 'Pink',
  },
  {
    id: 19,
    name: 'Sheep Margot',
    price: '$185',
    priceValue: 185,
    image: sheepMargotImg,
    link: '/products/sheep-margot',
    category: 'FARMCORE TOYS',
    color: 'White',
  },
  {
    id: 20,
    name: 'Squirrel Lilybelle',
    price: '$163',
    priceValue: 163,
    image: squirrelLilybelleImg,
    link: '/products/squirrel-lilybelle',
    category: 'FAIRYCORE TOYS',
    color: 'Grey',
  },
];



const getUniqueValues = (arr: Product[], key: keyof Product): string[] => [
  'All',
  ...Array.from(new Set(arr.map(p => String(p[key])))),
];

const uniqueCategories = getUniqueValues(allProducts, 'category');
const uniqueColors = getUniqueValues(allProducts, 'color');

const priceRanges = [
  { label: 'All', min: 0, max: 9999 },
  { label: '$150 - $170', min: 150, max: 170 },
  { label: '$171 - $190', min: 171, max: 190 },
  { label: '$191 - $220', min: 191, max: 220 },
];



const filterProducts = (
  products: Product[],
  searchTerm: string,
  selectedCategory: string,
  selectedPriceRange: string,
  selectedColor: string
) => {
  let filtered = products;
  if (searchTerm) {
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  if (selectedCategory !== 'All') {
    filtered = filtered.filter(product => product.category === selectedCategory);
  }
  if (selectedPriceRange !== 'All') {
    const range = priceRanges.find(r => r.label === selectedPriceRange);
    if (range) {
      filtered = filtered.filter(
        product => product.priceValue >= range.min && product.priceValue <= range.max
      );
    }
  }
  if (selectedColor !== 'All') {
    filtered = filtered.filter(product => product.color === selectedColor);
  }
  return filtered;
};


const getColorClass = (colorName: string) => {
  switch (colorName) {
    case 'Brown':
      return 'bg-amber-800';
    case 'Beige':
      return 'bg-secondary';
    case 'White':
      return 'bg-white border border-gray-300';
    case 'Purple':
      return 'bg-purple-600';
    case 'Pink':
      return 'bg-pink-300';
    case 'Orange':
      return 'bg-orange-500';
    case 'Yellow':
      return 'bg-yellow-400';
    case 'Grey':
      return 'bg-gray-400';
    case 'Black':
      return 'bg-black';
    default:
      return 'bg-gray-200';
  }
};


const FilterControls: React.FC<{
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  uniqueCategories: string[];
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
  priceRanges: { label: string; min: number; max: number }[];
  selectedPriceRange: string;
  setSelectedPriceRange: (v: string) => void;
  uniqueColors: string[];
  selectedColor: string;
  setSelectedColor: (v: string) => void;
  isMobile?: boolean;
  onClose?: () => void;
}> = ({
  searchTerm,
  setSearchTerm,
  uniqueCategories,
  selectedCategory,
  setSelectedCategory,
  priceRanges,
  selectedPriceRange,
  setSelectedPriceRange,
  uniqueColors,
  selectedColor,
  setSelectedColor,
  isMobile = false,
  onClose,
}) => {
  if (!isMobile) {
    return (
      <div className='flex flex-col md:flex-row md:items-center md:justify-between md:gap-4 mb-8'>
        <input
          type='text'
          placeholder='Search...'
          className='w-full md:w-48 border-0 border-b border-gray-300 bg-transparent text-base md:text-sm focus:outline-none focus:border-primary placeholder:text-text/40 px-0 py-1 mb-1 md:mb-0'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className='flex flex-wrap gap-1 items-center w-full md:w-auto'>
          {uniqueCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-2 py-1 text-xs font-medium transition-colors border-none focus:outline-none w-full sm:w-auto ${selectedCategory === category ? 'bg-primary text-white' : 'bg-transparent text-text hover:bg-primary/10'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className='flex flex-wrap gap-1 items-center w-full md:w-auto'>
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => setSelectedPriceRange(range.label)}
              className={`px-2 py-1 text-xs font-medium transition-colors border-none focus:outline-none w-full sm:w-auto ${selectedPriceRange === range.label ? 'bg-primary text-white' : 'bg-transparent text-text hover:bg-primary/10'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
        <div className='flex flex-wrap gap-1 items-center w-full md:w-auto'>
          {uniqueColors.map(color => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`h-6 flex items-center justify-center border transition-transform duration-200 w-full sm:w-6 ${getColorClass(color)} ${selectedColor === color ? 'ring-2 ring-primary scale-110' : 'ring-0 hover:scale-105'} ${color === 'All' ? 'text-xs text-text border border-text/20 bg-white' : ''}`}
              aria-label={`Filter by ${color}`}
            >
              {color === 'All' && 'All'}
            </button>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className='flex flex-col gap-3 relative'>
      {onClose && (
        <button
          className='absolute top-2 right-2 text-gray-400 hover:text-primary text-2xl font-bold p-0 m-0 bg-transparent border-none outline-none'
          onClick={onClose}
          aria-label='Close filter'
          style={{ lineHeight: 1 }}
        >
          ×
        </button>
      )}
      <input
        type='text'
        placeholder='Search...'
        className='w-full border-0 border-b border-gray-200 bg-transparent text-base focus:outline-none focus:border-primary placeholder:text-text/40 px-0 py-1 mb-2'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className='flex flex-row flex-wrap gap-1 items-center'>
        {uniqueCategories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-2 py-0.5 text-xs font-medium border-none focus:outline-none transition-colors ${selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-100 text-text hover:bg-primary/10'}`}
            style={{ minWidth: 0 }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='flex flex-row flex-wrap gap-1 items-center'>
        {priceRanges.map(range => (
          <button
            key={range.label}
            onClick={() => setSelectedPriceRange(range.label)}
            className={`px-2 py-0.5 text-xs font-medium border-none focus:outline-none transition-colors ${selectedPriceRange === range.label ? 'bg-primary text-white' : 'bg-gray-100 text-text hover:bg-primary/10'}`}
            style={{ minWidth: 0 }}
          >
            {range.label}
          </button>
        ))}
      </div>
      <div className='flex flex-row flex-wrap gap-1 items-center'>
        {uniqueColors.map(color => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`h-6 w-6 flex items-center justify-center border transition-transform duration-200 ${getColorClass(color)} ${selectedColor === color ? 'ring-2 ring-primary scale-110' : 'ring-0 hover:scale-105'} ${color === 'All' ? 'text-xs text-text border border-text/20 bg-white' : ''}`}
            aria-label={`Filter by ${color}`}
            style={{ minWidth: 0, fontSize: color === 'All' ? '0.75rem' : undefined }}
          >
            {color === 'All' && 'All'}
          </button>
        ))}
      </div>
    </div>
  );
};

const ProductListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const filteredProducts = useMemo(
    () => filterProducts(allProducts, searchTerm, selectedCategory, selectedPriceRange, selectedColor),
    [searchTerm, selectedCategory, selectedPriceRange, selectedColor]
  );

  return (
    <div className='py-8'>
      <div className='container mx-auto px-4'>
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

        {/* Filtro mobile */}
        <div className='mb-6 flex md:hidden'>
          <button
            className='ml-auto px-4 py-2 rounded bg-primary text-white text-xs font-semibold shadow-sm focus:outline-none'
            onClick={() => setShowMobileFilter(true)}
          >
            Filter
          </button>
        </div>
        {showMobileFilter && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
            <div className='bg-white rounded-lg shadow-lg w-11/12 max-w-xs p-5 relative animate-fade-in'>
              <FilterControls
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                uniqueCategories={uniqueCategories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRanges={priceRanges}
                selectedPriceRange={selectedPriceRange}
                setSelectedPriceRange={setSelectedPriceRange}
                uniqueColors={uniqueColors}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                isMobile
                onClose={() => setShowMobileFilter(false)}
              />
            </div>
          </div>
        )}

        {/* Filtro desktop */}
        <div className='mb-8 hidden md:flex'>
          <FilterControls
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            uniqueCategories={uniqueCategories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRanges={priceRanges}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
            uniqueColors={uniqueColors}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className='col-span-full text-center text-lg text-text/70 py-10'>
              No products found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
