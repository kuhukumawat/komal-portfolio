"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = ["Front-End Developer", "Next.js Specialist", "UI/UX Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));
        setTypingSpeed(100);
      } else {
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayedRole === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedRole === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6 inline-block">
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Hi, I'm <br />
            <span
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600"
              style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}
            >
              Komal Kumawat
            </span>
          </h1>
          <div className="h-10 mb-8">
            <span className="text-xl md:text-2xl text-slate-400 font-medium">
              I am a <span className="text-white border-r-2 border-indigo-500 pr-1">{displayedRole}</span>
            </span>
          </div>
          <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
            With 1 year and 9 months of experience building high-performance, responsive web applications using React.js, Next.js, and Tailwind CSS.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] active:scale-95"
            >
              View My Work <ArrowRight size={20} />
            </Link>
            <a
              href="/Komal_Kumawat_Resume.pdf"
              download
              className="px-8 py-4 rounded-2xl bg-slate-800 text-white font-bold flex items-center gap-2 hover:bg-slate-700 transition-all active:scale-95 border border-slate-700"
            >
              Download CV <Download size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative hidden md:block"
        >
          <div className="relative bg-slate-900 rounded-full overflow-hidden aspect-square flex items-center justify-center p-6 sm:p-8 border border-white/10 shadow-xl">
            <div className="w-full h-full rounded-full bg-slate-800/50 flex items-center justify-center relative overflow-hidden ring-1 ring-white/5">
              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/5 blur-[80px] rounded-full"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="/me.png"
                  alt="Komal Kumawat"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>

              <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-[85%] sm:w-3/4 p-3 sm:p-4 glass rounded-xl border border-white/10 z-10">
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-300 whitespace-nowrap">Currently building web experiences</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
