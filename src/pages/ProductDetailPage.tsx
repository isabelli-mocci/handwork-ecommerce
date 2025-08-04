import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavoritesHooks';
import useProductDetail from '../hooks/useProductDetail';
import useSelectedImage from '../hooks/useSelectedImage';
import { useProductDetailActions } from '../hooks/useProductDetailActions';
import { useAddToCart } from '../hooks/useAddToCart';
import getDetailIcon from '../utils/getDetailIcon.utils';
import ProductDetailsSection from '../components/sections/product/ProductDetailsSection';
import ProductActions from '../components/features/product/ProductActions';
import formatDescription from '../utils/formatDescription.utils';
import ProductImages from '../components/features/product/ProductImages';
import ProductMainImage from '../components/features/product/ProductMainImage';
import MobileImageGallery from '../components/features/product/MobileImageGallery';
import ProductHeader from '../components/features/product/ProductHeader';
import ReviewsSection from '../components/sections/product/ReviewsSection';
import RecommendedProducts from '../components/sections/product/RecommendedProducts';


function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = useProductDetail(id) || undefined;
  const [quantity, setQuantity] = useState(1);
  const { isFavorite, toggleFavorite } = useFavorites();
  const addToCart = useAddToCart();
  const [selectedImage, setSelectedImage] = useSelectedImage(product?.images);

  const productIsFavorite = useMemo(
    () => (product ? isFavorite(product.id) : false),
    [product, isFavorite]
  );

  const { handleAddToCart, handleToggleFavorite } = useProductDetailActions(
    product,
    quantity,
    addToCart,
    toggleFavorite
  );

  if (!product) {
    return (
      <div className='flex justify-center items-center min-h-[calc(100vh-150px)] text-xl text-text'>
        Loading product...
      </div>
    );
  }

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='container mx-auto px-4 py-8 lg:py-12 max-w-7xl'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          <div
            className='lg:col-span-5 flex flex-row items-start min-h-full'
            style={{ minHeight: '100%' }}
          >
            <div className='hidden sm:flex'>
              <ProductImages
                images={product.images}
                selectedImage={selectedImage}
                onSelect={setSelectedImage}
                productName={product.name}
              />
            </div>
            <div className='flex-1 flex flex-col h-full w-full'>
              <div className='flex-1 flex items-stretch w-full'>
                <ProductMainImage
                  image={selectedImage}
                  alt={product.name}
                />
              </div>
              {product.images && (
                <MobileImageGallery
                  images={product.images}
                  selectedImage={selectedImage}
                  onImageChange={setSelectedImage}
                />
              )}
            </div>
          </div>

          <div className='lg:col-span-7 w-full flex flex-col p-4 sm:p-0'>
            <ProductHeader
              category={product.category}
              name={product.name}
              rating={product.rating}
              reviewsCount={product.reviewsCount}
              price={product.price}
              discountPrice={product.discountPrice}
              currency={product.currency}
            />

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
              details={product.details}
              getDetailIcon={getDetailIcon}
              formatDescription={formatDescription}
              onShare={() => {}}
            />
          </div>
        </div>

        <div className='w-full max-w-7xl px-4 mx-auto'>
          <ReviewsSection />
          <RecommendedProducts />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
