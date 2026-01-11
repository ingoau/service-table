"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { AIButton } from "./ai-button";
import SearchBox from "./searchbox";
import { useTheme } from "next-themes";
import Button from "@mui/material/Button";
import { Button as AntdButton } from "antd";

export default function Navbar() {
  const [documentationMenuOpen, setDocumentationMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  return (
    <>
      <div className="w-screen flex flex-row bg-blue-300 items-center gap-1 flex-wrap sticky top-0">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/">
          <h2 className="text-blue-500">
            Failsforce Service Table (click to go home)
          </h2>
        </a>
        <AIButton variant="expanded" text="Now with AI" />
        <div className="grow"></div>
        <SearchBox />
        <div className="grow"></div>
        <AntdButton
          onClick={() => {
            setDocumentationMenuOpen(true);
          }}
        >
          Documentation
        </AntdButton>
        <AntdButton
          onClick={() => {
            setResourcesMenuOpen(true);
          }}
        >
          Resources
        </AntdButton>
        <div className="grow"></div>
        <button onClick={() => (location.href = "/createticket")}>
          Create Ticket
        </button>
        <button onClick={() => (location.href = "/signup")}>Sign up</button>
        <button onClick={() => (location.href = "/login")}>Log in</button>
        <button onClick={() => (location.href = "/logout")}>Sign out</button>
        <Button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          variant="contained"
          suppressHydrationWarning
        >
          {theme === "light" ? "Light mode" : "Dark mode"}
        </Button>
        <AIButton variant="circle" />
      </div>
      <AnimatePresence>
        {documentationMenuOpen && (
          <motion.div
            key="docs"
            className="bg-blue-400 fixed top-10 left-[50%] p-4 flex flex-col z-20"
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            exit={{ y: -150 }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
          >
            <h1>Documentation</h1>
            As of 2025, we’ve swapped traditional docs for an AI chat
            experience—because getting help shouldn’t feel like a treasure hunt
            through endless pages 🗺️📚. Instead of guessing the right search
            term, you can just ask what you need in plain language and get a
            clear, step-by-step answer tailored to your situation 🧠💬. Need the
            quick version? You’ll get it ⚡. Want the deeper dive with examples
            and edge cases? The chat can go there too 🔎🧩. It can also point
            you to the underlying references when you want to double-check
            details or share something with your team 🔗✅. The best part: every
            question helps us improve—common “wait, what?” moments show up
            immediately, so we can fix gaps, update guidance, and make the whole
            experience smoother over time 🛠️📈. Bottom line: less searching,
            more doing 🚀😄.
            <AIButton />
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
            className="bg-blue-400 fixed top-10 left-[50%] p-4 z-20"
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            exit={{ y: -150 }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
          >
            <div className="flex flex-row gap-2">
              {" "}
              <h1>Resources Menu</h1> <AIButton />
            </div>
            <div className="flex flex-col gap-2 py-4">
              <a href="https://downloadmoreram.com/">
                Download RAM because its too expensive
              </a>
              <a href="https://www.opera.com/gx">Download virus</a>
              <a href="/ai">AI</a>
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
