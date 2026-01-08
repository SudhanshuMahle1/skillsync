import { useEffect, useState } from "react";
import API from "../services/api";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({
    name: "",
    level: "Beginner",
    confidence: 5
  });

  const fetchSkills = async () => {
    const res = await API.get("/skills");
    setSkills(res.data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/skills", form);
    fetchSkills();
  };

  return (
    <div>
      <h2>Skills</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Skill name"
          onChange={e => setForm({ ...form, name: e.target.value })} />

        <select onChange={e => setForm({ ...form, level: e.target.value })}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <input type="number" min="1" max="10"
          onChange={e => setForm({ ...form, confidence: e.target.value })} />

        <button>Add Skill</button>
      </form>

      <ul>
        {skills.map(skill => (
          <li key={skill._id}>
            {skill.name} — {skill.level} ({skill.confidence}/10)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
