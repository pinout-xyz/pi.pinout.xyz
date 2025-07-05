'use strict';

// Boot to a sensible default window size
// only tested on Windows 10...
// RIP 1024x768
window.resizeTo(1050, 830);


var pinout = document.getElementById("pinout");

console.log(pinout);

var links = pinout.getElementsByTagName("a");

console.log(links);

for (var i = 0; i < links.length; i++) {
    links[i].onclick = pinout_link_click;
}

function pinout_link_click(e) {
    e.preventDefault();
    var iface = this.textContent.split(" ")[0];
    console.log(iface);
    var selected = this.parentElement.parentElement.classList.contains("selected");
    for (var i = 0; i < links.length; i++) {
        links[i].parentElement.parentElement.classList.toggle("selected", !selected && links[i].textContent.startsWith(iface));
    }
}