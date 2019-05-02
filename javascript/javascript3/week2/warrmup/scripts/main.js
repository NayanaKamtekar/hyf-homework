//Movies exercise
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(response => response.json())
.then((movies) => {
    //console.log(movies);
        
    //Create an array of bad movies
    let badMovies = movies.filter(movie => movie.rating < 4);
    console.log(badMovies);

    //Creat an array of bad movies since year 2000
    let badMoviesSince2000 = movies.filter(movie => movie.rating < 4 && movie.year >= 2000);
    console.log(badMoviesSince2000);

    //Create an array of the titles of the bad movies since year 2000
    let badMoviesTitle = badMoviesSince2000.map(movie => movie.title);
    console.log(badMoviesTitle);

});



//Promise that resolves after set time
function myFunction(resolveAfter){
    return new Promise( function (resolve, reject) {
        setTimeout(() => {
            resolve('I am called asynchronously');
        }, resolveAfter * 1000);
    });
}

var x = myFunction(6);
x.then(a => console.log(a));



//Rewrite time 
//Part 1
function setTimeoutPromise(milliseconds ) {
    return new Promise( function(resolve) {
        setTimeout(resolve, milliseconds);
    });
}
setTimeoutPromise(3000)
.then(() => {
    console.log('Called after 3 seconds');
});


//Part 2
function getCurrentLocation() {
    return new Promise( function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);        
    });
}

getCurrentLocation()
.then((position) => {
    // called when the users position is found
    console.log(position);
})
.catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
});


//Fetching and waiting
fetch('https://api.exchangeratesapi.io/latest')
.then(response => response.json())
.then((obj) => {
    setTimeout(() =>{ console.log(obj) }, 3000);
});

//Fetching and waiting - Chaining
fetch('https://api.exchangeratesapi.io/latest')
.then(response => response.json())
.then(obj => {
    return new Promise ( resolve => {
        setTimeout(() => {
            resolve(obj) }, 3000);
        });
})
.then(obj => { console.log(obj) });