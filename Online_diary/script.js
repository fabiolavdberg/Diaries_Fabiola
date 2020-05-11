
// note: check the .css, the height of the body is like 500%, so that
// there is something to scroll

$(window).on("scroll",function(e){


    // the scroll position of the page is in $(window).scrollTop()
    //console.log($(window).scrollTop())

//    console.log( $(window).height() );
//    console.log( $(window).scrollTop() );

    var pos = $(window).height() - $(window).scrollTop();

    $(".img_01").css("top", $(window).height() +  pos/4)   
    $(".square-red").css("top",  $(window).height() + pos/2)
    $(".square-blue").css("top", $(window).height() +  pos)

    // this one scrolls horizontally
    $(".square-orange").css("left", $(window).height() +  pos)

});

//var pos = $(window).height() - $(window).scrollTop();
//$(".square-green").css("top",  pos/4)
//$(".square-red").css("top",  pos/2)
//$(".square-blue").css("top",  pos)
