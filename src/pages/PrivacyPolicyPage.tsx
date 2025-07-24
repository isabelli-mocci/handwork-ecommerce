import { useRef, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type PolicySection = {
  heading: string;
  content: string[];
  list?: string[];
  content2?: string[];
};

const PRIVACY_POLICY: { title: string; sections: PolicySection[] } = {
  title: 'Privacy Policy',
  sections: [
    {
      heading: 'Personal Information We Collect',
      content: [
        'This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from mocciandco.com (the "Site").',
        'When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information."',
        'We collect Device Information using the following technologies:',
      ],
      list: [
        '<strong>Cookies:</strong> Data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.',
        '<strong>Log files:</strong> Track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.',
        '<strong>Web beacons, tags, and pixels:</strong> Electronic files used to record information about how you browse the Site.',
      ],
      content2: [
        'Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as "Order Information."',
        'When we talk about "Personal Information" in this Privacy Policy, we are talking both about Device Information and Order Information.',
      ],
    },
    {
      heading: 'How We Use Your Personal Information',
      content: [
        'We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:',
      ],
      list: [
        'Communicate with you;',
        'Screen our orders for potential risk or fraud; and',
        'When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.',
      ],
      content2: [
        'We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).',
      ],
    },
    {
      heading: 'Sharing Your Personal Information',
      content: [
        'We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store—you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site—you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.',
        'Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.',
      ],
    },
    {
      heading: 'Your Rights',
      content: [
        'If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.',
      ],
    },
    {
      heading: 'Data Retention',
      content: [
        'When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.',
      ],
    },
    {
      heading: 'Changes',
      content: [
        'We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.',
      ],
    },
    {
      heading: 'Contact Us',
      content: [
        'For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at hello@mocciandco.com.',
      ],
    },
  ],
};

interface LazySectionProps {
  children: ReactNode;
  id: string;
}

const LazySection = ({ children, id }: LazySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    try {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (observer) observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
    } catch {
      setIsVisible(true);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      id={id}
    >
      {isVisible ? children : null}
    </div>
  );
};

const Section = ({ section }: { section: PolicySection }) => {
  const headingId = `heading-${section.heading
    .replace(/\s+/g, '-')
    .toLowerCase()}`;
  return (
    <section
      tabIndex={0}
      aria-labelledby={headingId}
      className='outline-none'
    >
      <h2
        className='text-sm md:text-lg lg:text-xl font-medium text-text mt-8 mb-6'
        id={headingId}
      >
        {section.heading}
      </h2>
      {section.content.map((text, i) => (
        <p
          key={i}
          className='mb-5 last:mb-0'
        >
          {text}
        </p>
      ))}
      {section.list && (
        <ul className='list-disc list-inside ml-4 space-y-3 mb-5'>
          {section.list.map((item, j) => (
            <li
              key={j}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ul>
      )}
      {section.content2 &&
        section.content2.map((text, k) => (
          <p
            key={k}
            className='mb-5 last:mb-0 indent-8'
          >
            {text}
          </p>
        ))}
    </section>
  );
};

const PrivacyPolicyPage = () => (
  <article
    className='py-8'
    aria-label='Privacy Policy'
  >
    <div className='container mx-auto px-4 max-w-4xl'>
      <h1 className='font-cardo text-2xl md:text-3xl lg:text-4xl font-black text-primary m-6 lg:m-10 uppercase text-center'>
        {PRIVACY_POLICY.title}
      </h1>
      <div className='space-y-10 text-text/80 text-xs md:text-sm lg:text-lg leading-relaxed'>
        {PRIVACY_POLICY.sections.map(section => (
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

export default PrivacyPolicyPage;
