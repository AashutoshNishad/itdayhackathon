// const express = require('express');

const Teacher = require("../Schema/Teacher");


var isteacher = async (req,res,next)=>{
    try {
        
        var {TeacherID} = req.user;
console.log(TeacherID);
        var rsp = await Teacher.findById(TeacherID);

        if(rsp === null)
        {
            return res.status(401).send("You are not a teacher.");
        }

        next();
    } catch (error) {
        return res.send("interna; Server error");
    }
}


module.exports = isteacher;