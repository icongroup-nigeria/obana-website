'use client';
import Brands from '@/components/Brands';
import Cta from '@/components/Cta';
import FAQComponent from '@/components/Faq';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import HowToUse from '@/components/HowToUse';
import NavBar from '@/components/NavBar';
import Services from '@/components/Services';
import TeamSlider from '@/components/TeamMemeber';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <NavBar />
      {/* Hero Section */}
      <HeroBanner />
      {/* Brands Section */}
      <Brands />
      {/* Services Section */}
      <Services />
      {/* How to Use Section */}
      <HowToUse />
      {/* Testimonial Section */}
      <Testimonials />

      <TeamSlider />
      {/* FAQ Section */}
      <FAQComponent />
      {/* CTA Section */}
      <Cta />
      {/* Footer */}
      <Footer />
    </>
  );
}
