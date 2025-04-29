// SLIDESHOW SCRIPTING

var slider_img = document.querySelector('.slider-img');
// assigns the class 'slider-img' to the variable 'slider_img


var images = ['cleansingoil.jpeg', 'snailcream.jpeg', 'sunscreen_.jpg'];
// defines array of the images used

var text = [{
  description: 'KOSE SOFTYMO Speedy Cleansing Oil: A Japanese cleansing oil known to be very quick at removing makeup and other impurities.'
},
{
  description: 'COSRX Advanced Snail 92 All in One Cream: A hydrating cream that is almost always sold out!'
},
{
  description: 'Beauty of Joseon Rice Probiotics Sunscreen SPF 50+: A small sun cream that packs a punch!'
}];
// defines multidimensional array of corresponding text to the images

var i = 0; // Current Image Index

// prev -> function used when the prev button is pressed
function prev() {
  if (i <= 0) { // if it's the first image in slider
    i = images.length; // turns it into 2 when you go to the next line (increment) which is the last image
  }

  i--; // goes to previous image in array

  return setImg(); // update slider img w/ overlay
}

// next -> function used when the prev button is pressed,
function next() {
  if (i >= images.length - 1) { // if it's the last image in the slider
    i = -1; // turns it into 0 when you go to the next line (increment) which is the first image
  }

  i++; // goes to next image in array

  return setImg(); // update slider img w/ overlay
}

// function called by prev() & next() to set the right image w/ overlay
function setImg() {
  slider_img.setAttribute('src', '2slides_media/' + images[i]);
  /* sets the src attribute of an HTML img element with 
     whichever image is being called.
     The name of the file is 2slides_media/ so it adds on the string name
     of whichever image it is */

  var overlay = document.querySelector('.overlay-trending');
  overlay.querySelector('p').textContent = text[i].description;
  // setting the p element that's in the overlay to be the overlay description in the text array
}