import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import GlobalSection from './components/sections/GlobalSection';
import Portfolio from './components/sections/Portfolio';
import Journey from './components/sections/Journey';
import Skills from './components/sections/Skills';
import ProjectBanner from './components/sections/ProjectBanner';
import BuildingDaily from './components/sections/BuildingDaily';

function App() {
  return (
    <div className="relative min-h-screen selection:bg-[#FF6B00] selection:text-white">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about">
          <About />
          <GlobalSection />
        </section>
        <section id="portfolio">
          <Portfolio />
          <ProjectBanner />
        </section>
        <section id="journey">
          <Journey />
          <BuildingDaily />
        </section>
        <section id="contact"><Skills /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
