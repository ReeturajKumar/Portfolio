import { Linkedin, Github, ArrowUpRight, Phone} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const Connect = () => {
  const socialLinks = [
    {
      label: "Phone",
      value: "+91 6299045761",
      link: "tel:+916299045761",
      icon: Phone,
    },
    {
      label: "GitHub",
      value: "github.com/ReeturajKumar",
      link: "https://github.com/ReeturajKumar",
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/reeturaj-kumar",
      link: "https://linkedin.com/in/reeturaj-kumar",
      icon: Linkedin,
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="contact" className="w-full bg-[#fffff] py-20 md:py-32 px-6 md:px-12 relative overflow-hidden flex flex-col items-center">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-7xl w-full mx-auto relative z-10"
      >
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Brand & Informative Call to Action */}
          <div className="flex-1 space-y-10 group">
             <div className="space-y-6">
                <motion.div 
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/60">Strategy & Partnership</span>
                  <div className="h-[1px] w-12 bg-black/10" />
                </motion.div>

                <motion.h2 
                  variants={itemVariants}
                  className="text-4xl md:text-7xl font-black text-black tracking-tighter leading-[0.85] italic"
                >
                  Let's build <br /> 
                  <span className="text-black/5 not-italic">something</span> great.
                </motion.h2>

                <motion.div 
                  variants={itemVariants}
                  className="space-y-4"
                >
                  <p className="text-[15px] font-bold text-black/40 leading-relaxed max-w-md">
                    I'm currently looking for full-stack opportunities where I can contribute to complex digital architectures and high-performance ecosystems.
                  </p>
                </motion.div>
             </div>

             <motion.div
               variants={itemVariants}
             >
                <Link
                  to="mailto:reeturajvats587@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-8 py-4 bg-black text-white rounded-full text-xs font-black uppercase tracking-widest hover:pr-12 group relative overflow-hidden shadow-2xl shadow-black/20 transition-all active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get in touch
                  </span>
                </Link>
             </motion.div>
          </div>

          {/* Technical Directory (Socials) */}
          <div className="w-full lg:w-1/3 space-y-px bg-black/[0.03] border border-black/[0.05]">
            {socialLinks.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
              >
                <Link 
                  to={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-white hover:bg-[#fafaf9] transition-all group border-b border-black/[0.03] last:border-0"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black text-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Active</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4 text-black group-hover:opacity-60 transition-opacity" />
                      <span className="text-sm font-black text-black tracking-tight uppercase group-hover:translate-x-1 transition-transform">{item.label}</span>
                    </div>
                    <span className="text-[10px] font-bold text-black/40 lowercase tracking-tight group-hover:text-black/60 transition-colors">{item.value}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:border-black/20 group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 group-hover:text-white transition-all duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Connect;
