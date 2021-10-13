// Initialize and add the map
const UGA = {lat: 33.9558, lng: -83.3773};
var center = UGA;
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: center,
  });
  map.addListener("center_changed", () => {
    center = map.getCenter();
  })
  // The marker, positioned at UGA
  const marker = new google.maps.Marker({
    position: UGA,
    map,
    title: "Home Sweet Home",
  });
  const infowindow = new google.maps.InfoWindow({
    content: "Home Sweet Home",
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
  var a = 0;
  while (a < apartments.length) {
    const marker = new google.maps.Marker({
      position: apartments[a].position,
      map,
      visible: apartments[a].onMap,
    });
    const infowindow = new google.maps.InfoWindow({
      content: apartments[a].name,
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
    a = a + 1;
  }
}
function showMarkers() {
  var position1 = {lat: 33.9498, lng: -83.3734 }
  var position2 = {lat: 33.9598, lng: -83.3744};
  initMap([position1, position2]);
}
