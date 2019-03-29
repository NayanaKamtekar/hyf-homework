//Part1: Find the shortest word
const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function shortestWord(wordList) {
    let min = Infinity; // Set minimum to a large value
    let minIndex = null; 
    for (let i = 0; i < wordList.length; i++) {

        // If length of current array element is less than mimimum then update minimum iwth length of current element
        if (wordList[i].length < min) {
            min = wordList[i].length;
            minIndex = i;
        }
    }
    return wordList[minIndex];
}
console.log(shortestWord(danishWords)); //gives ø


//Part2: Difference between median and average
const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function average(numberList) {
    let sum = 0;
    for (let i = 0; i < numberList.length; i++) {
        sum += numberList[i];  //sum = values.reduce((previous, current) => current += previous);
    }
    return (sum / numberList.length).toFixed(2); //toFixed() method formats a number using fixed-point notation. 2 indicates 2 digits
}
console.log(average(housePrices)); //gives average 22557142.86

function median(numberList) {
    numberList.sort(function(a, b){return a - b});

    if (numberList.length % 2 === 0) {
        return (numberList[numberList.length / 2 - 1] + numberList[numberList.length / 2]) / 2;
    }
    else {
        return numberList[(numberList.length - 1) / 2];
    }
}
console.log(median(housePrices)); //gives median 3500000

