var userSearchInput = document.getElementById("mySearch");
var find = document.getElementById("submit");
var todayWeather = document.getElementById("weatherToday");
var weatherContainer = [];//to sava data in array to be looped
var nextDayWeather = document.getElementById("secondDay");
var thirdDayWeather = document.getElementById("thirdDay");

// function to get forecast for 3 days for a city
// all data comes and stored in array weatherContainer
// pass //city// as a parameter and use it instead of //egypt///
async function getCity(city) {
  // 'GET' by default so i do not need to write it
  // i pass url of the API to it
  var response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=9a7f977bce2a42208d2142740211509&q=${city}&days=3`)
  weatherContainer = await response.json();//convert string data from api to json
  console.log(weatherContainer);//just for check
}

// function to get tempreature of the city 1st day
function getTempraturefirst() {
  var todayTemprature = weatherContainer.forecast.forecastday[0].day.maxtemp_c;
  var todayDate = weatherContainer.forecast.forecastday[0].date;;
  var myRegion = weatherContainer.location.region;
  var conditionss = weatherContainer.current.condition.text;
  var weatherIcon = weatherContainer.forecast.forecastday[0].day.condition.icon;
  var windSpeed =  weatherContainer.forecast.forecastday[0].day.maxwind_kph;
  var windDirection = weatherContainer.forecast.forecastday[0].hour[0].wind_dir;
  var rainPercentage = weatherContainer.forecast.forecastday[0].day.daily_chance_of_rain;
  todayWeather.innerHTML = `
  <div class="forecast-header d-flex p-2 justify-content-between" id="today">
<div class="day">Saturday</div>
<div class=" date">${todayDate}</div>
</div>
 <!-- .forecast-header -->
<div class="forecast-content p-2 w-100" id="current">
<div class="location">${myRegion}</div>
<div class="degree d-flex justify-content-around">
  <div class="num">${todayTemprature}<sup>o</sup>C</div>

  <div class="forecast-icon">
    <img src="https:${weatherIcon}">
  </div>	

</div>
<div class="custom">${conditionss}</div>
<div class="today-icons w-100 d-flex justify-content-around">
<span><i class="fas fa-umbrella"></i>${rainPercentage}%</span>
          <span><i class="fas fa-wind"></i>${windSpeed}km/h</span>
          <span><i class="far fa-compass"></i>${windDirection}</span>
        </div>
</div>`
}


// function to get tempreature of the city 2nd day
 function getTempratureScnd() {
  var secondTemperature = weatherContainer.forecast.forecastday[1].day.maxtemp_c;
  var nextDate = weatherContainer.forecast.forecastday[1].date;
  var myRegion = weatherContainer.location.region;
  var conditionss = weatherContainer.current.condition.text;
  var weatherIcon = weatherContainer.forecast.forecastday[1].day.condition.icon;
  var windSpeed = weatherContainer.forecast.forecastday[1].day.maxwind_kph;
  var windDirection = weatherContainer.current.wind_dir;
  var rainPercentage = weatherContainer.forecast.forecastday[1].day.daily_chance_of_rain;
  nextDayWeather.innerHTML = `
  <div class="forecast-header d-flex p-2 justify-content-between" id="today">
<div class="day">sunday</div>
<div class=" date">${nextDate}</div>
</div>
 <!-- .forecast-header -->
<div class="forecast-content p-2 w-100" id="current">
<div class="location">${myRegion}</div>
<div class="degree d-flex justify-content-around">
  <div class="num">${secondTemperature}<sup>o</sup>C</div>

  <div class="forecast-icon">
    <img src="https:${weatherIcon}">
  </div>	

</div>
<div class="custom" style="padding-top: 1.5rem;">${conditionss}</div>
<div class="today-icons w-100 d-flex justify-content-around">
<span><i class="fas fa-umbrella"></i>${rainPercentage}%</span>
          <span><i class="fas fa-wind"></i>${windSpeed}km/h</span>
          <span><i class="far fa-compass"></i>${windDirection}</span>
        </div>
</div>`
}

// function to get tempreature of the city 3rd day
 function getTempratureThird() {
  var thirdTemperature =  weatherContainer.forecast.forecastday[2].day.maxtemp_c;
  var nextDate = weatherContainer.forecast.forecastday[2].date;
  var myRegion = weatherContainer.location.region;
  var conditionss = weatherContainer.current.condition.text;
  var weatherIcon = weatherContainer.forecast.forecastday[2].day.condition.icon;
  var windSpeed = weatherContainer.forecast.forecastday[2].day.maxwind_kph;
  var windDirection = weatherContainer.current.wind_dir;
  var rainPercentage = weatherContainer.forecast.forecastday[2].day.daily_chance_of_rain;
  thirdDayWeather.innerHTML = `
  <div class="forecast-header d-flex p-2 justify-content-between" id="today">
<div class="day">Monday</div>
<div class=" date">${nextDate}</div>
</div>
 <!-- .forecast-header -->
<div class="forecast-content p-2 w-100" id="current">
<div class="location">${myRegion}</div>
<div class="degree d-flex justify-content-around">
  <div class="num">${thirdTemperature}<sup>o</sup>C</div>

  <div class="forecast-icon">
    <img src="https:${weatherIcon}">
  </div>	

</div>
<div class="custom" style="padding-top: 1.5rem;">${conditionss}</div>
<div class="today-icons w-100 d-flex justify-content-around">
<span><i class="fas fa-umbrella"></i>${rainPercentage}%</span>
          <span><i class="fas fa-wind"></i>${windSpeed}km/h</span>
          <span><i class="far fa-compass"></i>${windDirection}</span>
        </div>
</div>`
}
async function getOriginCity()
{
  var response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=9a7f977bce2a42208d2142740211509&q=hawai&days=3`)
  weatherContainer = await response.json();
  getTempraturefirst();
  getTempratureScnd();
  getTempratureThird();
}
getOriginCity();

async function view() {
  await getCity(userSearchInput.value);
  getTempraturefirst();
  getTempratureScnd();
  getTempratureThird();
}
// find.onclick = function () { view(); };
find.addEventListener("click",view)

userSearchInput.addEventListener("keyup",view);
view();



 















