
let countryDetailsKeys = Object.keys(countryDetails);

let selectOption;
for (let i = 0; i < Object.keys(countryDetailsKeys).length; i++) {
    selectOption = selectOption + '<option value="' + countryDetailsKeys[i] + '">' + 
                   countryDetails[countryDetailsKeys[i]].name + ' (' + countryDetailsKeys[i] + ')' +
                   '</option>';
}

let srcSelectList = document.querySelector('#srcCurrency');
srcSelectList.innerHTML = '<option value="">Choose source currency</option>' + selectOption;

let srcCountryIcon = document.querySelector('#srcImg');

let trgSelectList = document.querySelector('#trgCurrency');
trgSelectList.innerHTML = '<option value="">Choose target currency</option>' + selectOption;

let trgCountryIcon = document.querySelector('#trgImg');

let srcAmountInput = document.querySelector('#srcAmount');
let trgAmountInput = document.querySelector('#trgAmount');
let exchangeRateText = document.querySelector('#exchangeRate');

function conversion(obj, trgCountryCurrencyCode) {
    let srcAmount = parseFloat(document.querySelector('#srcAmount').value);

    let exchangeRate = obj.rates[trgCountryCurrencyCode];
    exchangeRateText.innerHTML = 'Exchange Rate: ' + exchangeRate;

    let trgAmount = srcAmount * exchangeRate;
    trgAmountInput.value = trgAmount.toFixed(2);
    console.log(exchangeRate);
}

function do_it() {
    let srcCountryCurrencyCode = srcSelectList.options[srcSelectList.selectedIndex].value;
    if ( srcCountryCurrencyCode !== '') {
        let srcCountryCode = countryDetails[srcCountryCurrencyCode].alpha2;
        srcCountryIcon.src = 'https://www.countryflags.io/' + srcCountryCode + '/flat/48.png';
    }

    let trgCountryCurrencyCode = trgSelectList.options[trgSelectList.selectedIndex].value;
    if (trgCountryCurrencyCode !== '') {
        let trgCountryCode = countryDetails[trgCountryCurrencyCode].alpha2;
        trgCountryIcon.src = 'https://www.countryflags.io/' + trgCountryCode + '/flat/48.png';
    }

    if ( srcCountryCurrencyCode !== '' & 
         trgCountryCurrencyCode !== '' &
         srcAmountInput.value !== '') {
            let urlString = 'https://api.exchangeratesapi.io/latest?base=' + srcSelectList.options[srcSelectList.selectedIndex].value +
                            '&symbols=' + trgSelectList.options[trgSelectList.selectedIndex].value;
            fetch(urlString)
            .then( response => response.json() )
            .then( obj  => {
                conversion(obj, trgCountryCurrencyCode);
            });
    }

    if ( srcCountryCurrencyCode === '' || 
        trgCountryCurrencyCode === '' ||
        srcAmountInput.value === '') {
        trgAmountInput.value = '';
        exchangeRateText.innerHTML = '';

        if (srcCountryCurrencyCode === '') {
            srcCountryIcon.src = '';
        }
        if (trgCountryCurrencyCode === '') {
            trgCountryIcon.src = '';
        }
    }
}

srcSelectList.addEventListener('change', do_it);
trgSelectList.addEventListener('change', do_it);
srcAmountInput.addEventListener('input', do_it);


//let urlString = 'https://restcountries.eu/rest/v2/currency/gbp?fields=currencies';

/*
window.onload = function () {
    var gifUrlString = 'http://api.giphy.com/v1/gifs/trending?api_key=9pigJPp5fkD3Y6ZpTAPDK7hy7lX1CFo4&limit=18';

    fetch(gifUrlString)
        .then( response => response.json() )
        .then( gifObj => searchGIF(gifObj) );    
}

let buttonEvent = document.querySelector('.searchButton');
buttonEvent.addEventListener('click',function() {
    let searchString = document.querySelectorAll('.searchBox')[0].value.trim() ;
    
    let searchNumber = document.querySelectorAll('.searchBox')[1].value.trim() ;

    if (searchNumber === '') {
        searchNumber = '18';
    }

    if (searchString !== '') {
        let gifUrlString = 'http://api.giphy.com/v1/gifs/search?api_key=9pigJPp5fkD3Y6ZpTAPDK7hy7lX1CFo4&limit=' + searchNumber + '&q=' + searchString;

        fetch(gifUrlString)
        .then( response => response.json() )
        .then( gifObj => {
            document.querySelector('.trendingText').innerHTML = 'Showing GIFs for "' + searchString + '"';
            searchGIF(gifObj);
        });        
    }
    else {
        alert('Enter a search string');
    }
});

function searchGIF(gifObj) {
    let displayString = '';
    for (let i = 0; i < gifObj.data.length; i++) {
        displayString = displayString + '<li><a href="' + gifObj.data[i].images.downsized.url + '" target="_blank">' + 
        '<img src="' + gifObj.data[i].images.preview_gif.url + '"></a></li>';
    }

    let previewGIF = document.querySelector('.previewGIF');
    previewGIF.innerHTML = displayString;
}*/