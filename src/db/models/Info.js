import mongoose from "mongoose";
import SkillSchema from "@/db/models/Skill.js";
import ProjectSchema from "@/db/models/Project.js";
import ExperienceSchema from "@/db/models/Experience.js";

const MeSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileImage: {
    type: String,
    default: "",
  },
  skills: [SkillSchema],
  projects: [ProjectSchema],
  experiences: [ExperienceSchema],
});

const Me = mongoose.models.Me || mongoose.model("Me", MeSchema);

export default Me;
