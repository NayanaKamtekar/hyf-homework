const fs = require("fs");

class Courses {
    constructor(fileName) {
        this.fileName = fileName;
    }

    getAllCourses() {
        const fileContent = fs.readFileSync(this.fileName).toString();
        if (fileContent) {
            const allCourses = JSON.parse(fileContent);
            return allCourses;
        }
    }

    checkExistanceOfCourse(coursesData, name) {
        return coursesData.some((course) => {
            return course.name.toLowerCase() ===  name.toLowerCase() ;
          });
    }

    getByName(name) {
        let coursesData = this.getAllCourses();

        if(this.checkExistanceOfCourse(coursesData, name)) {
            let filteredCourse = coursesData.find((m) => {
                return m.name.toLowerCase() === name.toLowerCase();  
            });
            return filteredCourse;
        }

        // Returns course if found, undefined otherwise       
    }

    addNewCourse(course) {
        const courseData = this.getAllCourses();

        if (this.checkExistanceOfCourse(courseData, course.name)) {
            return false;
        }
        
        courseData.push(course);

        const newFileContent = JSON.stringify(courseData, null, 4);
        fs.writeFileSync(this.fileName, newFileContent);
        return true;
    }

    editCourse(course) {
        let courseData = this.getAllCourses();

        if (this.checkExistanceOfCourse(courseData, course.name)) {
            let editedCourse = courseData.map( elem  => {
                if (elem.name.toLowerCase() === course.name.toLowerCase()) {
                    return course;
                }
                else {
                    return elem;
                }
            });

            let editedContent = JSON.stringify(editedCourse,null,2);
            fs.writeFileSync(this.fileName, editedContent);
            return true;
        }
        else {
            return false;
        }
    }

    deleteCourse(name) {
        const courseData = this.getAllCourses();

        if(this.checkExistanceOfCourse(courseData, name)) {
            let editedCourse = courseData.filter((c) => {
                return c.name.toLowerCase() !== name.toLowerCase();
            });
            
            let editedContent = JSON.stringify(editedCourse,null,2);
            fs.writeFileSync(this.fileName, editedContent);
            return true;
        }
        else {
            return false;
        }
    }
}

module.exports = Courses;