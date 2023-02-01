// *Your website should have two main components: an image of a cookie and a counter that starts at 0. Whenever the cookie is clicked, the counter should go up by one.
//TODO 1. create new counter
let cookieCounter = 0;
let cookieStuff = document.getElementById("cookieText");

//TODO 2. get the image
let cookieImage = document.getElementById("cookie");

//TODO 3.add event listener --> two parameters -> what you want to happen when its clicked

cookieImage.addEventListener("click", function () {
  cookieCounter++; //* increments by 1 every click
  cookieStuff.innerHTML = `Cookie was clicked ${cookieCounter} times`;
  //* Changes the text after it was clicked and continues to update //
});
//change
