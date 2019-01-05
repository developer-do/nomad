const body = document.querySelector("body");

const IMG_NUBER = 11;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/image${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUBER) + 1;
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();