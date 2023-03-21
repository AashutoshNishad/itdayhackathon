const express = require("express");
const { fetchuser } = require("../Helpers/FetchUser");
const Teacher = require("../Schema/Teacher");
const router = express.Router();


router.post("/add" ,async (req,res)=>{
    


    try {
        var st1 = new Teacher(req.body)
        var rsp = await st1.save();
        res.send(rsp);
    } catch (error) {
        
        return res.send("internal Server error")
    }
 
})


router.get("/fetch" , fetchuser ,async (req,res)=>{
    //  Got The Student ID

    try {
        
    var user = req.user.TeacherID;
    // check The ID of Student
    var rsp = await Teacher.findById(user);
   
   return res.send(rsp);
} catch (error) {
    return res.send("Internal Server Error");
 }
})

module.exports = router