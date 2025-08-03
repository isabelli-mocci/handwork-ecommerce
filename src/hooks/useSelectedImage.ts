import { useState, useEffect } from 'react';

type UseSelectedImageReturn = [string, (image: string) => void];

export default function useSelectedImage(images?: string[]): UseSelectedImageReturn {
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    if (Array.isArray(images) && images.length > 0) {
      setSelectedImage(images[0]);
    } else {
      setSelectedImage('');
    }
  }, [images]);

  return [selectedImage, setSelectedImage];
}
