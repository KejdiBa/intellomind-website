export function GradientOrb() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <div className="absolute inset-0 animate-orb-float">
        <div className="relative w-full h-full animate-orb-scale">
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background: `
                radial-gradient(ellipse 100% 100% at 50% 50%, 
                  rgba(255, 255, 255, 0.2) 0%,
                  rgba(255, 255, 255, 0.1) 60%,
                  transparent 85%
                )
              `,
              boxShadow: `
                inset 0 0 60px rgba(255, 255, 255, 0.4),
                0 20px 60px rgba(34, 211, 238, 0.25),
                0 10px 30px rgba(168, 85, 247, 0.2)
              `,
              filter: "blur(1px)",
            }}
          >
            <div
              className="absolute inset-0 animate-orb-rotate-cw"
              style={{
                background: `
                  conic-gradient(
                    from 0deg at 50% 50%,
                    rgba(255, 255, 255, 0.95) 0deg,
                    rgba(34, 211, 238, 0.7) 40deg,
                    rgba(255, 255, 255, 0.8) 80deg,
                    rgba(168, 85, 247, 0.6) 120deg,
                    rgba(255, 255, 255, 0.85) 160deg,
                    rgba(110, 231, 183, 0.6) 200deg,
                    rgba(255, 255, 255, 0.9) 240deg,
                    rgba(56, 189, 248, 0.7) 280deg,
                    rgba(255, 255, 255, 0.85) 320deg,
                    rgba(255, 255, 255, 0.95) 360deg
                  )
                `,
              }}
            />

            <div
              className="absolute inset-0 animate-orb-rotate-ccw"
              style={{
                background: `
                  conic-gradient(
                    from 180deg at 40% 60%,
                    rgba(255, 255, 255, 0.7) 0deg,
                    rgba(110, 231, 183, 0.4) 60deg,
                    rgba(255, 255, 255, 0.8) 120deg,
                    rgba(34, 211, 238, 0.5) 180deg,
                    rgba(255, 255, 255, 0.7) 240deg,
                    rgba(168, 85, 247, 0.4) 300deg,
                    rgba(255, 255, 255, 0.7) 360deg
                  )
                `,
                mixBlendMode: "overlay",
              }}
            />

            <div
              className="absolute inset-4 rounded-full animate-orb-blob-cyan"
              style={{
                background: `
                  radial-gradient(ellipse 80% 80% at 30% 30%,
                    rgba(34, 211, 238, 0.8) 0%,
                    rgba(56, 189, 248, 0.5) 40%,
                    transparent 70%
                  )
                `,
                filter: "blur(10px)",
              }}
            />

            <div
              className="absolute inset-4 rounded-full animate-orb-blob-purple"
              style={{
                background: `
                  radial-gradient(ellipse 70% 70% at 70% 60%,
                    rgba(168, 85, 247, 0.8) 0%,
                    rgba(139, 92, 246, 0.5) 40%,
                    transparent 70%
                  )
                `,
                filter: "blur(12px)",
              }}
            />

            <div
              className="absolute inset-6 rounded-full animate-orb-blob-green"
              style={{
                background: `
                  radial-gradient(ellipse 60% 60% at 50% 70%,
                    rgba(110, 231, 183, 0.7) 0%,
                    rgba(34, 197, 94, 0.4) 40%,
                    transparent 70%
                  )
                `,
                filter: "blur(8px)",
              }}
            />

            <div
              className="absolute inset-4 rounded-full animate-orb-blob-white"
              style={{
                background: `
                  radial-gradient(ellipse 70% 70% at 50% 50%,
                    rgba(255, 255, 255, 1) 0%,
                    rgba(255, 255, 255, 0.7) 30%,
                    rgba(255, 255, 255, 0.3) 50%,
                    transparent 70%
                  )
                `,
                filter: "blur(5px)",
              }}
            />

            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `
                  radial-gradient(ellipse 100% 100% at 50% 50%,
                    transparent 50%,
                    rgba(0, 0, 0, 0.1) 80%,
                    rgba(0, 0, 0, 0.2) 100%
                  )
                `,
              }}
            />

            <div
              className="absolute top-[10%] left-[15%] w-[40%] h-[30%] rounded-full"
              style={{
                background: `
                  radial-gradient(ellipse at 50% 50%,
                    rgba(255, 255, 255, 0.9) 0%,
                    rgba(255, 255, 255, 0.5) 30%,
                    transparent 60%
                  )
                `,
                filter: "blur(4px)",
                transform: "rotate(-25deg)",
              }}
            />
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-[25%] rounded-full animate-orb-shadow"
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%,
              rgba(168, 85, 247, 0.3) 0%,
              rgba(34, 211, 238, 0.2) 40%,
              transparent 70%
            )
          `,
          filter: "blur(15px)",
        }}
      />
    </div>
  );
}
