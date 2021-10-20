function Apartment(id, name, link, description, price, bed, bath, petFriendly, dorm, apartment, position, onMap, open, meets) {
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
  this.position = position;
  this.onMap = onMap;
  this.open = open;
  this.meets = meets;
}
var apartments = [];
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
));