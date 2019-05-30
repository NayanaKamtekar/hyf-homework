const Mentors = require("./Mentors.js")
const Courses = require("./Courses.js")

const hyf_mentors = new Mentors("./mentors.json");
const hyf_courses = new Courses("./courses.json");

const allMentors = hyf_mentors.getAllMentors();
//console.log("all mentors:", allMentors);

const allCourses = hyf_courses.getAllCourses();
//console.log("all courses:", allCourses);

const express =require('express');
const app = express();

app.get('/', function(req,res) {
    res.send('Hello World')
});

app.listen(3000);
console.log('Server is running');


// const express = require('express')
// const app = express()
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(3000)