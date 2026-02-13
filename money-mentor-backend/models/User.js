import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },

  // Profile fields
  name: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  phone: {
    type: String,
    default: ""
  },
  location: {
    type: String,
    default: ""
  },
  profilePicture: {
    type: String,
    default: ""
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);
export default User;
