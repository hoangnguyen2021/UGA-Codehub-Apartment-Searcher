var geocoder;
// Initialize and add the map
const UGA = {lat: 33.9558, lng: -83.3773};
var center = UGA;
function CenterControl(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");
  controlUI.style.backgroundColor = "#fff";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "3px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.margin = "4px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");
  controlText.style.color = "rgb(25,25,25)";
  controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  controlText.style.fontSize = "16px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "Center Map";
  controlUI.appendChild(controlText);

  controlUI.addEventListener("mouseover", () => {
    controlUI.style.filter = "brightness(90%)";
  });
  controlUI.addEventListener("mouseout", () => {
    controlUI.style.filter = "brightness(100%)";
  });
  controlUI.addEventListener("click", () => {
    map.panTo(UGA);
  });
}
//Enables the siderbar control on the map
function SidebarControl(map) {
  const sidebar = document.getElementById("list");
  sidebar.classList.add("list");
  sidebar.style.height = "400px";
  sidebar.style.width = "300px";
  const controlText = document.createElement("li");
  sidebar.appendChild(controlText);
  loadList(controlText, map);
}
//Setsup the Google Map
function initMap() {  
  var map = new google.maps.Map(document.getElementById("map"), {
    mapTypeControl: false,
    zoom: 13,
    center: UGA,
  });
  // The marker, positioned at UGA
  const marker = new google.maps.Marker({
    position: UGA,
    map,
    title: "Home Sweet Home",
  });
  const infowindow = new google.maps.InfoWindow({
    content: "Home Sweet Home",
  });
  marker.addListener("mouseover", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
  marker.addListener("mouseout", () => {
    infowindow.close();
  });
  var a = 0;
  console.log(apartments.length);
  while (a < apartments.length) {
    const number = a;
    var lat = apartments[a].lat;
    console.log(lat);
    var lng = apartments[a].lng;
    console.log(lng);
    const position = {lat: lat, lng:lng}
    const marker = new google.maps.Marker({
      position: position,
      map: map,
      visible: apartments[a].onMap
    });
    console.log(marker);
    const infowindow = new google.maps.InfoWindow({
      content: apartments[a].name,
      shouldFocus: true,
    });
    marker.addListener("mouseover", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
    marker.addListener("mouseout", () => {
      infowindow.close();
    });
    document.addEventListener("click", () => {
      showMarker();
    }, false);
    function showMarker() {
      marker.setVisible(apartments[number].onMap);
    }
    a = a + 1;
  }
  const centerControlDiv = document.createElement("div");
  CenterControl(centerControlDiv, map);
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv);

  SidebarControl(map);
}
//Shows some set markers
function showMarkers() {
  var position1 = {lat: 33.9498, lng: -83.3734 }
  var position2 = {lat: 33.9598, lng: -83.3744};
  initMap([position1, position2]);
}
