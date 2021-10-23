
var data = [];
function testJSON() {
   fetch('./apartments_search.json')
        .then(results => results.json())
        .then(results => {
            for (var i = 0; i < results.length; i++) {
                for (var i = 0; i < results.length; i++) {
                    apartments.push( new Apartment(
                        results[i].id,
                        results[i].propertyName,
                        results[i].url,
                        "Test",
                        results[i].rent.min,
                        1,
                        2,
                        false,
                        true,
                        false,
                        {lat: 33.9598, lng: -83.359},
                        false,
                        false,
                        true,
                    ));
                }
            }
        })
    

}
