const express = require('express');
const multer = require('multer');
const path = require('path');


var dest = "other";
const upload = multer({
  storage: multer.diskStorage({

    destination: function (req, file, callback) {
      if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        callback(null, __dirname + '../../uploads/images/');
      } else if ((file.mimetype).indexOf("video/") > -1) {
        callback(null, path.join( __dirname + '../../uploads/videos/'));
      } else {
        callback(new Error('Unsupported file type'));
      }
    } ,
  filename: function(req, file, callback) {
    console.log(file);
    callback(null, Date.now() + '-' + file.originalname);
  }
}),
  
});

module.exports = upload;