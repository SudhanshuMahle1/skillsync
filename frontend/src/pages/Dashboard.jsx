import { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/dashboard").then(res => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Readiness Score: {data.readinessScore}</h2>
      <p>Skills: {data.totalSkills}</p>
      <p>Projects: {data.totalProjects}</p>
      <p>Completed Projects: {data.completedProjects}</p>
    </div>
  );
};

export default Dashboard;
