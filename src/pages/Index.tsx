
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import FeaturedCampsites from '@/components/home/FeaturedCampsites';
import CTA from '@/components/home/CTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <FeaturedCampsites />
      <CTA />
    </Layout>
  );
};

export default Index;
