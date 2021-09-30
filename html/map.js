// Initialize and add the map
function initMap() {
  // The location of UGA
  const UGA = { lat: 33.9558, lng: -83.3773};
  // The map, centered at UGA
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: UGA,
  });
  // The marker, positioned at UGA
  const marker = new google.maps.Marker({
    position: UGA,
    map: map,
  });
}
