"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
             initial={{ opacity: 0, width: 0 }}
             whileInView={{ opacity: 1, width: 80 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
             className="h-1 bg-indigo-600 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white leading-tight">
                Let's collaborate on your next <span className="text-indigo-400">digital experience.</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:kumawat.komal0115@gmail.com" className="text-lg sm:text-xl font-bold text-slate-200 hover:text-indigo-400 transition-colors break-all md:break-normal">
                    kumawat.komal0115@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mb-1">Call Me</p>
                  <p className="text-lg sm:text-xl font-bold text-slate-200">
                    +91 9079664354
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg sm:text-xl font-bold text-slate-200">
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Links Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border border-white/5 flex flex-col justify-center gap-8 text-center"
          >
            <h4 className="text-2xl font-bold text-slate-100">Find me on professional networks</h4>
            <div className="flex flex-wrap items-center justify-center gap-6">
                <a 
                    href="https://linkedin.com/in/komal-kumawat-alaa93209" 
                    target="_blank" 
                    className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-indigo-500/5 border border-indigo-500/10 hover:border-indigo-500/30 transition-all w-32 group"
                >
                    <div className="p-3 rounded-full bg-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Linkedin size={24} />
                    </div>
                    <span className="text-sm font-bold text-slate-300">LinkedIn</span>
                </a>
                
                <a 
                    href="https://github.com/kuhukumawat" 
                    target="_blank" 
                    className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-slate-100/5 border border-white/10 hover:border-white/30 transition-all w-32 group"
                >
                    <div className="p-3 rounded-full bg-slate-100 text-slate-950 shadow-lg group-hover:scale-110 transition-transform">
                        <Github size={24} />
                    </div>
                    <span className="text-sm font-bold text-slate-300">GitHub</span>
                </a>
            </div>
            
            <p className="text-slate-500 text-sm mt-4">
               Ready to discuss projects, front-end trends, or coffee.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
