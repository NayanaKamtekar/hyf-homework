function getFullname(firstname, surname, useFormalName) {
    var Fullname;
    if (useFormalName) {
        Fullname = "Lord " + firstname + " " + surname; // if the user wants to be adressed formally useFormalName is true
        return Fullname;
    }
    else {
        Fullname = firstname + " " + surname;
        return Fullname;
    }
}
console.log(getFullname("Nayana", "Kamtekar"));
console.log(getFullname("Nayana", "Kamtekar", true));
