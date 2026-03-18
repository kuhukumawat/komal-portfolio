"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Layers, 
  Cpu, 
  Layout, 
  Settings, 
  Smartphone, 
  Database, 
  Figma 
} from "lucide-react";

const skillCategories = [
  {
    title: "Core Technologies",
    icon: <Code2 className="text-indigo-400" />,
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript"]
  },
  {
    title: "Styling & UI",
    icon: <Layout className="text-indigo-400" />,
    skills: ["Tailwind CSS", "CSS3", "HTML5", "Framer Motion"]
  },
  {
    title: "Tools & Design",
    icon: <Figma className="text-indigo-400" />,
    skills: ["Figma", "Git/GitHub", "NPM/Yarn", "Postman"]
  },
  {
    title: "Expertise",
    icon: <Settings className="text-indigo-400" />,
    skills: ["Responsive Design", "SSR", "Performance Optimization", "SEO Strategy"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Technical Expertise
          </motion.h2>
          <motion.div 
             initial={{ opacity: 0, width: 0 }}
             whileInView={{ opacity: 1, width: 80 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
             className="h-1 bg-indigo-600 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 glass rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-slate-400 group-hover:text-slate-200 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/40"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
