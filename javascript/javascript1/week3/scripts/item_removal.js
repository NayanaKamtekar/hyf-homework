function removeItem (numbersToRemove) {
    var j = 0;
    while (j < numbersToRemove) {
        var randomNumber = parseInt(Math.random() * 11);
        for (var i = 0; i < numbersArray.length; i++) {
            if (numbersArray[i] === randomNumber ) {
                numbersArray.splice(i, 1);
                //delete numbersArray[i]; //Using delete may leave undefined holes in the array
                j++;// j counts number of deletions. Increment j here, as element is deleted only when "if" condition is true

                if (j >= numbersToRemove) {
                    break; // If the array has duplicate elements then for-loop can delete multiple elements for one iteration of while-loop.
                           // Break out of for-loop if we have deleted enough elements
                }
            }
        }
        console.log(randomNumber, numbersArray); 
    }          
}
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removeItem(1); //Answer to part 1.

var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removeItem(4); //Answer to part 2.