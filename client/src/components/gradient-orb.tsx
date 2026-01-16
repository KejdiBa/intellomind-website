import { motion } from "framer-motion";

export function GradientOrb() {
  return (
    <div className="relative w-44 h-44 md:w-56 md:h-56">
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
                  rgba(255, 255, 255, 0.1) 0%,
                  transparent 70%
                )
              `,
              boxShadow: `
                inset 0 0 80px rgba(255, 255, 255, 0.3),
                0 25px 80px rgba(34, 211, 238, 0.4),
                0 15px 40px rgba(168, 85, 247, 0.3)
              `,
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
                    rgba(34, 211, 238, 0.9) 0deg,
                    rgba(56, 189, 248, 0.8) 45deg,
                    rgba(168, 85, 247, 0.7) 90deg,
                    rgba(139, 92, 246, 0.8) 135deg,
                    rgba(34, 197, 94, 0.7) 180deg,
                    rgba(110, 231, 183, 0.8) 225deg,
                    rgba(255, 255, 255, 0.6) 270deg,
                    rgba(56, 189, 248, 0.8) 315deg,
                    rgba(34, 211, 238, 0.9) 360deg
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
                    rgba(168, 85, 247, 0.6) 0deg,
                    rgba(110, 231, 183, 0.5) 60deg,
                    rgba(255, 255, 255, 0.4) 120deg,
                    rgba(34, 211, 238, 0.6) 180deg,
                    rgba(139, 92, 246, 0.5) 240deg,
                    rgba(56, 189, 248, 0.6) 300deg,
                    rgba(168, 85, 247, 0.6) 360deg
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
              className="absolute inset-8 rounded-full"
              animate={{
                x: [0, -8, 10, -12, 0],
                y: [0, 12, -6, 8, 0],
                opacity: [0.6, 0.9, 0.5, 0.8, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: `
                  radial-gradient(ellipse 50% 50% at 60% 40%,
                    rgba(255, 255, 255, 0.9) 0%,
                    rgba(255, 255, 255, 0.4) 40%,
                    transparent 60%
                  )
                `,
                filter: "blur(6px)",
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
