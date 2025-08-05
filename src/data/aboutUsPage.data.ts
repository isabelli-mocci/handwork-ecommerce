import pinAbout from '../assets/images/about-pin.png';
import horseAbout from '../assets/images/about-horse.png';
import reelAbout from '../assets/images/about-reel.png';
import handmadeAbout from '../assets/images/about-handmade.png';
import parallaxBannerImg from '../assets/images/banner-about.jpg';

export const ABOUT_CONTENT = {
  title: 'Our Story',
  intro: "Welcome to Mocci & Co., where we believe in creating more than just toys — we craft companions that become cherished parts of your family's story.",
  parallaxBanner: {
    src: parallaxBannerImg,
    alt: 'Parallax banner with three background-colored squares on top',
  },
  mainText: [
    'At Mocci & Co., quality, safety, and imagination are at the heart of everything we do.',
    'Each product is designed to stand the test of time — becoming keepsakes lovingly shared from one generation to the next.',
    'Our toys go beyond simple entertainment: they spark storytelling, inspire imaginative play, and nurture emotional bonds.',
    "From the tiniest giggles to whispered secrets and grand adventures, we hope our creations become part of your family's most treasured moments."
  ],
  squares: [
    { src: pinAbout, alt: 'Pin' },
    { src: horseAbout, alt: 'Horse' },
    { src: reelAbout, alt: 'Reel' },
  ],
  handmade: { src: handmadeAbout, alt: 'Handmade' },
  sections: [],
  values: [],
};
