'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Which image formats are supported for background removal?',
    answer:
      'We support all major image formats including JPG, JPEG, PNG, and WebP. Once processed, your image will be available for download in PNG format—perfect for maintaining transparency.',
  },
  {
    question: 'How can I remove the background from an image?',
    answer:
      'Simply upload your image and let our AI do the work! Processing usually takes just 2 to 6 seconds. Once complete, preview your result and download the background-free image—no manual editing needed.',
  },
  {
    question: 'How does the image upscaler improve photo quality?',
    answer:
      'Our AI-powered image upscaler enhances photo resolution by intelligently adding details, reducing blur, and sharpening edges. It uses deep learning to upscale images up to 2x or 4x while maintaining clarity—perfect for eCommerce, printing, and high-quality web use.',
  },
  {
    question: 'Is my uploaded image data safe and private?',
    answer:
      'Yes, your privacy is our priority. All uploaded images are automatically deleted from our servers within 24 hours. We do not store, share, or use your files for any AI training or third-party purposes.',
  },
  {
    question: 'Do you offer free credits?',
    answer:
      'Yes! We give you 5 free HD downloads each month to get started. Need more? You can easily purchase credits or upgrade to a subscription plan for unlimited access.',
  },
  {
    question: 'Can I use the app on my phone or tablet?',
    answer: 'Absolutely! Our web app is fully mobile-optimized. You can even add it to your home screen for quick, app-like access on your smartphone or tablet.',
  },
  {
    question: 'How does the subscription and billing work?',
    answer:
      'We offer flexible billing—choose monthly or annual plans. You can cancel anytime from your dashboard. If you cancel an annual plan within 30 days, we will provide a refund.',
  },
];

const Faqs = () => {
  return (
    <div className="py-14 md:py-20">
      <div className="container !max-w-4xl">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
            FAQs
          </div>
          <h1 className="text-2xl font-semibold md:text-3xl">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">
            Find answers to common questions about our ERP system.
          </p>
        </div>
        <Accordion className="mt-10" type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem
              className="bg-muted mb-2 rounded-lg border-0 px-4"
              key={index}
              value={faq.question}
            >
              <AccordionTrigger className="hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
