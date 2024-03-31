// $("h1").css("color", "red");

$("h1").addClass("big-title");

// $("h1").removeClass("big-title");

$("h1").text("Byee");

// $("button").text("Hello");

//Select one button and chang the text
var selectButt = $($("button")[0]);
selectButt.text("select me");

//change the button with innerhtml
$("button").html("<em>click</em> me");

//get attribute value example image
var imgAttr = $("img").attr("src");
console.log(imgAttr);

//get attribute value example a
var linkAttr = $("a").attr("href");
console.log(linkAttr);
// change attribute value
$("a").attr("href", "https://www.google.com/");

//add event  listener to title
$("h1").click(function () {
  $("h1").css("color", "red");
});

//add event  listener for all buttons js
// var allButtons = document.querySelectorAll("button");
// for (let i = 0; i < allButtons.length; i++) {
//   allButtons[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "blue";
//   });
// }

//add event  listener for all buttons JQuery
// $("Button").click(function () {
//   $("h1").css("color", "green");
// });

//add event  listener for one button JQuery
$($("button")[2]).click(function () {
  $("h1").css("color", "green");
});

//add event listener that will show wich key  was pressed in input
$("input").keypress(function (event) {
  console.log(event.key);
});
//add event listener that will show wich key  was pressed in input and show it on h1
$("input").keypress(function (event) {
  $("h1").text(event.key);
});

//change the text color on h1 with mouse over
$("h1").on("mouseover", function () {
  $(this).css("color", "purple");
});

//change the text color on h1 with click
$("h1").on("click", function () {
  $(this).css("color", "purple");
});

// add new element html before h1
$("h1").before("<p>This is a paragraph before</p>");

// add new element html after h1
$("h1").after("<p>This is a paragraph after</p>");

// add new element html inside h1 prepend
$("h1").prepend("<button>This is bold text </button>");

// add new element html inside h1 append
// $("h1").append("<b>This is bold text </b>");
$("h1").append("<button>This is bold text </button>");

//hide the text  on h1 with click
$($("button")[3]).on("click", function () {
  $("h1").hide();
});

//show the text  on h1 with click
$($("button")[5]).on("click", function () {
  $("h1").show();
});

//Show and hide text with same button using toggle
$($("button")[6]).on("click", function () {
  $("h1").toggle();
});

// hide text with  button using fadeOut(it make hide  slowly)
$($("button")[7]).on("click", function () {
  $("h1").fadeOut();
});

// show text with  button using fadeIn(it make show  slowly)
$($("button")[8]).on("click", function () {
  $("h1").fadeIn();
});

// show and hid text with same  button using fadeToggle(it make show  slowly)
$($("button")[9]).on("click", function () {
  $("h1").fadeToggle();
});

// hide text with  button using slideUp(it make hide  upwards)
$($("button")[10]).on("click", function () {
  $("h1").slideUp();
});

// show text with  button using slideDown(it make show  downwards)
$($("button")[11]).on("click", function () {
  $("h1").slideDown();
});

// show and hide text with same  button using slideToggle(it make hiding and showing  in upward direction)
$($("button")[12]).on("click", function () {
  $("h1").slideToggle();
});

// use animation to change css  properties of h1 tag.
$($("button")[13]).on("click", function () {
  $("h2").animate({ opacity: 0.5 }, 500); //change the opacity to full after half second
});

// use animation with slidup and slideDown  method for changing position of h2 tag.
$($("button")[14]).on("click", function () {
  $("h2").slideUp().slideDown().animate({ opacity: 0.5 }, 500); //change the opacity to full after half second
});
