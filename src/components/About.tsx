"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            About Me
          </motion.h2>
          <motion.div 
             initial={{ opacity: 0, width: 0 }}
             whileInView={{ opacity: 1, width: 80 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
             className="h-1 bg-indigo-600 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Full-Stack Capability with a Front-End Focus</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              I am a dedicated Front-End Developer with **1 year and 9 months of experience** in crafting modern, high-performance web applications. I specialize in building user-centric interfaces that are not only visually stunning but also technically robust.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              My journey in tech is driven by a passion for clean code, scalability, and seamless user experiences. I thrive in collaborative environments and enjoy translating complex requirements into elegant technical solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
               {[
                 { icon: <MapPin size={20} />, label: "Location", value: "Jaipur, Rajasthan" },
                 { icon: <Briefcase size={20} />, label: "Experience", value: "1.9 Years" },
                 { icon: <GraduationCap size={20} />, label: "Education", value: "B-Tech Mechanical" },
                 { icon: <User size={20} />, label: "Status", value: "Open to Work" }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{item.label}</p>
                      <p className="text-slate-200 font-semibold">{item.value}</p>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="relative"
          >
             <div className="p-8 glass rounded-3xl border border-white/5 space-y-8">
                <div className="space-y-4">
                   <h4 className="text-xl font-bold flex items-center gap-2">
                     <GraduationCap className="text-indigo-400" /> Education
                   </h4>
                   <div className="pl-8 border-l-2 border-slate-800 space-y-2 relative">
                      <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.8)]"></div>
                      <p className="font-bold text-slate-100">B-Tech in Mechanical Engineering</p>
                      <p className="text-sm text-slate-400">Gyan Vihar School of Engineering & Technology</p>
                      <p className="text-xs text-indigo-400 font-bold px-2 py-0.5 rounded bg-indigo-500/10 inline-block border border-indigo-500/20">2017 – 2021</p>
                   </div>
                </div>

                <div className="space-y-4">
                   <h4 className="text-xl font-bold flex items-center gap-2">
                     <Briefcase className="text-indigo-400" /> Current Focus
                   </h4>
                   <p className="text-slate-400 text-sm italic">
                    "Currently honing skills in Next.js SSR, performance optimization, and building seamless digital experiences for complex web platforms."
                   </p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
