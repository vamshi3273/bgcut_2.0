import React from 'react';
import Faqs from './_components/faqs';
import Testimonials from './_components/testimonials';
import HeroSection from './_components/hero-section';
import Features from './_components/features';
import planService from '@/server/plans/plan-service';
import RemoveBg from './_components/hero-section/remove-bg';

const features = [
  {
    title: 'Instantly Remove Backgrounds',
    description:
      'No more manual cutting or complex software. Our AI instantly detects and removes backgrounds—delivering clean, professional cutouts in seconds. Ideal for product photos, social media, and creative projects!',
    src: '/images/background-remover-image-1.webp',
    type: 'image',
  },
  {
    title: 'Perfect High Quality Cutouts, Automatically',
    description:
      'Get sharp, clean edges—every time. Hair, fur, or complex details, our AI handles it all. Professional quality, zero work.',
    src: '/images/background-remover-image-2.jpeg',
    type: 'image',
  },
];

const Page = async () => {
  const plans = await planService.getPublicPlans();

  return (
    <>
      <HeroSection
        title="Bg Cut - AI Background Remover"
        description="Get perfect Background cut-out images in seconds with AI-power. No watermarks & software installation, BG Cut can Erase Objects with high-quality precision at your fingertips!"
      >
        <RemoveBg plans={plans} />
      </HeroSection>
      <Features features={features} />
      <Testimonials />
      <Faqs />
    </>
  );
};

export default Page;
