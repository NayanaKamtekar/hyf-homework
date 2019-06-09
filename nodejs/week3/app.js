const express = require('express');
const bodyParser = require('body-parser');
var { Validator, ValidationError } = require('express-json-validator-middleware');
var validator = new Validator({allErrors: true});
var validate = validator.validate;

const Mentors = require("./Mentors.js");
const hyf_mentors = new Mentors("./mentors.json");

const Courses = require("./Courses.js");
const hyf_courses = new Courses("./courses.json");

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const port = 8000;

const courseRouter = express.Router();
const mentorRouter = express.Router();

const courseSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        duration: {
            type: 'number'
        }
    },
    required: ['name', 'duration'],
    additionalProperties: false
};

const mentorSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        course: {
            type: 'array',
            uniqueItems: true,
            items: {
                type: 'string'
            }
        }
    },
    required: ['name', 'course'],
    additionalProperties: false
};

courseRouter.route('/courses')
    //GET http://localhost:8000/api/courses?name=<course name>
    .get((req, res) => {
        const name = req.query.name;
        if (name) {
            let response = hyf_courses.getByName(name);

            if (response === undefined) {
                res.status(204).send();
            }
            else {
                res.status(200).send(response);
            }
        }
        else {
            let response = hyf_courses.getAllCourses();

            if (response === undefined) {
                res.status(204).send();
            }
            else {
                res.status(200).send(response);
            }
        }
    })
    .post(validate({body: courseSchema}), (req, res) => {
        if (hyf_courses.addNewCourse(req.body)) {
            res.status(200).send(`Course added: ${req.body.name}`);
        }
        else {
            res.status(400).send(`Course already exist: : ${req.body.name}`);   
        }
    })
    .put(validate({body: courseSchema}), (req, res) => {

        if (hyf_courses.editCourse(req.body)) {
            res.status(200).send(`Course edited: ${req.body.name}`);
        }
        else {
            res.status(400).send(`Course does not exist: : ${req.body.name}`);   
        }
    })
    .delete((req, res) => {
        const name = req.query.name;
        if (name.length > 0) {
            let response = hyf_courses.deleteCourse(name);
            
            if (response) {
                res.status(200).send(`Course deleted: ${name}`);
            }
            else {
                res.status(400).send(`Course does not exist: : ${name}`);
            }
        }
        else {
                res.status(400).send(`No course specified.`);
        }
    });    


mentorRouter.route('/mentors')
//GET http://localhost:8000/api/mentors?name=<mentor name>
    .get((req, res) => {
        const name = req.query.name;
        if (name) {
            let response = hyf_mentors.getByName(name);

            if (response === undefined) {
                res.status(204).send();
            }
            else {
                res.status(200).send(response);
            }
        }
        else {
            let response = hyf_mentors.getAllMentors();

            if (response === undefined) {
                res.status(204).send();
            }
            else {
                res.status(200).send(response);
            }
        }
    })
    .post(validate({body: mentorSchema}), (req, res) => {
        if (hyf_mentors.addNewMentor(req.body)) {
            res.status(200).send(`Mentor added: ${req.body.name}`);
        }
        else {
            res.status(400).send(`Mentor already exist: : ${req.body.name}`);   
        }
    })
    .put(validate({body: mentorSchema}), (req, res) => {

        if (hyf_mentors.editMentor(req.body)) {
            res.status(200).send(`Mentor edited: ${req.body.name}`);
        }
        else {
            res.status(400).send(`Mentor does not exist: : ${req.body.name}`);   
        }
    })
    .delete((req, res) => {
        const name = req.query.name;
        if (name.length > 0) {
            let response = hyf_mentors.deleteMentor(name);
            
            if (response) {
                res.status(200).send(`Mentor deleted: ${name}`);
            }
            else {
                res.status(400).send(`Mentor does not exist: : ${name}`);
            }
        }
        else {
                res.status(400).send(`No mentor specified.`);
        }
    });    

app.use('/api', courseRouter);
app.use('/api', mentorRouter);

// Error handler for valication errors
app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
        res.status(400).send(err);
    };
});

app.listen(port, () => {console.log(`HYF course app listening on port ${port}`)});