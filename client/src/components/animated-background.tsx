import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Cyan orb - top left */}
      <motion.div
        className="absolute -left-[10%] top-[5%] w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, rgba(34, 211, 238, 0.1) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blue orb - left middle */}
      <motion.div
        className="absolute -left-[5%] top-[35%] w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(56, 189, 248, 0.08) 40%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, -40, 50, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Indigo orb - right top */}
      <motion.div
        className="absolute -right-[10%] top-[10%] w-[750px] h-[750px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(129, 140, 248, 0.2) 0%, rgba(129, 140, 248, 0.08) 40%, transparent 70%)",
          filter: "blur(75px)",
        }}
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -50, 0],
          scale: [1, 1.12, 0.88, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Purple orb - right middle */}
      <motion.div
        className="absolute -right-[5%] top-[50%] w-[650px] h-[650px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, rgba(168, 85, 247, 0.06) 40%, transparent 70%)",
          filter: "blur(65px)",
        }}
        animate={{
          x: [0, 45, -35, 0],
          y: [0, -45, 55, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Mint/green orb - bottom center */}
      <motion.div
        className="absolute left-[20%] bottom-[5%] w-[900px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(110, 231, 183, 0.15) 0%, rgba(34, 211, 238, 0.08) 50%, transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Center subtle glow */}
      <motion.div
        className="absolute left-[30%] top-[40%] w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(56, 189, 248, 0.05) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 35, -25, 0],
          scale: [1, 1.1, 0.92, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  );
}
