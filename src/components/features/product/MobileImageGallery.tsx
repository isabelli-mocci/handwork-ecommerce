import { memo } from 'react';

interface MobileImageGalleryProps {
  images: string[];
  selectedImage: string;
  onImageChange: (newImage: string) => void;
}

const MobileImageGallery = memo(function MobileImageGallery({
  images,
  selectedImage,
  onImageChange
}: MobileImageGalleryProps) {
  if (images.length < 2) return null;

  const currentIndex = images.indexOf(selectedImage);

  const handlePreviousImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    onImageChange(images[newIndex]);
  };

  const handleNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    onImageChange(images[newIndex]);
  };

  return (
    <div className='flex justify-center items-center gap-8 mt-0 sm:hidden w-full'>
      <button
        aria-label='Previous image'
        className='p-2 rounded-full bg-brown-100 hover:bg-brown-200 text-brown-800'
        onClick={handlePreviousImage}
      >
        &#8592;
      </button>
      <span className='text-xs text-brown-700'>
        {currentIndex + 1} / {images.length}
      </span>
      <button
        aria-label='Next image'
        className='p-2 rounded-full bg-brown-100 hover:bg-brown-200 text-brown-800'
        onClick={handleNextImage}
      >
        &#8594;
      </button>
    </div>
  );
});

export default MobileImageGallery;
