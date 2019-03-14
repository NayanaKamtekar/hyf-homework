var boughtCandyPrices = []; //Initiating array
//Plane object to create key (candy type) and value (price)
const candyPrices = {
    sweet: 0.5, 
    chocolate: 0.7, 
    toffee: 1.1, 
    chewing_gum: 0.03
}
function addCandy(candyType, weight) {
    var price = candyPrices[candyType.toLowerCase()] * weight; 
    boughtCandyPrices.push(price);
    
}
addCandy("Sweet", 20);
addCandy("toffee", 50);
addCandy("chocolate", 10);
addCandy("Chewing_gum", 20);

var amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
    var totalPrice = 0;
    for(i = 0; i < boughtCandyPrices.length; i++){  
        totalPrice += boughtCandyPrices[i];
    }
    if (amountToSpend > totalPrice) {
        console.log("You can buy more, so please do!");
    }
    else {
        console.log("Enough candy for you!");
    }
}
canBuyMoreCandy();

//optional with while loop
function canBuyMoreCandy1() {
    var totalPrice = 0;
    i = 0;
    while(i < boughtCandyPrices.length) {
        totalPrice += boughtCandyPrices[i];
        i++;
    }
    if (amountToSpend > totalPrice) {
        console.log("You can buy more, so please do!");
    }
    else {
        console.log("Enough candy for you!");
    }
}
canBuyMoreCandy1();
