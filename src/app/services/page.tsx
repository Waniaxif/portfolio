"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MdWeb,
  MdDomain,
  MdCode,
  MdDevices,
  MdBugReport,
  MdApi,
} from "react-icons/md";

interface ServiceData {
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  points: string[];
}

export default function ServicesPage() {
  const services: ServiceData[] = [
    {
      num: "01",
      title: "Landing Pages",
      description:
        "High-converting, visually stunning landing pages designed to capture attention and drive user action.",
      icon: <MdWeb size={40} />,
      points: [
        "Fast loading speeds",
        "Engaging animations",
        "SEO optimized structure",
      ],
    },
    {
      num: "02",
      title: "Business Websites",
      description:
        "Professional multi-page websites tailored to your brand identity, showcasing your services elegantly.",
      icon: <MdDomain size={40} />,
      points: ["Custom branding", "CMS integration", "Contact & lead forms"],
    },
    {
      num: "03",
      title: "React & Next.js Apps",
      description:
        "Complex, interactive web applications built with modern frameworks for ultimate scalability.",
      icon: <MdCode size={40} />,
      points: ["State management", "Server-side rendering", "Dynamic routing"],
    },
    {
      num: "04",
      title: "Responsive Design",
      description:
        "Pixel-perfect designs that adapt flawlessly to mobile, tablet, and desktop screens.",
      icon: <MdDevices size={40} />,
      points: [
        "Mobile-first approach",
        "Fluid typography",
        "Cross-browser testing",
      ],
    },
    {
      num: "05",
      title: "Bug Fixing & Audits",
      description:
        "Resolving UI glitches, performance bottlenecks, and logic errors in existing codebases.",
      icon: <MdBugReport size={40} />,
      points: [
        "Performance profiling",
        "Code refactoring",
        "Accessibility improvements",
      ],
    },
    {
      num: "06",
      title: "API Integration",
      description:
        "Connecting your front-end seamlessly with third-party services, databases, and custom backend systems.",
      icon: <MdApi size={40} />,
      points: [
        "REST API handling",
        "Secure data fetching",
        "Real-time updates",
      ],
    },
  ];

  return (
    <section className="min-h-screen pt-16 pb-14 px-4 md:px-8 flex flex-col items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl glass-panel rounded-3xl p-8 md:p-16"
      >
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase text-sm"
          >
            What I offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4"
          >
            My Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto"
          >
            From landing pages to full React applications — I build what your
            business needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel glass-panel-dark rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-300"
            >
              {/* Background Big Number */}
              <div className="absolute -top-6 -right-4 text-9xl font-black text-gray-200/50 dark:text-gray-800/30 group-hover:text-blue-100/50 dark:group-hover:text-blue-900/20 transition-colors z-0 select-none">
                {service.num}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[4.5rem]">
                  {service.description}
                </p>

                <div className="w-full h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent dark:from-white/10 dark:via-white/20 dark:to-transparent mb-6" />

                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
