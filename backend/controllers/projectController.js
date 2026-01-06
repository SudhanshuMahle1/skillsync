const Project = require("../models/Project");

// ADD project
exports.addProject = async (req, res) => {
  const { title, description, techStack } = req.body;

  try {
    const project = await Project.create({
      user: req.user,
      title,
      description,
      techStack,
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Failed to add project" });
  }
};

// GET user projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects" });
  }
};

// UPDATE project status
exports.updateProjectStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const project = await Project.findOne({
      _id: req.params.id,
      user: req.user,
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.status = status;
    await project.save();

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Failed to update project" });
  }
};
