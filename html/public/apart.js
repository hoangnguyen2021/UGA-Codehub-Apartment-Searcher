
function Apartment(id, name, link, description, price, bed, bath, petFriendly, dorm, apartment, lat, lng, onMap, open, meets) {
  this.id = id;
  this.name = name;
  this.link = link;
  this.description = description;
  this.price = price;
  this.bed = bed;
  this.bath = bath;
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

fetch('./apartments_search.json')
  .then(results => results.json())
  .then(results => {
    for (var i = 0; i < results.length; i++) {
      apartments.push(new Apartment(
        results[i].id,
        results[i].propertyName,
        results[i].url,
        "Test",
        results[i].rent.min,
        getBed(results[i].beds),
        getBath(results[i].baths),
        true,
        false,
        true,
        getLat(results[i].location),
        getLng(results[i].location),
        false,
        false,
        true,
      ));
    }
  })

  function getLat(location) {
  
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    address = location.streedAddress;
    url = url + address + ",+" + location.city + ',+GA' + '&key=AIzaSyCcK6plxgo_6bLdx-GhUCmNa7jjxuzC9is';
    fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data.results[0].geometry.location.lat);
      return data.results[0].geometry.location.lat;
    })
    .catch(function(error) {
      alert(error);
    });
  } 

  function getLng(location) {
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    address = location.streedAddress;
    url = url + address + ",+" + location.city + ',+GA' + '&key=AIzaSyCcK6plxgo_6bLdx-GhUCmNa7jjxuzC9is';
    fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data.results[0].geometry.location.lng);
      return data.results[0].geometry.location.lng;
    })
    .catch(function(error) {
      alert(error);
    });
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



