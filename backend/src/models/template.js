const mongoose = require("mongoose");

const { Schema } = mongoose;

const templateSchema = new Schema(
  {
    code: {
      type: String,
    },
    title: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const template = mongoose.model("Template", templateSchema);
module.exports = template;
