import {
  LayoutDashboard,
  Server,
  Network,
  Database,
  BarChart3,
  Bot,
  Shield,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Server, label: "Compute" },
  { icon: Network, label: "Network" },
  { icon: Database, label: "Storage" },
  { icon: BarChart3, label: "Monitoring" },
  { icon: Bot, label: "AI Assistant" },
  { icon: Shield, label: "Security" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-950 border-r border-slate-800 h-screen p-6">
      <h1 className="text-2xl font-bold text-cyan-400 mb-10">
        ☁️ CloudGuardian AI
      </h1>

      <nav className="space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="flex items-center gap-3 w-full rounded-xl px-4 py-3 text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
            >
              <Icon size={20} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}