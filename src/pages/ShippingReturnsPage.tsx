import { SHIPPING_RETURNS_POLICY } from '../data/shippingReturns.data';
import { LazySection, Section } from '../components/sections/PolicySection';
import type { PolicySection } from '../data/privacyPolicy.data';

const ShippingReturnsPage: React.FC = () => (
  <article
    className='py-8'
    aria-label='Shipping & Returns Policy'
  >
    <div className='container mx-auto px-4 max-w-4xl'>
      <h1 className='font-cardo text-2xl md:text-3xl lg:text-4xl font-black text-primary m-6 lg:m-10 uppercase text-center'>
        {SHIPPING_RETURNS_POLICY.title}
      </h1>
      <div className='space-y-10 text-text/80 text-xs md:text-sm lg:text-lg leading-relaxed'>
        {SHIPPING_RETURNS_POLICY.sections.map((section: PolicySection) => (
          <LazySection
            key={section.heading}
            id={section.heading.replace(/\s+/g, '-').toLowerCase()}
          >
            <Section section={section} />
          </LazySection>
        ))}
      </div>
    </div>
  </article>
);

export default ShippingReturnsPage;