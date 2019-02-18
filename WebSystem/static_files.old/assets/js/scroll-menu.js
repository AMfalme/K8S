$(
    function () {
        var lastScrollTop = 0;
        var delta = 0;
        var didScroll = 0;
        var navbarHeight = 500; 
        var heightstuff = 50;
        $(window).scroll(function()
        {
            didScroll = true;
        });
    setInterval(
    function(){
        if (didScroll) 
        {
            hasScrolled();
            didScroll = false;
        }},300);
    function hasScrolled(){
        var scrollPosition = $(this).scrollTop();
   
        if (Math.abs(lastScrollTop - scrollPosition) >= delta)
      {
            //on scroll 
            $('.navigation').addClass("navigation-scroll");
            $('.navigation img').css({display: "none"});
       
      } 
     
        if (Math.abs(scrollPosition) <= delta)
      {
            //on scroll to top
            $('.navigation').removeClass("navigation-scroll");
            $('.navigation img').css({display: "block"});
       
      }
        if (scrollPosition > lastScrollTop && scrollPosition > navbarHeight) {
            // on scroll down
            $('.fixed-top').slideUp('linear');
            $('.customfont').css({'display':'none'}); 

     
   
  } else{
    if (scrollPosition + $(window).height() < $(document).height()) {
     $('.fixed-top').slideDown('linear');
      $('.customfont').css({'display':'block'});
     }
  }
lastScrollTop = scrollPosition;
}
$('.menu-button').on("click", function(e){
    e.preventDefault();
    $('body').toggleClass('body');
    $('side-menu').toggleClass('open-side');
     $(window).scroll(function () {
        // body...
        if ($('body').hasClass('body')) {
          $('body').removeClass('body');
        }
        
      });

});

$(".dashboardtarget").on("click", function(e) {
   
    //hide any other common divs that may be showing
    $(".content").hide();

    //Show the div that is located in the data attribute
    var divClassToShow = $(this).data("target");
    $(divClassToShow).css('display','block');
});
});
    // $(
    // $('.dropdown').click(function(){
    //          $('.dropdown-content').css('display','block');
    //     }));
    
