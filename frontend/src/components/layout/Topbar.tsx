import { Bell, Search, UserCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-xl bg-white/5">
      <div>
        <h1 className="text-xl font-bold text-white">
          CloudGuardian AI Console
        </h1>
        <p className="text-slate-400 text-sm">
          Welcome back, Roshni 👋
        </p>
      </div>

      <div className="flex items-center gap-6 text-slate-300">
        <Search className="cursor-pointer hover:text-cyan-400" />
        <Bell className="cursor-pointer hover:text-cyan-400" />
        <UserCircle size={32} className="cursor-pointer hover:text-cyan-400" />
      </div>
    </header>
  );
}