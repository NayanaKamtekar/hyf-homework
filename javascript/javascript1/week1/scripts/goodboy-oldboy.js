var dogYearOfBirth = 2018;
var dogYearFuture = 2027;
var shouldShowResultInDogYears = true; //defining boolean value
var dogYear, result;

if (shouldShowResultInDogYears) {
    dogYear = (dogYearFuture - dogYearOfBirth)* 7;
    result ="\"Your dog will be " + dogYear + " dog years old in " + dogYearFuture + "\""; 
}
else {
    dogYear = (dogYearFuture - dogYearOfBirth);
    result ="\"Your dog will be " + dogYear + " human years old in " + dogYearFuture + "\""; 
}
console.log(result);