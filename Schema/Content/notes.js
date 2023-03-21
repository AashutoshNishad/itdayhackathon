const mongoose = require('mongoose');
const Notes = new mongoose.Schema({
    // metadata
    title: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
    },
    creater: {
        type: mongoose.Schema.Types.ObjectId
    },
    url: {
        type: String,
        required: true,
    },
    
})
module.exports = mongoose.model("Notes" , Notes);