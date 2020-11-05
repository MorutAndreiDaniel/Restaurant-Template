(function ($){
/*Back to top button*/
var btn = $('#button');

$(window).on('scroll', function() {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:'0'}, 1000);
});


/*View More arrows*/
var $arrows = $('#more-arrows');
var $gallery = $('.gallery-section__second');
var $hideGallery = $('#close-gallery');

$gallery.hide();

$arrows.on('click', function(e) {
  e.preventDefault();
  $gallery.show();
})

$hideGallery.on('click', function(e) {
  e.preventDefault();
  $gallery.hide();
})

/*When click on Menu Boxes*/

$('.menu__box').on('click', function() {
  $(this).find('.menu__box--text').slideToggle('slow', 'swing');
  $(this).find('.product-name').toggleClass('product-name-color');
  $(this).find('.product-price').toggleClass('product-price-color');
  return false;
})

/*Burger Menu*/
$('#burgers').on('click', function(e) {
  e.preventDefault();
  if($('.menu-burgers').show()) {
    $('.menu-asian, .menu-pasta, .menu-salads').hide();
    $('#asian, #pasta, #salads').removeClass('active');
    $(this).addClass('active');
  }
})
/*Asian Menu*/
$('#asian').on('click', function(e) {
  e.preventDefault();
  if($('.menu-asian').show()) {
    $('.menu-burgers, .menu-pasta, .menu-salads').hide();
    $('#burgers, #pasta, #salads').removeClass('active');
    $(this).addClass('active');
  }
})
/*Pasta Menu*/
$('#pasta').on('click', function(e) {
  e.preventDefault();
  if($('.menu-pasta').show()) {
    $('.menu-burgers, .menu-asian, .menu-salads').hide();
    $('#burgers, #asian, #salads').removeClass('active');
    $(this).addClass('active');
  }
})
/*Salads Menu*/
$('#salads').on('click', function(e) {
  e.preventDefault();
  if($('.menu-salads').show()) {
    $('.menu-burgers, .menu-asian, .menu-pasta').hide();
    $('#burgers, #asian, #pasta').removeClass('active');
    $(this).addClass('active');
  }
})

/*Buttons to other pages*/
$('#despre').on('click', function(e) {
  e.preventDefault();
  location.href = './desprenoi.html';
});
$('.products-section__box').on('click', function(e) {
  e.preventDefault();
  location.href = './meniu.html';
});
$('.vezi-meniu').on('click', function(e) {
  e.preventDefault();
  location.href = './meniu.html';
})
$('.dropdown').on('click', function(e) {
  e.preventDefault();
  location.href = './meniu.html';
})


})(jQuery);
