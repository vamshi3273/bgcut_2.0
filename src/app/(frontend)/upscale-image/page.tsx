import React from 'react';
import Faqs from '../_components/faqs';
import Testimonials from '../_components/testimonials';
import HeroSection from '../_components/hero-section';
import Features from '../_components/features';
import planService from '@/server/plans/plan-service';
import UpscaleImage from '../_components/hero-section/upscale-image';

const features = [
  {
    title: 'Enhance and Enlarge Photos Instantly',
    description:
      'Turn small, blurry images into sharp, high-quality photos in just seconds. Our AI technology enhances details while enlarging images, making them perfect look',
    src: '/images/upscale-image.webp',
    type: 'image',
  },
  {
    title: 'Transform Low-Res Images into High-Quality Instantly',
    description:
      'Give your images a professional makeover with our AI-powered upscaler. Instantly convert low-resolution photos into sharp, high-quality visuals without losing detail—perfect for e-commerce, social media, and personal use.',
    src: '/videos/upscale-video.mp4',
    type: 'video',
  },
];

const Page = async () => {
  const plans = await planService.getPublicPlans();

  return (
    <>
      <HeroSection
        title="Bg Cut - AI Image Upscaler"
        description="Upscale images in seconds with our powerful AI enhancer — no design skills required. Get crystal-clear, high-resolution studio quality results instantly,"
      >
        <UpscaleImage plans={plans} />
      </HeroSection>
      <Features features={features} />
      <Testimonials />
      <Faqs />
    </>
  );
};

export default Page;
