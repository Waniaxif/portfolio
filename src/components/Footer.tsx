"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone, MdArrowUpward } from "react-icons/md";
import { Tooltip } from "antd";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const quickLinks = ["About", "Skills", "Services", "Projects", "Contact"];

  return (
    <footer className="relative py-16 px-6 md:px-12 text-gray-800 dark:text-gray-200 z-10">
      <div className="max-w-7xl mx-auto glass-panel rounded-3xl p-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section */}

        <div className=" space-y-4">
          <Link
            href="/"
            className="flex items-center text-2xl font-bold tracking-tight hover:text-blue-600 hover:dark:text-blue-400"
          >
            <img className="h-8 w-12" src="/icon-192x192.png" alt="" />
            <span className="text-transparent hover:text-blue-600 hover:dark:text-blue-400 bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Asif Wani.
            </span>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
            Frontend Developer building fast, accessible, and visually polished
            web experiences.
          </p>
          <div className="flex gap-4 mt-2">
            <Tooltip title="GitHub">
              <a
                href="https://github.com/waniaxif"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass-panel glass-panel-dark flex items-center justify-center hover:text-blue-500 hover:-translate-y-1 transition-all"
              >
                <FaGithub size={20} />
              </a>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <a
                href="https://linkedin.com/in/waniaxif"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass-panel glass-panel-dark flex items-center justify-center hover:text-blue-500 hover:-translate-y-1 transition-all"
              >
                <FaLinkedin size={20} />
              </a>
            </Tooltip>
            <Tooltip title="WhatsApp">
              <a
                href="https://wa.me/923365370284"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass-panel glass-panel-dark flex items-center justify-center hover:text-blue-500 hover:-translate-y-1 transition-all"
              >
                <FaWhatsapp size={20} />
              </a>
            </Tooltip>
            <Tooltip title="Email">
              <a
                href="mailto:khawaja.asif.wani@gmail.com"
                className="w-10 h-10 rounded-full glass-panel glass-panel-dark flex items-center justify-center hover:text-blue-500 hover:-translate-y-1 transition-all"
              >
                <MdEmail size={20} />
              </a>
            </Tooltip>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-4 md:items-center">
          <div>
            <h4 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-fit"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">
            Contact
          </h4>
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
            <MdEmail className="text-xl text-blue-500" />{" "}
            <a
              href="mailto:khawaja.asif.wani@gmail.com"
              className="hover:text-blue-500 transition-colors"
            >
              khawaja.asif.wani@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
            <MdPhone className="text-xl text-blue-500" />{" "}
            <span>+92 336 5370284</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
            <MdLocationOn className="text-xl text-blue-500" /> Islamabad,
            Pakistan
          </div>
        </div>
      </div>

      <Tooltip title="Scroll to Top" placement="left">
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 glass-panel glass-panel-dark rounded-full flex items-center justify-center text-gray-800 dark:text-white shadow-xl hover:-translate-y-2 transition-all z-50"
        >
          <MdArrowUpward size={24} />
        </button>
      </Tooltip>
    </footer>
  );
}
