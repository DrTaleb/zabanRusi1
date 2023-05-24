$('.owl-carousel-').owlCarousel({
    autoplay:true,
    margin:20,
    rtl:true,
    responsiveClass:true,
    loop:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2,
        },
        576:{
            items:2,
        },
        768:{
            items:3,
        },
        992:{
            items:5,
        }
    }
})
 $('.owl-carousel-2').owlCarousel({
     nav:true,
    autoplay:true,
    margin:20,
    rtl:true,
    responsiveClass:true,
    loop:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:1,
        },
        768:{
            items:1,
        },
        992:{
            items:1,
        }
    }
})
$(".menu-icon").click(function () {
    $(this).toggleClass("active");
    $(".navigation-menu").toggleClass("active");
    $(".menu-icon i").toggleClass("fa-times");
});

$("#myDropDown").hide()
$(".profile-div").hover(function () {
    $(".my-dropdown").slideDown(200)
}, function () {
    $(".my-dropdown").slideUp(200)
},);
var $CartVal = 0
$("#RemoveFromCart").hide().click(function (){
    $(this).hide()
    $("#AddToCart").fadeIn()
    $CartVal --
    $("#Cart").html($CartVal)
})
$("#Cart").html(0)
$("#AddToCart").click(function (){
    $(this).hide()
    $("#RemoveFromCart").fadeIn(500)
    $CartVal ++
    $("#Cart").html($CartVal)
});
