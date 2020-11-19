$(document).ready(function(){

  // $("#bbul li button").click(function(){
  //   var targetLi = $(this).parent("li"); // 클릭버튼의 부모 li
  //   var targetLiBro = targetLi.siblings(); // 그 형제 li
  //
  //       targetLi.toggleClass('act'); // 그 하나의 아래 div보이도
  //
  //       targetLiBro.each(function(){
  //         $(this).removeClass('act');
  //       });


  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });

});
