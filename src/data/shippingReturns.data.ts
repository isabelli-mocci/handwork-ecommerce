export type PolicySection = {
  heading: string;
  content: string[];
  list?: string[];
  content2?: string[];
};

export const SHIPPING_RETURNS_POLICY: { title: string; sections: PolicySection[] } = {
  title: 'Shipping & Returns',
  sections: [
    {
      heading: 'Shipping Information',
      content: [
        'At Mocci & Co., we aim to process and ship all orders as quickly as possible. Please review the following information regarding our shipping policies.',
      ],
    },
    {
      heading: 'Processing Time',
      content: [
        'Orders are typically processed within 1-3 business days (Monday-Friday, excluding holidays) after your order is placed. During peak seasons or sales events, processing times may be slightly longer.',
      ],
    },
    {
      heading: 'Shipping Methods and Delivery Estimates',
      content: [
        'We offer several shipping options to meet your needs. Delivery times are estimates and may vary based on your location and chosen shipping method.',
      ],
      list: [
        '<strong>Standard Shipping (5-10 business days):</strong> Our most economical option, delivered by national postal services.',
        '<strong>Expedited Shipping (3-5 business days):</strong> A faster option for those who need their items sooner, typically delivered by private couriers.',
        '<strong>Express Shipping (1-2 business days):</strong> The quickest delivery option, available for select regions.',
      ],
      content2: [
        'Please note that these are estimated delivery times after the order has been processed and shipped. We are not responsible for delays caused by customs, severe weather, or other unforeseen circumstances.',
      ],
    },
    {
      heading: 'Shipping Costs',
      content: [
        'Shipping costs are calculated based on the weight of your order and your delivery address. You can view the exact shipping cost during the checkout process before finalizing your purchase.',
        'We occasionally offer free shipping promotions. Stay tuned to our website and social media for announcements!',
      ],
    },
    {
      heading: 'Order Tracking',
      content: [
        'Once your order has shipped, you will receive an email confirmation with a tracking number. You can use this number to track the progress of your delivery on the respective courier’s website.',
      ],
    },
    {
      heading: 'International Shipping',
      content: [
        'We currently ship to a limited number of international destinations. International shipping times and costs vary significantly based on the destination country. Please be aware that international orders may be subject to customs duties, taxes, and fees levied by the destination country. These charges are the responsibility of the recipient.',
      ],
    },
    {
      heading: 'Returns & Exchanges',
      content: [
        'Your satisfaction is our priority at Mocci & Co. If you are not completely happy with your purchase, please review our return policy below.',
      ],
    },
    {
      heading: 'Return Policy',
      content: [
        'Items can be returned for a full refund or exchange within **30 days** of the delivery date. To be eligible for a return, your item must be:',
      ],
      list: [
        'Unused and in the same condition that you received it.',
        'In its original packaging with all tags attached.',
        'Accompanied by proof of purchase (order number or receipt).',
      ],
    },
    {
      heading: 'Non-Returnable Items',
      content: [
        'Certain types of items cannot be returned, including:',
      ],
      list: [
        'Gift cards.',
        'Personalized or custom-made items.',
        'Items marked as final sale.',
      ],
    },
    {
      heading: 'How to Initiate a Return',
      content: [
        'To initiate a return, please follow these steps:',
      ],
      list: [
        'Contact our customer service team at hello@mocciandco.com with your order number and the reason for your return. ',
        'Our team will provide you with a Return Merchandise Authorization (RMA) number and detailed instructions on how to send back your item.',
        'Package your item securely and include the RMA number clearly on the outside of the package.',
        'Ship the item to the address provided by our customer service team. You will be responsible for paying for your own shipping costs for returning your item.',
      ],
    },
    {
      heading: 'Refunds',
      content: [
        'Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.',
        'If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment, within 5-10 business days. Please note that it may take some time for your bank or credit card company to process and post the refund.',
      ],
    },
    {
      heading: 'Exchanges',
      content: [
        'We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at hello@mocciandco.com and we will guide you through the process.',
      ],
    },
    {
      heading: 'Damaged or Defective Items',
      content: [
        'If you receive a damaged or defective item, please contact us immediately (within 48 hours of delivery) at hello@mocciandco.com with photos of the damaged product and packaging. We will work with you to arrange a replacement or refund.',
      ],
    },
    {
      heading: 'Questions?',
      content: [
        'If you have any questions regarding our Shipping & Returns policy, please do not hesitate to contact us at hello@mocciandco.com.',
      ],
    },
  ],
};