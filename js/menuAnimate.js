//jS Document
$('.menu-open').click(function() {
  $(this).hide();

  $('.menu').animate({
    right: '0.01%'
  }, 500, function() {
    $('.menu-close').show();
    $('.menu ul').slideToggle('slow');
    $('.menu .social').slideToggle('slow');
  });




});

$('.menu-close').click(function() {
  $(this).hide();

  $('.menu ul').slideToggle('fast');
  $('.menu .social').slideToggle('fast');

  $('.menu').animate({
    right: '-100%'
  }, 500, function() {
    $('.menu-open').show();
  });

});




$('.form-open').click(function() {
  
  $('.form').animate({
    right: '0.01%'
  }, 500, function() {
    $('.form-close').show();
    $('.form .form-control').slideToggle('slow');
    $('.form .btn').slideToggle('slow');
  });




});

$('.form-close').click(function() {
  $(this).hide();

  $('.form .form-control').slideToggle('fast');
  $('.form .btn').slideToggle('fast');

  $('.form').animate({
    right: '-100%'
  }, 500, function() {
    //$('.menu-open').show();
  });

});
