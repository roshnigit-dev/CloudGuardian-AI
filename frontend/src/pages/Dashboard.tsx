import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import StatCard from "../components/dashboard/StatCard";
import PerformanceChart from "../components/charts/PerformanceChart";
import AIInsights from "../components/dashboard/AIInsights";

import {
  Cpu,
  MemoryStick,
  Wifi,
  IndianRupee,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <main className="flex-1">
        <Topbar />

        <div className="p-8">

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white">
              Dashboard
            </h1>

            <p className="text-slate-400 mt-2">
              Monitor your AWS infrastructure in real time.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6">

            <StatCard
              title="CPU Usage"
              value="42%"
              color="text-cyan-400"
              icon={Cpu}
            />

            <StatCard
              title="Memory"
              value="67%"
              color="text-purple-400"
              icon={MemoryStick}
            />

            <StatCard
              title="Network"
              value="Healthy"
              color="text-green-400"
              icon={Wifi}
            />

            <StatCard
              title="AWS Cost"
              value="₹2450"
              color="text-yellow-400"
              icon={IndianRupee}
            />

          </div>

          {/* Chart + AI */}
          <div className="grid grid-cols-3 gap-6 mt-8">

            <div className="col-span-2">
              <PerformanceChart />
            </div>

            <div>
              <AIInsights />
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}