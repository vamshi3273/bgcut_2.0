import React from 'react';
import Faqs from '../_components/faqs';
import Testimonials from '../_components/testimonials';
import HeroSection from '../_components/hero-section';
import Features from '../_components/features';
import planService from '@/server/plans/plan-service';
import EraseObjects from '../_components/hero-section/erase-objects';

const features = [
  {
    title: 'Instantly Remove Unwanted Objects with One Click.',
    description:
      'Erase distractions in a click. BgCut’s AI automatically finds and removes people, text, or clutter—no complex editing needed. Just click, and get a perfect image in seconds.',
    src: '/images/background-remover-image-1.webp',
    type: 'video',
  },
  {
    title: 'Transform Your Shots into Minimalist Masterpieces with Easy Object Removal',
    description:
      'Turn cluttered photos into clean, stunning visuals with Bg Cut. Remove distractions, highlight your subject, and enhance your images with AI-powered precision. Perfect for creating sleek, professional content that stands out.',
    src: '/images/background-remover-image-2.jpeg',
    type: 'video',
  },
  {
    title: 'Object Removal Tool for Crisp, Studio-Ready Product Shots',
    description:
      'Give your product photos an instant professional upgrade. With BG Cut, you can easily remove props, shadows, or reflections to create clean, distraction-free backgrounds. Achieve that perfect studio look in seconds—ideal for marketplaces, catalogs, and ads.',
    src: '/images/background-remover-image-3.jpeg',
    type: 'video',
  },
];

const Page = async () => {
  const plans = await planService.getPublicPlans();

  return (
    <>
      <HeroSection
        title="Remove Objects from your images"
        description="Easily remove unwanted objects, people, or text from your photos with the power of AI—no design skills or complex tools required."
      >
        <EraseObjects plans={plans} />
      </HeroSection>
      <Features features={features} />
      <Testimonials />
      <Faqs />
    </>
  );
};

export default Page;
