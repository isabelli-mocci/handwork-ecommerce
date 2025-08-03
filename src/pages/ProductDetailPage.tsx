import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavoritesHooks';
import useProductDetail from '../hooks/useProductDetail';
import useSelectedImage from '../hooks/useSelectedImage';
import { useProductDetailActions } from '../hooks/useProductDetailActions';
import { useAddToCart } from '../hooks/useAddToCart';
import getDetailIcon from '../utils/getDetailIcon.utils';
import ProductDetailsSection from '../components/sections/ProductDetailsSection';
import ProductActions from '../components/ProductActions';
import formatDescription from '../utils/formatDescription.utils';
import ProductImages from '../components/common/ProductImages';
import ProductMainImage from '../components/common/ProductMainImage';
import RatingStars from '../components/common/RatingStars';
import PriceDisplay from '../components/common/PriceDisplay';
import ReviewsSection from '../components/sections/ReviewsSection';
import RelatedProductsSection from '../components/sections/RelatedProductsSection';

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = useProductDetail(id) || undefined;
  const [quantity, setQuantity] = useState(1);
  const { isFavorite, toggleFavorite } = useFavorites();
  const addToCart = useAddToCart();
  const [selectedImage, setSelectedImage] = useSelectedImage(product?.images);
  const productIsFavorite = useMemo(() => (product ? isFavorite(product.id) : false), [product, isFavorite]);
  const { handleAddToCart, handleToggleFavorite } = useProductDetailActions(
    product,
    quantity,
    addToCart,
    toggleFavorite
  );

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-150px)] text-xl text-text">
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
          <ProductActions
            quantity={quantity}
            setQuantity={setQuantity}
            stock={product.stock}
            isFavorite={productIsFavorite}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
          />
          <ProductDetailsSection
            description={product.description}
            details={product.details || []}
            getDetailIcon={getDetailIcon}
            formatDescription={formatDescription}
            onShare={() => {}}
          />
          <ReviewsSection />
          <RelatedProductsSection />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;