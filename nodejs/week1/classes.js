class Courses {
    constructor (file) {
        this.file = file;
        this.fs = require('fs');
    }

    getList() {
        return JSON.parse(this.fs.readFileSync(this.file));
    }    

    checkExistanceOfCourse(coursesData, courseTitle) {
        return coursesData.some((course) => {
            return course.title === courseTitle ;
          });
    }

    getCourse(courseTitle) {
        let coursesData = this.getList();

        if(this.checkExistanceOfCourse(coursesData, courseTitle)) {
            let filteredCourse = coursesData.find((m) => {
                return m.title === courseTitle;  
            });
            return filteredCourse;
        }
        else {
            console.log('No match found');
        }
    }

    addCourse(newCourse) {
        let coursesData = this.getList();

        if(this.checkExistanceOfCourse(coursesData, newCourse.title)) {
            console.log('Course is already present in the list');
        }
        else {
            coursesData.push(newCourse);
            let data = JSON.stringify(coursesData,null,2);  
            this.fs.writeFileSync(this.file, data);
            console.log("Course added successfully");
        }
    }
}


class Mentors {
    constructor (file) {
        this.file = file;
        this.fs = require('fs');
    }

    getList() {
        return JSON.parse(this.fs.readFileSync(this.file));
    }    

    checkExistanceOfMentor(mentorData, mentorName) {
        return mentorData.some((mentor) => {
            return mentor.name === mentorName ;
          });
    }

    editMentor(mentor) {
        let mentorData = this.getList();

        if(this.checkExistanceOfMentor(mentorData, mentor.name)) {
            let editedMentor = mentorData.map((m) => {
                if (m.name === mentor.name) {
                    return mentor;
                }
                else {
                    return m;
                }
            });
            let data = JSON.stringify(editedMentor,null,2);
            this.fs.writeFileSync(this.file, data);
        }
        else {
            console.log(' Unable to perform the action. Mentor not found!');
        }
    }

    deleteMentor(name) {
        let mentorData = this.getList();

        if(this.checkExistanceOfMentor(mentorData, name)) {
            let editedMentor = mentorData.filter((m) => {
                return m.name !== name;
            });
            let data = JSON.stringify(editedMentor,null,2);
            this.fs.writeFileSync(this.file, data);
            console.log('Successfully deleted.');
        }
        else {
            console.log(' Unable to perform the action. Mentor not found!');
        }
    }
}

module.exports = {
    Courses: Courses,
    Mentors: Mentors
}