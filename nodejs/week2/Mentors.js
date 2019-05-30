const fs = require("fs");

class Mentors {
    constructor(fileName) {
        this.fileName = fileName;
    }

    getAllMentors() {
        const fileContent = fs.readFileSync(this.fileName).toString();
        const allMentors = JSON.parse(fileContent);
        return allMentors;
    }

    getByName(name) {
        const allMentors = this.getAllMentors();
        return allMentors.find(q => q.name.toLowerCase() === name.toLowerCase())

        // Returns mentor if found, undefined otherwise
    }

    addNewMentor(newMentor) {
        if (this.getByName(newMentor.name)) {
            return "Mentor already exists";
        }

        const allMentors = this.getAllMentors();
        allMentors.push(newMentor);

        const newFileContent = JSON.stringify(allMentors, null, 4);
        fs.writeFileSync(this.fileName, newFileContent);
        return "Mentor successfuly added";
    }
}

module.exports = Mentors;