import React from 'react';
import HeroSection from '../components/sections/home/HeroSection';
import CategorySection from '../components/sections/common/CategorySection';
import PopularToysSection from '../components/sections/home/PopularToySection';
import ValuePropositionSection from '../components/sections/home/ValuePropositionSection';
import NewsletterSection from '../components/sections/common/NewsletterSection';


const HomePage: React.FC = () => {
  return (
    <div className="p-4 text-center">
      <main>
        <HeroSection />
        <CategorySection />
        <PopularToysSection />
        <ValuePropositionSection />
        <NewsletterSection />
      </main>
    </div>
  );
};

export default HomePage;