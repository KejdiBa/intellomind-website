import { motion } from "framer-motion";

export function GradientOrb() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <motion.div
        className="absolute inset-0"
        animate={{
          y: [0, -20, 5, -15, 0],
          x: [0, 8, -5, 10, 0],
          rotate: [0, 8, -5, 6, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{
            scale: [1, 1.06, 0.98, 1.04, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
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
            <motion.div
              className="absolute inset-0"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
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

            <motion.div
              className="absolute inset-0"
              animate={{
                rotate: [360, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
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

            <motion.div
              className="absolute inset-4 rounded-full"
              animate={{
                x: [0, 15, -10, 12, 0],
                y: [0, -12, 8, -8, 0],
                scale: [1, 1.15, 0.9, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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

            <motion.div
              className="absolute inset-4 rounded-full"
              animate={{
                x: [0, -12, 15, -8, 0],
                y: [0, 10, -15, 12, 0],
                scale: [1, 0.9, 1.2, 0.95, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
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

            <motion.div
              className="absolute inset-6 rounded-full"
              animate={{
                x: [0, 10, -8, 5, 0],
                y: [0, -8, 12, -10, 0],
                scale: [1, 1.1, 0.95, 1.05, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
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

            <motion.div
              className="absolute inset-4 rounded-full"
              animate={{
                x: [0, -8, 10, -12, 0],
                y: [0, 12, -6, 8, 0],
                opacity: [0.7, 1, 0.6, 0.9, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-[25%] rounded-full"
        animate={{
          scale: [1, 1.1, 0.95, 1.05, 1],
          opacity: [0.4, 0.5, 0.35, 0.45, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
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
