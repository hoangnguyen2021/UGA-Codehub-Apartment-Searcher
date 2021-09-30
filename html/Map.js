function initMap() {
    // The location of UGA
    const UGA = { lat: 33.9558, lng: -83.3773};
    // The map, centered at UGA
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: UGA,
    });
    // The marker, positioned at UGA, make markers as check
    // boxes are clicked on webpage
    const UGAMARKER = new google.maps.Marker({
      position: UGA,
      map: map,
    });
  }