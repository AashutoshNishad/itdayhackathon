const express = require("express");
const Student = require("../Schema/Student");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Teacher = require("../Schema/Teacher");
const jwtsecrate = "Hellow";


router.post("/student/login" , async (req,res)=>{
    
    // return res.send(req.body)
    try {
    var data = {Mobile: req.body.Mobile};
    var data2 = await Student.findOne(data);
    console.log(data2);
    const check = !(req.body.pass == data2.Password);
    if(check){
        return res.send({Error: true , msg: "Password Not Match" , data2 });
    }
    var obj = {
        StudentId: data2._id
    }
   var tocken = jwt.sign(obj , jwtsecrate);
    return res.send({Tocken: tocken ,  type: "Student"});
} catch (error) {
    
    return res.status(500).send("Internal Server error");

}
})

router.post("/teacher/login" , async (req,res)=>{
    
//  return  res.send(req.body)
    try {
    var data = {Mobile: req.body.Mobile};
    var data2 = await Teacher.findOne(data);
    console.log({data: data2 , req: req.body});
    const check = !(req.body.pass == data2.Password);
    if(check){
        return res.send({Error: true , msg: "Password Not Match" });
    }
    var obj = {
        TeacherID: data2._id
    }
   var tocken = jwt.sign(obj , jwtsecrate);
    return res.send({Tocken: tocken , type: "Teacher"});
} catch (error) {
    
    return res.status(500).send("Internal Server error");

}
})




module.exports = router;