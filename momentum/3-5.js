const h1 = document.querySelector(".hello:first-child h1");


function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCOpy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no wifi");
}

function handleWindowOnline() {
    alert("ALL GOOOD");
}

h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCOpy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);