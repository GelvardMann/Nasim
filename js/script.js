$(document).ready(function() {

   $('.owl-carousel').owlCarousel({

      loop: true, //Зацикливаем слайдер

      margin: 10, //Отступ от картино если выводите больше 1

      nav: true, //Включил навигацию
      navText: ["<i class='arrow_left'></i>",
           "<i class='arrow_right'></i>"],
      dots: true,
      responsive: { //Адаптация в зависимости от разрешения экрана

         0: {

            items: 1
         },

         600: {
            items: 1,
         },

         1000: {

            items: 1

         }

      }
   });
});


$(document).ready(function() {
   $('.menu_burger').click(function() {
      $('.nav_menu').slideToggle(500);
   });
   $('.nav_menu a').click(function() {
      $('.nav_menu').slideToggle(400);
   })
});
