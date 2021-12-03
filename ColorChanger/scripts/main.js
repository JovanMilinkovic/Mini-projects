const button = document.querySelector(".changeColor");

//button.addEventListener("click", setRandomBackgroundColor());

button.onclick = (ev) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    console.log(`Background color now is #${randomColor}`);
}
