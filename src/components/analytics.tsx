import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "2018", customers: 4000, sales: 2400 },
  { name: "2019", customers: 3000, sales: 1398 },
  { name: "2020", customers: 2000, sales: 9800 },
  { name: "2021", customers: 2780, sales: 3908 },
  { name: "2022", customers: 1890, sales: 4800 },
  { name: "2023", customers: 2390, sales: 3800 },
  { name: "2024", customers: 3490, sales: 4300 },
];

export default function Charts() {
  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">Sales Analytics</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Two colliding line graphs */}
          <Line type="monotone" dataKey="customers" stroke="#4880FF" strokeWidth={3} />
          <Line type="monotone" dataKey="sales" stroke="#00B69B" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
