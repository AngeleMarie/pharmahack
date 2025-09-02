import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", Profit: 4000, Sales: 2400 },
  { name: "Feb", Profit: 3000, Sales: 1398 },
  { name: "Mar", Profit: 2000, Sales: 9800 },
  { name: "Apr", Profit: 2780, Sales: 3908 },
  { name: "May", Profit: 1890, Sales: 4800 },
  { name: "Jun", Profit: 2390, Sales: 3800 },
  { name: "Jul", Profit: 3490, Sales: 4300 },
];

export default function Charts() {
  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">Revenue</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4D65F3" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#4D65F3" stopOpacity={0.5} />
            </linearGradient>
            <linearGradient id="SalesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#31B365" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#31B365" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Areas with gradient shadows */}
          <Area type="monotone" dataKey="Profit" stroke="#4D65F3" strokeWidth={3} fill="url(#profitGradient)" />
          <Area type="monotone" dataKey="Sales" stroke="#31B365" strokeWidth={3} fill="url(#SalesGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
