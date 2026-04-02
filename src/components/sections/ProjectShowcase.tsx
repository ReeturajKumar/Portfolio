import { ArrowRight, Settings } from 'lucide-react';

type PhoneMockupProps = {
  title: string;
  desc: string;
  tag: string;
  rotate?: number;
  zIndex?: number;
  offset?: number;
  active?: boolean | null;
};

const PhoneMockup = ({ title, desc, tag, rotate = 0, zIndex = 10, offset = 0, active = false }: PhoneMockupProps) => (
  <div 
    style={{ zIndex, transform: `rotate(${rotate}deg) translateY(${offset}px)` }}
    className="absolute bottom-[-10%] w-[280px] md:w-[320px] aspect-9/19 bg-[#050505] border-10 border-[#1a1a1a] rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
  >
    <div className="h-10 w-full flex justify-between items-end px-10 pb-1">
       <span className="text-[10px] font-black text-white/50">8:{active ? '26' : active === null ? '27' : '39'}</span>
       <div className="flex gap-1.5 items-center">
          <div className="w-4 h-2 border border-white/20 rounded-sm"></div>
       </div>
    </div>

    <div className="flex-1 p-6 flex flex-col">
       <div className="flex justify-between items-center mb-10">
          <span className="text-[18px] font-black text-white tracking-tighter">{title}</span>
          <div className="flex gap-2">
             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Settings size={12} className="text-white/40" />
             </div>
             <div className="relative w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <div className="w-4 h-px bg-white/40 mb-1" />
                <div className="absolute w-4 h-px bg-white/40 mt-1" />
             </div>
          </div>
       </div>

       <div className="flex-1 flex flex-col items-center text-center">
          <h3 className="text-[32px] font-black text-white tracking-tighter mb-4">{title}</h3>
          <p className="text-[11px] font-medium text-white/30 leading-relaxed mb-10 px-4">
             {desc}
          </p>

          <button type="button" className={`w-full py-4 rounded-3xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 ${active ? 'bg-linear-to-r from-orange-600 to-orange-400 text-white shadow-[0_10px_30px_rgba(234,88,12,0.3)]' : 'bg-transparent border border-white/10 text-white/40'}`}>
             {tag} <ArrowRight size={14} className="stroke-3" />
          </button>
          
          {!active && (
             <button type="button" className="w-full mt-4 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest border border-white/10 text-white/20">
                Try {title} AI
             </button>
          )}

          <div className="grid grid-cols-3 w-full mt-auto pt-8 border-t border-white/5 gap-2">
             <div className="flex flex-col">
                <span className="text-[14px] font-black text-white">145+</span>
                <span className="text-[7px] font-black text-white/20 uppercase">Tools</span>
             </div>
             <div className="flex flex-col">
                <span className="text-[14px] font-black text-white uppercase italic">Free</span>
                <span className="text-[7px] font-black text-white/20 uppercase tracking-tighter">To Use</span>
             </div>
             <div className="flex flex-col">
                <span className="text-[14px] font-black text-white uppercase">24/7</span>
                <span className="text-[7px] font-black text-white/20 uppercase tracking-tighter">Access</span>
             </div>
          </div>
       </div>
    </div>
  </div>
);

const ProjectShowcase = () => {
  return (
    <section className="w-full bg-[#030303] pt-40 pb-60 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col items-center">
      
      <div className="z-30 text-center md:text-right md:w-full md:max-w-7xl mb-40">
        <h1 className="text-[48px] md:text-[72px] font-black text-white tracking-[-0.07em] flex items-center justify-center md:justify-end gap-4 leading-none">
          Founder <span className="text-white/20">of</span> 
          <span className="font-['Cormorant_Garamond'] italic font-normal text-transparent bg-clip-text bg-linear-to-r from-[#eb3678] to-[#f97316] ml-2 tracking-tight">Rune</span>
        </h1>
        <p className="font-['Cormorant_Garamond'] italic text-[18px] md:text-[24px] text-white/30 tracking-tight mt-4">
          &lt; Crafting Digital Experiences /&gt;
        </p>
      </div>

      <div className="w-full max-w-6xl h-[600px] relative flex justify-center perspective-[2000px]">
         <PhoneMockup 
            title="RuneHub"
            desc="Free programming tutorials with step-by-step coding examples, interactive exercises, and real-world projects."
            tag="Start Learning"
            rotate={-12}
            zIndex={20}
            offset={40}
            active={false}
         />

         <PhoneMockup 
            title="Rune"
            desc="145+ Free Online Tools for PDF Editing, Image Conversion, Text Processing, and Developer Utilities. No Signup Required."
            tag="Access Tools Free"
            rotate={0}
            zIndex={40}
            offset={0}
            active={true}
         />

         <PhoneMockup 
            title="RuneLearn"
            desc="Personalized tutoring, adaptive quizzes, instant doubt solving — everything you need to master any subject."
            tag="Start Learning"
            rotate={12}
            zIndex={20}
            offset={40}
            active={null}
         />
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-linear-to-t from-orange-500/5 to-transparent blur-[120px] pointer-events-none" />
    </section>
  );
};

export default ProjectShowcase;
