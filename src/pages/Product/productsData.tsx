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

export const products: Product[] = [
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

export const categories = [
  'All',
  'VICTORIAN TOYS',
  'FARMCORE TOYS',
  'COTTAGECORE TOYS',
  'FAIRYCORE TOYS',
];

export const colors = [
  'All',
  'Brown',
  'White',
  'Beige',
  'Orange',
  'Pink',
  'Grey',
  'Black',
];

export const priceRanges = [
  { label: 'All', min: 0, max: 9999 },
  { label: '$150 - $170', min: 150, max: 170 },
  { label: '$171 - $190', min: 171, max: 190 },
  { label: '$191 - $220', min: 191, max: 220 },
];
