export function GradientOrb() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <div className="absolute inset-0 animate-orb-float">
        <div className="relative w-full h-full animate-orb-scale">
          <div
            className="absolute inset-0"
            style={{
              borderRadius: "50%",
              clipPath: "circle(50%)",
              WebkitMaskImage: "-webkit-radial-gradient(white, black)",
              willChange: "transform",
              isolation: "isolate",
              background: `radial-gradient(ellipse 100% 100% at 50% 50%,
                rgba(255, 255, 255, 0.95) 0%,
                rgba(255, 255, 255, 0.6) 35%,
                rgba(200, 220, 255, 0.3) 65%,
                transparent 85%
              )`,
              boxShadow: `
                inset 0 0 40px rgba(255, 255, 255, 0.8),
                0 20px 60px rgba(34, 211, 238, 0.2),
                0 10px 30px rgba(168, 85, 247, 0.15)
              `,
            }}
          >
            {/* Cyan blob – upper left */}
            <div
              className="absolute inset-2 rounded-full animate-orb-blob-cyan"
              style={{
                background: `radial-gradient(ellipse 90% 90% at 25% 25%,
                  rgba(34, 211, 238, 0.65) 0%,
                  rgba(125, 211, 252, 0.45) 40%,
                  transparent 70%
                )`,
                filter: "blur(8px)",
              }}
            />

            {/* Purple blob – lower right */}
            <div
              className="absolute inset-2 rounded-full animate-orb-blob-purple"
              style={{
                background: `radial-gradient(ellipse 80% 80% at 72% 65%,
                  rgba(192, 132, 252, 0.55) 0%,
                  rgba(168, 85, 247, 0.35) 45%,
                  transparent 70%
                )`,
                filter: "blur(10px)",
              }}
            />

            {/* Soft green/mint accent */}
            <div
              className="absolute inset-6 rounded-full animate-orb-blob-green"
              style={{
                background: `radial-gradient(ellipse 70% 70% at 55% 70%,
                  rgba(167, 243, 208, 0.4) 0%,
                  rgba(110, 231, 183, 0.2) 50%,
                  transparent 70%
                )`,
                filter: "blur(8px)",
              }}
            />

            {/* Bright white center glow */}
            <div
              className="absolute inset-4 rounded-full animate-orb-blob-white"
              style={{
                background: `radial-gradient(ellipse 80% 80% at 45% 40%,
                  rgba(255, 255, 255, 1) 0%,
                  rgba(255, 255, 255, 0.8) 25%,
                  rgba(255, 255, 255, 0.3) 55%,
                  transparent 75%
                )`,
                filter: "blur(4px)",
              }}
            />

            {/* Specular highlight – top-left glint */}
            <div
              className="absolute top-[8%] left-[12%] w-[38%] h-[28%] rounded-full"
              style={{
                background: `radial-gradient(ellipse at 50% 50%,
                  rgba(255, 255, 255, 0.95) 0%,
                  rgba(255, 255, 255, 0.5) 35%,
                  transparent 65%
                )`,
                filter: "blur(3px)",
                transform: "rotate(-20deg)",
              }}
            />

            {/* Edge darkening for depth */}
            <div
              className="absolute inset-0"
              style={{
                borderRadius: "50%",
                background: `radial-gradient(ellipse 100% 100% at 50% 50%,
                  transparent 55%,
                  rgba(100, 80, 180, 0.08) 78%,
                  rgba(80, 60, 160, 0.15) 100%
                )`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Ground shadow */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-[25%] rounded-full animate-orb-shadow"
        style={{
          background: `radial-gradient(ellipse at 50% 50%,
            rgba(168, 85, 247, 0.25) 0%,
            rgba(34, 211, 238, 0.15) 40%,
            transparent 70%
          )`,
          filter: "blur(15px)",
        }}
      />
    </div>
  );
}
