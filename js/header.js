const headerConfig = () => {
  let header = document.querySelector("#header"),
    elementOffset = $("#header").offset().top,
    detOffset = $("#headerDet").offset().top - 100;

  elementOffset >= detOffset
    ? header.classList.add("white-header")
    : header.classList.remove("white-header");
};

window.onscroll = () => {
  headerConfig(); //Header.js
};
headerConfig();
