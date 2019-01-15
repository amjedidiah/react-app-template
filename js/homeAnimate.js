//jS Document

$(document).ready(() => {

    if(window.location.pathname.length < 2) {
        $('#header').hide()
    }

    const homeSlide = () => {
      $('.slide:nth-child(1)').show().animate({
          top: '+=100%'
      }, 1000, function() {
          $(this).find('h1').slideToggle();
      });

      setTimeout(function() {

          $('.slide:nth-child(1)').animate({
              top: '+=100%'
          }, 1000, function() {
              $(this).hide('fast', function() {
                  $('.slide:nth-child(2)').show().animate({
                      right: '+=105%'
                  }, 1000, function() {
                      $(this).find('h1').slideToggle();
                  });
              });
          });

      }, 2500);

      setTimeout(function() {

          $('.slide:nth-child(2)').animate({
              right: '+=105%'
          }, 1000, function() {
              $(this).hide('fast', function() {
                  $('.slide-three').show().animate({
                      bottom: '+=100%'
                  }, 1000, function() {
                      $(this).find('h1').slideToggle();
                  });
              });
          });

      }, 6500);

      setTimeout(function() {

          $('.slide:nth-child(3)').animate({
              bottom: '+=100%'
          }, 1000, function() {

              $(this).hide('fast', function() {
                  $('.slide:nth-child(4)').show().animate({
                      left: '+=105%'
                  }, 1000, function() {
                      $(this).find('h1').slideToggle();
                      $('.feature').slideToggle();
                      $('#header').slideToggle();
                  });
              });

          });

      }, 10500);
    }

    if(sessionStorage.getItem("lastname") ===  "Smith") {
      setTimeout(function() {

        $('.static-slideshow').css('opacity', '1')
        $('.feature').show().css('z-index', '9')
        $('#header').show()
      }, 500);



    } else {
      homeSlide();
    }

    console.log(sessionStorage.getItem("lastname"));

    // Store
    sessionStorage.setItem("lastname", "Smith");
});
