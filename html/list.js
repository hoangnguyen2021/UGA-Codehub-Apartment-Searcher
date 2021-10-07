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
function loadList() {
  var a = 0;
  while (a < apartments.length) {
    createApartment(a);
    a = a + 1;
  }
}
function function1() {
  apartments[0].meets = !apartments[0].meets;
  displayApartment(0);
  //var flist = showPreferences();
}
function showMap(input) {
  apartments[input].onMap = !apartments[input].onMap;
  var a = 0;
  var mList = [];
  while (a < apartments.length) {
    if (apartments[a].onMap) {
      mList.push(apartments[a].position);
    }
    a = a + 1;
  }
  initMap(mList);
}
function displayApartment(number) {
  if (apartments[number].meets) {
    document.getElementById(apartments[number].id).style.display = "block";
  } else {
    document.getElementById(apartments[number].id).style.display = "none";
  }
}
function createApartment(number) {
  var list = document.getElementById("list");
  
  var divElement = document.createElement("div");
  
  divElement.id = apartments[number].id;
  divElement.classList.add("detail");
  
  item = document.createElement("button");
  item.classList.add("check");
  item.addEventListener("click", function() {
    if (apartments[number].onMap) {
      this.innerHTML = "";
    } else {
      this.innerHTML = "&#10003";
    }
    this.classList.toggle("shown");
    showMap(number);
  });
  divElement.appendChild(item);
  
  item = document.createElement("button");
  item.innerHTML = apartments[number].name;
  item.type = "button";
  item.classList.add("name");
  item.addEventListener("click", function() {
    this.classList.toggle('is-open');
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
  
  divElement.appendChild(item);
  
  var content = document.createElement("div");
  content.classList.add("content");
  
  item = document.createElement("a");
  item.innerHTML = apartments[number].link;
  item.href = apartments[number].link;
  
  content.appendChild(item);
  
  item = document.createElement("p");
  item.innerHTML = apartments[number].description;
  
  content.appendChild(item);
  divElement.appendChild(content);
  list.appendChild(divElement);
}
