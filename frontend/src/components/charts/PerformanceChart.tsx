import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10 AM", cpu: 25 },
  { time: "11 AM", cpu: 42 },
  { time: "12 PM", cpu: 37 },
  { time: "1 PM", cpu: 60 },
  { time: "2 PM", cpu: 55 },
  { time: "3 PM", cpu: 42 },
];

export default function PerformanceChart() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 mt-8">
      <h2 className="text-xl font-bold text-white mb-6">
        Performance Overview
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="cpu"
              stroke="#06b6d4"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}