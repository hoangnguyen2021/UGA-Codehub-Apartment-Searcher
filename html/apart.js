var apartments = [];
apartments.push(new Apartment("a", "Worst Western", "www.here.com", "Big place", 300, 2, 3, false, true, false, {lat: 33.9598, lng: -83.370}, false, true));
apartments.push(new Apartment("b", "La Keenta", "www.there.com", "Tiny place", 400, 1, 2, true, true, true, {lat: 33.9598, lng: -83.371}, false, true));
apartments.push(new Apartment("c", "Holiday Out", "www.este.com", "Broken down", 350, 2, 3, true, false, false, {lat: 33.9598, lng: -83.372}, false, true));
apartments.push(new Apartment("d", "Mary Ott", "www.coolmath.com", "Affordable", 476, 3, 2, true, true, false, {lat: 33.9598, lng: -83.373}, false, true));
apartments.push(new Apartment("e", "Fake name", "www.website?.com", "For the rich", 100, 3, 3, false, false, true, {lat: 33.9598, lng: -83.374}, false, true));
function Apartment(id, name, link, description, price, bed, bath, petFriendly, dorm, apartment, position, onMap, meets) {
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
  this.meets = meets;
}
