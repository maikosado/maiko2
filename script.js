//★top
$(".top-title").hover(
    function(){
        $(".top-title").slideUp().slideDown().animate({opacity: 0.5});  
    });


//★indication
$(".indication-logo1").hover(
    function(){
        $(".indication1").fadeIn();  
    },
    function(){
        $(".indication1").fadeOut();
    });

//★contact
$(".contact-btn").click(
    function(){
        $(".thanks-btn").show();  
    });
