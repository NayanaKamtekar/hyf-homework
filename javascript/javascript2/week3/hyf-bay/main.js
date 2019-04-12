/*console.log('Script loaded');

console.log(getAvailableProducts());
*/
let availProducts = getAvailableProducts();

function addTheProducts(products) {
    let productList = document.getElementsByClassName('products')[0].children[0];
    //console.log('addTheProducts called');

    for (let i = 0; i < products.length; i++) {
        let product = document.createElement('li');
        
        let productName = document.createElement('div');
        productName.setAttribute('class', 'name');
        productName.innerHTML = products[i].name;
        product.appendChild(productName);

        let productPrice = document.createElement('div');
        productPrice.setAttribute('class', 'price');
        productPrice.innerHTML = products[i].price;
        product.appendChild(productPrice);

        let productRating = document.createElement('div');
        productRating.setAttribute('class', 'rating');
        productRating.innerHTML = products[i].rating;
        product.appendChild(productRating);

        let productShiping = document.createElement('div');
        productShiping.setAttribute('class', 'ships-to');
        product.appendChild(productShiping);

        let shipingCountryList = document.createElement('ul');
        productShiping.appendChild(shipingCountryList);

        for (let j = 0; j < products[i].shipsTo.length; j++) {
            let shipingCountry = document.createElement('li');
            shipingCountry.innerHTML = products[i].shipsTo[j];
            shipingCountryList.appendChild(shipingCountry);
        }

        let btn = document.createElement('button');
        btn.innerHTML = 'Add to cart';
        btn.setAttribute('class', 'button');
        product.appendChild(btn);

        function eventFunc() {
            btn.removeEventListener('click', eventFunc); //This is to disable event listener in the cart
            addProductsToCart(product);
        }

        btn.addEventListener('click', eventFunc);

        productList.appendChild(product); //This is to attach created 'li' element to 'ul'.  
    }
}

addTheProducts(availProducts);


/* Price analytics */
function printServerMessage(message) {
    console.log(message);
}

sendPricesToServer(availProducts.map(product => product.price), printServerMessage);


/* Render products function */
function renderProducts(productsToRender) {
    console.log('renderProducts called');
    currentProducts = document.getElementsByClassName('products')[0].children[0];

    while (currentProducts.firstChild) {
        // console.log(currentProducts.firstChild);
        currentProducts.removeChild(currentProducts.firstChild);
    }
    addTheProducts(productsToRender);
}

// let test = setTimeout(function () { renderProducts( [{id: "Chalk84098", name: "Chalk", price: 3169, rating: 3, shipsTo: ["Sweden", "Denmark"]}] ) },7000);


/*Filter products
1.Searching for products
2.Showing products that ships to country
3.Sort the products - optional*/

let searchValue = document.getElementsByClassName('search')[0].children[1];
let countryValue = document.getElementsByClassName('country')[0].children[1];
let sortValue = document.getElementsByClassName('sort')[0].children[1];

function sortProducts(listToSort) {

    if (sortValue.options[sortValue.selectedIndex].value === 'cheap') {
        listToSort = listToSort.sort((a, b) => a.price - b.price);
    }
    else if (sortValue.options[sortValue.selectedIndex].value === 'expensive') {
        listToSort = listToSort.sort((a, b) => b.price - a.price);
    }
    else if (sortValue.options[sortValue.selectedIndex].value === 'name') {
        listToSort = listToSort.sort((a, b) => {
            var nameA = a.name.toLowerCase(); // ignore upper and lowercase
            var nameB = b.name.toLowerCase(); // ignore upper and lowercase
            if (nameA < nameB) {
            return -1;
            }
            if (nameA > nameB) {
            return 1;
            }
            return 0;
        });
    }
}

/*Searching for products, Showing products that ships to country and Sort the products working together here*/
function searchingProducts(listToFilter) {

    if (searchValue.value) {
        listToFilter = listToFilter.filter(availProduct => {
            return availProduct.name.toLowerCase().includes(searchValue.value.toLowerCase());
        });
    }

    if (countryValue.options[countryValue.selectedIndex].value) {
        listToFilter = listToFilter.filter(availProduct => {
            return availProduct.shipsTo.map(selectOption => selectOption.toLowerCase()).includes(countryValue.options[countryValue.selectedIndex].value.toLowerCase());
        });
    } 

    sortProducts(listToFilter);

    renderProducts(listToFilter);
}

searchValue.addEventListener('input', function(){ searchingProducts(availProducts) });
countryValue.addEventListener('input', function(){ searchingProducts(availProducts) });
sortValue.addEventListener('input', function(){ searchingProducts(availProducts) });



/*Shopping cart - optional*/

function addProductsToCart(liToCart) {
    let cartProductList = document.getElementsByClassName('cart')[0].children[2];
    //console.log(liToCart.childNodes);//NodeList(4) [div.name, div.price, div.rating, div.ships-to, div.button]

    for (var i = liToCart.childNodes.length - 1; i >= 0; i--) {
        if (liToCart.childNodes[i].className === 'rating' || liToCart.childNodes[i].className === 'ships-to' || liToCart.childNodes[i].className === 'button') {            
            liToCart.removeChild(liToCart.childNodes[i]);   
        }  
        else if (liToCart.childNodes[i].className === 'price') {
            var price = parseInt(liToCart.childNodes[i].innerHTML);
        }
    }

    cartProductList.appendChild(liToCart); 

    let totalElem = document.getElementsByClassName('total')[0].children[0].children[0];
    let currentTotal = parseInt(totalElem.innerHTML);
    if (currentTotal) {
        currentTotal += price;
    }
    else {
        currentTotal = price;
    }
    totalElem.innerHTML = currentTotal;
}