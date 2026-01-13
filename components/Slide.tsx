
import React from 'react';
import { SlideData } from '../types';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Instagram,
  Trophy,
  Shield,
  Activity,
  Target,
  ChevronRight
} from 'lucide-react';

interface SlideProps {
  data: SlideData;
  isThumbnail?: boolean;
}

const LOGO_URL = "https://drive.google.com/thumbnail?id=1j1Q69GniOuufFdeKGDtlTuvr7lmL7jPA&sz=w1000";

const Slide: React.FC<SlideProps> = ({ data, isThumbnail }) => {
  const isOrange = data.bgType === 'orange';

  const renderContent = () => {
    switch (data.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-10 relative overflow-hidden">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
            
            <div className="relative animate-fade-slide-in flex flex-col items-center">
               <div className="absolute -inset-24 bg-orange-500/10 blur-[120px] rounded-full"></div>
               <div className="w-44 h-44 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center p-8 relative z-10 shadow-[0_0_80px_rgba(255,140,0,0.15)] border-[12px] border-black mb-8">
                  <img 
                    src={LOGO_URL} 
                    alt="Force Per4mance Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
               </div>
               <div className="text-center z-10">
                  <h2 className="text-7xl md:text-[11rem] font-[900] tracking-tighter leading-[0.8] italic uppercase text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                    {data.title}
                  </h2>
                  <p className="text-xl md:text-3xl font-black text-orange-500 tracking-[0.4em] mt-4 uppercase italic">
                    {data.subtitle}
                  </p>
               </div>
            </div>

            <div className="text-center pt-12 animate-fade-slide-in stagger-2 relative z-10">
              <div className="flex items-center justify-center gap-6 mb-4">
                <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-orange-500/40"></div>
                <p className="text-2xl md:text-5xl font-extrabold text-white/95 uppercase tracking-tighter italic">{data.content}</p>
                <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-orange-500/40"></div>
              </div>
              <p className="text-xs md:text-sm text-white/40 tracking-[0.6em] font-bold uppercase">{data.footer}</p>
            </div>
          </div>
        );

      case 'divider':
        return (
          <div className="flex flex-col items-center justify-center h-full p-20 relative overflow-hidden">
             {/* Dynamic background stripe pattern */}
             <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <svg width="100%" height="100%">
                   <pattern id="diagonal-divider" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="rotate(45)">
                      <rect width="30" height="60" fill="black" />
                   </pattern>
                   <rect width="100%" height="100%" fill="url(#diagonal-divider)" />
                </svg>
             </div>
             
             <div className="relative z-10 flex flex-col items-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-black/5 blur-3xl rounded-full"></div>
                <h2 className="text-7xl md:text-[13rem] font-[900] text-black text-center uppercase tracking-tighter leading-none italic animate-fade-slide-in relative drop-shadow-lg">
                  {data.title}
                </h2>
                <div className="w-48 h-4 bg-black mt-16 animate-fade-slide-in stagger-1 rounded-full shadow-lg"></div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="h-full flex flex-col p-12 md:p-24 relative justify-center">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 shadow-[0_4px_20px_rgba(255,140,0,0.3)]"></div>
            
            <div className="flex justify-between items-end mb-16 animate-fade-slide-in">
              <div>
                <h3 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
                  {data.title}
                </h3>
                <div className="h-2 w-24 bg-orange-500 mt-4 rounded-full"></div>
                {data.subtitle && (
                  <p className="text-xl md:text-2xl text-orange-500 font-bold tracking-[0.2em] uppercase mt-4 italic">
                    {data.subtitle}
                  </p>
                )}
              </div>
              <div className="w-20 h-20 bg-white rounded-full p-3 hidden md:flex items-center justify-center shadow-2xl border-4 border-black">
                 <img src={LOGO_URL} alt="Force Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
            </div>

            <div className="max-w-5xl space-y-12">
              {data.content && (
                <p className="text-3xl md:text-5xl leading-tight font-bold text-white/95 animate-fade-slide-in stagger-1">
                  {data.content}
                </p>
              )}
              {data.points && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mt-4">
                  {data.points.map((point, i) => (
                    <div key={i} className={`flex items-start gap-6 group animate-fade-slide-in stagger-${i + 2}`}>
                      <div className="mt-2 w-5 h-5 bg-orange-500 rotate-45 flex-shrink-0 group-hover:rotate-90 transition-transform duration-500 shadow-lg shadow-orange-500/20"></div>
                      <span className="text-xl md:text-2xl font-semibold text-white/80 leading-relaxed group-hover:text-white transition-colors">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="absolute bottom-12 right-12 opacity-10">
               <h4 className="text-[12rem] font-black italic tracking-tighter select-none">{String(data.id).padStart(2, '0')}</h4>
            </div>
          </div>
        );

      case 'grid':
        return (
          <div className="h-full flex flex-col p-12 md:p-20 relative">
            <div className="absolute top-0 left-0 right-0 h-2 bg-orange-500"></div>
            
            <div className="mb-12 animate-fade-slide-in">
              <h3 className="text-5xl md:text-7xl font-[900] text-white italic tracking-tighter uppercase leading-none mb-4">
                {data.title}
              </h3>
              <div className="h-1 w-full bg-white/10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-stretch">
              {data.points?.map((point, i) => {
                const parts = point.split(':');
                const icons = [Shield, Activity, Target, Trophy];
                const Icon = icons[i % icons.length];
                return (
                  <div key={i} className={`p-10 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-2xl hover:border-orange-500/40 transition-all group animate-fade-slide-in stagger-${i + 1} flex flex-col h-full`}>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-black shadow-xl group-hover:bg-orange-500 transition-colors">
                        <Icon size={32} />
                      </div>
                      <h4 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight group-hover:text-orange-500 transition-colors">
                        {parts[0]}
                      </h4>
                    </div>
                    {parts[1] && (
                      <p className="text-white/60 text-lg md:text-2xl leading-relaxed font-medium flex-1">
                        {parts[1].trim()}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'flow':
        return (
          <div className="h-full flex flex-col p-12 md:p-24 relative bg-[#050505]">
            <div className="absolute top-0 left-0 right-0 h-2 bg-orange-500"></div>
            
            <h3 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none mb-20 animate-fade-slide-in">
              {data.title}
            </h3>

            <div className="relative flex flex-col gap-10">
               {/* Connector Line */}
               <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 relative z-10">
                  {data.points?.map((point, i) => (
                    <div key={i} className={`flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-fade-slide-in stagger-${i + 1}`}>
                       <div className="w-16 h-16 bg-orange-500 text-black font-black flex items-center justify-center rounded-full text-2xl italic flex-shrink-0 shadow-[0_0_30px_rgba(255,140,0,0.4)] border-4 border-black group-hover:scale-110 transition-transform">
                         {i + 1}
                       </div>
                       <div className={`p-6 bg-white/[0.03] border border-white/10 rounded-xl flex-1 hover:bg-white/[0.05] transition-all ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                          <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest">{point}</h4>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="h-full flex flex-col items-center justify-center p-12 md:p-20 relative bg-[#000]">
            <div className="absolute inset-0 bg-radial-gradient from-orange-500/10 to-transparent pointer-events-none opacity-50"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32 w-full max-w-7xl animate-fade-slide-in">
              <div className="relative">
                <div className="w-64 h-64 md:w-[450px] md:h-[450px] bg-white rounded-full flex items-center justify-center p-12 relative z-10 shadow-[0_0_120px_rgba(255,140,0,0.1)] border-[20px] border-black">
                   <img 
                     src={LOGO_URL} 
                     alt="Force Per4mance Logo" 
                     className="w-full h-full object-contain"
                     referrerPolicy="no-referrer"
                   />
                </div>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-orange-500 text-black font-black px-10 py-3 italic skew-x-[-15deg] z-20 text-xl tracking-widest border-4 border-black">
                  FORCE 2026
                </div>
              </div>
              
              <div className="flex flex-col space-y-12 flex-1 w-full text-center md:text-left">
                <div className="space-y-2">
                  <h4 className="text-6xl md:text-8xl font-[900] italic text-white tracking-tighter leading-none">THIERRY ZAHUI</h4>
                  <div className="h-2 w-32 bg-orange-500 mx-auto md:mx-0"></div>
                  <p className="text-orange-500 font-black tracking-[0.4em] uppercase text-xl mt-4">CEO / Head of Performance</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-6">
                    <a href="tel:+46709000000" className="flex items-center gap-4 text-white/60 hover:text-orange-500 transition-all group">
                      <div className="p-3 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-all shadow-lg"><Phone size={24} /></div>
                      <span className="text-2xl font-bold tracking-tight">+46 709 00 00 00</span>
                    </a>
                    <a href="mailto:hello@forceper4mance.com" className="flex items-center gap-4 text-white/60 hover:text-orange-500 transition-all group">
                      <div className="p-3 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-all shadow-lg"><Mail size={24} /></div>
                      <span className="text-2xl font-bold tracking-tight">hello@forceper4mance.com</span>
                    </a>
                    <a href="https://www.google.com/maps/search/?api=1&query=Stockholm,+Sweden" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/60 hover:text-orange-500 transition-all group">
                      <div className="p-3 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-all shadow-lg"><MapPin size={24} /></div>
                      <span className="text-2xl font-bold tracking-tight">Stockholm, Sweden</span>
                    </a>
                  </div>
                  
                  <div className="space-y-6">
                    <a href="https://www.forceper4mance.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/60 hover:text-orange-500 transition-all group">
                      <div className="p-3 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-all shadow-lg"><Globe size={24} /></div>
                      <span className="text-2xl font-bold tracking-tight italic uppercase">forceper4mance.com</span>
                    </a>
                    <a href="https://instagram.com/force_per4mance" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/60 hover:text-orange-500 transition-all group">
                      <div className="p-3 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-all shadow-lg"><Instagram size={24} /></div>
                      <span className="text-2xl font-bold tracking-tight">@force_per4mance</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`w-full h-full relative overflow-hidden transition-colors duration-700 ${isOrange ? 'bg-orange-500' : 'bg-[#000]'}`}>
      {/* Background Decor System */}
      {!isThumbnail && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
           <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" preserveAspectRatio="xMidYMid slice" className="opacity-[0.05]">
             {!isOrange && (
               <>
                 <circle cx="950" cy="50" r="450" stroke="white" strokeWidth="1" />
                 <circle cx="950" cy="50" r="350" stroke="white" strokeWidth="0.5" strokeDasharray="10 10" />
                 <path d="M-100 900L1100 100" stroke="white" strokeWidth="0.2" />
                 <path d="M-100 1000L1100 200" stroke="white" strokeWidth="0.2" />
                 <rect x="100" y="800" width="150" height="150" stroke="orange" strokeWidth="1" transform="rotate(45 175 875)" />
               </>
             )}
             {isOrange && (
               <>
                 <path d="M0 0L1000 1000" stroke="black" strokeWidth="0.5" strokeOpacity="0.2" />
                 <circle cx="500" cy="500" r="400" stroke="black" strokeWidth="2" strokeOpacity="0.1" />
                 <circle cx="500" cy="500" r="300" stroke="black" strokeWidth="1" strokeDasharray="20 20" strokeOpacity="0.1" />
               </>
             )}
           </svg>
        </div>
      )}

      {/* Persistent Subtle Watermark */}
      {!isOrange && !isThumbnail && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-[0.012] pointer-events-none rotate-[-12deg] select-none">
           <img 
             src={LOGO_URL} 
             alt="Logo Watermark" 
             className="w-full h-full object-contain"
             referrerPolicy="no-referrer"
           />
        </div>
      )}

      {/* Main Content Render */}
      <div className="relative z-10 w-full h-full">
        {renderContent()}
      </div>

      {/* Subpage Identification Bar */}
      {!isThumbnail && !isOrange && data.type !== 'title' && data.type !== 'contact' && (
        <div className="absolute bottom-12 left-12 flex items-center gap-6 opacity-30 hover:opacity-100 transition-all duration-500 cursor-default group">
           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2.5 shadow-2xl border-4 border-black group-hover:scale-110 transition-transform">
             <img 
               src={LOGO_URL} 
               alt="Force Logo" 
               className="w-full h-full object-contain"
               referrerPolicy="no-referrer"
             />
           </div>
           <div className="flex flex-col border-l border-white/20 pl-4">
             <span className="text-xs font-black tracking-[0.5em] text-white uppercase italic leading-none mb-1">Force Football Per4mance</span>
             <span className="text-[10px] font-bold tracking-[0.3em] text-orange-500 uppercase">Strategic Athlete Optimization</span>
           </div>
        </div>
      )}
    </div>
  );
};

export default Slide;
