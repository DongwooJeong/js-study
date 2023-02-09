const h1 = document.querySelector(".hello:first-child h1");


function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    console.log(currentColor); //getter
    if(currentColor == "blue"){
        newColor = "tomato"; //setter
    } else {
        newColor = "blue";
    } 
    h1.style.color = newColor;
}

h1.onclick = handleTitleClick;
