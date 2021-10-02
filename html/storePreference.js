function  storePreference() {
    var plist = ["min", "max", "beds", "baths", "pet", "washdry", "dorm", "apartment"];
    var flist = []; // array of filter prefrences

    for (var i = 0; i < plist.length; i++) {
        var x = document.getElementById(plist[i]);
        if (x.type == "text") {
            flist[i] = x.value;
        } else {
            flist[i] = x.checked == true ? true : false;
        }
    }
    
    return flist;
}