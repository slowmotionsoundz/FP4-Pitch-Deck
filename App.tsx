
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SlideData, SlideViewMode } from './types';
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  Presentation, 
  Maximize, 
  Download
} from 'lucide-react';
import Slide from './components/Slide';

const SLIDES: SlideData[] = [
  {
    id: 1,
    type: 'title',
    title: 'FORCE',
    subtitle: 'FOOTBALL PER4MANCE',
    content: 'NextPro Project',
    footer: '12 Jan 2026',
    bgType: 'dark'
  },
  {
    id: 2,
    type: 'divider',
    title: 'The Company',
    bgType: 'orange'
  },
  {
    id: 3,
    type: 'content',
    title: 'What is FP4?',
    content: 'FP4 represents the intersection of elite sports performance and commercial excellence. We specialize in transforming raw athletic potential into high-value professional assets through integrated performance monitoring, tactical intelligence, and strategic management.',
    bgType: 'dark'
  },
  {
    id: 4,
    type: 'content',
    title: 'The Force Edge',
    subtitle: '(How we do it)?',
    points: [
      'Data-driven decision making via GPS tracking',
      'Proprietary tactical analysis frameworks',
      'Integrated legal and commercial protection',
      'Physical conditioning tailored for market readiness'
    ],
    bgType: 'dark'
  },
  {
    id: 5,
    type: 'flow',
    title: 'The "Force" Methodology',
    points: [
      'Discovery',
      'Analysis',
      'Develop',
      'Execution',
      'Reporting',
      'Market Ready'
    ],
    bgType: 'dark'
  },
  {
    id: 6,
    type: 'content',
    title: 'The Mission (Why)?',
    content: 'The Value Prop: "We bridge the gap between athletic potential and commercial reality through data-driven performance consulting and robust legal frameworks."',
    bgType: 'dark'
  },
  {
    id: 7,
    type: 'grid',
    title: 'Service Pillars',
    points: [
      'Talent scouting & Development',
      'Performance Optimization: (GPS tracking, tactical analysis, physical conditioning)',
      'Talent Management & Tenders: (Managing the bidding process for players or club services)',
      'Risk Mitigation: (Protecting the \'human asset\' through contract expertise)'
    ],
    bgType: 'dark'
  },
  {
    id: 8,
    type: 'content',
    title: 'Why Force Per4mance?',
    subtitle: '(The Differentiator)',
    content: '“We don’t just make players better; we make them more valuable and less risky to own.”',
    bgType: 'dark'
  },
  {
    id: 9,
    type: 'content',
    title: 'Case Studies',
    subtitle: '(Proof of Concept)',
    content: 'Anonymous examples of successful tenders or performance turnarounds demonstrate our ability to deliver measurable ROI for stakeholders.',
    bgType: 'dark'
  },
  {
    id: 10,
    type: 'divider',
    title: 'NextPro Project',
    bgType: 'orange'
  },
  {
    id: 11,
    type: 'content',
    title: 'About NextPro Project',
    content: 'The NextPro Project is our flagship initiative designed to identify and accelerate high-potential athletes directly into the professional ecosystem, minimizing transition risk and maximizing immediate impact.',
    bgType: 'dark'
  },
  {
    id: 12,
    type: 'contact',
    title: 'FORCE',
    subtitle: 'FOOTBALL PER4MANCE',
    bgType: 'dark'
  }
];

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState<SlideViewMode>(SlideViewMode.PRESENTATION);
  
  // Transition states
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<'next' | 'prev' | null>(null);
  const [outgoingIndex, setOutgoingIndex] = useState<number | null>(null);
  
  const timerRef = useRef<number | null>(null);

  const goToSlide = useCallback((newIndex: number) => {
    if (isTransitioning || newIndex === currentSlideIndex) return;
    
    const direction = newIndex > currentSlideIndex ? 'next' : 'prev';
    setTransitionDirection(direction);
    setOutgoingIndex(currentSlideIndex);
    setCurrentSlideIndex(newIndex);
    setIsTransitioning(true);

    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setIsTransitioning(false);
      setOutgoingIndex(null);
      setTransitionDirection(null);
    }, 800); // Must match CSS animation duration
  }, [currentSlideIndex, isTransitioning]);

  const nextSlide = useCallback(() => {
    if (currentSlideIndex < SLIDES.length - 1) {
      goToSlide(currentSlideIndex + 1);
    }
  }, [currentSlideIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    }
  }, [currentSlideIndex, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode === SlideViewMode.PRESENTATION) {
        if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'Escape') setViewMode(SlideViewMode.OVERVIEW);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, viewMode]);

  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden relative selection:bg-orange-500/30">
      {/* Top Navbar */}
      <header className="z-50 px-6 py-4 flex justify-between items-center border-b border-orange-500/20 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden shadow-inner">
             <img 
               src="https://drive.google.com/thumbnail?id=1j1Q69GniOuufFdeKGDtlTuvr7lmL7jPA&sz=w200" 
               alt="Force Per4mance Logo" 
               className="w-full h-full object-contain"
               referrerPolicy="no-referrer"
             />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-widest text-white">FORCE PER4MANCE</h1>
            <p className="text-[10px] text-orange-500 font-semibold tracking-widest">NEXTPRO PROJECT</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setViewMode(viewMode === SlideViewMode.PRESENTATION ? SlideViewMode.OVERVIEW : SlideViewMode.PRESENTATION)}
            className="p-2 text-white hover:text-orange-500 transition-colors"
            title={viewMode === SlideViewMode.PRESENTATION ? "Overview Mode" : "Present Mode"}
          >
            {viewMode === SlideViewMode.PRESENTATION ? <LayoutGrid size={20} /> : <Presentation size={20} />}
          </button>
          <button className="p-2 text-white hover:text-orange-500 transition-colors" title="Full Screen">
            <Maximize size={20} />
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-xs font-bold transition-all shadow-lg shadow-orange-900/20 flex items-center gap-2">
            <Download size={14} /> DOWNLOAD PDF
          </button>
        </div>
      </header>

      {/* Main Slide Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-10 perspective-container">
        {viewMode === SlideViewMode.PRESENTATION ? (
          <div className="w-full h-full max-w-6xl flex items-center justify-center gap-6 relative">
            <button 
              onClick={prevSlide}
              disabled={currentSlideIndex === 0 || isTransitioning}
              className={`p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all z-50 ${currentSlideIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
            >
              <ChevronLeft size={32} />
            </button>

            <div className="flex-1 h-full aspect-video relative">
               {/* Outgoing Slide Container */}
               {outgoingIndex !== null && (
                 <div 
                   className={`absolute inset-0 z-10 shadow-2xl rounded-xl overflow-hidden border border-orange-500/10 ${
                     transitionDirection === 'next' ? 'animate-cube-out-left' : 'animate-cube-out-right'
                   }`}
                 >
                   <Slide data={SLIDES[outgoingIndex]} />
                 </div>
               )}

               {/* Incoming/Current Slide Container */}
               <div 
                 className={`absolute inset-0 shadow-2xl rounded-xl overflow-hidden border border-orange-500/10 bg-[#050505] transition-transform duration-300 ${
                   isTransitioning 
                    ? (transitionDirection === 'next' ? 'animate-cube-in-right z-20' : 'animate-cube-in-left z-20') 
                    : 'z-0'
                 }`}
               >
                 <Slide key={currentSlideIndex} data={SLIDES[currentSlideIndex]} />
               </div>
            </div>

            <button 
              onClick={nextSlide}
              disabled={currentSlideIndex === SLIDES.length - 1 || isTransitioning}
              className={`p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all z-50 ${currentSlideIndex === SLIDES.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        ) : (
          <div className="w-full h-full overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {SLIDES.map((slide, idx) => (
              <div 
                key={slide.id}
                onClick={() => {
                  setCurrentSlideIndex(idx);
                  setViewMode(SlideViewMode.PRESENTATION);
                }}
                className={`aspect-video rounded-lg overflow-hidden border-2 cursor-pointer transition-all hover:scale-105 ${currentSlideIndex === idx ? 'border-orange-500' : 'border-white/10 hover:border-orange-500/50'}`}
              >
                <div className="w-full h-full scale-[0.25] origin-top-left" style={{ width: '400%', height: '400%' }}>
                  <Slide data={slide} isThumbnail />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Progress Bar & Footer */}
      {viewMode === SlideViewMode.PRESENTATION && (
        <footer className="z-50 px-10 py-6 flex flex-col gap-2">
          <div className="flex justify-between items-center text-[10px] text-white/40 font-bold tracking-widest uppercase">
            <span>Slide {currentSlideIndex + 1} of {SLIDES.length}</span>
            <span>Force Football Per4mance &copy; 2026</span>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-orange-500 transition-all duration-300"
              style={{ width: `${((currentSlideIndex + 1) / SLIDES.length) * 100}%` }}
            />
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
