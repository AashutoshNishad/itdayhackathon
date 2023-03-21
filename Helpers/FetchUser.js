const Jwt = require("jsonwebtoken");
const { object } = require("webidl-conversions");
const Teacher = require("../Schema/Teacher");
const JWT_SECRET = "Hellow";

module.exports.fetchuser =async (req, res, next) => {
  const token = req.header("authToken");
  // return res.send(token);
  if (!token) {
    return res.status(401).send("Plese use currect details");
  }
  try {
    var user = Jwt.verify(token , JWT_SECRET);
    req.user = user;
    // console.log(user)
    next();
  } catch (error) {
    // console.log(error);
    res.status(500).send(error);
  }}
