const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced"],
        required: true
    },
    confidence: {
        type: Number,
        min: 1,
        max: 10,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model("Skill", skillSchema);