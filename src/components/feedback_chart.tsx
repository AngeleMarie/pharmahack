import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "2018", rejected: 4000, accepted: 2400, pending: 1200 },
  { name: "2019", rejected: 3000, accepted: 1398, pending: 2200 },
  { name: "2020", rejected: 2000, accepted: 9800, pending: 1600 },
  { name: "2021", rejected: 2780, accepted: 3908, pending: 2400 },
  { name: "2022", rejected: 1890, accepted: 4800, pending: 1800 },
  { name: "2023", rejected: 2390, accepted: 3800, pending: 2000 },
  { name: "2024", rejected: 3490, accepted: 4300, pending: 1500 },
];

export default function Charts() {
  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">Feedbacks</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="rejected" fill="#FF0000" barSize={40} />
          <Bar dataKey="accepted" fill="#00B69B" barSize={40} />
          <Bar dataKey="pending" fill="#D57B11" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
