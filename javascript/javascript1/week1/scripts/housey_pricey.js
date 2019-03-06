var nameOfThePerson = ["Peter", "Julia"]; //name of the person
var prices = [2500000, 1000000]; //paid prices
var dimension = [[8, 10, 10], [5, 11, 8]]; //dimensionsns of house
var gardenSizeInM2 = [100, 70]; //dimensionsns of garden
var housePrice =[]; //Initialising array that vil hold calculated prices
var i = 0; 
var result = [];
while (i < prices.length) {
    housePrice [i]= dimension[i][0] * dimension[i][1] * dimension[i][2] * 2.5 * 1000 + gardenSizeInM2[i] * 300;
    if(housePrice[i] < prices[i]) {
        result[i] = nameOfThePerson[i] + " is paying too Much.";
    }
    else {
        result[i] = nameOfThePerson[i] + " is paying too less."; 
    }
    console.log(result[i]); //to output the strings to console  
    i++;
}


