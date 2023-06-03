const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    phone: { type: String },

    location: { type: String },
    address: { type: String },

    seller: { type: String },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    img: { type: String },
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
