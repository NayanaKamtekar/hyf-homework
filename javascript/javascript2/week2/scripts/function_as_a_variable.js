/*Create funtions that are used in these different ways:
Part 1: Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.*/
let arrayOfItems = [item1, item2, item3];

function item1() {
    console.log('item1 function called');
}
function item2() {
    console.log('item2 function called');
}
function item3() {
    console.log('item3 function called');
}

function arrayOfItemsFunc() {
    for(let i = 0; i < arrayOfItems.length; i++) {
        arrayOfItems[i]();
    }
}
arrayOfItemsFunc();


/*Part 2: Create a function as a const and try creating a function normally. Call both functions.*/

function normalFunc(){
    console.log('This is a normal function');
}

const constFunc = function() {
    console.log('This a const function');
}
normalFunc();
constFunc();


/*Part 3: Create an object that has a key whose value is a function. Try calling this function.*/

let objectKeyValue = {key1: function() { console.log('This is a function of key value ')}};
objectKeyValue['key1']();


/*Part 4: Create a function (outer) that returns a function (inner). Call the outer function and assign the return to a variable.
 Now call this variable (that is the inner function)*/

 function outer() {
     function inner(){
         console.log('This is a inner function');
     }
     return inner;
 }

 let abc = outer();
 abc();