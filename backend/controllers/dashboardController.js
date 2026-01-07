const Skill = require("../models/Skill");
const Project = require("../models/Project");
const calculateReadinessScore = require("../utils/readinessCalculator");

exports.getDashboardData = async (req, res) => {
  try {
    const skills = await Skill.find({ user: req.user });
    const projects = await Project.find({ user: req.user });

    // Temporary streak value 
    const streak = 5;

    const readiness = calculateReadinessScore(skills, projects, streak);

    res.json({
      readinessScore: readiness.totalScore,
      breakdown: readiness.breakdown,
      totalSkills: skills.length,
      totalProjects: projects.length,
      completedProjects: projects.filter(p => p.status === "Completed").length
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to load dashboard data" });
  }
};
