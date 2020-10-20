var imageIndex = 1;
showImage(imageIndex);

function nextImage(n) { showImage(imageIndex += n); }

function currentImage(n) { showImage(n); }

function showImage(n) {
  var images = document.getElementsByClassName("images")
  if (n > images.length) {imageIndex=1}
  if (n < 1) {imageIndex = images.length}
  for (var i=0; i < images.length; i++) { images[i].style.display = "none"; }
  images[imageIndex-1].style.display = "block";
}

var imageHeight = document.getElementByClassName("images").style.height;