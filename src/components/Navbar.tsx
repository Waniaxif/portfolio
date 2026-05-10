"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, Tooltip, Drawer } from "antd";
import {
  MdDarkMode,
  MdLightMode,
  MdMenu,
  MdClose,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { useTheme } from "./ThemeProvider";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MenuFoldOutlined } from "@ant-design/icons";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto glass-panel rounded-2xl px-6 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center text-xl font-bold tracking-tight"
        >
          <img className="h-8 w-12 mr-2" src="/icon-192x192.png" alt="Logo" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Asif Wani.
          </span>
        </Link>

        {/* Desktop Links (STRICTLY HIDDEN ON MOBILE/TABLET) */}
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-medium transition-colors
                ${pathname === link.href ? "text-blue-600 dark:text-blue-400" : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"}
              `}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute left-0 -bottom-1.5 h-[4px] w-full bg-blue-500 dark:bg-blue-400 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Button
            shape="circle"
            size="large"
            type="text"
            icon={isDark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            onClick={toggleTheme}
            className="border-none bg-black/5 dark:bg-white/10 text-gray-700 dark:text-yellow-400 flex items-center justify-center"
          />

          <Link href="/contact" className="hidden lg:block">
            <Button
              type="primary"
              size="large"
              shape="round"
              className="bg-blue-600 hover:bg-blue-500 border-none px-8 font-semibold shadow-lg"
            >
              Hire Me
            </Button>
          </Link>

          {/* Hamburger Menu - FORCED HIDDEN ON DESKTOP */}
          <Button
            className="lg:!hidden border-none bg-transparent dark:text-white flex items-center justify-center p-0"
            icon={<MdMenu size={28} />}
            type="text"
            onClick={() => setOpen(!open)}
          />
        </div>
      </nav>

      {/* Smooth Top Dropdown Drawer */}
      <Drawer
        placement="top"
        onClose={() => setOpen(false)}
        open={open}
        size="auto"
        closable={false}
        className="lg:!hidden !bg-white/80 dark:!bg-slate-950/80 !backdrop-blur-2xl border-b border-white/20"
        styles={{
          body: { padding: "1.5rem 0 1rem 0" },
          mask: { background: "transparent" },
        }}
        // Smoothly animate the entry/exit
        motion={{
          motionAppear: true,
          motionEnter: true,
          motionLeave: true,
        }}
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-5 items-center w-full px-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="w-full text-center"
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-xl font-bold block py-2 ${pathname === link.href ? "text-blue-600 dark:text-blue-400" : "text-gray-800 dark:text-gray-200"}`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="w-1/2 max-w-xs mt-2"
            >
              <Button
                type="primary"
                block
                shape="round"
                size="large"
                className="bg-blue-600 border-none rounded-xl h-12 text-lg font-bold"
              >
                Hire Me
              </Button>
            </Link>
          </div>

          {/* Glassmorphed Up Arrow Button to close */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(false)}
            className="mt-8 mb-2 w-22 h-12 flex items-center justify-center rounded-2xl glass-panel border border-white/30 dark:border-white/10 shadow-lg text-gray-800 dark:text-white hover:bg-white/20 transition-colors"
          >
            <MdKeyboardArrowUp size={30} />
          </motion.button>
        </div>
      </Drawer>
    </header>
  );
}
