import { motion } from "framer-motion";

export function HeroOrbAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" data-testid="hero-orb-animation">
      <div
        className="relative"
        style={{
          width: "clamp(260px, 45vw, 500px)",
          height: "clamp(260px, 45vw, 500px)",
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            x: [0, 15, -10, 5, 0],
            y: [0, -10, 8, -5, 0],
            rotate: [0, 3, -2, 1, 0],
            scale: [1, 1.02, 0.98, 1.01, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: "transform" }}
        >
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full"
            style={{ overflow: "visible" }}
          >
            <defs>
              <radialGradient
                id="orbGradient"
                cx="35%"
                cy="35%"
                r="65%"
                fx="30%"
                fy="30%"
              >
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
                <stop offset="15%" stopColor="rgba(200, 255, 255, 0.8)" />
                <stop offset="35%" stopColor="rgba(103, 232, 249, 0.7)" />
                <stop offset="55%" stopColor="rgba(56, 189, 248, 0.6)" />
                <stop offset="75%" stopColor="rgba(129, 140, 248, 0.5)" />
                <stop offset="90%" stopColor="rgba(168, 85, 247, 0.4)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.2)" />
              </radialGradient>

              <radialGradient
                id="innerGlow"
                cx="40%"
                cy="40%"
                r="50%"
              >
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.6)" />
                <stop offset="50%" stopColor="rgba(200, 255, 255, 0.2)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>

              <radialGradient
                id="rimLight"
                cx="70%"
                cy="70%"
                r="40%"
              >
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.3)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>

              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="morphFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.015"
                  numOctaves="3"
                  result="noise"
                  seed="1"
                >
                  <animate
                    attributeName="baseFrequency"
                    values="0.015;0.018;0.012;0.015"
                    dur="12s"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="15"
                  xChannelSelector="R"
                  yChannelSelector="G"
                >
                  <animate
                    attributeName="scale"
                    values="15;20;12;15"
                    dur="10s"
                    repeatCount="indefinite"
                  />
                </feDisplacementMap>
              </filter>

              <filter id="blur3d" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
              </filter>
            </defs>

            <g filter="url(#softGlow)">
              <ellipse
                cx="200"
                cy="200"
                rx="160"
                ry="160"
                fill="url(#orbGradient)"
                filter="url(#morphFilter)"
                opacity="0.95"
              />

              <ellipse
                cx="180"
                cy="175"
                rx="80"
                ry="70"
                fill="url(#innerGlow)"
                filter="url(#blur3d)"
              />

              <ellipse
                cx="240"
                cy="240"
                rx="60"
                ry="50"
                fill="url(#rimLight)"
                filter="url(#blur3d)"
              />

              <ellipse
                cx="155"
                cy="150"
                rx="25"
                ry="20"
                fill="rgba(255, 255, 255, 0.5)"
                filter="url(#blur3d)"
              />
            </g>
          </svg>
        </motion.div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 30% 30%, rgba(56, 189, 248, 0.15) 0%, transparent 60%)",
            filter: "blur(40px)",
          }}
        />

        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>
    </div>
  );
}
