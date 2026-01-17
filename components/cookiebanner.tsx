"use client";

import { motion } from "motion/react";

export default function CookieBanner() {
  return (
    <motion.div className="bg-red-500 p-10">
      <h1>We use cookies to improve your experience!</h1>
      Your privacy is our priority, so it is your choice to agree or decline.
      <br />
      <button className="p-10 text-4xl">Agree</button>
      <button className="text-xs bg-transparent border-0 outline-0">
        Manage preferences
      </button>
    </motion.div>
  );
}
