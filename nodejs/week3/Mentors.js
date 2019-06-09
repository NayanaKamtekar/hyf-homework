const fs = require("fs");

class Mentors {
    constructor(fileName) {
        this.fileName = fileName;
    }

    getAllMentors() {
        const fileContent = fs.readFileSync(this.fileName).toString(); 
        if (fileContent){
            const allMentors = JSON.parse(fileContent);
            return allMentors;
        }
    }

    checkExistanceOfMentor(mentorsData, name) {
        return mentorsData.some((mentor) => {
            return mentor.name.toLowerCase() ===  name.toLowerCase() ;
          });
    }

    getByName(name) {
        const mentorsData= this.getAllMentors();

        if(this.checkExistanceOfMentor(mentorsData, name)) {
            let filteredMentor = mentorsData.find(q => {
                return q.name.toLowerCase() === name.toLowerCase();
            });
            return filteredMentor;
        }
        // Returns mentor if found, undefined otherwise
    }

    addNewMentor(newMentor) {
        const mentorsData= this.getAllMentors();

        if (this.checkExistanceOfMentor(mentorsData, newMentor.name)) {
            return false;
        }
        
        mentorsData.push(newMentor);

        const newFileContent = JSON.stringify(mentorsData, null, 4);
        fs.writeFileSync(this.fileName, newFileContent);
        return true;
    }

    editMentor(mentor) {
        const mentorsData= this.getAllMentors();

        if(this.checkExistanceOfMentor(mentorsData, mentor.name)) {
            let editedMentor = mentorsData.map( elem  => {
                if (elem.name.toLowerCase() === mentor.name.toLowerCase()) {
                    return mentor;
                }
                else {
                    return elem;
                }
            });

            let editedContent = JSON.stringify(editedMentor,null,2);
            fs.writeFileSync(this.fileName, editedContent);
            return true;
        }
        else {
            return false;
        }
    }

    deleteMentor(name) {
        const mentorsData= this.getAllMentors();

        if(this.checkExistanceOfMentor(mentorsData, name)) {
            let editedMentor = mentorsData.filter((c) => {
                return c.name.toLowerCase() !== name.toLowerCase();
            });
            
            let editedContent = JSON.stringify(editedMentor,null,2);
            fs.writeFileSync(this.fileName, editedContent);
            return true;
        }
        else {
            return false;
        }
    }

}

module.exports = Mentors;