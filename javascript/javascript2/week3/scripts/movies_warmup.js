//Warmup array exercises
/*Doubling of number write a program that doubles the odd numbers in an array and throws away the even number.*/

let numbers = [1, 2, 3, 4, 5];

let oddDoubles = numbers.filter(number => number % 2 !== 0).map( num => 2*num );
console.log(oddDoubles);



// Working with movies
/* Part 1: Create an array of movies containing the movies with a short title (you define what short means)*/

let moviesShortTitle = movies.filter(movie => movie.title.length <= 5);
console.log(moviesShortTitle);


/*Part 2: Create an array of movie titles with long movie titles*/

let moviesLongTitle = movies.filter(movie => movie.title.length > 5);
console.log(moviesLongTitle);


/*Part 3: Count the number of movies made between 1980-1989 (including both the years) */

let moviesBet80_89 = movies.filter(movie => movie.year >= 1980 & movie.year <= 1989).length;
console.log(moviesBet80_89);


/*Part 4: Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), 
Bad (< 4) */

let moviesWithTag = movies.map(movie =>{ 

    if (movie.rating >= 7){
        movie.tag = 'Good';
    }
    else if (movie.rating >= 4 & movie.rating < 7 ){
        movie.tag = 'Average';
    }
    else if (movie.rating < 4){
        movie.tag = 'Bad';
    }
    return movie;
});
console.log(moviesWithTag);



/*Part 5: Using chaining, first filter the movies array to only contain the movies rated higher than 6. 
Now map the movies array to only the rating of the movies.*/

const RatingHigherThan6 = movies.filter(movie => movie.rating > 6).map(movie => movie.rating);
console.log(RatingHigherThan6);



/*Part 6: Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies 
that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?*/

const moviesWithKeyword = movies.filter(movie => {
    let str = movie.title.toLowerCase();
    return str.includes('surfer') || str.includes('alien') || str.includes('benjamin');
}).length;
console.log(moviesWithKeyword);



/*Part 7: Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated.*/

let duplicateTitle = movies.filter( movie =>  {
    let arrayFromTitle = movie.title.split(' '); //create an array with each word from title as an element of the array
    for (let i = 0; i < arrayFromTitle.length - 1; i++) { //Loop through all word except the last one
        iWord = arrayFromTitle[i].toLowerCase();  // Convert the word to lower case to make comparision case-insensitive 
        for (let j = i + 1; j < arrayFromTitle.length; j++) { // Loop thorugh words ahead
            jWord = arrayFromTitle[j].toLowerCase();
            if (iWord === jWord) { // If word matches then its duplicated
                return true; // Return true to filter method if word is duplicated and exit this function 
            } 
        }
    }
    return false; // If true was not returned yet, then no word is duplicated
                  // return false to filter method and exit
});
console.log(duplicateTitle);



/*Part 8: Find the word that is mostly duplicated using sort Optional*/

let wordCount = {};
let duplicateWord = movies.forEach( movie =>  {
    let arrayFromTitle = movie.title.split(' ');
    for (let i = 0; i < arrayFromTitle.length - 1; i++) {
        iWord = arrayFromTitle[i].toLowerCase();
        for (let j = i + 1; j < arrayFromTitle.length; j++) {
            jWord = arrayFromTitle[j].toLowerCase();
            if ( iWord === jWord) {
                if (Object.keys(wordCount).includes(iWord)) { // Get array of keys of wordCount by Object.keys function
                                                              // Check if duplicated word is a key of wordCount (includes method)
                    wordCount[iWord] = wordCount[iWord] + 1;  // Increament current value of key by 1
                }
                else {
                    wordCount[iWord] = 1; // if duplicated word is not a key, then introduce it as a key with value of 1
                }
            } 
        }
    }
});
let mostDuplicatedWord = Object.entries(wordCount).sort( (a, b) => {
    return b[1] - a[1];
}
)[0][0];

console.log('Most duplicated word is ' + '"' + mostDuplicatedWord + '"');



/*Part 9: Calculate the average rating of all the movies using reduce. Optional*/

const averageRating = movies.reduce((rate, movie) =>{
    return rate + movie.rating;
},0) / movies.length;
console.log(averageRating);



/*Part 10: Count the total number of Good, Average and Bad movies using reduce. Optional */
const ratingFreq = moviesWithTag.reduce( (freq, movie) => {
    /*if (movie.tag === 'Good') {
        freq.Good++;
    }
    else if (movie.tag === 'Average') {
        freq.Average++;
    } 
    else if (movie.tag === 'Bad') {
        freq.Bad++;
    }*/
    freq[movie.tag]++;
    return freq;  // Map and Filter return for each element of source array. Reduce return accumulator only once */
},{'Good': 0, 'Average': 0, 'Bad': 0});

console.log(ratingFreq);