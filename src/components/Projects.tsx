"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Layout, Globe } from "lucide-react";
import Image from "next/image";


const projects = [
  {
    title: "Jumunona E-commerce (Web and Admin)",
    category: "E-commerce (Next.js)",
    description: "High-performance e-commerce platform with product listings, cart, and secure authentication. Admin panel for managing products, orders, and users.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "SSR", "Real-time Chat", "Tailwind"],
    demo: "https://www.jumunona.com"
  },
  {
    title: "BuddyPaws*(Web and Admin Panel)*",
    category: "Web App (Next.js)",
    description: "Social platform for pet owners featuring profile matching and interactive community features.",
    image: "/buddy-paws.webp",
    tech: ["Next.js", "Form", "Tailwind"],
    demo: "https://buddypaws.co"
  },
  {
    title: "Uniref Website",
    category: "Showcase (Next.js)",
    description: "Professional website for cold storage solutions focusing on navigation and speed.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "SSR", "Responsive", "CSS"],
    demo: "https://unirefindia.com/"
  },
  {
    title: "Techanic Infotech",
    category: "Corporate (Next.js)",
    description: "Modern corporate website for a tech consulting firm using mobile-first strategies.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "Mobile-First", "Animations", "UI/UX"],
    demo: "https://techanicinfotech.com/"
  },
  {
    title: "Mantez Foodworks",
    category: "Food & Restaurant (Next.js)",
    description: "Full-featured food ordering website for a restaurant brand with menu showcase, online ordering, and responsive design.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "Responsive", "UI/UX", "Tailwind"],
    demo: "https://www.mantezfoodworks.com/"
  },
  {
    title: "Solaronn",
    category: "Energy (Hostinger)",
    description: "Professional website for a solar energy company showcasing products, services, and sustainable energy solutions.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
    tech: ["HTML", "CSS", "JavaScript", "Responsive", "UI/UX", "Tailwind"],
    demo: "https://solaronn.com/"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-indigo-600 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-3xl aspect-[16/10] border border-white/5 shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <a href={project.demo} target="_blank" className="px-8 py-3 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/20">
                      Live Demo <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
