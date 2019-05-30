const fs = require("fs");

class Courses {
    constructor(fileName) {
        this.fileName = fileName;
    }

    getAllCourses() {
        const fileContent = fs.readFileSync(this.fileName).toString();
        const allCourses = JSON.parse(fileContent);
        return allCourses;
    }

    getByName(name) {
        const allCourses = this.getAllCourses();
        return allCourses.find(q => q.name.toLowerCase() === name.toLowerCase())

        // Returns course if found, undefined otherwise
    }

    addNewCourse(newCourse) {
        if (this.getByName(newCourse.name)) {
            return "Course already exists";
        }

        const allCourses = this.getAllCourses();
        allCourses.push(newCourse);

        const newFileContent = JSON.stringify(allCourses, null, 4);
        fs.writeFileSync(this.fileName, newFileContent);
        return "Course successfuly added";
    }
}

module.exports = Courses;