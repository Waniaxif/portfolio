"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiAntdesign,
  SiCss,
  SiHtml5,
  SiGit,
  SiBootstrap,
  SiMysql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export default function SkillsPage() {
  const skills: Skill[] = [
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
    { name: "React", icon: <SiReact />, color: "text-cyan-400" },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "text-black dark:text-white",
    },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
    { name: "Ant Design", icon: <SiAntdesign />, color: "text-blue-400" },
    { name: "CSS3", icon: <SiCss />, color: "text-blue-600" },
    { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
    { name: "Git", icon: <SiGit />, color: "text-red-500" },
    { name: "REST API", icon: <TbApi />, color: "text-green-500" },
    { name: "VS Code", icon: <VscVscode />, color: "text-blue-500" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
    { name: "MySQL", icon: <SiMysql />, color: "text-blue-700" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  //   const containerVariants = {
  //     hidden: { opacity: 0 },
  //     show: {
  //       opacity: 1,
  //       transition: { staggerChildren: 0.1 },
  //     },
  //   };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <section className="min-h-screen pt-16 pb-20 px-14 md:px-8 flex flex-col items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl glass-panel rounded-3xl p-8 md:p-16"
      >
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase text-sm">
            What I work with
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Skills & Technologies
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies I use to build fast, accessible, and visually polished
            web experiences.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              // variants={itemVariants}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-blue-500/20 transition-all cursor-default"
            >
              <div className={`text-5xl ${skill.color} drop-shadow-md`}>
                {skill.icon}
              </div>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
