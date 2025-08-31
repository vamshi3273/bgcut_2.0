import React from 'react';
import Faqs from './_components/faqs';
import Testimonials from './_components/testimonials';
import HeroSection from './_components/hero-section';
import Features from './_components/features';
import planService from '@/server/plans/plan-service';
import RemoveBg from './_components/hero-section/remove-bg';

const features = [
  {
    title: 'Background Cut: One-Click Remove BG for Any Image',
    description:
      'Editing photos shouldn’t be hard. With our Image Background Remover, you don’t have to use difficult to use tools and spend hours working. Our AI-powered tool that detects, and remove bg automatically without any hassle, and provides clean cutouts that you can rely on in seconds. Whether you’re working on product photography, eCommerce, social media, or creative work. Bg Remover is fast, functional, and easier than ever. No design skills needed, no software downloads, simply upload your image and let the smart AI work its magic and give the transparent image as output. Save time, get perked results and focus on creating!',
    src: '/images/background-remover-image-1.webp',
    type: 'image',
  },
  {
    title: 'Automatic Background Removal for Flawless Cutouts',
    description:
      'With Bg Cut, you’ll never worry about messy edges or low-quality cuts anymore. Our latest AI seamlessly cut or erase background with pixel-perfect precision, leaving every hair strand, fur, each fine detail, and each shadow in place. It’s the quickest way to produce pro-level images',
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
        description="Get perfect Background Cut images in seconds with AI-power. No watermarks & software installation, BG Cut helps you to Erase bg objects from photo with high-quality precision at your fingertips!"
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
