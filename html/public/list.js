/*
 * This function will create all the apartments.
 */
function loadList(list) {
  var a = 0;
  while (a < apartments.length) {
    createApartment(a, list);
    a = a + 1;
  }
}
/*
 * This will refresh all apartments being shown for the list.
 * Any apartment with meets will be shown.
 */
function refresh() {
  var a = 0;
  while (a < apartments.length) {
    displayApartment(a);
    a = a + 1;
  }
}
/* 
 * This will display an apartment properly.
 * It also makes sure no marker is on when it is displayed. (At least it should. I doubt it will.)
 */
function displayApartment(number) {
  if (apartments[number].meets) {
    document.getElementById(apartments[number].id).style.display = "block";
  } else {
    apartments[number].onMap = false;
    document.getElementById(apartments[number].id).style.display = "none";
  }
}
function createApartment(number, list) {
  var divElement = document.createElement("div");
  
  divElement.id = apartments[number].id;
  divElement.classList.add("detail");
  
  var itema = document.createElement("button");
  itema.classList.add("check");
  itema.addEventListener("click", function() {
    if (apartments[number].onMap) {
      this.innerHTML = "";
    } else {
      this.innerHTML = "&#10003";
    }
    this.classList.toggle("shown");
    apartments[number].onMap = !apartments[number].onMap;
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
      content.style.paddingBottom = "0px";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.paddingBottom = content.scrollHeight + 12 + "px";
    }
  });
  divElement.appendChild(itemb);
  
  var content = document.createElement("div");
  content.classList.add("content");
  
  var itemc = document.createElement("a");
  itemc.innerHTML = "Link to Webpage";
  itemc.href = apartments[number].link;
  
  var itemd = document.createElement("p");
  itemd.innerHTML = apartments[number].description;

  var iteme = document.createElement("p");
  iteme.innerHTML = "Price: $" + apartments[number].price;

  var itemf = document.createElement("p");
  itemf.innerHTML = apartments[number].bed + " Bed";

  var itemg = document.createElement("p");
  itemg.innerHTML = apartments[number].bath + " Bath";

  //var itemh = document.createElement("p");
  //itemh.innerHTML = "\n" //apartments[number].dorm == true ? "Dorm" : "Apartment";
  
  content.appendChild(itemd);
  content.appendChild(iteme);
  content.appendChild(itemf);
  content.appendChild(itemg);
  content.appendChild(itemc);
  //content.appendChild(itemh);
  divElement.appendChild(content);

  list.appendChild(divElement);
}