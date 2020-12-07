$(document).ready(function()
{

    $("#navBut").click(function()
    {
        $("#MenuContainer").fadeToggle();
       
    });

    // $("body").scrollspy({
    //     target: "#MenuContainer",
    // });

    
          
         
     
     $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#upButton').fadeIn();
        } else {
            $('#upButton').fadeOut();
        }
    });
    
   
});