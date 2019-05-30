const express = require('express');
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());

const Mentors = require("./Mentors.js");
const hyf_mentors = new Mentors("./mentors.json");

const Courses = require("./Courses.js");
const hyf_courses = new Courses("./courses.json");

/*### First task*/

/*GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).*/
//http://localhost:3000/numbers/add?first=15&second=10

app.get('/numbers/add', function(req,res) {
    const firstNumber = parseInt(req.query.first);
    const secondNumber = parseInt(req.query.second);

    if (!firstNumber || !secondNumber) {
        res.send('Numbers are not specified in url');
    } else {
        const addedNumber = firstNumber + secondNumber;
        res.send(addedNumber.toString()); // Response should always be string
    }
});


/*GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second). */
//http://localhost:3000/numbers/multiply/30/40

app.get('/numbers/multiply/:firstNumber/:secondNumber', function(req,res) {
    const firstNumber = parseInt(req.params.firstNumber);
    const secondNumber = parseInt(req.params.secondNumber);

    const result = firstNumber * secondNumber;
    res.send(result.toString());
});


/*### Second task*/

/*GET /mentors/<name here> - that returns mentor with given `name`, or "Not found" if not found*/ 
//http://localhost:3000/mentors/Abed

app.get('/mentors/:mentorName', function(req, res) {
    const mentorName = req.params.mentorName;
    let response = hyf_mentors.getByName(mentorName);

    if (response === undefined) {
        res.send('Not found');
    }
    else {
        res.send(response);
    }
});


/*POST /mentors - that adds new mentor. You need to pass new mentor data as JSON in request body 
(Postman can do that), and use middleware `express.json()` to read `req.body`.  */
//http://localhost:3000/mentors

app.post('/mentors', function(req, res ) {
    console.log(req.body);
    hyf_mentors.addNewMentor(req.body);
    res.send('Mentor added');
})


/*GET /courses - get all courses.*/
//http://localhost:3000/courses
app.get('/courses', function(req, res) {
    let response = hyf_courses.getAllCourses();
    res.send(response);
});


/*GET /courses/<name here> - that returns course with given `name`, or "Not found" if not found.*/
//http://localhost:3000/courses/nodejs

app.get('/courses/:courseName', function (req, res) {
    const courseName = req.params.courseName;
    let response = hyf_courses.getByName(courseName);

    if (response === undefined) {
        res.send('Not found');
    }
    else {
        res.send(response);
    }
});


/* POST /courses - that adds new course. You need to pass new course data as JSON in request body (Postman can do that),
and use middleware `express.json()` to read `req.body`.*/
//http://localhost:3000/courses

app.post('/courses', function(req, res ) {
    console.log(req.body);
    hyf_courses.addNewCourse(req.body);
    res.send('Course added');
});

app.listen(3000);
console.log('Server is running');