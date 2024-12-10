"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { cn } from "@/app/utlis/cn";
import { navLinks } from "@/app/utlis/constants";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export function Navbar() {
  const pathname = usePathname();

  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <motion.div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-between items-center bg-transparent backdrop-blur-md px-5 md:px-10 xl:px-20 py-4 sticky top-0 left-0 z-50  bg-opacity-10 transition-all group border-b border-zinc-700 max-w-7xl mx-auto"
      >
        <Logo />

        <div className="hidden xl:flex items-center justify-center space-x-6 text-center">
          {navLinks.map((items) => (
            <Link
              href="#"
              key={items.id}
              className={cn(
                `font-medium text-base text-slate-300/70 hover:text-stone-300 transition text-center`,
                pathname === items.link ? "text-stone-300" : ""
              )}
            >
              {items.label}
            </Link>
          ))}
          <Link href="#">
            <Button>Get Started Now</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <div onClick={handleSidebar} className="transition-all">
            {showSidebar ? (
              <X className="relative z-50 text-white" />
            ) : (
              <Menu className="relative z-50 text-white" />
            )}
          </div>

          {showSidebar && (
            <div className="transition-all flex flex-col absolute top-0 right-0 px-10 h-screen justify-center gap-5 bg-zinc-800 border-l  border-zinc-700  z-40 w-1/2 shadow-md  ">
              {navLinks.map((items) => (
                <Link
                  href={items.link}
                  key={items.id}
                  className="text-xl text-white"
                >
                  {items.label}
                </Link>
              ))}
              <Link href="#">
                <Button>Get Started Now</Button>
              </Link>
            </div>
          )}
        </div>
      </motion.nav>
    </motion.div>
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="text-3xl font-bold text-zinc-200 hover:text-stone-200 transition"
    >
      Zap<span className="text-white">Flow</span>
    </Link>
  );
}
