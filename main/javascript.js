// navbar

$(document).ready(function() {
  $(".button a").click(function() {
    $(".overlay").fadeToggle(200);
    $(this)
      .toggleClass("btn-open")
      .toggleClass("btn-close");
  });
});
$(".overlay").on("click", function() {
  $(".overlay").fadeToggle(200);
  $(".button a")
    .toggleClass("btn-open")
    .toggleClass("btn-close");
  open = false;
});

// latest news courosol
$("#owl-carousel-1").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 4,
      nav: true,
      loop: false
    }
  }
});

// member courosol
$("#owl-carousel-2").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 4,
      nav: true,
      loop: false
    }
  }
});

// navbar script....................
$("nav ul li a").css({
  color: "white"
});
$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("bg-white");
    $("nav ul li a").css({
      color: "black"
    });
    $(".button").css({
      backgroundColor: "green"
    });
  } else {
    $("nav").removeClass("bg-white");
    $("nav ul li a").css({
      color: "white"
    });
    $(".button").css({
      backgroundColor: "red"
    });
  }
});
// navbar script....................
