const mongoose = require('mongoose');


var organization = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    teachers: [
        {
            type: mongoose.Schema.Types.ObjectId,
        }
    ],teachers: [
        {
            type: mongoose.Schema.Types.ObjectId,
        }
    ]
})