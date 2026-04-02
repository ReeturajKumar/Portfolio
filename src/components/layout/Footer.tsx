import { ArrowUpRight, Github, Linkedin} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/ReeturajKumar", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/reeturaj-kumar-372963238/", label: "LinkedIn" }
  ];

  return (
    <footer className="w-full bg-white py-8 md:py-10 px-4 md:px-12 lg:px-20 border-t border-black/3">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          
          <div className="flex flex-col items-center md:items-start gap-2.5">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-black whitespace-nowrap">Reeturaj Kumar</span>
              <span className="w-1.5 h-1.5 bg-black/6 rounded-full"></span>
              <span className="text-[8px] md:text-[10px] font-bold text-black/30 uppercase tracking-widest whitespace-nowrap">Full-stack Architect</span>
            </div>
            <p className="text-[8px] md:text-[9px] font-medium text-black/20 tracking-tighter text-center md:text-left whitespace-nowrap">
              &copy; {currentYear} All rights reserved. Crafted with precision in India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
            <div className="flex items-center gap-6 md:gap-8">
              {socialLinks.map((social) => (
                <div key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/20 hover:text-black"
                    title={social.label}
                  >
                    <social.icon size={20} strokeWidth={1.5} />
                  </a>
                </div>
              ))}
            </div>

            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'auto' });
              }}
              className="group flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full border border-black/3 hover:border-black/10 cursor-pointer bg-black/1 hover:bg-black/3"
            >
              <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-black/30 group-hover:text-black">Top</span>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white shadow-sm">
                <ArrowUpRight size={14} />
              </div>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
