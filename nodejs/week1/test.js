let Courses = require('./classes').Courses;
let Mentors = require('./classes').Mentors;


const hyf_courses = new Courses('courses.json');

/*Step 1: Write a method that can return list of all HYF courses */

console.log(hyf_courses.getList());


/*Step 2: Write a method that can return one course info*/

console.log( hyf_courses.getCourse("NodeJS"));
console.log(hyf_courses.getCourse("JAVA"));


/*Step 3: Write a method that can add a new course to HYF library
 which receive the below course info as an input*/

const newCourse = {
  "title": "Database",
  "duration": "4",
  "mentors": ["Benjamin","Niels Gregersen"]
};

hyf_courses.addCourse(newCourse);


/*Step 4: Write a method that can edit existing mentor information */
const hyf_mentors = new Mentors('mentors.json');

const mentor =  {
    "name": "Benjamin",
    "courses": ["HTML/CSS", "JS", "Database"], 
};

hyf_mentors.editMentor(mentor);

/*Step 5: Write a method that can delete existing mentor */

hyf_mentors.deleteMentor("Abed");

hyf_mentors.deleteMentor("Maria"); 