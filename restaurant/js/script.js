$(function () {
  // the same as document.addEventListener("DOMContentLoaded",...)
  console.log("js/script.js");
  // the same as document.querySelector("#navbarToggle").addEventListener("bl...")
  $(".navbar-toggler").blur(function (event) {
    console.log("triggered");
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#navbarSupportedContent").collapse('hide');
    }
  });



});
