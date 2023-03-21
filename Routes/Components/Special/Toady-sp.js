const express = require('express');
const { fetchuser } = require('../../../Helpers/FetchUser');
const getQuote = require('../../../Helpers/Today-special');
const Student = require('../../../Schema/Student');
const router = express.Router()


var data = {}


router.get("/get" , fetchuser ,async (req,res)=>{

    try {

        var st = await Student.findById(req.user.StudentId);
        
    var today = new Date();
    var old = true;
    if(!(today.getDate() === data.date)){
         data.data = await getQuote();
         data.date = today.getDate();
         old = false;
    }

    var todaylogin = (st.todaylogin === today.getDate())
    var dp = JSON.parse(data.data);
    if(!todaylogin)
        var rsp = await st.updateOne({$set: {todaylogin: today.getDate()}});
    return res.send({ ...dp , todaylogin })
    // console.log(today.getDate());
    } catch (error) {
        return res.send("Error")
    }
   
} )


module.exports = router;