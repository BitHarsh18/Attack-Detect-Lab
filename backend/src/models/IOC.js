const mongoose = require("mongoose");

const IOCSchema = new mongoose.Schema(
  {
    value: {
      type: String,
      required: true,
      unique: true
    },

    type: {
      type: String,
      enum: ["ip", "domain", "url", "hash"],
      required: true
    },

    threatType: {
      type: String,
      default: "unknown"
    },

    source: {
      type: String,
      default: "manual"
    },

    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      default: "medium"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("IOC", IOCSchema);