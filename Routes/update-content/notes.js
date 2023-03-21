const express = require('express');
const upload = require('../../Helpers/upload.js');
const notes = require('../../Schema/Content/notes');
const router = express.Router();
// const multer = require('multer');
// const path = require('path');


// var dest = "other";
// const upload = multer({
//   storage: multer.diskStorage({

//     destination: function (req, file, callback) {
//       if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         callback(null, __dirname + './uploads/images/');
//       } else if ((file.mimetype).indexOf("video/") > -1) {
//         callback(null, __dirname + '/uploads/videos/');
//       } else {
//         callback(new Error('Unsupported file type'));
//       }
//     } ,
//   filename: function(req, file, callback) {
//     console.log(file);
//     callback(null, Date.now() + '-' + file.originalname);
//   }
// }),
  
// });


router.post("/notes/add" , upload.single("lecture-note") , async (req,res)=>{
  console.log(req.file);

  var note = new notes({...req.body ,"url": req.file.path})
  // return res.send("FIle saved");
  var rsp = await note.save()
  res.send("rsp")

}
)

module.exports = router;
