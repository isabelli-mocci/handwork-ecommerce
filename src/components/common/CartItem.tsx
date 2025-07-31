import React from 'react';

export type CartItemProps = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  loading: boolean;
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
};

const CartItem: React.FC<CartItemProps> = React.memo(({ id, name, image, price, quantity, onRemove, onQuantityChange, loading }) => {
  const handleRemove = React.useCallback(() => onRemove(id), [id, onRemove]);
  const handleQuantity = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => onQuantityChange(id, parseInt(e.target.value)), [id, onQuantityChange]);
  return (
    <div className="relative flex items-center gap-4 py-4 border-b border-secondary last:border-b-0 bg-transparent">
      <button
        onClick={handleRemove}
        className={`absolute top-2 right-2 text-sm font-normal text-text/50 hover:text-primary/50 underline z-10 transition-colors ${loading ? 'pointer-events-none opacity-60' : ''}`}
        aria-label={`Remove ${name} from cart`}
        disabled={loading}
      >
        {loading ? <span className="animate-spin inline mr-1">⏳</span> : null}
        Remove
      </button>
      <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded bg-secondary/50 flex items-center justify-center">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-text">{name}</h2>
        <p className="text-text/70">${price.toFixed(2)}</p>
        <div className="flex items-center mt-2 gap-2">
          <span className="text-sm text-text font-normal">Quantity</span>
          <div className="relative">
            <select
              value={quantity}
              onChange={handleQuantity}
              className="appearance-none w-16 pl-3 pr-6 py-1 text-center focus:outline-none focus:ring-0 cursor-pointer"
              style={{ backgroundColor: 'transparent', color: 'inherit' }}
              aria-label="Select quantity"
              disabled={loading}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">▼</span>
          </div>
        </div>
      </div>
    </div>
  );
});
CartItem.displayName = 'CartItem';

export default CartItem;
