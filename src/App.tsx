import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';

const About = lazy(() => import('./components/sections/About'));
const GlobalSection = lazy(() => import('./components/sections/GlobalSection'));
const Portfolio = lazy(() => import('./components/sections/Portfolio'));
const Journey = lazy(() => import('./components/sections/Journey'));
const Skills = lazy(() => import('./components/sections/Skills'));
const ProjectBanner = lazy(() => import('./components/sections/ProjectBanner'));
const BuildingDaily = lazy(() => import('./components/sections/BuildingDaily'));

function App() {
  return (
    <div className="relative min-h-screen selection:bg-[#FF6B00] selection:text-white">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <Suspense fallback={null}>
          <section id="about">
            <About />
            <GlobalSection />
          </section>
          <Portfolio />
          <ProjectBanner />
          <section id="journey">
            <Journey />
            <BuildingDaily />
          </section>
          <section id="contact"><Skills /></section>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
