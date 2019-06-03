$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsive:{
        0:{
            items:1,
        },
        992:{
            items:2,
        },
        1200:{
            items:3,
        }
    }
  });
  $(".owl-stage-outer").css({'margin-bottom':'68px'});
  $(".owl-prev").html('<img src="img/portfolio/left-arrow.png" alt="Назад">');
  $(".owl-next").html('<img src="img/portfolio/right-arrow.png" alt="Вперед">');
});