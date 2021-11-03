
function Apartment(id, name, link, description, price, numBed, bedsString, numBaths, bathsString, petFriendly, dorm, apartment, lat, lng, onMap, open, meets) {
  this.id = id;
  this.name = name;
  this.link = link;
  this.description = description;
  this.price = price;
  this.numBed = numBed;
  this.bedsString = bedsString;
  this.numBaths = numBaths;
  this.bathsString = bathsString;
  this.petFriendly = petFriendly;
  this.dorm = dorm;
  this.apartment = apartment;
  this.lat = lat;
  this.lng = lng;
  this.onMap = onMap;
  this.open = open;
  this.meets = meets;
}
var apartments = [];
let jsonResults = {};
var latResults = [];
var lngResults = [];
var propertyName;
var id;
var price;
var beds;
var baths;
var link;
var lat;
var lng;
var bedString;
var bathsString;

// This function creates all of the apartments objects and uses 
// the google map api to get he latitutde and longitude
function loadLocations(callback) {
  var i = 0;
  var j = 0; 
  fetch('./apartments_search.json')
    .then(results => results.json())
    .then(results => {
      jsonResults = results;
      while (i < jsonResults.length) {
        var address = jsonResults[i].location.streedAddress;
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
        url = url + address + ",+" + 'Athens' + ',+GA' + '&key=AIzaSyCcK6plxgo_6bLdx-GhUCmNa7jjxuzC9is';
        fetch(url)
        .then(function(response) {
          return response.json();
        }).then(function(data) {
          latResults[j] = data.results[0].geometry.location.lat;
          lngResults[j] = data.results[0].geometry.location.lng;
          j++;
          if (lngResults.length == jsonResults.length) {
            loadApartments();
          }
        })
        i++;
      }
    });
  }

function loadApartments() {
    fetch('./apartments_search.json')
    .then(results => results.json())
    .then(results => {
      jsonResults = results;
        for(var a = 0; a < jsonResults.length; a++) {
          propertyName = jsonResults[a].propertyName;
          id = jsonResults[a].id;
          price = jsonResults[a].rent.min;
          beds = getBed(jsonResults[a].beds);
          bedString = jsonResults[a].beds;
          baths = getBath(jsonResults[a].baths);
          bathsString = jsonResults[a].baths;
          link = jsonResults[a].url;
          lat = latResults[a];
          lng = lngResults[a];
          apartments[a] = new Apartment (
            id,
            propertyName,
            link,
            'Test',
            price,
            beds,
            bedString,
            baths,
            bathsString,
            true,
            false,
            true,
            lat,
            lng,
            false,
            false,
            true
          );
          if (apartments.length == jsonResults.length) {
            loadList();
          }
        }
    })
  }


  function getBed(jsonBed) {
    var stringarr = jsonBed.split("");
    return stringarr[0];
  }

  function getBath(jsonBath) {
    var stringarr = jsonBath.split("");
    return stringarr[0];
  }

//Apartment Objects for Testing
/*
apartments.push(new Apartment(
  "a", "Worst Western",
  "www.here.com",
  "Big place",
  300,
  2,
  3,
  false,
  true,
  false,
  {lat: 33.9598, lng: -83.359},
  false,
  false,
  true,
));
apartments.push(new Apartment(
  "b",
  "La Keenta",
  "www.there.com",
  "Tiny place",
  400,
  1,
  2,
  true,
  true,
  true,
  {lat: 33.9598, lng: -83.364},
  false,
  false,
  true
));
apartments.push(new Apartment(
  "c",
  "Holiday Out",
  "www.este.com",
  "Broken down",
  350,
  2,
  3,
  true,
  false,
  false,
  {lat: 33.9598, lng: -83.369},
  false,
  false,
  true
));
apartments.push(new Apartment(
  "d",
  "Mary Ott",
  "www.coolmath.com",
  "Affordable",
  476,
  3,
  2,
  true,
  true,
  false,
  {lat: 33.9598, lng: -83.374},
  false,
  false,
  true
));
apartments.push(new Apartment(
  "e",
  "Fake name",
  "www.website?.com",
  "For the rich",
  100,
  3,
  3,
  false,
  false,
  true,
  {lat: 33.9598, lng: -83.379},
  false,
  false,
  true
));
apartments.push(new Apartment(
  "f",
  "Running out",
  "www.github.com",
  "For the lazy",
  200,
  3,
  3,
  false,
  false,
  true,
  {lat: 33.94, lng: -83.37},
  false,
  false,
  true
));
apartments.push(new Apartment(
  "g",
  "Of Ideas",
  "www.github.com",
  "For the lazy",
  200,
  3,
  3,
  false,
  false,
  true,
  {lat: 33.96, lng: -83.35},
  false,
  false,
  true
));
apartments.push(new Apartment(
  "h",
  "For Dumb Names",
  "www.github.com",
  "For the lazy",
  200,
  3,
  3,
  false,
  false,
  true,
  {lat: 33.98, lng: -83.33},
  false,
  false,
  true
));
apartments.push(new Apartment(
  "i",
  "Please Hurry",
  "www.github.com",
  "For the lazy",
  200,
  3,
  3,
  false,
  false,
  true,
  {lat: 33.92, lng: -83.32},
  false,
  false,
  true
));
apartments.push(new Apartment(
  "j",
  "Back End Team",
  "www.github.com",
  "For the lazy",
  200,
  3,
  3,
  false,
  false,
  true,
  {lat: 33.95, lng: -83.33},
  false,
  false,
  true
)) */



