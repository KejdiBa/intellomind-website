import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className="absolute -left-[20%] top-[10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, rgba(34, 211, 238, 0.05) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -left-[10%] top-[40%] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(56, 189, 248, 0.04) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, -25, 35, 0],
          y: [0, 30, -25, 0],
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute -right-[15%] top-[20%] w-[550px] h-[550px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(129, 140, 248, 0.12) 0%, rgba(129, 140, 248, 0.04) 40%, transparent 70%)",
          filter: "blur(55px)",
        }}
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 25, -35, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute -right-[10%] top-[60%] w-[450px] h-[450px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.03) 40%, transparent 70%)",
          filter: "blur(45px)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className="absolute left-[30%] -bottom-[10%] w-[700px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(34, 211, 238, 0.08) 0%, rgba(56, 189, 248, 0.04) 50%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
}
