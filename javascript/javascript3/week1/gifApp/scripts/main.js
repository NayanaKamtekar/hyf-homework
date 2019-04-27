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
        let gifUrlString = 'https://api.giphy.com/v1/gifs/search?api_key=9pigJPp5fkD3Y6ZpTAPDK7hy7lX1CFo4&limit=' + searchNumber + '&q=' + searchString;

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
}