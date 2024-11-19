function refreshWeather(currentweather){
    document.write(currentweather.data.temperature.current)
    let currentTemperature = Math.round(currentweather.data.temperature.current) ;
    document.write(currentTemperature);
    //display the temperature
    let currenteTemperatureValue =
    document.querySelector("#currentemperaturevalue");
    currenteTemperatureValue.innerHTML = currentTemperature ;
    // //this is a shorter way of doing the
    // exact same thing the commented
    // codes do.currenteTemperatureValue.
    // innerHTML =
    // Math. round(currentweather.data.
    // temperature.current) ;

    //display the weather descripton
    let weatherDescription = document.querySelector("#weatherdescription");
    weatherDescription.innerHTML =currentweather.data.conditon.descripton ;
    let currentWeatherIcon = document.querySelector("#weather-app-icon");
    currentWeatherIcon.innerHTML = `<img
    src="${currentweather.data.conditon.icon_url}"
    alt = "not loading"
    class = "weather-app-icon"
    />`;

    console.log(currentweather.data);
    //display the humidity
    let humidity = document.querySelector("#Humidity");
    humidity.innerHTML = ${currentweather.data.temperature.humidity}%;
    //display the wind speed
    let windSpeed = document.querySelector("#windspeed");
    windSpeed.innerHTML = ${currentweather.data.wind.speed}knots;
    //display day and tme
    let currentTime = document.querySelector("#currentme");
    let date = new Date(currentweather.data.tme * 1000);
    currentTime.innerHTML = formatDate(date);
}
function formatDate(date){
    let minutes = date.getMinutes();
    lethours = date.getHours();
    let days = ["Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]
    let day = days[date.getDay()];
    if (minutes <10){
    minutes = 0${minutes} ;}
    return ${day} ${hours}:${minutes} ;
}
function searchCity(currentcityName){
    let apiKey = "73dof19a030ad06t05b21e8521b4860f";
    let apiurl =
    ` htps
    ://api.shecodes.io/weather/v1/current?query=${currentcityName}&key=${apiKey}`;
    console.log(currentcityName);
    axios.get(apiurl).then(refreshWeather);
    console.log(apiurl);
}
function displayCity(event){
    event.preventDefault();
    let cityName = document.querySelector("#city-name");let
    cityNamedisplayed = document.querySelector("h3");
    cityNamedisplayed.innerHTML =cityName.value ;
    currentcityName = cityName.value
    searchCity(currentcityName) ;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", displayCity);