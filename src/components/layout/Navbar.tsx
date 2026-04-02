import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: '2-digit'
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'auto'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'portfolio' },
    { label: 'Journey', id: 'journey' },
    { label: 'Archive', id: 'building-daily' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <nav className={`w-full transition-all duration-500 px-4 md:px-12 lg:px-20 py-3.5 flex items-center sticky top-0 z-100 h-16 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl' 
          : 'bg-transparent backdrop-blur-md'
      }`}>
        <div className="flex-1 flex items-center justify-start">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center gap-1.5 cursor-pointer hover:opacity-70"
          >
            <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="14" r="8" fill="black"/>
              <path d="M18 6C18 6 25 6 25 14C25 22 18 22 18 22V6Z" fill="black"/>
              <path d="M26 6C26 6 33 6 33 14C33 22 26 22 26 22V6Z" fill="black"/>
            </svg>
          </a>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-black cursor-pointer relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-black group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex-1 flex items-center justify-end gap-3 sm:gap-6">
          <a 
            href="/Reeturaj Kumar.pdf" 
            download="Reeturaj_Kumar_Resume.pdf"
            className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white hover:bg-black/80 shadow-sm"
          >
            <span className="text-[9px] font-black uppercase tracking-wider">Resume</span>
          </a>

          <div className="hidden md:flex items-center gap-2 text-[10px] sm:text-[11px] font-black tracking-tight text-black uppercase whitespace-nowrap">
            <span>Reeturaj Kumar, </span>
            <span className="text-black/30">{currentDate}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-black/10 bg-black shadow-sm ring-1 ring-black/5 md:h-9 md:w-9">
              <img
                src="/Navbar.png"
                alt="Reeturaj Kumar"
                className="h-full w-full object-cover object-[center_18%] scale-[1.08]"
                width={36}
                height={36}
                loading="eager"
                decoding="async"
              />
            </div>

            <button 
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-black/5 z-110"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-black" />
              ) : (
                <Menu className="w-5 h-5 text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-2xl z-90 lg:hidden flex flex-col pt-24 px-8">
          <div className="space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className="block text-4xl font-black uppercase tracking-tighter text-black/20 hover:text-black text-left italic"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto pb-12 space-y-6">
            <div className="h-px w-full bg-black/10" />
            <div className="flex flex-col gap-4">
              <a 
                href="/Reeturaj Kumar.pdf" 
                download="Reeturaj_Kumar_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-[0.2em]"
              >
                Download Resume
              </a>
              <div className="text-center space-y-1">
                <p className="text-[10px] font-black uppercase text-black">Reeturaj Kumar</p>
                <p className="text-[10px] font-bold uppercase text-black/30 tracking-widest">{currentDate}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
