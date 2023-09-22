$(document).ready(function () {
    // Declare a variable to store the mouse position
    var mousePosition = {
        x: 0,
        y: 0
    };

    // Set up an event listener to track the mouse position
    $(document).mousemove(function (event) {
        // Update the mouse position variable
        mousePosition.x = event.clientX;
        mousePosition.y = event.clientY;

        // Render the mouse position
        $(".mouse").css("left", mousePosition.x);
        $(".mouse").css("top", mousePosition.y);
    });

    // ##########

    $("main>button ").click(function(){
        $("main .slide").toggleClass("hide")
    })
});