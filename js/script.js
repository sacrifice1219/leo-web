//JS
$(document).on("scroll", () =>{
    var scrollPos = $(document).scrollTop();
    var navbar = $(".navbar");
    var navlink = $(".navalink")

    // add or remove navbar solid class based on scrolll position
    if (scrollPos > 0) {
        navbar.addClass("navbar-solid");
    } else {
        navbar.removeClass("navbar-solid")
    }

    //add or remve active clas on nv-link
    $(".nav-link").each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if(
            refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos
        ){
            $(".nav-link").removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    })

    
});

//mobile menu
$(".menu-btn").click(function (){
    $(".navbar").toggleClass("mobile");
    $(".menu-btn").toggleClass("active");
})