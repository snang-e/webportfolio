/***** open or close side menu *****/
function openLeft() {
    document.getElementById("leftSidenav").style.width = "250px";
    document.getElementById("leftSidenav").style.overflowX = "visible";
    document.getElementById("panel_cover").style.width = "100%";

}

function closeLeft() {
    document.getElementById("leftSidenav").style.width = "0";
    document.getElementById("leftSidenav").style.overflowX = "hidden";
    document.getElementById("panel_cover").style.width = "0%";
}

function openRight() {
    document.getElementById("rightSidenav").style.width = "250px";
    document.getElementById("rightSidenav").style.overflowX = "visible";
    document.getElementById("panel_cover").style.width = "100%";
}

function closeRight() {
    document.getElementById("rightSidenav").style.width = "0";
    document.getElementById("rightSidenav").style.overflowX = "hidden";
    document.getElementById("panel_cover").style.width = "0%";
}


/***** accordion menu in left menu *****/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var innerMenu = this.nextElementSibling;
        var leftBar = document.getElementsByClassName("active")[0];

        if (innerMenu.style.maxHeight){
            innerMenu.style.maxHeight = null;

            var parent = document.getElementById('leftBar').parentNode;
            parent.removeChild(document.getElementById('leftBar'));

        } else {
            innerMenu.style.maxHeight = innerMenu.scrollHeight + "px";

            var newDiv = document.createElement("div");
            newDiv.setAttribute('class', 'leftBar');
            newDiv.setAttribute('id', 'leftBar');
            leftBar.appendChild(newDiv);
        }
    });
}