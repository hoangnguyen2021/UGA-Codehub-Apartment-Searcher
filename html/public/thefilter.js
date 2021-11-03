
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
            } else {
                flist[i] = x.value;
            }
        } else {
            flist[i] = x.checked == true ? true : false;
        }
    }

    if (flist[6] == true && flist[7] == true) {
        clearPrefernce();
        alert("Cannot search for a dorm and and apartment");
    }

    for (var i = 0; i < apartments.length; i++) {
        apartments[i].meets = true;
        if (apartments[i].price < flist[0] || apartments[i].price > flist[1]) {
            apartments[i].meets = false;
        }

        if (apartments[i].numBeds < flist[2] || apartments[i].numBaths < flist[3]) {
            apartments[i].meets = false;
        }

        if (apartments[i].dorm == false && flist[6] == true) {
            apartments[i].meets = false;
        }

        if (apartments[i].apartment == false && flist[7] == true) {
            apartments[i].meets = false;
        }
    }
    var list = document.getElementById("list");
    list.innerHTML = "";
    loadList(list);
    refresh();
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

    for (var i = 0; i < apartments.length; i++) {
        apartments[i].meets = true;
    }

    refresh();

    flist = [];
}
