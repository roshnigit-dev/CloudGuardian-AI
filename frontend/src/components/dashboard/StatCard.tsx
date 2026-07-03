import type { LucideIcon } from "lucide-react";
import { TrendingUp } from "lucide-react";
interface StatCardProps {
  title: string;
  value: string;
  color: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  color,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:-translate-y-1 hover:shadow-2xl hover:border-cyan-400 transition-all duration-300">
      <div className="flex items-center justify-between">
        <h3 className="text-slate-400">{title}</h3>

        <Icon className={`${color}`} size={22} />
      </div>

      <h2 className={`text-4xl font-bold mt-6 ${color}`}>
        {value}
      </h2>

      <div className="flex items-center gap-2 mt-5 text-green-400 text-sm">
        <TrendingUp size={16} />
        <span>+12% from last hour</span>
      </div>
    </div>
  );
}