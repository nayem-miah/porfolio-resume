
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    type: String,
    validate: {
      validator: function(value) {
        // If googleId is not present, password is required
        return this.googleId || (value && value.length > 0);
      },
      message: 'Path `password` is required.'
    }
  }

});

export const userModel = mongoose.models.users ?? mongoose.model("users", userSchema);