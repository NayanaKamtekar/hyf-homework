function showPosition(position) {
    let currentLat = position.coords.latitude;
    let currentLong = position.coords.longitude; 

    if(currentLat !== '' && currentLong !== '') {
        var weatherUrlString = 'https://api.openweathermap.org/data/2.5/weather?lat=' + currentLat + '&lon=' + currentLong + '&appid=8241f79aab0555be442b3f31756c2690&units=metric';
        var tzUrlString = 'https://dev.virtualearth.net/REST/v1/TimeZone/' + currentLat + ', ' + currentLong + '?key=AjnowCIGdf7JASOOMG_N_poMEX6KtTO0sHQbV0v8mFvDFI-GRtzyFovg9w4jBhXX';
    }

    fetch(tzUrlString)
        .then( response => response.json() )
        .then( tzObj => timeZone(tzObj, weatherUrlString) );    
}

function timeZone(tzObj, weatherUrlString) {

    if (Object.keys(tzObj.resourceSets[0].resources[0]).includes('timeZoneAtLocation')) {
        var offset = tzObj.resourceSets[0].resources[0].timeZoneAtLocation[0].timeZone[0].convertedTime.utcOffsetWithDst.split(':');        
    }
    else if (Object.keys(tzObj.resourceSets[0].resources[0]).includes('timeZone')) {
        var offset = tzObj.resourceSets[0].resources[0].timeZone.convertedTime.utcOffsetWithDst.split(':');        
    }

    
    if (offset[0].startsWith('-')) {
        var utcOffset = -1 * (-1 * parseInt(offset[0]) * 60 + parseInt(offset[1]));
    }
    else {
        var utcOffset = parseInt(offset[0]) * 60 + parseInt(offset[1]);
    }

    fetch(weatherUrlString)
        .then( response => response.json() )
        .then( weatherObj => displayWeather(weatherObj, utcOffset));
}

function displayWeather(weatherObj, utcOffset) {
    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let place = weatherObj.name + ', ' + weatherObj.sys.country;
    localStorage.setItem('lastSearch', place);

    let placeHeader = document.querySelector('.place');
    placeHeader.innerHTML = 'Weather at ' + place;

    let currentDateTime = new Date();
    let localDateTime = new Date(Date.parse(currentDateTime.toUTCString()) + (currentDateTime.getTimezoneOffset() + utcOffset)*60*1000);
    let dateString = weekDays[localDateTime.getDay()] + ', ' + localDateTime.getDate() + ' ' + monthNames[localDateTime.getMonth()]  
                + ' ' + localDateTime.getFullYear();

    let htmlDate = document.querySelector('.date');
    htmlDate.innerHTML = dateString;

    let timeString = localDateTime.getHours().toString().padStart(2, '0') + ':' + localDateTime.getMinutes().toString().padStart(2, '0');

    let htmlTime = document.querySelector('.time');
    htmlTime.innerHTML = timeString;

    tempString = parseFloat(weatherObj.main.temp).toFixed(1) + '\xB0C'.sup();
    let htmlTemp = document.querySelector('.temp');
    htmlTemp.innerHTML = tempString;

    let iconElem = document.querySelector('.icon');
    iconElem.src = 'https://openweathermap.org/img/w/' + weatherObj.weather[0].icon + '.png';
    iconElem.style.border = 'solid';

    let weatherDescElem = document.querySelector('.weatherIcon figcaption');
    weatherDescElem.innerHTML = weatherObj.weather[0].description;

    let weatherInfoString = '<li><div>Wind</div><div>' + weatherObj.wind.speed + ' m/s, ( ' + weatherObj.wind.deg + ' )</div></li>';
    weatherInfoString = weatherInfoString + '<li><div>Cloudiness</div><div>' + weatherObj.clouds.all + ' %</div></li>';
    weatherInfoString = weatherInfoString + '<li><div>Pressure</div><div>' + weatherObj.main.pressure + ' hPa</div></li>';
    weatherInfoString = weatherInfoString + '<li><div>Humidity</div><div>' + weatherObj.main.humidity + ' %</div></li>';

    let sunrise = new Date(Date.UTC(1970, 1, 1, 0, 0, parseInt(weatherObj.sys.sunrise) + (currentDateTime.getTimezoneOffset() + utcOffset)*60));
    weatherInfoString = weatherInfoString + '<li><div>Sunrise</div><div>' + sunrise.getHours().toString().padStart(2, '0') + ':' + sunrise.getMinutes().toString().padStart(2, '0') + '</div></li>';

    let sunset = new Date(Date.UTC(1970, 1, 1, 0, 0, parseInt(weatherObj.sys.sunset) + (currentDateTime.getTimezoneOffset() + utcOffset)*60));
    weatherInfoString = weatherInfoString + '<li><div>Sunset</div><div>' + sunset.getHours().toString().padStart(2, '0') + ':' + sunset.getMinutes().toString().padStart(2, '0') + '</div></li>';

    weatherInfoString = weatherInfoString + '<li><div>Geo coords</div><div>[' + weatherObj.coord.lat + ', ' + weatherObj.coord.lon + ']</div></li>';

    let weatherInfo = document.querySelector('.weatherInfo ul');
    weatherInfo.innerHTML = weatherInfoString;

};

let buttonEvent = document.querySelector('.searchButton');
buttonEvent.addEventListener('click',function() {
    let inputValue = document.querySelector('.searchBox').value.trim() ;

    if(inputValue !== '') {
        var weatherUrlString = 'https://api.openweathermap.org/data/2.5/weather?q=' + inputValue + '&appid=8241f79aab0555be442b3f31756c2690&units=metric';
        var tzUrlString = 'https://dev.virtualearth.net/REST/v1/TimeZone/query=' + inputValue + '?key=AjnowCIGdf7JASOOMG_N_poMEX6KtTO0sHQbV0v8mFvDFI-GRtzyFovg9w4jBhXX';
    }

    fetch(tzUrlString)
        .then( response => response.json() )
        .then( tzObj => timeZone(tzObj, weatherUrlString) );
});

let currentLocEvent = document.querySelector('.currentLoc');
currentLocEvent.addEventListener('click',function() {
    navigator.geolocation.getCurrentPosition(showPosition);
});

window.onload = function () {
    let lastSearchValue = localStorage.getItem('lastSearch');
    if(lastSearchValue !== '') {
        var weatherUrlString = 'https://api.openweathermap.org/data/2.5/weather?q=' + lastSearchValue + '&appid=8241f79aab0555be442b3f31756c2690&units=metric';
        var tzUrlString = 'https://dev.virtualearth.net/REST/v1/TimeZone/query=' + lastSearchValue + '?key=AjnowCIGdf7JASOOMG_N_poMEX6KtTO0sHQbV0v8mFvDFI-GRtzyFovg9w4jBhXX';
    }

    fetch(tzUrlString)
        .then( response => response.json() )
        .then( tzObj => timeZone(tzObj, weatherUrlString) );

};
