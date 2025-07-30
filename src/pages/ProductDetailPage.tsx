import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavoritesHooks';
import useProductDetail from '../hooks/useProductDetail';
import { useAddToCart } from '../hooks/useAddToCart';
import getDetailIcon from '../utils/getDetailIcon';
import formatDescription from '../utils/formatDescription';
import ProductDetailsSection from '../components/sections/ProductDetailsSection';
import ProductImages from '../components/common/ProductImages';
import ProductMainImage from '../components/common/ProductMainImage';
import QuantitySelector from '../components/common/QuantitySelector';
import FavoriteButton from '../components/common/FavoriteButton';
import RatingStars from '../components/common/RatingStars';
import PriceDisplay from '../components/common/PriceDisplay';
import ReviewsSection from '../components/sections/ReviewsSection';
import RelatedProductsSection from '../components/sections/RelatedProductsSection';
import ActionButton from '../components/common/ActionButton';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = useProductDetail(id);
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { isFavorite, toggleFavorite } = useFavorites();
  const addToCart = useAddToCart();

  useEffect(() => {
    if (product && product.images?.length) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  const productIsFavorite = useMemo(() => (product ? isFavorite(product.id) : false), [product, isFavorite]);

  const handleAddToCart = useCallback(() => {
    if (!product) return;
    addToCart(product, quantity);
  }, [product, quantity, addToCart]);

  const handleToggleFavorite = useCallback(() => {
    if (!product) return;
    toggleFavorite(product.id);
    alert(`${product.name} ${productIsFavorite ? 'removed from' : 'added to'} favorites!`);
  }, [product, toggleFavorite, productIsFavorite]);

  const handleShare = useCallback(() => {
    if (!product) return;
    const desc = formatDescription(product.description);
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: desc,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  }, [product]);

  if (!product) {
    return (
      <div className='flex justify-center items-center min-h-[calc(100vh-150px)] text-xl text-text'>
        Loading product...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 flex flex-row items-start min-h-full" style={{ minHeight: '100%' }}>
          <div className="hidden sm:flex">
            <ProductImages
              images={product.images || []}
              selectedImage={selectedImage}
              onSelect={setSelectedImage}
              productName={product.name}
            />
          </div>
          <div className="flex-1 flex flex-col h-full w-full">
            <div className="flex-1 flex items-stretch w-full">
              <ProductMainImage image={selectedImage} alt={product.name} />
            </div>
            {product.images && (
              <div className="flex justify-center items-center gap-8 mt-0 sm:hidden w-full">
                <button
                  aria-label="Previous image"
                  className="p-2 rounded-full bg-brown-100 hover:bg-brown-200 text-brown-800 disabled:opacity-30"
                  onClick={() => {
                    const idx = product.images.indexOf(selectedImage);
                    setSelectedImage(product.images[(idx - 1 + product.images.length) % product.images.length]);
                  }}
                  disabled={product.images.length < 2}
                >
                  &#8592;
                </button>
                <span className="text-xs text-brown-700">{product.images.indexOf(selectedImage) + 1} / {product.images.length}</span>
                <button
                  aria-label="Next image"
                  className="p-2 rounded-full bg-brown-100 hover:bg-brown-200 text-brown-800 disabled:opacity-30"
                  onClick={() => {
                    const idx = product.images.indexOf(selectedImage);
                    setSelectedImage(product.images[(idx + 1) % product.images.length]);
                  }}
                  disabled={product.images.length < 2}
                >
                  &#8594;
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col p-4 sm:p-0">
          <span className="uppercase tracking-wide text-xs text-brown-700 mb-2 md:mb-3 md:text-sm md:tracking-widest md:block text-left">
            {product.category}
          </span>

          <h1 className="font-cardo text-3xl md:text-5xl font-bold text-primary mb-2 md:mb-4 text-left">
            {product.name}
          </h1>

          <div className="flex flex-col md:flex-row md:items-center md:gap-3 items-start mb-4 md:mb-6">
            <div className="flex items-center gap-1 text-base md:text-lg">
              <RatingStars rating={product.rating} />
            </div>
            <span className="hidden md:inline mx-2 text-text/40">|</span>
            <a href="#reviews" className="text-xs text-primary hover:underline transition-colors md:text-sm md:ml-2">
              {product.reviewsCount} reviews
            </a>
          </div>
          <div className="mb-3 md:mb-5 md:text-lg text-left">
            <PriceDisplay price={product.price} discountPrice={product.discountPrice} currency={product.currency} />
          </div>
          <div className="flex items-end gap-2 mb-6 md:mb-8 justify-start">
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} stock={product.stock} />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 px-6 py-3 border border-brown-800 text-text transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-white hover:bg-brown-50 hover:-translate-y-0.5 hover:scale-102 duration-200"
              disabled={product.stock === 0}
              type="button"
            >
              {product.stock > 0 ? 'Add to cart' : 'Out of Stock'}
            </button>
            <FavoriteButton
              isFavorite={productIsFavorite}
              onClick={handleToggleFavorite}
              label={productIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            />
          </div>
          <ActionButton fullWidth className="mb-4">
            Buy it now
          </ActionButton>
          <ProductDetailsSection
            description={product.description}
            details={product.details || []}
            getDetailIcon={getDetailIcon}
            onShare={handleShare}
            formatDescription={formatDescription}
          />

          <ReviewsSection />
          <RelatedProductsSection />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;