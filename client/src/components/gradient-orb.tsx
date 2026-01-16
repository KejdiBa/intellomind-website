import { motion } from "framer-motion";

export function GradientOrb() {
  return (
    <div className="relative w-40 h-40 md:w-52 md:h-52">
      <motion.div
        className="absolute inset-0"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 5, -3, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 120% 80% at 30% 20%, 
                  rgba(255, 255, 255, 0.9) 0%, 
                  rgba(255, 255, 255, 0.4) 20%, 
                  transparent 50%
                ),
                radial-gradient(ellipse 100% 100% at 70% 80%, 
                  rgba(56, 189, 248, 0.6) 0%, 
                  transparent 50%
                ),
                radial-gradient(ellipse 80% 80% at 20% 70%, 
                  rgba(34, 211, 238, 0.5) 0%, 
                  transparent 50%
                ),
                radial-gradient(ellipse 100% 100% at 50% 50%, 
                  rgba(110, 231, 183, 0.3) 0%, 
                  rgba(56, 189, 248, 0.6) 40%, 
                  rgba(34, 211, 238, 0.8) 70%, 
                  rgba(14, 165, 233, 0.9) 100%
                )
              `,
              boxShadow: `
                inset 0 0 60px rgba(255, 255, 255, 0.4),
                inset 20px 20px 40px rgba(255, 255, 255, 0.3),
                inset -10px -10px 30px rgba(56, 189, 248, 0.2),
                0 20px 60px rgba(34, 211, 238, 0.3),
                0 10px 30px rgba(56, 189, 248, 0.2)
              `,
            }}
          />

          <motion.div
            className="absolute inset-2 rounded-full opacity-60"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: `
                conic-gradient(
                  from 0deg at 50% 50%,
                  rgba(34, 211, 238, 0.4) 0deg,
                  rgba(110, 231, 183, 0.3) 60deg,
                  rgba(56, 189, 248, 0.5) 120deg,
                  rgba(14, 165, 233, 0.4) 180deg,
                  rgba(34, 211, 238, 0.3) 240deg,
                  rgba(110, 231, 183, 0.4) 300deg,
                  rgba(34, 211, 238, 0.4) 360deg
                )
              `,
              filter: "blur(8px)",
            }}
          />

          <div
            className="absolute top-[15%] left-[20%] w-[35%] h-[25%] rounded-full"
            style={{
              background: `
                radial-gradient(ellipse at 50% 50%,
                  rgba(255, 255, 255, 0.8) 0%,
                  rgba(255, 255, 255, 0.4) 40%,
                  transparent 70%
                )
              `,
              filter: "blur(3px)",
              transform: "rotate(-30deg)",
            }}
          />

          <motion.div
            className="absolute bottom-[25%] right-[15%] w-[20%] h-[15%] rounded-full"
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: `
                radial-gradient(ellipse at 50% 50%,
                  rgba(255, 255, 255, 0.6) 0%,
                  transparent 70%
                )
              `,
              filter: "blur(2px)",
            }}
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-[20%] rounded-full"
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%,
              rgba(34, 211, 238, 0.25) 0%,
              rgba(56, 189, 248, 0.15) 40%,
              transparent 70%
            )
          `,
          filter: "blur(12px)",
        }}
      />
    </div>
  );
}
