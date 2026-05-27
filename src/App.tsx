import { useEffect } from 'react';
import { AppProvider } from '@/context/AppContext';
import Navigation from '@/components/Navigation';
import FullscreenMenu from '@/components/FullscreenMenu';
import SidebarContact from '@/components/SidebarContact';
import Footer from '@/components/Footer';
import StoreSection from '@/sections/StoreSection';
import ServicesSection from '@/sections/ServicesSection';
import GallerySection from '@/sections/GallerySection';
import SubsidySection from '@/sections/SubsidySection';
import ContactSection from '@/sections/ContactSection';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AppContent() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Navigation />
      <FullscreenMenu />
      <SidebarContact />

      <main>
        <StoreSection />
        <ServicesSection />
        <GallerySection />
        <SubsidySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
