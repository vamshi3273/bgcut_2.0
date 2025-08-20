'use client';

import { TestimonialsColumn } from './testimonials-column';

const testimonials = [
  {
    text: 'As a product photographer, background cleanup used to eat up my day. With BG Cut, it"s literally a one-click fix. I’ve gotten hours of my life back!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Sarah Jane',
    role: 'Product Photographer',
  },
  {
    text: 'Game-changer! Removing busy backgrounds made my products the star of the show. My store finally looks like a legit brand, and my customers noticed—my sales improved right away. 10/10 would recommend.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'Ajith Singh',
    role: 'Small Business Owner',
  },
  {
    text: 'I’ve used Photoshop for years, but BG Cut saves me so much time. It’s incredibly easy to remove objects now, which is a lifesaver when I’m on a deadline.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    name: 'Maya khan',
    role: 'Graphic Designer',
  },
  {
    text: 'I had 40 photos to edit and no time. I removed all the clutter in minutes, and the final images look incredibly clean. I’m honestly amazed.',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    name: 'Rahul Rathod',
    role: 'Freelance Photographer',
  },
  {
    text: 'I’m not a tech person at all, but this tool made me feel like one. My vacation photos look incredible now—so clean and bright',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: 'Emma Rose',
    role: 'Video editor',
  },
  {
    text: 'Before I post anything, I run it through BG Cut. It lets me instantly clean up any distractions, like watermarks or photobombers, so my feed looks polished and professional. Huge time-saver!',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    name: 'Anna Grace',
    role: 'Content Creator',
  },
  {
    text: 'I was able to remove some distracting people from the background of my wedding photos, and it’s perfect. You’d never know anything was edited. It saved those precious memories for us!',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    name: 'Krishna',
    role: 'Newlywed',
  },
  {
    text: 'Perfect minimalist visuals, made simple. Bg Cut removes any distraction with one click, making the subject the undeniable star. Essential for my branding toolkit.',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: 'Sahaja',
    role: 'Brand Strategist',
  },
  {
    text: 'I tried it right on my phone and couldn’t believe how clean the edits turned out. No app to download or anything—it just works. Seriously impressed!',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    name: 'Vamshi',
    role: 'SocialMedia Marketer',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="container !max-w-5xl">
        <div className="flex flex-col items-center gap-1 text-center md:gap-2">
          <div className="bg-primary/10 text-primary mb-2 rounded-full px-3 py-1 text-xs font-medium md:mb-0">
            Testimonials
          </div>
          <h1 className="text-2xl font-semibold md:text-3xl">What our users say</h1>
          <p className="text-muted-foreground text-base">
            See what our customers have to say about us.
          </p>
        </div>

        <div className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={50} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={70}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={50}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
