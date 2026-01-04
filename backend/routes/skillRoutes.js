const express = require("express");
const {addSkill, getSkills} = require("../controllers/skillController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/",protect, addSkill);
router.get("/",protect, getSkills);

module.exports = router;