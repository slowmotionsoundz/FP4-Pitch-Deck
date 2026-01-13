
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
  Target
} from 'lucide-react';

interface SlideProps {
  data: SlideData;
  isThumbnail?: boolean;
}

const Slide: React.FC<SlideProps> = ({ data, isThumbnail }) => {
  const isOrange = data.bgType === 'orange';

  const renderContent = () => {
    switch (data.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-8 animate-in fade-in zoom-in duration-700">
            <div className="relative">
               <div className="absolute -inset-10 bg-orange-500/20 blur-3xl rounded-full"></div>
               <div className="flex items-center gap-6">
                 <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center p-3 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=200" 
                      alt="Lion" 
                      className="rounded-full w-full h-full object-cover grayscale contrast-150"
                    />
                 </div>
                 <div className="flex flex-col">
                    <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-none italic uppercase">
                      {data.title}
                    </h2>
                    <p className="text-sm md:text-xl font-bold text-orange-500 tracking-[0.4em] mt-[-0.2em]">
                      {data.subtitle}
                    </p>
                 </div>
               </div>
            </div>
            <div className="text-center pt-10">
              <p className="text-xl md:text-3xl font-semibold text-white/80">{data.content}</p>
              <p className="text-xs text-white/40 mt-4 tracking-widest">{data.footer}</p>
            </div>
          </div>
        );

      case 'divider':
        return (
          <div className="flex flex-col items-center justify-center h-full p-20 animate-in fade-in slide-in-from-bottom duration-500">
             <h2 className="text-6xl md:text-9xl font-black text-black text-center uppercase tracking-tight italic">
               {data.title}
             </h2>
             <div className="w-32 h-2 bg-black mt-8"></div>
          </div>
        );

      case 'content':
        return (
          <div className="h-full flex flex-col p-12 md:p-20 justify-center animate-in fade-in slide-in-from-right duration-500">
            {data.title && (
              <h3 className="text-3xl md:text-5xl font-bold text-orange-500 mb-2">{data.title}</h3>
            )}
            {data.subtitle && (
              <p className="text-lg md:text-xl text-white/50 mb-8 font-semibold tracking-wide italic">{data.subtitle}</p>
            )}
            <div className="max-w-4xl">
              {data.content && (
                <p className="text-xl md:text-3xl leading-relaxed font-medium text-white/90 mb-8">
                  {data.content}
                </p>
              )}
              {data.points && (
                <ul className="space-y-4">
                  {data.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4 text-lg md:text-2xl text-white/80">
                      <ArrowRight className="mt-2 text-orange-500 flex-shrink-0" size={20} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );

      case 'flow':
        return (
          <div className="h-full flex flex-col p-12 md:p-20 justify-center animate-in fade-in duration-500">
            <h3 className="text-3xl md:text-5xl font-bold text-orange-500 mb-16 text-center italic">{data.title}</h3>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
               {data.points?.map((point, i) => (
                 <React.Fragment key={i}>
                   <div className="group relative">
                      <div className="absolute -inset-1 bg-orange-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative px-6 py-4 bg-black border border-white/10 rounded-lg flex items-center justify-center min-w-[120px]">
                        <span className="text-lg font-bold text-white uppercase tracking-widest">{point}</span>
                      </div>
                   </div>
                   {i < (data.points?.length || 0) - 1 && (
                     <ArrowRight className="text-white/20 hidden md:block" size={24} />
                   )}
                 </React.Fragment>
               ))}
            </div>
          </div>
        );

      case 'grid':
        return (
          <div className="h-full flex flex-col p-12 md:p-20 animate-in fade-in duration-500">
            <h3 className="text-3xl md:text-5xl font-bold text-orange-500 mb-12 italic">{data.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
              {data.points?.map((point, i) => {
                const parts = point.split(':');
                const Icon = [Shield, Activity, Target, Trophy][i % 4];
                return (
                  <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center text-white">
                        <Icon size={20} />
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-orange-500">
                        {parts[0]}
                      </h4>
                    </div>
                    {parts[1] && (
                      <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                        {parts[1].trim()}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="h-full flex flex-col items-center justify-center p-12 md:p-20 animate-in fade-in duration-700">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-white/5 border-2 border-orange-500/30 rounded-full flex items-center justify-center p-8 mb-12 relative group overflow-hidden">
               <div className="absolute inset-0 bg-orange-500/10 group-hover:bg-orange-500/20 transition-all duration-500"></div>
               <img 
                 src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=300" 
                 alt="Lion" 
                 className="w-full h-full object-contain grayscale contrast-125 z-10"
               />
               <div className="absolute bottom-4 z-20">
                  <p className="text-orange-500 text-[8px] font-bold tracking-[0.5em] text-center w-full uppercase">ESTD 2024</p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 w-full max-w-5xl">
              <div className="space-y-6">
                <div>
                  <h4 className="text-3xl font-black italic text-white mb-1">THIERRY ZAHUI</h4>
                  <p className="text-orange-500 font-bold tracking-widest uppercase text-xs">CEO / Head Coach</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors cursor-pointer group">
                    <div className="p-2 bg-white/5 rounded group-hover:bg-orange-500 transition-colors"><Phone size={16} /></div>
                    <span className="font-medium">+46 709 00 00 00</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors cursor-pointer group">
                    <div className="p-2 bg-white/5 rounded group-hover:bg-orange-500 transition-colors"><Mail size={16} /></div>
                    <span className="font-medium">hello@forceper4mance.com</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                 <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors cursor-pointer group">
                    <div className="p-2 bg-white/5 rounded group-hover:bg-orange-500 transition-colors"><MapPin size={16} /></div>
                    <span className="font-medium">Stockholm, Sweden</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors cursor-pointer group">
                    <div className="p-2 bg-white/5 rounded group-hover:bg-orange-500 transition-colors"><Globe size={16} /></div>
                    <span className="font-medium">www.forceper4mance.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors cursor-pointer group">
                    <div className="p-2 bg-white/5 rounded group-hover:bg-orange-500 transition-colors"><Instagram size={16} /></div>
                    <span className="font-medium">@force_per4mance</span>
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
      {/* Background Decor */}
      {!isOrange && (
        <>
          <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-5 pointer-events-none">
             <img 
               src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800" 
               alt="Lion Watermark" 
               className="h-full object-cover scale-150 grayscale"
             />
          </div>
          <div className="absolute top-0 left-0 w-full h-full border-[20px] border-orange-500/5 pointer-events-none"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-500/10 blur-[100px] pointer-events-none"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-orange-500/10 blur-[100px] pointer-events-none"></div>
        </>
      )}

      <div className="relative z-10 w-full h-full">
        {renderContent()}
      </div>

      {/* Floating Logo for subpages */}
      {!isThumbnail && !isOrange && data.type !== 'title' && data.type !== 'contact' && (
        <div className="absolute bottom-10 left-12 flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity">
           <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center p-1">
             <img src="https://picsum.photos/id/1025/50/50" alt="Lion" className="invert" />
           </div>
           <span className="text-[10px] font-black tracking-widest text-white uppercase italic">Force Football Per4mance</span>
        </div>
      )}
    </div>
  );
};

export default Slide;
