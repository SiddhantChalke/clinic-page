let mybutton = document.getElementById("back");

// upon scrolling 20px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "grid";
  } else {
    mybutton.style.display = "none";
  }
}
// upon clicking 
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}