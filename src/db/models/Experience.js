import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

const ExperienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  companyLogo: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  tasks: [TaskSchema],
});

export default ExperienceSchema;
