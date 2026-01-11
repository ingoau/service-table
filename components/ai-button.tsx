"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export interface AIButtonProps {
  variant?: "expanded" | "circle";
  text?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function AIButton({
  variant = "expanded",
  text = "Ask AI",
  onClick,
  className = "",
  disabled = false,
}: AIButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const isExpanded = variant === "expanded";

  return (
    <motion.button
      className={`
        relative overflow-hidden
        ${isExpanded ? "px-6 py-3 rounded-full" : "w-14 h-14 rounded-full"}
        bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600
        text-white font-semibold
        shadow-lg hover:shadow-xl
        transition-shadow duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={{
        border: "none",
        outline: "none",
        margin: 0,
        padding: isExpanded ? "0.75rem 1.5rem" : 0,
        appearance: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
      }}
      onClick={onClick}
      disabled={disabled}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => setIsPressed(true)}
      onTap={() => setIsPressed(false)}
      onTapCancel={() => setIsPressed(false)}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0"
        animate={{
          opacity: isHovered ? 0.3 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
        animate={{
          x: isHovered ? ["-100%", "100%"] : "-100%",
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: "linear",
        }}
      />

      {/* Particle effects */}
      {isPressed && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: isExpanded ? "50%" : "50%",
                y: isExpanded ? "50%" : "50%",
                opacity: 1,
              }}
              animate={{
                x: `${50 + Math.cos((i * Math.PI) / 3) * 100}%`,
                y: `${50 + Math.sin((i * Math.PI) / 3) * 100}%`,
                opacity: 0,
              }}
              transition={{ duration: 0.6 }}
            />
          ))}
        </>
      )}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        {/* AI Sparkle Icon */}
        <motion.svg
          width={isExpanded ? "20" : "24"}
          height={isExpanded ? "20" : "24"}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            rotate: isHovered ? [0, 10, -10, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 0.5,
          }}
        >
          <motion.path
            d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
            fill="currentColor"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 1,
              repeat: isHovered ? Infinity : 0,
            }}
          />
          <motion.path
            d="M19 4L19.5 6.5L22 7L19.5 7.5L19 10L18.5 7.5L16 7L18.5 6.5L19 4Z"
            fill="currentColor"
            animate={{
              opacity: isHovered ? [0.5, 1, 0.5] : 0.7,
            }}
            transition={{
              duration: 1.5,
              repeat: isHovered ? Infinity : 0,
            }}
          />
          <motion.path
            d="M19 18L19.5 20.5L22 21L19.5 21.5L19 24L18.5 21.5L16 21L18.5 20.5L19 18Z"
            fill="currentColor"
            animate={{
              opacity: isHovered ? [0.7, 1, 0.7] : 0.5,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
            }}
          />
        </motion.svg>

        {/* Text (only in expanded variant) */}
        {isExpanded && (
          <motion.span
            className="text-sm font-semibold tracking-wide"
            animate={{
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
            }}
          >
            {text}
          </motion.span>
        )}
      </div>

      {/* Pulsing ring effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white"
        animate={{
          scale: isHovered ? [1, 1.2, 1.2] : 1,
          opacity: isHovered ? [0.5, 0, 0] : 0,
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
        }}
      />
    </motion.button>
  );
}
