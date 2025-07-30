import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { PiMagnifyingGlassPlusLight } from 'react-icons/pi';

export type ProductMainImageProps = {
  image: string;
  alt: string;
};

const ProductMainImage: React.FC<ProductMainImageProps> = ({ image, alt }) => {
  const [open, setOpen] = useState(false);
  let style = { minHeight: 280, maxHeight: 720, aspectRatio: '4/3', maxWidth: '100%' };
  if (typeof window !== 'undefined' && window.innerWidth < 640) {
    style = { minHeight: 180, maxHeight: 320, aspectRatio: '4/3', maxWidth: '100%' };
  }
  return (
    <div
      className="w-full max-w-lg aspect-[4/3] overflow-hidden group relative flex-1 flex items-stretch"
      style={style}
    >
      <span className="absolute top-2 left-2 z-10 bg-white/80 rounded-full p-2 shadow pointer-events-none">
        <PiMagnifyingGlassPlusLight className="text-2xl text-brown-800" />
      </span>
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-contain p-2 transition-transform duration-300 cursor-zoom-in"
        style={{ background: '#ede1da', minHeight: 0, minWidth: 0, maxHeight: 670 }}
        onClick={() => setOpen(true)}
      />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: image, alt }]}
        render={{ buttonPrev: () => null, buttonNext: () => null }}
      />
    </div>
  );
};

export default ProductMainImage;
