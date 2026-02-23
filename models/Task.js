

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "done"],
      default: "pending"
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);