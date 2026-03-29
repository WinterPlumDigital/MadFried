import React, { useEffect } from "react";
import { portfolioData } from "../data";
import { FadeIn } from "../components/FadeIn";

export const Filmography = () => {
  // Scroll to top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen">
      <FadeIn>
        <h1 className="font-serif text-5xl md:text-7xl mb-6 text-center">Filmography</h1>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-20 text-lg font-light">
          A comprehensive collection of my work across narrative films, live music videography, and experimental projects.
        </p>
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
    </div>
  );
};
