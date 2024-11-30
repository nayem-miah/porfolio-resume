import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: false,
    type: String,
  },

  websiteLink: {
    required: false,
    type: String,
  },
  message: {
    required: false,
    type: String,
  },

});

export const contactModel =
  mongoose.models.contacts ?? mongoose.model("contacts", contactSchema);
