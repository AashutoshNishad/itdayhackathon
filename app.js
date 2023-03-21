const express = require("express");
const db = require("./db")
db.connectDatabase()
const app = express();
const port = 5000;
var cors = require("cors");
const { connectDatabase } = require("./db");
const Student = require("./Schema/Student");
const auth = require("./Routes/auth");
const topicrouter = require("./Routes/Components/Topic/topic.js");
app.use(cors())
app.use(express.json());

app.use("/auth" , require("./Routes/auth") )
app.use("/student" , require("./Routes/Curd") )
app.use("/teacher" , require("./Routes/curd-student") )
app.use("/test" , require("./Routes/Components/Test/Test") )
app.use("/upd" , require("./Routes/update-content/notes") )
app.use("/today-special" , require("./Routes/Components/Special/Toady-sp") )
// app.use("/upd" , require("./Routes/update-content") )
app.use("/topic" , topicrouter)
app.get('/', async (req,res)=>{
    // const d = await st1.save();
    // console.log(d);  
 return  res.send('Hello , Prince , Ashu , Kalyani , Bhuvisha , Jasmine');
})

app.listen(port, () => {
  console.log("Backend Start:✨✨✨");
  console.log("URL: http://localhost:5000/");
});
