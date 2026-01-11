"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-screen flex flex-row bg-blue-300 items-center gap-1">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/">
          <h2 className="text-blue-500">
            Failsforce Service Desk (click to go home)
          </h2>
        </a>
        <div className="grow"></div>
        <button>Documentation</button>
        <button>Resources</button>
        <div className="grow"></div>
        <button onClick={() => (location.href = "/createticket")}>
          Create Ticket
        </button>
        <button onClick={() => (location.href = "/signup")}>Sign up</button>
        <button onClick={() => (location.href = "/login")}>Log in</button>
        <button onClick={() => (location.href = "/logout")}>Sign out</button>
      </div>
      <AnimatePresence>
        <motion.div className="bg-blue-300 fixed top-0 left-[50%] z-10 p-4">
          <h1>Menu</h1>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
