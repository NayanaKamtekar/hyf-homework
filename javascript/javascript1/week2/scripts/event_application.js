function getEventWeekday(daysToEvent) {
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
    var today = new Date(); //instantiation of new object from Date constructor.
    var indexToday = today.getDay(); //get todays weekday using getDay method.
    var indexEventDay = (indexToday + daysToEvent) % 7; 
    return weekdays[indexEventDay];
}
console.log(getEventWeekday(6));