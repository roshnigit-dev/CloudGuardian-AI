import { Bot, TriangleAlert, CircleCheckBig } from "lucide-react";

export default function AIInsights() {
  return (
    <div className="mt-8 rounded-2xl bg-slate-900 border border-slate-800 p-6">
      <div className="flex items-center gap-3 mb-5">
        <Bot className="text-cyan-400" />
        <h2 className="text-xl font-bold text-white">
          AI Insights
        </h2>
      </div>

      <div className="space-y-4">

        <div className="flex items-center gap-3 text-yellow-400">
          <TriangleAlert size={20} />
          <p>CPU usage may exceed 80% in the next 20 minutes.</p>
        </div>

        <div className="flex items-center gap-3 text-green-400">
          <CircleCheckBig size={20} />
          <p>All EC2 instances are healthy.</p>
        </div>

        <div className="flex items-center gap-3 text-cyan-400">
          <Bot size={20} />
          <p>Estimated monthly savings: ₹1,200 by resizing idle resources.</p>
        </div>

      </div>
    </div>
  );
}