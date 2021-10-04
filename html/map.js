// Initialize and add the map
function initMap(...positions) {
  // The location of UGA
  const UGA = { lat: 33.9558, lng: -83.3773};
  // The map, centered at UGA
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: UGA,
  });
  // The marker, positioned at UGA
  var marker = new google.maps.Marker({
    position: UGA,
    map: map,
  });

  for (var position of positions) {
    var newMarker = new google.maps.Marker({
      position: position,
    })
    newMarker.setMap(map);
  }
}

function showMarkers() {
  var position1 = {lat: 33.9498, lng: -83.3734 }
  var position2 = {lat: 33.9598, lng: -83.3744};
  initMap(position1, position2);
}

