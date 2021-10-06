var apartments = [];
var a = 0;
apartments.push(new Apartment("a", "Worst Western", "www.here.com", "Big place"));
apartments.push(new Apartment("b", "La Keenta", "www.there.com", "Tiny place"));
apartments.push(new Apartment("c", "Holiday Out", "www.este.com", "Broken down"));
apartments.push(new Apartment("d", "Mary Ott", "www.coolmath.com", "Affordable"));
apartments.push(new Apartment("e", "Other fake name", "www.website?.com", "Made of baby tears"));
function Apartment(id, name, link, description) {
  this.id = id;
  this.name = name;
  this.link = link;
  this.description = description;
}
function function1() {
  var list = document.getElementById("list");
  
  var divElement = document.createElement("div");
  
  divElement.id = apartments[a].id;
  divElement.classList.add("detail");
  
  item = document.createElement("input");
  item.type = "checkbox";
  item.classList.add("check");
  divElement.appendChild(item);
  
  item = document.createElement("button");
  item.innerHTML = " " + apartments[a].name;
  item.type = "button";
  item.classList.add("name");
  item.addEventListener("click", function() {
    this.classList.toggle('is-open');
    var content = this.nextElementSibling;
    if (content.style.display == "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
  
  divElement.appendChild(item);
  
  var content = document.createElement("div");
  content.classList.add("content");
  
  item = document.createElement("a");
  item.innerHTML = apartments[a].link;
  item.href = apartments[a].link;
  
  content.appendChild(item);
  
  item = document.createElement("p");
  item.innerHTML = apartments[a].description;
  
  content.appendChild(item);
  divElement.appendChild(content);
  list.appendChild(divElement);
  a = a + 1;
}
