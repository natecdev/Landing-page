const header = document.getElementById("header");

window.onscroll = () => {
  if (window.scrollY > 20) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
};
