import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import type { ProductCardProps } from '../../types/productCard.types';

import {
  CARD_CLASS,
  IMAGE_WRAPPER_CLASS,
  IMAGE_CLASS,
  CONTENT_CLASS,
  TITLE_CLASS,
  PRICE_CLASS,
  LINK_CLASS
} from '../../styles/productCard.styles';


const ProductImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img src={src} alt={alt} className={IMAGE_CLASS} loading="lazy" />
);

const ProductContent: React.FC<{ name: string; price: string; link: string; actionLabel: string }> = ({ name, price, link, actionLabel }) => (
  <div className={CONTENT_CLASS}>
    <div>
      <h3 className={TITLE_CLASS}>{name}</h3>
      <p className={PRICE_CLASS}>{price}</p>
    </div>
    <Link to={link} className={LINK_CLASS}>
      {actionLabel}
    </Link>
  </div>
);

const ProductCard: React.FC<ProductCardProps> = ({ product, onFavoriteClick, isFavorite = false, actionLabel = 'Choose Options' }) => (
  <article className={CARD_CLASS}>
    <div className={IMAGE_WRAPPER_CLASS}>
      <ProductImage src={product.image} alt={product.name} />
      <FavoriteButton
        isFavorite={isFavorite}
        onClick={onFavoriteClick ? () => onFavoriteClick(String(product.id)) : undefined}
        label={`Favorite ${product.name}`}
      />
    </div>
    <ProductContent
      name={product.name}
      price={product.price}
      link={product.link}
      actionLabel={actionLabel}
    />
  </article>
);

export default ProductCard;
