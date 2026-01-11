"use client";

import { AIButton } from "@/components/ai-button";
import { useState } from "react";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleAIClick = () => {
    setClickCount((prev) => prev + 1);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 pt-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            AI Button Component
          </h1>
          <p className="text-gray-300 text-lg">
            Beautiful, animated AI buttons with two variants
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Expanded Variant */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Expanded Variant
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                <AIButton
                  variant="expanded"
                  text="Ask AI"
                  onClick={handleAIClick}
                />
                <p className="text-gray-300 text-sm">Default</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <AIButton
                  variant="expanded"
                  text="Generate Content"
                  onClick={handleAIClick}
                />
                <p className="text-gray-300 text-sm">Custom Text</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <AIButton
                  variant="expanded"
                  text="Processing..."
                  disabled={true}
                />
                <p className="text-gray-300 text-sm">Disabled State</p>
              </div>
            </div>
          </div>

          {/* Circle Variant */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Circle Variant
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                <AIButton variant="circle" onClick={handleAIClick} />
                <p className="text-gray-300 text-sm">Default</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <AIButton
                  variant="circle"
                  onClick={handleAIClick}
                  className="scale-125"
                />
                <p className="text-gray-300 text-sm">Larger Size</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <AIButton variant="circle" disabled={true} />
                <p className="text-gray-300 text-sm">Disabled State</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">
            Interactive Demo
          </h2>
          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-6 flex-wrap justify-center">
              <AIButton
                variant="expanded"
                text={isLoading ? "Thinking..." : "Ask AI Assistant"}
                onClick={handleAIClick}
                disabled={isLoading}
              />
              <AIButton
                variant="circle"
                onClick={handleAIClick}
                disabled={isLoading}
              />
            </div>

            <div className="text-center">
              <p className="text-white text-xl mb-2">
                Button clicked:{" "}
                <span className="font-bold text-purple-300">{clickCount}</span>{" "}
                times
              </p>
              {isLoading && (
                <p className="text-purple-300 animate-pulse">
                  AI is thinking...
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="text-white font-semibold mb-2">Smooth Animations</h3>
            <p className="text-gray-400 text-sm">
              Framer Motion powered animations with hover and press effects
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-white font-semibold mb-2">
              Beautiful Gradients
            </h3>
            <p className="text-gray-400 text-sm">
              Eye-catching gradient backgrounds with shimmer effects
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-white font-semibold mb-2">Two Variants</h3>
            <p className="text-gray-400 text-sm">
              Choose between expanded with text or compact circle variant
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
