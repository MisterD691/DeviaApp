const mongoose = require("mongoose");

const { Schema } = mongoose;

const validationSchema = new Schema(
  {
    validationDate: {
      type: Date,
    },
    note: {
      type: String,
    },
    isValidated: {
      type: Boolean,
    },
    reportId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Report",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const validation = mongoose.model("Validation", validationSchema);
module.exports = validation;
