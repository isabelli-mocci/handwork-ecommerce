export type FaqItem = {
  question: string;
  answer: string[];
};

export const FAQ_CONTENT: { title: string; items: FaqItem[] } = {
  title: 'Frequently Asked Questions',
  items: [
    {
      question: 'What materials are your plush toys made from?',
      answer: [
        'Our plush toys are crafted from premium, child-safe, and eco-friendly materials. This includes organic cotton, recycled polyester fibers for stuffing, and non-toxic dyes. We prioritize sustainability and safety in all our products.',
      ],
    },
    {
      question: 'Are your products safe for newborns?',
      answer: [
        'Yes, all Mocci & Co. products are designed and rigorously tested to meet the highest safety standards for children of all ages, including newborns. They are free from small parts that could pose a choking hazard and are made with hypoallergenic materials.',
      ],
    },
    {
      question: 'How do I clean my Mocci & Co. plush toy?',
      answer: [
        'We recommend spot cleaning your plush toy with a damp cloth and mild soap. For deeper cleaning, gentle hand washing with cold water is advised. Air dry thoroughly. Please avoid machine washing or drying, as this may damage the delicate materials and shape of the toy.',
      ],
    },
    {
      question: 'Do you offer international shipping?',
      answer: [
        'Yes, we do! We ship to a variety of international destinations. Shipping costs and delivery times will vary depending on the destination country and will be calculated at checkout. Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the recipient.',
      ],
    },
    {
      question: 'What is your return policy?',
      answer: [
        'We offer a 30-day return policy from the date of delivery. Items must be unused, in their original packaging, and with all tags attached. For detailed instructions on how to initiate a return, please visit our dedicated Shipping & Returns page.',
      ],
    },
    {
      question: 'Can I track my order?',
      answer: [
        'Absolutely! Once your order has been shipped, you will receive an email confirmation containing a tracking number. You can use this number on the courier\'s website to monitor the progress of your delivery.',
      ],
    },
    {
      question: 'Do you offer gift wrapping?',
      answer: [
        'Yes, we offer beautiful gift wrapping services for a small additional fee. You can select this option during the checkout process. Our gift wrapping includes a lovely ribbon and a personalized gift tag.',
      ],
    },
    {
      question: 'How can I contact customer support?',
      answer: [
        'You can reach our friendly customer support team via email at hello@mocciandco.com. We aim to respond to all inquiries within 24-48 business hours.',
      ],
    },
  ],
};