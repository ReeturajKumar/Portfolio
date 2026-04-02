import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import BelowFoldFallback from './components/layout/BelowFoldFallback';

const BelowFold = lazy(() => import('./BelowFold'));

function App() {
  return (
    <div className="relative min-h-screen selection:bg-[#FF6B00] selection:text-white">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <Suspense fallback={<BelowFoldFallback />}>
          <BelowFold />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
