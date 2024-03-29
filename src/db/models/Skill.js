import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
  },
});

const Skill = mongoose.models.Skill || mongoose.model("Skill", SkillSchema);

export default Skill;
