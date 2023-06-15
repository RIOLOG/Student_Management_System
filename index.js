const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
const studentDetailRoute = require('./routes/studentDetail');
const studentDetailByRollnoRoute = require('./routes/studentDetailsByRollno');
const studentDeleteRoute = require('./routes/deleteStudent');
const addStudentRoute = require('./routes/addStudent');
const allstudentDetailsRoute = require('./routes/allstudentDetails');
const editStudentDetailsRoute = require('./routes/editStudent');
const loginTeacherRoute = require('./routes/teacher');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
 app.use('/log',userRoute);
 app.use('/editStud',editStudentDetailsRoute);
 app.use('/details',studentDetailRoute);
 app.use('/studentDetailByRoll',studentDetailByRollnoRoute);
 app.use('/deleteStud',studentDeleteRoute);
 app.use('/addStud',addStudentRoute);
 app.use('/allstuddetails',allstudentDetailsRoute);
 app.use('/loginT',loginTeacherRoute);

module.exports = app;