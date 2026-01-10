import { useEffect, useState } from "react";
import API from "../services/api";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/dashboard").then(res => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  const pieData = [
    { name: "Skills", value: data.breakdown.skillScore },
    { name: "Projects", value: data.breakdown.projectScore },
    { name: "Consistency", value: data.breakdown.consistencyScore }
  ];

  const barData = [
    { name: "Skills", value: data.totalSkills },
    { name: "Projects", value: data.totalProjects },
    { name: "Completed", value: data.completedProjects }
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Placement Readiness Score: {data.readinessScore}/100</h2>

      <div style={{ display: "flex", gap: "40px" }}>
        {/* Pie Chart */}
        <PieChart width={300} height={300}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={index} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        {/* Bar Chart */}
        <BarChart width={300} height={300} data={barData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
