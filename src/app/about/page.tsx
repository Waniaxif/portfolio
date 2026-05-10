"use client";

import React from "react";
import { Button } from "antd";
import { MdDownload, MdLocationOn, MdEmail, MdWork } from "react-icons/md";
import { motion } from "framer-motion";

export default function AboutPage() {
  const stats = [
    { title: "6+", subtitle: "Projects Done" },
    { title: "2+", subtitle: "Happy Clients" },
    { title: "100%", subtitle: "On-time Delivery" },
  ];

  return (
    <section className="min-h-screen pt-16 pb-14 px-4 md:px-8 flex flex-col items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl glass-panel rounded-3xl p-8 md:p-12"
      >
        <div className="text-center mb-10">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase text-sm">
            Get to know me
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            About Me
          </h1>
        </div>

        <div className="flex flex-col gap-8 text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-10">
          <p>
            Hi! I&#39;m Asif Wani, a passionate Frontend Developer based in
            Islamabad, Pakistan. I specialize in building fast, accessible, and
            visually polished web experiences using React and Next.js.
          </p>
          <p>
            I&#39;m currently available for freelance projects and actively
            expanding into full-stack development. Whether you need a landing
            page, a web app, or anything in between — I&#39;d love to work with
            you!
          </p>
        </div>

        {/* Personal Info List */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mb-12">
          <div className="flex items-center gap-3">
            <MdLocationOn className="text-2xl text-blue-500" />
            <span className="font-medium dark:text-gray-200">
              Islamabad, Pakistan
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MdEmail className="text-2xl text-blue-500" />
            <span className="font-medium dark:text-gray-200">
              asif@example.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MdWork className="text-2xl text-blue-500" />
            <span className="font-medium dark:text-gray-200">
              Open to opportunities
            </span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl p-6 text-center shadow-lg"
            >
              <h3 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
                {stat.title}
              </h3>
              <p className="font-medium text-gray-600 dark:text-gray-300">
                {stat.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex text-center items-center justify-center">
          <a
            href="/asif-wani-cv.pdf"
            download="Asif_Wani_Resume.pdf"
            className="w-full sm:w-auto"
          >
            <Button
              size="large"
              type="primary"
              shape="round"
              icon={<MdDownload size={20} />}
              className="h-14 px-10 text-lg bg-blue-600 hover:bg-blue-500 border-none shadow-lg shadow-blue-500/30"
            >
              Download Resume
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
