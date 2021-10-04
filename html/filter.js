
var flist = [] // array to store preferences
var plist = ["min", "max", "beds", "baths", "pet", "washdry", "dorm", "apartment"];
// array of all the elements to pull preferneces from

function  storePreference() {

    alert("The button was pressed and preferences were stored"); // for testing
    for (var i = 0; i < plist.length; i++) {
        var x = document.getElementById(plist[i]);
        if (x.type == "text") {
            flist[i] = x.value;
        } else {
            flist[i] = x.checked == true ? true : false;
        }
    }
    
    for (var i = 0; i < flist.length; i++) {
        alert(flist[i]);
    }

    return flist
} // storePreference

function clearPrefernce() {
    
    alert("Preferences were cleared"); // for testing
    for (var i = 0; i < plist.length; i++) {
        var x = document.getElementById(plist[i]);
        if (x.type == "text") {
            x.value = "";
        } else {
            x.checked = false;
        }
    }

    flist = [];
}