import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection  />
      <AboutSection />
      <ContactSection />
    </>
  );
}