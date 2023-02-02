//*Your website should have a text input box with a corresponding button. When the button is clicked, the background color of the entire website should change to match what the user typed into the box. If the user did not input a valid color name, then nothing should happen.

//* Note: Your website should support at least five valid colors.

//TODO 1. create variables to get elements

const colorInput = document.getElementById("inputBox");
const changeColorButton = document.getElementById("submit");

//TODO 2. change background-color to the color that was typed in when submit button is clicked (eventlistener)

changeColorButton.addEventListener("click", function () {
  const color = colorInput.value; //.value grabs the value of whatever was typed in
  document.body.style.backgroundColor = color; // changes the background color of the body to the value typed in (color)
});

//TODO 3. if no valid color was typed in, return nothing
//? not needed?
