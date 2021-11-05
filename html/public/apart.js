//Creates Apartment objects
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

//Set up various variable
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

// This function creates all of the Apartments objects and uses 
// the Google Map API to get the latitutde and longitude
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

// Loads the Apartments
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
            'Apartment',
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


  //Gets the number of beds
  function getBed(jsonBed) {
    var stringarr = jsonBed.split("");
    return stringarr[0];
  }

  //Gets the number of bathrooms
  function getBath(jsonBath) {
    var stringarr = jsonBath.split("");
    return stringarr[0];
  }