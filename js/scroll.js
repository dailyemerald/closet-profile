var navShow = $(window).scroll(function () {

    var when = $(window).scrollTop();

    if (when > 200) {
        $(".banner").slideDown();
    }
    else if (when < 210){
        $(".banner").slideUp();
    } 
    console.log(when);
});



