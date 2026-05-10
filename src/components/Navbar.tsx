"use client";

import React from "react";
import Link from "next/link";
import { Button, Tooltip } from "antd";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "./ThemeProvider";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 px-6 py-4 ">
      <nav className="max-w-7xl mx-auto glass-panel rounded-2xl px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center text-xl font-bold tracking-tight hover:text-blue-600 hover:dark:text-blue-400"
        >
          <img className="h-8 w-12" src="/icon-192x192.png" alt="" />
          <span className="text-transparent bg-clip-text hover:text-blue-600 hover:dark:text-blue-400 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Asif Wani.
          </span>
        </Link>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-medium transition-colors
                ${
                  pathname === link.href
                    ? "text-blue-400 dark:text-blue-400 "
                    : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                }
              `}
            >
              {link.name}
              {/* Underline */}
              {pathname === link.href && (
                <span className="absolute left-0 -bottom-1.5 h-[4px] w-full bg-blue-300 dark:bg-blue-400 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Tooltip
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <Button
              shape="circle"
              variant="link"
              size="large"
              color={isDark ? "geekblue" : "gold"}
              type="link"
              icon={
                isDark ? <MdDarkMode size={20} /> : <MdLightMode size={20} />
              }
              onClick={toggleTheme}
              className="border-none bg-black/5 dark:bg-white/10 text-gray-700 dark:text-yellow-400 flex items-center justify-center"
            />
          </Tooltip>
          <Link href="/contact">
            <Button
              type="primary"
              size="large"
              shape="round"
              className="bg-blue-600 hover:bg-blue-500 border-none rounded-full px-8 font-semibold shadow-lg shadow-blue-500/30"
            >
              Hire Me
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
