document.addEventListener('DOMContentLoaded', function() {
  var carousel = $('#slides'),
      threshold = 150,
       slides = document.getElementsByClassName('img'),
       slideWidth = slides[0].clientWidth + 20;


  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)');
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
  		carousel.css('transform','translateX(0px)');
      slideWidth = slides[0].clientWidth + 20;
    },500);

  }
  // $('#left').hover(function() {
  //   $('.arrow-left').fadeToggle()
  // });
  // $('#right').hover(function() {
  //   $('.arrow-right').fadeToggle()
  // });

  // $(window).hover(function() {
    // if(windowWidth > halfWindow) {
    //   $('.arrow-right').fadeToggle();
    // } else if(windowWidth <= halfWindow) {
    //   $('.arrow-left').fadeToggle();
  //   };
  // });

  // $("#slider").on('mousemove', function(e){
  //   var sectionHeight = $(this).width();
  //   var vertical = e.offsetX;
  //
  //   console.log(vertical );
  //
  //   if(vertical > (sectionHeight - 50)) {
  //     $('body').css("cursor","pointer");
  //   } else{
  //     $('body').css("cursor","auto");
  //   }
  // });
  $(".slide").hover(function(event) {
    var x = event.clientX,
        windowWidth = $(window).width(),
        halfWindow = windowWidth / 2;
      if (x > halfWindow) {
          $('.arrow-right').removeClass('hidden');
          $('.arrow-left').addClass('hidden');

      } else if (x <= halfWindow){
        $('.arrow-left').removeClass('hidden');
        $('.arrow-right').addClass('hidden');
      }
  });
});
