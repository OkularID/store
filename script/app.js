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
          dots: false,
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
    $('.stagepad-carousel').addClass('owl-carousel owl-theme').owlCarousel({
      responsiveClass: true,
      navText: ["<img src='http://localhost/okulargood/images/arrow-left.png'>","<img src='http://localhost/okulargood/images/arrow-right.png'>"],
      responsive:{
        0: {
          items: 1,
          dots: true,
          nav: true
        },
        600: {
          items: 1,
          dots: true,
          nav: true
        },
        1024: {
          items: 1,
          center: true,
          margin: 50,
          stagePadding: 200,
          // autoplay: true,
          loop: true,
          dots: false,
          nav: true
        },
        1100: {
          items: 1,
          center: true,
          margin: 100,
          stagePadding: 400,
          autoplay: true,
          loop: true,
          dots: false,
          nav: true
        }
      }
    })
    $('.stagepadloc-carousel').addClass('owl-carousel owl-theme').owlCarousel({
      responsiveClass: true,
      navText: ["<img src='http://localhost/okulargood/images/icon/arrow-green-left.png'>","<img src='http://localhost/okulargood/images/icon/arrow-green-right.png'>"],
      responsive:{
        0: {
          items: 1,
          center: true,
          margin: 25,
          stagePadding: 60,
          loop: true,
          dots: true,
          nav: true
        },
        600: {
          items: 1,
          dots: true,
          nav: true
        },
        1000: {
          items: 1,
          dots: false,
          nav: true
        }
      }
    })
  })
// ============Tabs===============
  $(document).ready(function() {
    // Tabs
    $(function(tabs){
      /*Nav Tabs Active First*/
      $(".tabs-nav:first").addClass("active");
      /*Content Active First*/
      $('.tabs').hide().first().show();
      // $('.sub-tab').hide().first().show();
      $('.tabs-nav').click(function(){
        $('.tabs').hide();
        $(".tabs-nav").removeClass("active");
        $(this).addClass("active");
        // $(this).addClass("active");
        var $targetTab = $('#tab-'+$(this).attr('target'));
        // $targetTab.find('.sub-tab').hide().first().show();
        $targetTab.fadeIn(200);
      });
    });
    $('.tabs-nav').click(function() {
        $(this).find('.color').addClass('active');
        $(this).find('.icon').addClass('active');
    }, function() {
        $(this).find('.color').removeClass('active');
        $(this).find('.icon').removeClass('active');
    });
    $('.tabs-nav').hover(function() {
        $(this).find('.color').addClass('active');
        $(this).find('.icon').addClass('active');
    }, function() {
        $(this).find('.color').removeClass('active');
        $(this).find('.icon').removeClass('active');
    });
  // ============Collapse Homepage===============
    $('.collapse').on('shown.bs.collapse', function () {
      $(this).prev().addClass('active');
    });
    $('.collapse').on('hidden.bs.collapse', function () {
      $(this).prev().removeClass('active');
    });

  });
// ============Instagram===============
  var token = '8381527417.1677ed0.ff13276150c54752a7682443d7e47953',
      num_photos = 10;
   
  $.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    // var photoURL = data[i].images.standard_resolution.url;
    // var photoLink = data[i].link;
    // var username = data[i].user.username;
    success: function(data){
      console.log(data);
      for( x in data.data ){
        $('div.instafeed').append('<div class="box"><div class="boxborder"><a href="'+data.data[x].link+'" target="_blank"><img class="img-fluid" src="'+data.data[x].images.standard_resolution.url+'"></a></div></div>');
      }
    },
    error: function(data){
      console.log(data);
    }
  });
// ============Navbar Mobile===============
  $(document).ready(function() {
    $('.bars').click(function() {
      $(".bars").addClass("active");
      $(".fa-times").addClass("active");
      $(".sidenav").removeClass("slideOut");
      $(".sidenav").addClass("slideIn");
    })
  })
  $(document).ready(function() {
    $('.fa-times').click(function(){
      $(".bars").removeClass("active");
      $(".fa-times").removeClass("active");
      $(".sidenav").addClass("slideOut");
    })
  })
// ======================HOMEPAGE HEADER====================================
  $(document).ready(function() {
     // Detect request animation frame
    var scroll = window.requestAnimationFrame ||
                 // IE Fallback
                 function(callback){ window.setTimeout(callback, 1000/60)};
    var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

    function loop() {

        Array.prototype.forEach.call(elementsToShow, function(element){
          if (isElementInViewport(element)) {
            element.classList.add('is-visible');
          } else {
            element.classList.remove('is-visible');
          }
        });

        scroll(loop);
    }

    // Call the loop for the first time
    loop();

    // Helper function from: http://stackoverflow.com/a/7557433/274826
    function isElementInViewport(el) {
      // special bonus for those using jQuery
      if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0
          && rect.bottom >= 900) //bottomfadeout
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
    }
  })

