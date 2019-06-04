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

  $(".owl-stage-outer").css({'margin-bottom':'66px'});

  $(".owl-prev").html('<img src="img/portfolio/left-arrow.png" alt="Назад">').css({'margin-right':'15px'});;
  $(".owl-prev").hover(function () {
    $(this).css({'background-color':'transparent'});
  });
  $(".owl-prev").focus(function () {
    $(this).css({'outline':'none'});
  });

  $(".owl-next").html('<img src="img/portfolio/right-arrow.png" alt="Вперед">').css({'margin-left':'15px'});;
  $(".owl-next").hover(function () {
    $(this).css({'background-color':'transparent'});
  });
  $(".owl-next").focus(function () {
    $(this).css({'outline':'none'});
  });
});