import { motion } from "framer-motion";
import { Shield, Flag, CheckCircle } from "lucide-react";

const badges = [
  {
    id: "eu-ai-act",
    icon: Shield,
    title: "EU AI ACT",
    subtitle: "KONFORM",
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-100 dark:bg-cyan-500/20",
  },
  {
    id: "made-in-germany",
    icon: Flag,
    title: "Software made in",
    subtitle: "Germany",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-100 dark:bg-amber-500/20",
  },
  {
    id: "dsgvo",
    icon: CheckCircle,
    title: "DSGVO",
    subtitle: "KONFORM",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-100 dark:bg-emerald-500/20",
  },
];

export function TrustBadges() {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 md:gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      data-testid="trust-badges"
    >
      {badges.map((badge, index) => (
        <motion.div
          key={badge.id}
          className="flex items-center gap-3 px-5 py-3 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-white/15 shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
          data-testid={`badge-trust-${index}`}
        >
          <div className={`p-2 rounded-full ${badge.iconBg}`}>
            <badge.icon className={`h-4 w-4 ${badge.iconColor}`} />
          </div>
          <div className="text-left">
            <p className="text-xs text-muted-foreground leading-tight">
              {badge.title}
            </p>
            <p className="text-sm font-semibold text-foreground leading-tight">
              {badge.subtitle}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
