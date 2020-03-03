$(function () {
    console.log("ready!");

    $("img").hover(function () {
        // $(this).css("background-color", "yellow");
        console.log('hovering over an image!')
        var element_id = $(this).attr("id");
        var id = '#' + element_id + "-overlay"
        $(id).css("visibility", "visible")
    }, function () {
        var element_id = $(this).attr("id");
        var id = '#' + element_id + "-overlay"
        $(id).css("visibility", "hidden")
    });


})