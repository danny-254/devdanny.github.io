window.onscroll = function () {
  stickBar();
};
let navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop;

function stickBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
