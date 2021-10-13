function loadList(list) {
  var a = 0;
  while (a < apartments.length) {
    createApartment(a, list);
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
  initMap();
}
function displayApartment(number) {
  if (apartments[number].meets) {
    document.getElementById(apartments[number].id).style.display = "block";
  } else {
    document.getElementById(apartments[number].id).style.display = "none";
  }
}
function createApartment(number, list) {
  //var list = document.getElementById("list");
  
  var divElement = document.createElement("div");
  
  divElement.id = apartments[number].id;
  divElement.classList.add("detail");
  
  var itema = document.createElement("button");
  itema.classList.add("check");
  if (apartments[number].onMap) {
    itema.innerHTML = "&#10003";
    itema.classList.toggle("shown");
  }
  itema.addEventListener("click", function() {
    if (apartments[number].onMap) {
      this.innerHTML = "";
    } else {
      this.innerHTML = "&#10003";
    }
    this.classList.toggle("shown");
    showMap(number);
  });
  divElement.appendChild(itema);
  
  var itemb = document.createElement("button");
  itemb.innerHTML = apartments[number].name;
  itemb.type = "button";
  itemb.classList.add("name");
  itemb.addEventListener("click", function() {
    this.classList.toggle('is-open');
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
  divElement.appendChild(itemb);
  
  var content = document.createElement("div");
  content.classList.add("content");
  
  var itemc = document.createElement("a");
  itemc.innerHTML = apartments[number].link;
  itemc.href = apartments[number].link;
  
  content.appendChild(itemc);
  
  var itemd = document.createElement("p");
  itemd.innerHTML = apartments[number].description;
  
  content.appendChild(itemd);
  divElement.appendChild(content);

  list.appendChild(divElement);
}