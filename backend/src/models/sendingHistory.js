const mongoose = require("mongoose");

const { Schema } = mongoose;

const sendingHistorySchema = new Schema(
  {
    sendDate: {
      type: String,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reportId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Report",
    },
    sendMode: {
      type: String,
    },
    subject: {
      type: String,
    },
    content: {
      type: String,
    }
  },
  {
    timestamps: true,
  },
);

const sendingHistory = mongoose.model("SendingHistory", sendingHistorySchema);
module.exports = sendingHistory;
