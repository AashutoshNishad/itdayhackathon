const mongoose = require("mongoose");

const answerkey = new mongoose.Schema({
  answers: [
    {
      qid: {
        type: mongoose.Schema.Types.ObjectId,
        reuqired: true,
      },
      aid: {
        type: mongoose.Schema.Types.ObjectId,
        reuqired: true,
      },
      discription: {
        type: String,
      },
      links: [
        {
          type: {
            type: mongoose.Schema.Types.String,
            required: true,
          },
          title: {
            type: mongoose.Schema.Types.String,
            required: true,
          },
          url: {
            type: url,
            required: true,
          },
          discription: String,
        },
      ],
    },
  ],
  creater: mongoose.Schema.Types.ObjectId,
  links: [
    {
      type: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      title: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      url: {
        type: url,
        required: true,
      },
      discription: String,
    },
  ],
});
module.exports = mongoose.model("answerkey", answerkey);
