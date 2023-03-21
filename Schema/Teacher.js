const mongoose = require('mongoose');

const Teacher =new mongoose.Schema({
Name: {
    type: String,
    required: true,
},
Rating: {
    type: Number,
    required: true,
    default: 0,
},
Subject: {
    type: String,
    length: {
        max: 20
    }
},
Mobile: {
    type: Number,
    length: {
        min: 10,
        max: 10
    }
},
TeacherID: {
    type: String,
    length: 5,
},
Password: {
    type: String,
},
level: {
    type: String,
    enum: ["Beginner" , "Modrate" , "Pro"],
    default: "Beginner",
}
})

module.exports = mongoose.model("Teacher" , Teacher)