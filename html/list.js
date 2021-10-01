var words = ["one","two","three"];
var ids = ["a1","a2","a3"];
var a = 0;
function function1() {
  var list = document.getElementById("list");
  
  var item = document.createElement("hr");
  list.appendChild(item);
  
  item = document.createElement("input");
  item.type = "checkbox";
  item.id = ids[a];
  
  list.appendChild(item);
  
  item = document.createElement("text");
  item.appendChild(document.createTextNode(" " + words[a]));
  
  list.appendChild(item);
  a = a + 1;
}
