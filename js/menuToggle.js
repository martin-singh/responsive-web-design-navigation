/*
 * Create a button and give it an ID of "hamburgerBtn"
 * Attach an ID of "primaryNav" to the UL of the unordered list that holds your links
 */
function toggleMenu() {
    var nav = document.getElementById("primaryNav");

    if (nav.className === "closed") {
        nav.className = "open";
    }
    else {
        nav.className = "closed";
    }
}
var btn = document.getElementById('hamburgerBtn');
btn.onclick = toggleMenu;

//********** INDEX.HTML V1 **********
/*function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("closed");
}
var btn = document.getElementById('hamburgerBtn');
btn.onclick = toggleMenu;*/