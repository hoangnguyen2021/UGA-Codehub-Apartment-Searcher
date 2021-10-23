
var data = [];
function testJSON() {
   fetch('./apartments_search.json')
        .then(results => results.json())
        .then(results => {
            for (var i = 0; i < results.length; i++) {
                alert(results[i].propertyName);
            }
        })
    

}
