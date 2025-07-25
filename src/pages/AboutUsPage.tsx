import { ABOUT_CONTENT } from '../data/aboutUsPage.data';
const TITLE_CLASS = 'font-cardo text-2xl md:text-3xl lg:text-4xl font-black text-primary m-6 lg:m-10 uppercase text-center';

interface SectionProps {
  image: string;
  imageAlt: string;
  content: string[];
  reverse?: boolean;
  intro?: boolean;
}


const ResponsiveSection: React.FC<SectionProps> = ({ image, imageAlt, content }) => (
  <section className="w-full mb-10 flex flex-col md:flex-row items-center md:items-stretch">
    <div className="flex-1 flex justify-center items-stretch mb-6 md:mb-0">
      <div className="w-full aspect-video max-h-[480px] min-h-[220px]">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover rounded-none"
        />
      </div>
    </div>
    <div className="w-full md:max-w-lg flex flex-col justify-center px-4 py-8 text-justify indent-3 shadow-sm">
      {content.map((text, i) => (
        <p key={i} className="mb-6 text-base md:text-lg break-words whitespace-pre-line">{text}</p>
      ))}
    </div>
  </section>
);

const AboutUsPage: React.FC = () => (
  <article className="py-8" aria-label="Sobre nós">
    <div className="container mx-auto px-4 max-w-4xl">
      <h1 className={TITLE_CLASS}>{ABOUT_CONTENT.title}</h1>
      <ResponsiveSection
        image={ABOUT_CONTENT.sections[0].image ?? ''}
        imageAlt={ABOUT_CONTENT.sections[0].imageAlt ?? ''}
        content={ABOUT_CONTENT.intro}
      />
    </div>
  </article>
);

export default AboutUsPage;
