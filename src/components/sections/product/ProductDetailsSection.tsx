import React from 'react';
import AccordionDetail from '../../common/display/AccordionDetail';
import { PiShare } from 'react-icons/pi';

export type ProductDetailsSectionProps = {
  description: string | string[];
  details: { label: string; value: string | string[] }[];
  getDetailIcon: (label: string) => React.ReactNode;
  onShare: () => void;
  formatDescription: (desc: string | string[]) => string;
};

const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({
  description,
  details,
  getDetailIcon,
  onShare,
  formatDescription,
}) => (
  <div className="pt-2">
    <div className="mb-4">
      <span className="font-semibold text-text text-lg block mb-1">Description</span>
      <p className="text-text/70 text-base">{formatDescription(description)}</p>
    </div>
    {details?.map((detail, i) => (
      <AccordionDetail
        key={i}
        label={detail.label}
        content={detail.value}
        icon={getDetailIcon(detail.label)}
      />
    ))}
    <div className="flex items-center gap-2 mt-4">
      <button
        type="button"
        className="flex items-center px-4 py-2 border border-primary rounded text-text"
        onClick={onShare}
      >
        <PiShare className='text-xl mr-2' /> Share
      </button>
    </div>
  </div>
);

export default ProductDetailsSection;
