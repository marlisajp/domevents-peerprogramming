//* Your website should show an image of a crane alongside four buttons. Each button corresponds to a cardinal direction (up, down, left, right), and will move the crane in that direction when clicked.

//TODO 1. get elements buttons & image
let upBtn = document.getElementById("up-btn");
let downBtn = document.getElementById("down-btn");
let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");
let craneImage = document.getElementById("crane");

//TODO 2. eventlistener for when Up is clicked
//* up & down share leftRightOffset variable

let upDownOffset = 0;
upBtn.addEventListener("click", function () {
  upDownOffset += 10;
  craneImage.style.bottom = upDownOffset + "px";
});

//TODO 3. eventlistener for when down is clicked

downBtn.addEventListener("click", function () {
  upDownOffset -= 10;
  craneImage.style.bottom = upDownOffset + "px";
});

//TODO 4. eventlistener for when left is clicked
//* left & right share leftRightOffset variable

let leftRightOffset = 0;
leftBtn.addEventListener("click", function () {
  leftRightOffset -= 10;
  craneImage.style.left = leftRightOffset + "px";
});

//TODO 4. eventlistener for when right is clicked

rightBtn.addEventListener("click", function () {
  leftRightOffset += 10;
  craneImage.style.left = leftRightOffset + "px";
});
