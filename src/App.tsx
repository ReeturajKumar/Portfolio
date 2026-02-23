import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Journey from './components/sections/Journey';
import Skills from './components/sections/Skills';
import Connect from './components/sections/Connect';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="journey"><Journey /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Connect /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
