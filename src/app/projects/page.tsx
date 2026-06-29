"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button, Tooltip } from "antd";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  labels: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string; // Added image property
}

export default function ProjectsPage() {
  // 5 placeholder projects for you to fill in later
  const projects: Project[] = [
    {
      id: 1,
      title: "Restaurant Website",
      description:
        "A comprehensive Restaurant Website for managing and ordering the food. Features real-time display and checkout system.",
      labels: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      githubUrl: "https://restaurant-os-kohl.vercel.app/",
      liveUrl: "https://restaurant-os-kohl.vercel.app/",
      imageUrl: "/restaurant-os.png", // Update this path to your Vercel screenshot in the public folder
    },
    // {
    //   id: 2,
    //   title: "Portfolio Template V1",
    //   description:
    //     "A highly customizable and animated portfolio template designed for creative professionals.",
    //   labels: ["React", "Framer Motion", "CSS Modules"],
    //   githubUrl: "#",
    //   liveUrl: "#",
    // },
    // {
    //   id: 3,
    //   title: "Real Estate Property Finder",
    //   description:
    //     "A platform allowing users to search, filter, and view property listings with integrated map services.",
    //   labels: ["Next.js", "Ant Design", "REST API"],
    //   githubUrl: "#",
    //   liveUrl: "#",
    // },
    // {
    //   id: 4,
    //   title: "Task Management App",
    //   description:
    //     "A drag-and-drop Kanban board application for teams to collaborate and track project progress.",
    //   labels: ["React", "TypeScript", "Tailwind CSS"],
    //   githubUrl: "#",
    //   liveUrl: "#",
    // },
    // {
    //   id: 5,
    //   title: "Healthcare Booking System",
    //   description:
    //     "A patient portal for booking appointments, viewing medical history, and contacting doctors.",
    //   labels: ["Next.js", "Node.js", "MySQL"],
    //   githubUrl: "#",
    //   liveUrl: "#",
    // },
  ];

  return (
    <section className="min-h-screen pt-16 pb-14 px-4 md:px-8 flex flex-col items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl glass-panel rounded-3xl p-8 md:p-12"
      >
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-600  dark:text-blue-400 font-semibold tracking-widest uppercase text-sm"
          >
            What I have built
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4"
          >
            Featured Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto"
          >
            A selection of my best work — hover over any project to see the full
            details and live links.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel glass-panel-dark rounded-3xl overflow-hidden flex flex-col h-full group"
            >
              {/* Display Area (Image / Placeholder) */}
              <div className="relative h-60 w-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 flex items-center justify-center overflow-hidden">
                {/* Dynamically render the image if it exists */}
                {project.imageUrl && (
                  <Image
                    width={500}
                    height={300}
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                )}

                {/* <span className=" text-blue-500/50 dark:text-blue-300/30 font-bold text-2xl tracking-widest">
                  COMING SOON
                </span> */}

                {/* Hover Overlay with Buttons */}
                <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                  {/* Eye Button now links directly to liveUrl with updated tooltip */}
                  <Tooltip title="Live Preview ">
                    <Button
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      type="default"
                      shape="round"
                      icon={<FaEye />}
                      size="large"
                      className="!bg-white !text-black border-none hover:!text-green-600 font-medium flex items-center justify-center "
                    />
                  </Tooltip>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="group-hover:opacity-100 group-hover:y-0 transition-all duration-300 delay-75"
                  >
                    {/* <Tooltip title="Live Preview ">
                      <Button
                        type="default"
                        shape="round"
                        icon={<FaEye />}
                        size="large"
                        className="!bg-white !text-black border-none hover:!text-green-600 font-medium flex items-center justify-center "
                      />
                    </Tooltip> */}
                  </motion.a>

                  {/* <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="group-hover:opacity-100 group-hover:y-0 transition-all duration-300 delay-100"
                  >
                    <Button
                      type="default"
                      shape="round"
                      icon={<FaGithub />}
                      size="large"
                      className="bg-white text-black border-none hover:text-blue-600 font-medium"
                    >
                      Code
                    </Button>
                  </motion.a> */}

                  {/* <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="group-hover:opacity-100  group-hover:y-0 transition-all duration-300 delay-150"
                  >
                    <Button
                      type="primary"
                      shape="round"
                      icon={<FaExternalLinkAlt />}
                      size="large"
                      className="bg-blue-600 hover:bg-blue-500 border-none font-medium"
                    >
                      Live Preview
                    </Button>
                  </motion.a> */}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Labels / Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.labels.map((label, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/40 rounded-full border border-blue-200 dark:border-blue-800/50"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
