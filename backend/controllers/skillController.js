const Skill = require("../models/Skill");

//Add skill
exports.addSkill = async (req,res) => {
    const {name, level, confidence} = req.body;

    try {
        const skill = await Skill.create({
            user: req.user,
            name,
            level,
            confidence
        });

        res.status(201).json(skill);
    } catch(error){
        res.status(500).json({message: "Failed to add skill"});
    }
};

//Get user skill
exports.getSkills = async (req,res) => {
    try {
        const skills = await Skill.find({user: req.user});
        res.json(skills);
    } catch(error){
        res.status(500).json({message: "Failed to get skills"});
    }
};
