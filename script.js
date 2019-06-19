



$(function () {

  $('p.hamburger').on('click', function () {
    console.log('click');
    $('nav').toggleClass('show');
    $('.fa-times').toggleClass('show');
    // $('.toggle').toggle("slow");
    
    // console.log("what");
  });

  $(".fa-times").on("click", function () {
    $('nav').toggleClass('show');
    $('.fa-times').toggleClass('show');
    
    
  });
});