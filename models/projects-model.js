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

  overviewImage: {
    required: false,
    type: String,
  },
  description: {
    required: false,
    type: String,
  },

  conclusion: {
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

  technologies: {
    required: false,
    type: Array,
  },
  
  time: {
    required: false,
    type: Date,
    default: Date.now
  },
 
  link: {
    required: false,
    type: String,
  }
 
});

export const projectstModel =
  mongoose.models.projects ?? mongoose.model("projects", projectSchema);
