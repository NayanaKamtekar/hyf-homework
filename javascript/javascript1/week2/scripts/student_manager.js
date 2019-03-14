const class07Students = ["Nayana", "Kristina", "Maria", "Rahim", "Hema"];
function addStudentToClass(studentName) {
    if (class07Students.length >= 6 && studentName !== "Queen") {
        console.log("Cannot add more students to class 07");
    }
    else if (class07Students.includes(studentName)) {
        console.log("Student " + studentName + " is already in the class");//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    }
    else if (studentName === "") {
        console.log("You cannot add an empty string to a class");
    }
    else {
        class07Students.push(studentName);//The push() method adds one or more elements to the end of an array and returns the new length of the array.
    }
}

addStudentToClass("");
addStudentToClass("Swapna");
addStudentToClass("Bodil");
addStudentToClass("Queen");
console.log(class07Students);

function getNumberOfStudents() {
    return class07Students.length;
}
console.log(getNumberOfStudents());