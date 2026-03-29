import React from "react";
import { motion } from "motion/react";
import { Play, Mail, Instagram, Youtube, Video, ArrowRight, ChevronDown } from "lucide-react";
import { portfolioData, skills } from "./data";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-ink text-neutral-100 font-sans selection:bg-gold selection:text-ink">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70"
            src="https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4"
          >
            Madeline Friedrich
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gold text-sm md:text-base uppercase tracking-[0.2em] font-medium mb-6"
          >
            Cinematographer | Video Editor | Scriptwriter
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-neutral-300 text-lg md:text-xl font-light italic max-w-2xl mx-auto mb-12"
          >
            "Capturing stories through motion, music, and meaning."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-gold text-ink font-medium tracking-wide hover:bg-white transition-colors duration-300 flex items-center gap-2"
            >
              View Work <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-neutral-600 text-white font-medium tracking-wide hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Contact
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer text-neutral-500 hover:text-gold transition-colors"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
        <FadeIn>
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative h-[500px] sm:h-[600px] w-full mt-10 md:mt-0">
              <div className="absolute top-0 right-0 w-[75%] aspect-[3/4] overflow-hidden bg-charcoal z-10">
                <img 
                  src="/FlowerPortrait.jpg" 
                  alt="Madeline Friedrich Portrait" 
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border border-neutral-800 m-3 pointer-events-none"></div>
              </div>
              <div className="absolute bottom-12 left-0 w-[80%] aspect-[4/3] overflow-hidden bg-charcoal z-20 shadow-2xl border-4 border-ink">
                <img 
                  src="/FlowerWorking.jpg" 
                  alt="Madeline Friedrich on set" 
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border border-neutral-800 m-2 pointer-events-none"></div>
              </div>
            </div>
            <div className="md:col-span-7">
              <h2 className="font-serif text-4xl md:text-5xl mb-8">About Madeline</h2>
              <div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed">
                <p>
                  Madeline Friedrich is a multi-disciplinary filmmaker with experience in live music videography, narrative storytelling, and creative production.
                </p>
                <p>
                  She has worked on music videos, school productions, short films, and live performances in both structured and fast-paced environments like bars and clubs. 
                </p>
                <p>
                  Her work focuses on visual storytelling, rhythm, and emotional connection, blending technical precision with an artistic eye to bring every frame to life.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. FEATURED SHOWREEL */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center justify-between mb-12 border-b border-neutral-800 pb-6">
              <h2 className="font-serif text-3xl md:text-4xl">Selected Works</h2>
              <span className="text-gold text-sm tracking-widest uppercase">Featured</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-neutral-200">Kiss Her Short Film</h3>
                  <p className="text-sm text-gold mt-1 font-light tracking-wide">Assistant Director + Production Assistant</p>
                </div>
                <div className="relative aspect-video bg-black overflow-hidden rounded-sm shadow-2xl">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/WufCNPYDSsU"
                    title="Kiss Her Short Film"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-neutral-200">MIRA Short Film</h3>
                  <p className="text-sm text-gold mt-1 font-light tracking-wide">Director of Photography</p>
                </div>
                <div className="relative aspect-video bg-black overflow-hidden rounded-sm shadow-2xl">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/90CZyy651Ts"
                    title="MIRA Short Film"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. PORTFOLIO SECTION */}
      <section id="portfolio" className="py-32 px-6 max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl mb-20 text-center">Filmography</h2>
        </FadeIn>

        <div className="space-y-32">
          {Object.entries(portfolioData).sort(([a], [b]) => Number(b) - Number(a)).map(([year, projects], index) => (
            <div key={year} className="relative">
              <FadeIn delay={0.1}>
                <div className="flex items-baseline gap-6 mb-12">
                  <h3 className="font-serif text-6xl md:text-8xl text-neutral-800 font-bold tracking-tighter">{year}</h3>
                  <div className="h-[1px] flex-grow bg-neutral-800"></div>
                </div>
              </FadeIn>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, pIndex) => (
                  <FadeIn key={pIndex} delay={pIndex * 0.1}>
                    <div className="group cursor-pointer">
                      <div className="aspect-video bg-charcoal mb-4 overflow-hidden relative">
                        {project.youtubeId ? (
                          <iframe
                            className="absolute inset-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${project.youtubeId}`}
                            title={project.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <>
                            {/* Placeholder abstract image based on index to give variety */}
                            <img 
                              src={`https://picsum.photos/seed/${project.title.replace(/\s+/g, '')}/800/450?grayscale&blur=2`}
                              alt={project.title}
                              className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 pointer-events-none">
                              <span className="text-gold text-xs tracking-widest uppercase font-medium">View Project</span>
                            </div>
                          </>
                        )}
                      </div>
                      <h4 className="text-lg font-medium text-neutral-200 group-hover:text-white transition-colors">{project.title}</h4>
                      {project.role && (
                        <p className="text-gold text-sm mt-1 font-light tracking-wide">{project.role}</p>
                      )}
                      <p className="text-neutral-500 text-sm mt-1">{project.type}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EXPERIENCE & 6. SKILLS */}
      <section className="py-32 bg-charcoal border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          
          {/* Experience */}
          <FadeIn>
            <h2 className="font-serif text-3xl mb-10 text-gold">Experience</h2>
            <div className="space-y-10">
              <div className="relative pl-8 border-l border-neutral-700">
                <div className="absolute w-3 h-3 bg-gold rounded-full -left-[6.5px] top-2"></div>
                <h3 className="text-xl font-medium mb-2">Live Music & Events</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  Camerawoman for live cover bands performing in fast-paced, dynamic environments like bars and clubs. Expert in capturing rhythm and atmosphere under challenging lighting conditions.
                </p>
              </div>
              <div className="relative pl-8 border-l border-neutral-700">
                <div className="absolute w-3 h-3 bg-neutral-600 rounded-full -left-[6.5px] top-2"></div>
                <h3 className="text-xl font-medium mb-2">Narrative & Production</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  Extensive experience filming skits, short films, and large-scale school-based musical and theatrical productions. Strong focus on visual storytelling and adaptability on set.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Skills */}
          <FadeIn delay={0.2}>
            <h2 className="font-serif text-3xl mb-10 text-gold">Expertise</h2>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 text-neutral-300">
                  <Video size={16} className="text-neutral-600" />
                  <span className="font-light tracking-wide">{skill}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 border border-neutral-800 bg-ink/50">
              <h4 className="text-sm text-neutral-500 uppercase tracking-widest mb-4">Software</h4>
              <p className="text-neutral-300 font-light">Premiere Pro, After Effects, Final Cut Pro</p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-serif text-5xl md:text-6xl mb-6">Let's Create.</h2>
          <p className="text-neutral-400 text-lg font-light mb-12 max-w-xl mx-auto">
            Available for freelance cinematography, editing, and scriptwriting opportunities.
          </p>
          
          <a 
            href="mailto:madeline.friedrich.buisness@gmail.com" 
            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-light hover:text-gold transition-colors duration-300 mb-16"
          >
            <Mail size={28} />
            madeline.friedrich.buisness@gmail.com
          </a>

          <div className="flex justify-center gap-8">
            <a href="https://www.instagram.com/madfried.film/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-gold hover:border-gold transition-all duration-300">
              <Instagram size={20} />
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-900 text-center text-neutral-600 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Madeline Friedrich. All rights reserved.</p>
      </footer>
    </div>
  );
}
