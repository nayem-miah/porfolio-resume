import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
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

  
  category: {
    required: false,
    type: String,
  },
  time: {
    required: false,
    type: String,
  },

  pubshied: {
    required: false,
    type: Date,
    default: Date.now
  },
 
});

export const blogModel =
  mongoose.models.blogs ?? mongoose.model("blogs", blogSchema);
