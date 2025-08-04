import React from 'react';

export type ProductImagesProps = {
  images: string[];
  selectedImage: string;
  onSelect: (img: string) => void;
  productName: string;
};

const ProductImages: React.FC<ProductImagesProps> = ({ images, selectedImage, onSelect, productName }) => (
  <div className="flex flex-col gap-2 mr-4">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`${productName} - View ${index + 1}`}
        className={`w-16 h-16 object-cover cursor-pointer border ${selectedImage === image ? 'border-primary' : 'border-gray-200'} hover:border-primary transition-all duration-200`}
        onClick={() => onSelect(image)}
        style={{ background: '#fff' }}
      />
    ))}
  </div>
);

export default ProductImages;
