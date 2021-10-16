
var flist = [] // array to store preferences
var plist = ["min", "max", "beds", "baths", "pet", "washdry", "dorm", "apartment"];
// array of all the elements to pull preferneces from

function  storePreference() {

    for (var i = 0; i < plist.length; i++) {
        var x = document.getElementById(plist[i]);
        if (x.type == "text") {
            if (x.value.length == 0) {
                if (x.id == "min") {
                    flist[i] = 0;
                } else if (x.id == "max") {
                    flist[i] = 10_000;
                } else {
                    flist[i] = 0;
                }
            }
        } else {
            flist[i] = x.checked == true ? true : false;
        }
    }

    return flist
} // storePreference

function clearPrefernce() {
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