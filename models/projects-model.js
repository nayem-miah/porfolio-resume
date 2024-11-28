import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  image: {
    required: false,
    type: String,
  },
  description: {
    required: false,
    type: String,
  },
  client: {
    required: false,
    type: String,
  },
  category: {
    required: false,
    type: String,
  },
  time: {
    required: false,
    type: String,
  },
  link: {
    required: false,
    type: String,
  }
 
});

export const projectstModel =
  mongoose.models.projects ?? mongoose.model("projects", projectSchema);
