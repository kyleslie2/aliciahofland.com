// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {

    // Highlight/ cropped image and full Image must have same name
    var full_image_string = "./images/full_image/";
    var src_array = element.src.split('/');
    var img_name = src_array.pop();
    var full_image = full_image_string + img_name;

    // document.getElementById("img01").src = element.src;
    document.getElementById("img01").src = full_image;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

$(function () {
    console.log("ready!");

    $("img").hover(function () {
        // $(this).css("background-color", "yellow");
        console.log('hovering over an image!')
        var element_id = $(this).attr("id");
        var id = '#'+element_id + "-overlay"
        $(id).css("visibility","visible")
    }, function () {
      var element_id = $(this).attr("id");
      var id = '#' + element_id + "-overlay"
      $(id).css("visibility", "hidden")
      });


    console.log('before parse!')

    //var JSON = JSON.parse('./assets/config.json');
    
    var JSON = $.getJSON("assets/config.json", function (data) {})
    
    console.log('after parse')

    console.log(JSON.index.image1)

    //make easy config file for choosing which images appear in each square

    //import settings from JSON
    $('#image1').attr("src",JSON["index"].image1);
    // $('#image2').attr("src",JSON["index"].image5);
    // $('#image3').attr("src",JSON["index"].image5);
    // $('#image4').attr("src",JSON["index"].image5);
    // $('#image5').attr("src",JSON["index"].image5);
    // $('#image6').attr("src",JSON["index"].image6);
    // $('#image7').attr("src",JSON["index"].image7);
    // $('#image8').attr("src",JSON["index"].image8);
    // $('#image9').attr("src",JSON["index"].image9);
})





