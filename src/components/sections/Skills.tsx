import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { FADE_UP, STAGGER_CONTAINER } from "../../constants/motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex min-h-[450px] w-full flex-col items-center justify-center overflow-hidden bg-black px-6 py-16"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80"
          className="h-full w-full scale-110 object-cover opacity-50"
          alt="Abstract Background"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 z-0 opacity-40">
          <div
            className="absolute -bottom-24 left-0 h-[400px] w-[400%] blur-[100px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(220,38,38,0.15) 0%, transparent 70%)",
            }}
            aria-hidden
          />
          <div
            className="absolute -bottom-12 left-0 h-[300px] w-[400%] blur-[120px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
            }}
            aria-hidden
          />
          <div
            className="absolute top-1/2 left-1/2 h-[400px] w-full -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-transparent via-[#DC2626]/5 to-transparent blur-[140px]"
            aria-hidden
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <motion.div
        variants={STAGGER_CONTAINER(0.1, 0)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20"
      >
        <div className="space-y-10">
          <div className="space-y-3">
            <motion.h2
              variants={FADE_UP}
              className="font-display text-[28px] font-black uppercase leading-none tracking-tight text-white md:text-[42px] lg:text-[52px]"
            >
              From Idea To <br />
              Execution <span className="text-white/20">Let&apos;s Build</span>{" "}
              <br />
              Something Real!
            </motion.h2>
          </div>

          <div className="space-y-6">
            <motion.div variants={FADE_UP}>
              <a
                href="mailto:reeturajvats587@gmail.com"
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md transition-all duration-500 hover:bg-white hover:text-black"
              >
                <span className="text-xs font-black uppercase leading-none tracking-widest">
                  Get in touch
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-colors group-hover:bg-black/10">
                  <ArrowRight size={16} />
                </div>
              </a>
            </motion.div>

            <motion.div
              variants={STAGGER_CONTAINER(0.1, 0.3)}
              className="max-w-xl space-y-4"
            >
              <motion.p
                variants={FADE_UP}
                className="text-lg font-bold tracking-tight text-white md:text-xl"
              >
                Available for full-time roles and selective freelance projects.
              </motion.p>
              <motion.p
                variants={FADE_UP}
                className="border-l-2 border-white/10 pl-5 text-xs font-medium leading-relaxed text-white/50 italic md:text-sm"
              >
                I focus on shipping clean, scalable web solutions that support
                real users and growing products. My approach bridges absolute
                performance with aesthetic excellence.
              </motion.p>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={FADE_UP}
          className="flex flex-col items-center justify-center lg:items-end"
        >
          <motion.div
            variants={STAGGER_CONTAINER(0.1, 0.4)}
            className="group relative cursor-pointer"
          >
            <div className="relative flex h-32 w-32 items-center justify-center md:h-48 md:w-48">
              <motion.div
                variants={FADE_UP}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-[3px] border-[#DC2626]/40 transition-colors group-hover:border-[#DC2626]"
              />
              <motion.div
                variants={FADE_UP}
                initial={{ rotate: 360 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 p-3 md:p-4"
              >
                <svg viewBox="0 0 100 100" className="h-full w-full fill-white/40 transition-all duration-500 group-hover:fill-white/80">
                  <path
                    id="skillsCirclePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="transparent"
                  />
                  <text className="text-[10px] font-black uppercase tracking-[0.14em] md:text-[11px]">
                    <textPath href="#skillsCirclePath">
                      • open to work • open to work • open to work 
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              <motion.div
                variants={FADE_UP}
                className="relative z-10 flex h-12 w-12 items-center justify-center transition-transform duration-500 group-hover:scale-110 md:h-16 md:w-16"
              >
                <Star
                  size={28}
                  className="text-white fill-[#DC2626] drop-shadow-[0_0_15px_rgba(220,38,38,0.6)] transition-all duration-500 group-hover:fill-white"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 z-[-1] rounded-full bg-[#DC2626] blur-2xl"
                />
              </motion.div>
            </div>
            <motion.div
              variants={FADE_UP}
              className="absolute top-[105%] left-1/2 -translate-x-1/2 whitespace-nowrap md:left-auto md:right-0 md:translate-x-0"
            >
              <p className="text-[10px] font-black uppercase tracking-widest text-[#DC2626] transition-all duration-500 group-hover:tracking-[0.2em]">
                Ready for full-stack impact
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
