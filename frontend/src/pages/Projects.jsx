import { useEffect, useState } from "react";
import API from "../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    techStack: ""
  });

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/projects", {
      ...form,
      techStack: form.techStack.split(",")
    });
    fetchProjects();
  };

  const updateStatus = async (id, status) => {
    await API.put(`/projects/${id}`, { status });
    fetchProjects();
  };

  return (
    <div>
      <h2>Projects</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Title"
          onChange={e => setForm({ ...form, title: e.target.value })} />

        <input placeholder="Description"
          onChange={e => setForm({ ...form, description: e.target.value })} />

        <input placeholder="Tech stack (comma separated)"
          onChange={e => setForm({ ...form, techStack: e.target.value })} />

        <button>Add Project</button>
      </form>

      <ul>
        {projects.map(project => (
          <li key={project._id}>
            <b>{project.title}</b> — {project.status}
            <br />
            <button onClick={() => updateStatus(project._id, "Planned")}>Planned</button>
            <button onClick={() => updateStatus(project._id, "In Progress")}>In Progress</button>
            <button onClick={() => updateStatus(project._id, "Completed")}>Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
