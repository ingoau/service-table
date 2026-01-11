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
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        padding: "2rem",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            paddingTop: "3rem",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #c084fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI Button Component
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.25rem", fontWeight: 300 }}>
            Beautiful, animated AI buttons with premium effects
          </p>
        </div>

        {/* Interactive Showcase */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
            backdropFilter: "blur(20px)",
            borderRadius: "2rem",
            padding: "4rem 3rem",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            marginBottom: "3rem",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: "2.5rem",
              textAlign: "center",
            }}
          >
            Interactive Demo
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "2rem",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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

            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                Button clicked:{" "}
                <span
                  style={{
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #a78bfa, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {clickCount}
                </span>{" "}
                times
              </p>
              {isLoading && (
                <p
                  style={{
                    color: "#c084fc",
                    fontSize: "1rem",
                    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  }}
                >
                  ✨ AI is thinking...
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Variants Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {/* Expanded Variant */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              borderRadius: "1.5rem",
              padding: "2.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#ffffff",
                marginBottom: "2rem",
              }}
            >
              Expanded Variant
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <AIButton
                  variant="expanded"
                  text="Ask AI"
                  onClick={handleAIClick}
                />
                <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
                  Default
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <AIButton
                  variant="expanded"
                  text="Generate Content"
                  onClick={handleAIClick}
                />
                <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
                  Custom Text
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <AIButton
                  variant="expanded"
                  text="✨ Magic Mode"
                  onClick={handleAIClick}
                />
                <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
                  With Emoji
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <AIButton
                  variant="expanded"
                  text="Processing..."
                  disabled={true}
                />
                <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
                  Disabled State
                </p>
              </div>
            </div>
          </div>

          {/* Circle Variant */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              borderRadius: "1.5rem",
              padding: "2.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#ffffff",
                marginBottom: "2rem",
              }}
            >
              Circle Variant
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <AIButton variant="circle" onClick={handleAIClick} />
                <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
                  Default Size
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <AIButton
                  variant="circle"
                  onClick={handleAIClick}
                  className="scale-125"
                />
                <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
                  Scaled 1.25x
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <AIButton
                  variant="circle"
                  onClick={handleAIClick}
                  className="scale-150"
                />
                <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
                  Scaled 1.5x
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <AIButton variant="circle" disabled={true} />
                <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
                  Disabled State
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(10px)",
              borderRadius: "1rem",
              padding: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✨</div>
            <h3
              style={{
                color: "#ffffff",
                fontWeight: 600,
                marginBottom: "0.75rem",
                fontSize: "1.125rem",
              }}
            >
              Premium Animations
            </h3>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.875rem",
                lineHeight: "1.6",
              }}
            >
              Framer Motion powered with shimmer, glow, and particle effects
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(10px)",
              borderRadius: "1rem",
              padding: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎨</div>
            <h3
              style={{
                color: "#ffffff",
                fontWeight: 600,
                marginBottom: "0.75rem",
                fontSize: "1.125rem",
              }}
            >
              Beautiful Gradients
            </h3>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.875rem",
                lineHeight: "1.6",
              }}
            >
              Premium purple-to-indigo gradients with glass morphism
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(10px)",
              borderRadius: "1rem",
              padding: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>⚡</div>
            <h3
              style={{
                color: "#ffffff",
                fontWeight: 600,
                marginBottom: "0.75rem",
                fontSize: "1.125rem",
              }}
            >
              Two Variants
            </h3>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.875rem",
                lineHeight: "1.6",
              }}
            >
              Expanded with text or compact circle with dynamic scaling
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(10px)",
              borderRadius: "1rem",
              padding: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>💎</div>
            <h3
              style={{
                color: "#ffffff",
                fontWeight: 600,
                marginBottom: "0.75rem",
                fontSize: "1.125rem",
              }}
            >
              Premium Glow
            </h3>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.875rem",
                lineHeight: "1.6",
              }}
            >
              Outer glow effects and inner highlights for depth
            </p>
          </div>
        </div>
      </div>

      {/* Add keyframe animation for pulse */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
