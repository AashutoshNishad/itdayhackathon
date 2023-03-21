const mongoose = require("mongoose");

const Quetions = new mongoose.Schema({
  question: {
    type: String,
  },
  level: {
    type: String,
    enum: ["Beginner", "Modrate", "Pro"],
    default: "Beginner",
  },
  type: {
    type: String,
    enum: ["MCQ", "MSQ", "NAD", "OTHER"],
  },
  creater: {
    type: String,
  },
  date: {
    type: Date,
  },
  tag: [
    {
      type: String,
    },
  ],
  point: {
    type: Number,
    unique: true,
  },
  options: [
    {

      code: {
        type: Number,
        unique: true,
      },
      value: {
        type: String,
        unique: true,
      },
    },
  ],
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    level: {
      type: String,
      enum: ["Beginner" , "Modrate" , "Pro"],
      default: "Beginner",
  }
  },
  answerkey: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Question", Quetions);
