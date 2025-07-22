import React from 'react';
import { PiPlantThin, PiButterflyThin, PiHandHeartThin, PiRainbowCloudThin } from 'react-icons/pi';

const valuePropositions = [
  {
    id: 1,
    title: 'Eco-Friendly',
    description:
      "You'll only find planet-friendly fabrics here: organic cotton and recycled materials.",
    icon: <PiPlantThin className="w-12 h-12 text-green-700 mb-4" />,
  },
  {
    id: 2,
    title: 'Non-toxic',
    description: 'We only use non-toxic and chemical-free inks and dyes.',
    icon: <PiButterflyThin className="w-12 h-12 text-sky-800 mb-4" />,
  },
  {
    id: 3,
    title: 'Ethically-made',
    description:
      'We care about our makers with fair practices and a 10-year relationship together.',
    icon: <PiHandHeartThin className="w-12 h-12 text-red-800 mb-4" />,
  },
  {
    id: 4,
    title: 'Slow',
    description:
      'Our business model ensures that all our toys work together as one range.',
    icon: <PiRainbowCloudThin className="w-12 h-12 text-yellow-700 mb-4" />,
  },
];

const ValuePropositionSection: React.FC = () => {
  return (
    <section className="py-10 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {valuePropositions.map(prop => (
            <div
              key={prop.id}
              className="p-1 md:p-6 lg:p-8 flex flex-col items-center text-center"
            >
              {prop.icon}
              <h3 className="text-sm md:text-xl font-medium mb-2">
                {prop.title}
              </h3>
              <p className="text-xs md:text-base leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
