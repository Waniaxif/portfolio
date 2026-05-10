"use client";

import React from "react";
import { Button } from "antd";
import { motion, Variants } from "framer-motion";
import { MdDownload, MdEmail } from "react-icons/md";
import Link from "next/link";

export default function HomePage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-panel p-10 md:p-16 rounded-[3rem] max-w-4xl w-full mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400 mb-2 tracking-wide uppercase"
        >
          Creative Frontend Developer
        </motion.h2>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white"
        >
          Hi, I am{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Asif Wani.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I build fast, accessible, and visually polished web experiences using
          React and Next.js. Currently expanding into full-stack development,
          specializing in scalable architectures with React, Next.js, and
          TypeScript.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="/asif-cv.pdf"
            download="Asif_Wani_Resume.pdf"
            className="w-full sm:w-auto"
          >
            <Button
              size="large"
              type="primary"
              shape="round"
              icon={<MdDownload size={20} />}
              className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-500 border-none shadow-lg shadow-blue-500/30 w-full sm:w-auto"
            >
              Download Resume
            </Button>
          </a>
          <Link href="/contact">
            <Button
              size="large"
              shape="round"
              icon={<MdEmail size={20} />}
              className="h-14 px-8 text-lg bg-white/50 dark:bg-black/30 dark:text-white border-gray-200 dark:border-white/20 hover:border-blue-500 dark:hover:border-blue-400 backdrop-blur-sm w-full sm:w-auto"
            >
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
