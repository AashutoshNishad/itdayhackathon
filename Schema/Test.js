const mongoose = require('mongoose');
const Test = new mongoose.Schema({

    // metadata
    title: {
        type: String,
    },
    discription: {
        type: String,
    },
    creater: {
        type: mongoose.Schema.Types.ObjectId
    },
    quetions: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    subject: String,
    topicid: {type: mongoose.Schema.Types.ObjectId , required: true}
    
})
module.exports = mongoose.model("Test" , Test);