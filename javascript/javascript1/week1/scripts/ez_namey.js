var firstWords = ["awesome", "fascinating", "incredible", "marvelous", "amazing", 
                 "shocking", "stunning", "surprising", "unbelievable", "wonderful"];
var secondWords = ["corporate", "associated", "collaborative", "united", "shared", 
                 "combined", "amalgamated", "pooled", "joint", "collective"];
const randomNumber1 = Math.floor(Math.random() * 10) + 0; //index for firstWords array
const randomNumber2 = Math.floor(Math.random() * 10) + 0; //index for secondWords array
var startupName = firstWords[randomNumber1] + " " + secondWords[randomNumber2];
var result = "\"The startup: " + "\"" + startupName + "\"" + " contains " + startupName.length +" characters" + "\"";
console.log(result);