import React, { useEffect } from "react";
import { FadeIn } from "../components/FadeIn";
import { Mail, Instagram, ArrowRight } from "lucide-react";

export const Contact = () => {
  // Scroll to top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen">
      <FadeIn>
        <h1 className="font-serif text-5xl md:text-7xl mb-6 text-center md:text-left">Contact</h1>
        <p className="text-neutral-400 max-w-2xl mb-20 text-lg font-light text-center md:text-left">
          Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <FadeIn delay={0.2}>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-medium text-neutral-200 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=madeline.friedrich.buisness@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-400 hover:text-gold transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-gold transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg font-light">madeline.friedrich.buisness@gmail.com</span>
                </a>
                <a href="https://instagram.com/madfried.film" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-400 hover:text-gold transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-gold transition-colors">
                    <Instagram size={20} />
                  </div>
                  <span className="text-lg font-light">@madfried.film</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-neutral-200 mb-4">Location</h3>
              <p className="text-neutral-400 font-light text-lg">
                Based in the Bay area.<br />
                Available for travel worldwide.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Direct Email Call to Action */}
        <FadeIn delay={0.4}>
          <div className="h-full flex flex-col justify-center space-y-8 bg-neutral-900/30 p-10 rounded-2xl border border-neutral-800/50 text-center md:text-left">
            <div>
              <h3 className="font-serif text-3xl text-neutral-200 mb-4">Let's work together</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                I'm currently accepting new freelance projects. Send me an email with some details about your project, timeline, and goals, and I'll get back to you as soon as possible.
              </p>
            </div>
            
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=madeline.friedrich.buisness@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold text-ink py-4 px-8 font-medium uppercase tracking-widest hover:bg-white transition-colors w-full md:w-auto self-start"
            >
              <span>Email Me</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
