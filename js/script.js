$(document).ready(function() {
   $('.menu_burger').click(function() {
      $('.nav_menu').slideToggle(500);
   });
   $('.nav_menu a').click(function() {
      $('.nav_menu').slideToggle(400);
   })
});

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: true
    })
  });
