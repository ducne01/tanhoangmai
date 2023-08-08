$(document).ready(function(){

  $(".menu_btn").click(function(){

    $(".menu_main").slideToggle();
    $(this).toggleClass("active");
  });
});


$(document).ready(function(){

  $(".bt_sub_menu").click(function(){

    $(".menu_page_title_m.prt_m").slideToggle();
    $(this).toggleClass("active");
  });
});


//slideshow

$('.mn_page_slideshow').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$('.news_box').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});
$('.rate_ipr_box').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.main_sp_slider').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  appendDots: '.slide-dots',
  prevArrow: '.slide-prev',
  nextArrow: '.slide-next'
});

$('.dot').on('click', function() {
  var index = $(this).index();
  $('.main_sp_slider').slick('slickGoTo', index);
  $('.dot').removeClass('active');
  $(this).addClass('active');
});

$('.main_sp_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('.dot').removeClass('active');
  $('.dot').eq(nextSlide).addClass('active');
});

$('.main_tt_slider').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  appendDots: '.slide-dots',
  prevArrow: '.slide-prev',
  nextArrow: '.slide-next'
});

$('.dot').on('click', function() {
  var index = $(this).index();
  $('.main_tt_slider').slick('slickGoTo', index);
  $('.dot').removeClass('active');
  $(this).addClass('active');
});

$('.main_tt_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('.dot').removeClass('active');
  $('.dot').eq(nextSlide).addClass('active');
});

function opentab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


var navCarousel = new Flickity('.ctsp_carousel.ctsp_carousel-main', {
  prevNextButtons: false,
  pageDots: false,
  contain: true,
  draggable: false,
});

var contentCarousel = new Flickity('.ctsp_carousel.ctsp_carousel-nav', {
  prevNextButtons: false,
  pageDots: false,
  contain: true,
});

var navItems = document.querySelectorAll('.ctsp_carousel.ctsp_carousel-main .ctsp_carousel-cell');

navItems.forEach(function(item, index) {
  item.addEventListener('click', function() {
    contentCarousel.select(index);
  });
});

contentCarousel.on('select', function() {
  var selectedIndex = contentCarousel.selectedIndex;
  navCarousel.select(selectedIndex);
});



