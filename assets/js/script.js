// main api key
var apiKey = "72dcba6758c0f3fef0a894c324ffa5fc";
// moment date times
var now = moment().format("l");
var firstDateTime = moment().add(1, "d").format("DD/MM/YYYY");
var secondDateTime = moment().add(2, "d").format("DD/MM/YYYY");
var thirdDateTime = moment().add(3, "d").format("DD/MM/YYYY");
var fourthDateTime = moment().add(4, "d").format("DD/MM/YYYY");
var fifthDateTime = moment().add(5, "d").format("DD/MM/YYYY");
// main
var today = document.getElementById("today");
var fetcher = document.getElementById("fetch");
// card weather
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
// card date
var firstDate = document.getElementById("firstDate");
var secondDate = document.getElementById("secondDate");
var thirdDate = document.getElementById("thirdDate");
var fourthDate = document.getElementById("fourthDate");
var fifthDate = document.getElementById("fifthDate");
// search
var cityNameElement = document.querySelector("#search");
var cityHistory = document.querySelector("#history");
var cities = [];

fetcher.addEventListener("click", function generateWeather(event) {
  event.preventDefault();
  var cityName = cityNameElement.value.trim();
  var Url =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    cityName +
    "&limit=1&appid=" +
    apiKey;
  fetch(Url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var latData = data[0].lat;
      var lonData = data[0].lon;
      var cityName = document.createElement("h1");
      cityName.textContent = data[0].name + " (" + now + ")";
      today.append(cityName);
      var Url =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        latData +
        "&lon=" +
        lonData +
        "&exclude=minutely&units=imperial&appid=" +
        apiKey;
      fetch(Url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data1) {
          var todayIcon = document.createElement("img");
          var tempData = document.createElement("p");
          var windData = document.createElement("p");
          var humidityData = document.createElement("p");
          var uvDataText = document.createElement("p");
          var uvData = document.createElement("span");

          tempData.textContent = "Temperature: " + data1.current.temp;
          windData.textContent = "Wind: " + data1.current.wind_speed;
          humidityData.textContent = "Humidity: " + data1.current.humidity;
          uvDataText.textContent = "UV: ";
          uvData.textContent = data1.current.uvi;

          var todayIconCode = data1.current.weather[0].icon;
          var todayIconUrl =
            "https://openweathermap.org/img/wn/" + todayIconCode + "@2x.png";
          todayIcon.setAttribute("src", todayIconUrl);
          today.append(todayIcon);
          today.append(tempData);
          today.append(windData);
          today.append(humidityData);
          today.append(uvDataText);
          uvDataText.append(uvData);
          uvData.classList.add("badge-success");

          // first day card
          var firstDate = document.createElement("h2");
          var firstIcon = document.createElement("img");
          var firstTemp = document.createElement("p");
          var firstWind = document.createElement("p");
          var firstHumidity = document.createElement("p");
          firstDate.textContent = firstDateTime;
          firstTemp.textContent = "Temp: " + data1.daily[0].temp.day;
          firstWind.textContent = "Wind: " + data1.daily[0].wind_speed;
          firstHumidity.textContent = "Humidity: " + data1.daily[0].humidity;
          var dayOneIconCode = data1.daily[0].weather[0].icon;
          var dayOneIconUrl =
            "https://openweathermap.org/img/wn/" + dayOneIconCode + "@2x.png";
          firstIcon.setAttribute("src", dayOneIconUrl);
          firstDate.append(firstDateTime);
          first.append(firstIcon);
          first.append(firstTemp);
          first.append(firstWind);
          first.append(firstHumidity);

          // second day card
          var secondDate = document.createElement("h2");
          var secondIcon = document.createElement("img");
          var secondTemp = document.createElement("p");
          var secondWind = document.createElement("p");
          var secondHumidity = document.createElement("p");

          secondDate.textContent = secondDateTime;
          secondTemp.textContent = "Temp: " + data1.daily[1].temp.day;
          secondWind.textContent = "Wind: " + data1.daily[1].wind_speed;
          secondHumidity.textContent = "Humidity: " + data1.daily[1].humidity;

          var dayTwoIconCode = data1.daily[1].weather[0].icon;
          var dayTwoIconUrl =
            "https://openweathermap.org/img/wn/" + dayTwoIconCode + "@2x.png";
          secondIcon.setAttribute("src", dayTwoIconUrl);
          secondDate.append(secondDateTime);
          second.append(secondIcon);
          second.append(secondTemp);
          second.append(secondWind);
          second.append(secondHumidity);

          // third day card
          var thirdDate = document.createElement("h2");
          var thirdIcon = document.createElement("img");
          var thirdTemp = document.createElement("p");
          var thirdWind = document.createElement("p");
          var thirdHumidity = document.createElement("p");

          thirdDate.textContent = thirdDateTime;
          thirdTemp.textContent = "Temp: " + data1.daily[2].temp.day;
          thirdWind.textContent = "Wind: " + data1.daily[2].wind_speed;
          thirdHumidity.textContent = "Humidity: " + data1.daily[2].humidity;

          var dayThreeIconCode = data1.daily[2].weather[0].icon;
          var dayThreeIconUrl =
            "https://openweathermap.org/img/wn/" + dayThreeIconCode + "@2x.png";
          thirdIcon.setAttribute("src", dayThreeIconUrl);
          thirdDate.append(thirdDateTime);
          third.append(thirdIcon);
          third.append(thirdTemp);
          third.append(thirdWind);
          third.append(thirdHumidity);

          var fourthDate = document.createElement("h2");
          var fourthIcon = document.createElement("img");
          var fourthTemp = document.createElement("p");
          var fourthWind = document.createElement("p");
          var fourthHumidity = document.createElement("p");

          // fourth day card
          fourthDate.textContent = fourthDateTime;
          fourthTemp.textContent = "Temp: " + data1.daily[3].temp.day;
          fourthWind.textContent = "Wind: " + data1.daily[3].wind_speed;
          fourthHumidity.textContent = "Humidity: " + data1.daily[3].humidity;

          var dayFourIconCode = data1.daily[3].weather[0].icon;
          var dayFourIconUrl =
            "https://openweathermap.org/img/wn/" + dayFourIconCode + "@2x.png";
          fourthIcon.setAttribute("src", dayFourIconUrl);
          fourthDate.append(fourthDateTime);
          fourth.append(fourthIcon);
          fourth.append(fourthTemp);
          fourth.append(fourthWind);
          fourth.append(fourthHumidity);

          // fifth day card
          var fifthDate = document.createElement("h2");
          var fifthIcon = document.createElement("img");
          var fifthTemp = document.createElement("p");
          var fifthWind = document.createElement("p");
          var fifthHumidity = document.createElement("p");

          fifthDate.textContent = fifthDateTime;
          fifthTemp.textContent = "Temp: " + data1.daily[4].temp.day;
          fifthWind.textContent = "Wind: " + data1.daily[4].wind_speed;
          fifthHumidity.textContent = "Humidity: " + data1.daily[4].humidity;

          var dayFiveIconCode = data1.daily[4].weather[0].icon;
          var dayFiveIconUrl =
            "https://openweathermap.org/img/wn/" + dayFiveIconCode + "@2x.png";
          fifthIcon.setAttribute("src", dayFiveIconUrl);
          fifthDate.append(fifthDateTime);
          fifth.append(fifthIcon);
          fifth.append(fifthTemp);
          fifth.append(fifthWind);
          fifth.append(fifthHumidity);
        });
    });
});
