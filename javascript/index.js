function updateTime() {
  //Los Angeles
  let losAngelesEl = document.querySelector("#los-angeles");
  let losAngelesDateEl = losAngelesEl.querySelector(".date");
  let losAngelesTimeEl = losAngelesEl.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateEl.innerHTML = losAngelesTime.format("MMMM Do YYYY");

  losAngelesTimeEl.innerHTML = losAngelesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // Sydney
  let sydneyEl = document.querySelector("#sydney");
  let sydneyDateEl = sydneyEl.querySelector(".date");
  let sydneyTimeEl = sydneyEl.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateEl.innerHTML = sydneyTime.format("MMMM Do YYYY");

  sydneyTimeEl.innerHTML = sydneyTime.format("hh:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);

function showCityTime(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesEl = document.querySelector("#cities");
  citiesEl.innerHTML = `
        <div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <a href="/"> All cities</a>
        `;
}
let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", showCityTime);
