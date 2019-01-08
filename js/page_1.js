$(document).ready(function() {
    $("#lightSlider").lightSlider({
        item:1,
        auto:true,
        loop:true,
        slideMove:2,
        autoWidth:true,
        speed:400,
    }); 
    for (let i=1 ; i<4 ; i++) {
        // $(`.wp${i}`).css("opacity","0");
        // $(`.wp${i}.animated`).css("opacity","1");

        $(`.wp${i}`).waypoint(function() {
            $(`.wp${i}`).addClass("animated zoomIn");
        },
        {
            offset: "60%"
        });
        $(`.wa${i}`).waypoint(function() {
            $(`.wa${i}`).addClass("animated fadeInUp");
        },
        {
            offset: "60%"
        });
    }

});