const express = require("express");
const router = express.Router();

const {
  addProject,
  getProjects,
  updateProjectStatus,
} = require("../controllers/projectController");

const protect = require("../middleware/authMiddleware");

router.post("/", protect, addProject);
router.get("/", protect, getProjects);
router.put("/:id", protect, updateProjectStatus);

module.exports = router;
