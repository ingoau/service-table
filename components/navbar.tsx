"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { AIButton } from "./ai-button";

export default function Navbar() {
  const [documentationMenuOpen, setDocumentationMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);

  return (
    <>
      <div className="w-screen flex flex-row bg-blue-300 items-center gap-1">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/">
          <h2 className="text-blue-500">
            Failsforce Service Desk (click to go home)
          </h2>
        </a>
        <AIButton variant="expanded" text="Now with AI" />
        <div className="grow"></div>
        <button
          onClick={() => {
            setDocumentationMenuOpen(true);
          }}
        >
          Documentation
        </button>
        <button
          onClick={() => {
            setResourcesMenuOpen(true);
          }}
        >
          Resources
        </button>
        <div className="grow"></div>
        <button onClick={() => (location.href = "/createticket")}>
          Create Ticket
        </button>
        <button onClick={() => (location.href = "/signup")}>Sign up</button>
        <button onClick={() => (location.href = "/login")}>Log in</button>
        <button onClick={() => (location.href = "/logout")}>Sign out</button>
        <AIButton variant="circle" />
      </div>
      <AnimatePresence>
        {documentationMenuOpen && (
          <motion.div
            key="docs"
            className="bg-blue-400 fixed top-10 left-[50%] z-10 p-4"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
          >
            <h1>Documentation Menu</h1>
            <button
              onClick={() => {
                setDocumentationMenuOpen(false);
              }}
            >
              Close Menu
            </button>
          </motion.div>
        )}
        {resourcesMenuOpen && (
          <motion.div
            key="resources"
            className="bg-blue-400 fixed top-10 left-[50%] z-10 p-4"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
          >
            <h1>Resources Menu</h1>
            <div className="flex flex-col">
              <a href="https://downloadmoreram.com/">
                Download RAM because its too expensive
              </a>
              <a href="https://www.opera.com/gx">Download virus</a>
            </div>
            <button
              onClick={() => {
                setResourcesMenuOpen(false);
              }}
            >
              Close Menu
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
