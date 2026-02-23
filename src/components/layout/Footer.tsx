import { ArrowUpRight, Github, Linkedin} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/ReeturajKumar", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/reeturaj-kumar", label: "LinkedIn" }
  ];

  return (
    <footer className="w-full bg-white py-12 px-6 md:px-12 lg:px-20 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
          
          {/* Left: Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black">Reeturaj Kumar</span>
              <span className="hidden sm:block w-1.5 h-1.5 bg-black/10 rounded-full"></span>
              <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Full-stack Architect</span>
            </div>
            <p className="text-[10px] font-medium text-black/20 tracking-tighter text-center md:text-left">
              &copy; {currentYear} All rights reserved. <br className="sm:hidden" /> Crafted with precision in India.
            </p>
          </div>

          {/* Right Area: Socials + Back to Top */}
          <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12">
            {/* Social Links */}
            <div className="flex items-center gap-8">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    to={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/30 hover:text-black transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon size={20} strokeWidth={1.5} />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Scroll to Top */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-3 pl-5 pr-2 py-2 rounded-full border border-black/5 hover:border-black/20 transition-all duration-500 cursor-pointer bg-black/[0.02]"
            >
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-black/40 group-hover:text-black transition-colors">Top</span>
              <div className="w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md">
                <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
