const mongoose = require("mongoose");

const { Schema } = mongoose;

const reportSchema = new Schema(
  {
    content: {
      type: String,
    },
    title: {
      type: String,
    },
    file: {
      type: String,
    },
    ticketId: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

const report = mongoose.model("Report", reportSchema);
module.exports = report;