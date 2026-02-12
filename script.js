function moveRandomEl(elem){
    elem.style.position = "absolute";
    elem.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elem.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e){
    moveRandomEl(e.target);
});