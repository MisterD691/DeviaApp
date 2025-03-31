const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    country: {
      type: String,
    },
    picture: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const user = mongoose.model("User", userSchema);
module.exports = user;
