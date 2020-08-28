//ticketmaster
//baseURL with ZIP code
//https://app.ticketmaster.com/discovery/v2/events?apikey=XSmcYPkBbpOYgD2cADF5KfStTNGOlF4T&postalCode=70116
//baseURL with Lat+Long

//Open BreweryDB
//by city
//https://api.openbrewerydb.org/breweries?by_city=san_diego
//by state
//https://api.openbrewerydb.org/breweries?by_state=new%20mexico
//by postal
//https://api.openbrewerydb.org/breweries?by_postal=44107

const baseTicketURL =
  "https://app.ticketmaster.com/discovery/v2/events?apikey=XSmcYPkBbpOYgD2cADF5KfStTNGOlF4T&postalCode=";
const baseBreweryURLCity = "https://api.openbrewerydb.org/breweries?by_city=";
const baseBreweryURLState = "https://api.openbrewerydb.org/breweries?by_state=";
const baseBreweryURLZIP = "https://api.openbrewerydb.org/breweries?by_postal=";
let happening = "";
let breweryCity = "";
let breweryState = "";
let breweryPostalCode = "";

function getEvents(grape) {
  let searchTicketURL = baseTicketURL + grape;
  console.log(searchTicketURL);
  $.ajax({
    url: searchTicketURL,
    method: "GET",
  }).then(function (ticketData) {
    console.log(ticketData);
  });
}

function getBreweryCity(peach) {
  let searchBreweryCityURL = baseBreweryURLCity + peach;
  console.log(searchBreweryCityURL);
  $.ajax({
    url: searchBreweryCityURL,
    method: "GET",
  }).then(function (breweryCityData) {
    console.log(breweryCityData);
  });
}

function getBreweryState(orange) {
  let searchBreweryStateURL = baseBreweryURLState + orange;
  console.log(searchBreweryStateURL);
  $.ajax({
    url: searchBreweryStateURL,
    method: "GET",
  }).then(function (breweryStateData) {
    console.log(breweryStateData);
  });
}

function getBreweryZIP(strawberry) {
  let searchBreweryZIPURL = baseBreweryURLZIP + strawberry;
  console.log(searchBreweryZIPURL);
  $.ajax({
    url: searchBreweryZIPURL,
    method: "GET",
  }).then(function (breweryZIPData) {
    console.log(breweryZIPData);
  });
}

$("#ticket-submitBtn").on("click", function () {
  event.preventDefault();
  happening = $("#inputTicket").val().trim();
  // console.log("this is event", event);
  getEvents(happening);
  $("#inputTicket").val("");
});

$("#brewery-city-submitBtn").on("click", function () {
  event.preventDefault();
  breweryCity = $("#inputBreweryCity").val().trim();
  breweryCity = breweryCity.split(" ").join("_")
  console.log("brewery city", breweryCity);
  getBreweryCity(breweryCity);
  $("#inputBreweryCity").val("");
});

$("#brewery-state-submitBtn").on("click", function () {
  event.preventDefault();
  breweryState = $("#inputBreweryState").val().trim();
  breweryState = breweryState.replace(" ", "_");
  console.log("brewery state", breweryState);
  getBreweryState(breweryState);
  $("#inputBreweryState").val("");
});

$("#brewery-zip-submitBtn").on("click", function () {
  event.preventDefault();
  breweryPostalCode = $("#inputBreweryZIP").val().trim();
  console.log("brewery ZIP", breweryPostalCode);
  getBreweryZIP(breweryPostalCode);
  $("#inputBreweryZIP").val("");
});
