
function generator(length) {
    var result = '';
    var characters = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
}

var reset = document.getElementById("clean");
var gen_btn = document.getElementById("genButton");
var text = document.getElementById("text");
var color = document.getElementById("color");
var fontcolor = document.getElementById("color");

gen_btn.onclick = function () {
    text.innerHTML = generator(20);
    color.innerHTML = col();
    fontcolor.innerHTML = fcol();
    col();
    color.innerHTML = "";
}


var colorArray = ["#2338bb", "#dc143c", "#000", "#9400d3", "#ffa400", "#86c3e2"];
var c = 0;
function col() {
    document.getElementById('color').style.background = colorArray[c];
    
    if (c >= colorArray.length) {
        c = 0;
    }
}

var fontArray = ["#000", "#fff8dc", "#ff8c00", "#fff", "#ac14ca", "#ffdddb"];
function fcol() {
    document.getElementById('color').style.color = fontArray[c];
    c++;
    if (c >= fontArray.length) {
        c = 0;
    }
}

reset.onclick = function () {
    text.innerHTML = clear();
    color.innerHTML = clear();

}

function clear() {
    document.getElementById("text").innerHTML = "";
    document.getElementById("color").style.background = "none";
}

/*var display = document.getElementById('display');
window.onload = function () {
    var genButton = document.getElementById('genButton');
    genButton.addEventListener("click", generate);  
}*/


/*function generate() {
    alert("generated");
}*/