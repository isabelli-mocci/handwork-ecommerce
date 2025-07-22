import React from 'react';
import HeroSection from '../../components/sections/HeroSection';
import CategorySection from '../../components/sections/CategorySection';
import PopularToysSection from '../../components/sections/PopularToySection';
import ValuePropositionSection from '../../components/sections/ValuePropositionSection';


const HomePage: React.FC = () => {
  return (
    <div className="p-4 text-center">
      <main>
        <HeroSection />
        <CategorySection />
        <PopularToysSection />
        <ValuePropositionSection />
      </main>
    </div>
  );
};

export default HomePage;