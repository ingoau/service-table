"use client";

import { motion } from "motion/react";
import { useState } from "react";
import posthog from "posthog-js";

export default function Newsletter() {
  const [show, setShow] = useState(true);
  if (show)
    return (
      <motion.div
        initial={{ x: 800 }}
        animate={{ x: 0 }}
        transition={{ duration: 10, delay: 5, ease: "linear" }}
        className="fixed bottom-0 right-0 bg-white p-5 z-100 max-w-xl border-20 border-black!"
      >
        <h1>Subscribe to our newsletter</h1>
        <p>
          {/*Start AI generated*/}
          Tired of the internet yelling at you 24/7? 😅 Let us do the digging
          and send you the good bits. Subscribe to our newsletter and get a fun,
          bite-sized inbox treat 📬—packed with the most interesting updates,
          genuinely useful tips, and the kind of behind-the-scenes stuff you’d
          normally have to stalk three platforms to find 👀. Think: less
          doomscrolling, more “ohhh that’s handy” 💡. No spam, no nonsense, no
          random coupon chaos. Just a friendly note from us, delivered on
          schedule, with a one-click escape hatch anytime 🧼✨ Hit subscribe and
          come hang out 😄🎉
          {/*End AI generated*/}
        </p>
        <input
          type="text"
          placeholder="Enter your Email Address in this text field"
        />
        <button
          className="w-full text-xl p-4"
          onClick={() => {
            posthog.capture("newsletter_subscribed");
            alert("Something went wrong");
            setShow(false);
          }}
        >
          Subscribe
        </button>
        <button
          className="text-sm bg-transparent border-0 outline-0"
          onClick={() => {
            posthog.capture("newsletter_dismissed");
            setShow(false);
            setTimeout(() => {
              setShow(true);
            }, 1000);
          }}
        >
          close
        </button>
      </motion.div>
    );
  if (!show) return null;
}
