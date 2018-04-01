$(window).on("load", function () {
    setTimeout(function () {
        $("#preloader").fadeOut(2000);
        $("body").css("overflow-y" , "scroll");
    }, 1000);
} );


$(document).ready(function(){
  var owl=$('.owl-carousel');
        owl.owlCarousel({
   
        loop:true,
           autoplay:true,
        autoplayTimeout:1000,  
  });
    
     new WOW().init();
        
});







