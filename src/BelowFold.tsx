import About from './components/sections/About';
import GlobalSection from './components/sections/GlobalSection';
import Portfolio from './components/sections/Portfolio';
import ProjectBanner from './components/sections/ProjectBanner';
import Journey from './components/sections/Journey';
import BuildingDaily from './components/sections/BuildingDaily';
import Skills from './components/sections/Skills';

export default function BelowFold() {
  return (
    <>
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
      <section id="contact">
        <Skills />
      </section>
    </>
  );
}
