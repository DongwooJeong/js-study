const title = document.querySelector(".hello:first-child h1");

title.innerText = "Hello";

console.log(title);

title.style.color="blue";

function handleTitleClick() {
    console.log("title was clicked")
}


title.addEventListener("click", handleTitleClick);