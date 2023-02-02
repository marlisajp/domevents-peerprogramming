// * EXERCISE 2: MAGNIFYING GLASS //

//* Your website should have a paragraph of placeholder text, along with two buttons. One button should make the text bigger when clicked. The other button should make the text smaller when clicked. The font size should not get smaller than 1px and should not get larger than 100px.

//TODO 1. Create variables for elements

let textStuff = document.getElementById("text"); //grabs placeholder text
let bigButton = document.getElementById("btn1"); //grabs button 1
let smallButton = document.getElementById("btn2"); //grabs button 2

//TODO 2. Button 1 makes text bigger when clicked

bigButton.addEventListener("click", function () {
  let fontSize = parseInt(
    window.getComputedStyle(textStuff).getPropertyValue("font-size")
  );
  //gets current font size for the text inside of p #text. parseInt turns that string into just an integer

  if (fontSize >= 100) return; //if it reaches 100px it will return nothing -> maximum
  text.style.fontSize = fontSize + 1 + "px"; //adds 1 to the font size and the string "px"
});

//TODO 3. Button 2 makes text smaller when clicked -> add event listener

smallButton.addEventListener("click", function () {
  let fontSize = parseInt(
    window.getComputedStyle(textStuff).getPropertyValue("font-size")
  );
  if (fontSize <= 1) return; //if it reaches 1px it will return nothing -> minimum
  text.style.fontSize = fontSize - 1 + "px"; //subtracts 1 from the font size and adds the string 'px'
});
