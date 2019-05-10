class Product {
    // Constructor with name of the product and price
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    convertToCurrency(currency) {
        // Get latest exchange rate with DKK as base currency
        return fetch('https://api.exchangeratesapi.io/latest?base=DKK&symbols=' + currency) 
        .then(response => response.json())
        .then(obj => obj['rates'][currency] * this.price);
    }
}

class ShoppingCart {
    constructor(products) {
        this.products = products;
    }
    
    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(productName) {
        this.products = this.products.filter(product => product.name !== productName);
    }

    // Search product which start with productName
    searchProduct(productName) {
        return this.products.filter(product => {
            return product.name.toLowerCase().startsWith(productName.toLowerCase());
        });
    }

    getTotal() {
        return this.products.reduce((total, product) => {
            return total + product.price;
        },0);
    }

    renderProducts(username) {
        let productList = document.querySelector('.products>ul');

        this.products.forEach(product => {
            let productListItem = document.createElement('li');
        
            let productName = document.createElement('div');
            productName.setAttribute('class', 'name');
            productName.innerHTML = product.name;
            productListItem.appendChild(productName);

            let productPrice = document.createElement('div');
            productPrice.setAttribute('class', 'price');
            productPrice.innerHTML = product.price;
            productListItem.appendChild(productPrice);

            productList.appendChild(productListItem);

            let totalElem = document.querySelector('.total');
            totalElem.innerHTML = '<p>User: ' + username + '<br><br>Total: DKK ' + this.getTotal() + '</p>';
        });
    }

    getUser() {
        return fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json());
    }
}

// Create few example product and add then to the cart
const flatscreen = new Product('Flat-screen', 5000);
const washingM = new Product('Washing machine', 4000);
const microwave = new Product('Microwave', 2000);
const refrigarator = new Product('Refrigarator', 4000);

const shoppingCart = new ShoppingCart([]);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(washingM);
shoppingCart.addProduct(microwave);
shoppingCart.addProduct(refrigarator);

// Check if the currency gets converted to INR
flatscreen.convertToCurrency('INR').then(x => console.log(x));

// Get user and render the shopping cart
shoppingCart.getUser()
.then(object => {
    shoppingCart.renderProducts(object.username);
});

// Input box element
let searchBox = document.querySelector('input');

// Search suggestions container element
let searchSuggestions = document.querySelector('.outer-wrapper>div');

// Dark background for modal
let modal = document.querySelector('.modal');

// Modal container with text
let modalContent = document.querySelector('.modalContent');

// Close button for modal container
let closeBtn = document.querySelector('.closeBtn');


// Function to close i.e. hide the modal
function modalClose() {
    modal.hidden = true;
}

// Close the modal if X is clicked
closeBtn.addEventListener('click', modalClose);

// Add event listner to the search box, so that with every keystroke products are serched
searchBox.addEventListener('input', () => {
    
    // If serch matches some product and seacrh box is not empty
    if (shoppingCart.searchProduct(searchBox.value).length > 0 && searchBox.value.length > 0) {

        // Clear old search results
        searchSuggestions.innerHTML = '';

        // Display search suggesion box below the searc input element 
        searchSuggestions.hidden = false;

        // Attach all the searched product to the search suggestion box
        shoppingCart.searchProduct(searchBox.value).forEach( product => {
            let searchItem = document.createElement('p');
            searchItem.innerHTML = product.name;
            searchSuggestions.appendChild(searchItem);

            // If a search item is clicked, then a modal is opened with the product info
            function modalOpen() {
                // Display the dark modal background
                modal.hidden = false;

                //Remove old modal content
                if (modalContent.querySelector('p')) {
                    modalContent.removeChild(modalContent.childNodes[3]);
                }

                // Attached seach product name and price to modal
                let modalContentText = document.createElement('p');
                modalContentText.innerHTML = product.name + ' ' + product.price;
                modalContent.appendChild(modalContentText);
            }

            // Add event listner to each searched product so as to enable modal
            searchItem.addEventListener('click', modalOpen);            
        });
    }
    else {
        searchSuggestions.hidden = true;
    }
})