"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Techanic Infotech",
    role: "Front-End Developer",
    period: "05/2024 – 02/2026",
    location: "Jaipur, Rajasthan",
    description: [
      "Built interactive and responsive web applications using React.js and Next.js.",
      "Delivered high-quality, scalable solutions for various clients.",
      "Collaborated with cross-functional teams to translate designs into high-performance code.",
      "Implemented SEO & Performance optimizations for better user reach."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Professional Experience
          </motion.h2>
          <motion.div 
             initial={{ opacity: 0, width: 0 }}
             whileInView={{ opacity: 1, width: 80 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
             className="h-1 bg-indigo-600 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 relative">
           {/* Timeline line */}
           <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-slate-800"></div>

           {experiences.map((exp, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className={`relative flex flex-col md:flex-row gap-8 ${
                 idx % 2 === 0 ? "md:flex-row-reverse" : ""
               }`}
             >
               {/* Timeline Dot */}
               <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.8)] z-10 hidden md:block border-4 border-slate-950"></div>

               <div className="w-full md:w-1/2">
                 <div className="p-8 glass rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all">
                   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <h3 className="text-2xl font-bold text-indigo-400">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar size={14} /> {exp.period}
                      </div>
                   </div>
                   
                   <div className="flex flex-col gap-2 mb-6">
                      <div className="flex items-center gap-2 text-slate-200 font-semibold">
                        <Briefcase size={16} className="text-indigo-400" /> {exp.company}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs">
                        <MapPin size={14} /> {exp.location}
                      </div>
                   </div>

                   <ul className="space-y-3">
                     {exp.description.map((item, iIdx) => (
                       <li key={iIdx} className="text-slate-400 text-sm flex gap-3">
                         <span className="text-indigo-500 mt-1">•</span>
                         {item}
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
               
               {/* Spacer for desktop layout */}
               <div className="hidden md:block w-1/2"></div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
