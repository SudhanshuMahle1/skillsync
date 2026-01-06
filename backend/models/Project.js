const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    techStack: {
        type: [String],
        required: true
    },
    status: {
        type: String,
        enum: ["planned", "In Progress", "completed"],
        default: 'planned'
    }
},{timestamps:true});

module.exports = mongoose.model("Project", projectSchema);