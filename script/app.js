// ============Animation===============
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
  $(window).scroll(function() {
    $(".slideanimX").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slideX");
        }
    });
  });
  $(window).scroll(function() {
    $(".slideanimLeft").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slideLeft");
        }
    });
  });
  /*Animation motif*/
  $(document).ready(function(){
    $(window).scroll(function(){
      windowTop = $(window).scrollTop();
      $('.move-right').css({
        'transform':'translateX('+(windowTop) * 0.1  +'px)'
      });
      $('.move-left').css({
        'transform':'translateX('+(windowTop) * -0.1 +'px)'
      });
      $('.move-top').css({
        'transform':'translateY('+(windowTop) * -0.1 +'px)'
      });
      $('.move-topcontact').css({
        'transform':'translateY('+(windowTop) * -0.1 +'px)'
      });
    });
  });
// ============Arrow Move to Top===============
  // Move Top
  $(document).ready(function(){
    // scroll body to 0px on click
    $('a#gotop').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 2000);
      return false;
    });
  });
//// ============Input number incrementer / stepper===============
  $(".btn").on("click tap", function() {
    var $button = $(this);
    var oldValue = $('#spinner').val();
    if ($button.attr("id") == "step-increment") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    };
    $('#spinner').val(newVal);
  });
  $("#step-decrement").on("click tap", function() {
    if ( $('#spinner').val() === '0' ) {
      $(this).attr("disabled", true);
      $(this).attr("aria-disabled", true);
    }
  });
  $("#step-increment").on("click tap", function() {
    $("#step-decrement").removeAttr("disabled");
    $("#step-decrement").removeAttr("aria-disabled");
  });
// ============Carousel===============
  $(document).ready(function() {
    $('.one-carousel').addClass('owl-carousel owl-theme').owlCarousel({
      margin: 0,
      responsiveClass: true,
      loop: true,
      autoplay: true,
      responsive:{
        0: {
          items: 1,
          navText: ["<img src='http://localhost/okulargood/images/arrow-left.png'>","<img src='http://localhost/okulargood/images/arrow-right.png'>"],
          dots: true,
          nav: true
        },
        600: {
          items: 1,
          navText: ["<img src='http://localhost/okulargood/images/arrow-left.png'>","<img src='http://localhost/okulargood/images/arrow-right.png'>"],
          dots: true,
          nav: true
        },
        1000: {
          items: 1,
          navText: ["<img src='http://localhost/okulargood/images/arrow-left.png'>","<img src='http://localhost/okulargood/images/arrow-right.png'>"],
          dots: true,
          nav: true
        }
      }
    })
    $('.one-carousel-dots').addClass('owl-carousel owl-theme').owlCarousel({
      margin: 0,
      responsiveClass: true,
      responsive:{
        0: {
          items: 1,
          navText: ["<img src='http://localhost/okulargood/images/arrow-left.png'>","<img src='http://localhost/okulargood/images/arrow-right.png'>"],
          dots: true,
          nav: true
        },
        600: {
          items: 1,
          navText: ["<img src='http://localhost/okulargood/images/arrow-left.png'>","<img src='http://localhost/okulargood/images/arrow-right.png'>"],
          dots: true,
          nav: true
        },
        1000: {
          items: 1,
          navText: ["<img src='http://localhost/okulargood/images/arrow-left.png'>","<img src='http://localhost/okulargood/images/arrow-right.png'>"],
          loop: true,
          autoplay: true,
          dots: true,
          nav: true
        }
      }
    })
    $('.post-carousel').addClass('owl-carousel owl-theme').owlCarousel({
      margin: 25,
      stagePadding: 60,
      responsiveClass: true,
      autoplay: true,
      loop: true,
      dots: false,
      nav: false,
      responsive:{
        0: {
          items: 1,
          dots: false,
          nav: false
        },
        600: {
          items: 1,
          dots: false,
          nav: false
        },
        1000: {
          items: 1,
          dots: false,
          nav: false
        }
      }
    })
  })