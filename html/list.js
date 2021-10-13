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
  initMap();
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