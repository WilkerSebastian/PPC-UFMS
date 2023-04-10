"use strict";

// src/public/js/navbar.js
function test() {
  var tabsNewAnim = $("#navbarSupportedContent");
  var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
  var activeItemNewAnim = tabsNewAnim.find(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    "top": itemPosNewAnimTop.top + "px",
    "left": itemPosNewAnimLeft.left + "px",
    "height": activeWidthNewAnimHeight + "px",
    "width": activeWidthNewAnimWidth + "px"
  });
  $("#navbarSupportedContent").on("click", "li", function(e) {
    $("#navbarSupportedContent ul li").removeClass("active");
    $(this).addClass("active");
    var activeWidthNewAnimHeight2 = $(this).innerHeight();
    var activeWidthNewAnimWidth2 = $(this).innerWidth();
    var itemPosNewAnimTop2 = $(this).position();
    var itemPosNewAnimLeft2 = $(this).position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop2.top + "px",
      "left": itemPosNewAnimLeft2.left + "px",
      "height": activeWidthNewAnimHeight2 + "px",
      "width": activeWidthNewAnimWidth2 + "px"
    });
  });
}
$(document).ready(() => {
  setTimeout(() => {
    test();
  });
});
$(window).on("resize", () => {
  setTimeout(() => {
    test();
  }, 500);
});
$(".navbar-toggler").click(() => {
  $(".navbar-collapse").slideToggle(300);
  setTimeout(() => {
    test();
  });
});
jQuery(document).ready(function($2) {
  var path = window.location.pathname.split("/").pop();
  if (path == "") {
    path = "index.html";
  }
  var target = $2('#navbarSupportedContent ul li a[href="' + path + '"]');
  target.parent().addClass("active");
});
