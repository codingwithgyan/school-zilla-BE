const express = require("express");
const app = express();
const { 
    login, 
    signup,
    getSchoolDetails,
    getAllSchools,
    editTeacher,
    editStudent 
} = require("./controllers/user.controller");
const protect = require("./middleware/protect");

app.use(express.json());
app.use("/get-all-schools",getAllSchools);
app.use("/get-school-details",getSchoolDetails);
app.use("/edit-teacher",protect,editTeacher);
app.use("/edit-student",protect,editStudent)
app.use("/login", login);
app.use("/signup", signup);

module.exports = app;