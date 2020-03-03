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
    var full_image_string = "../../images/full_image/";
    var src_array = element.src.split('/');
    var img_name = src_array.pop();
    var full_image = full_image_string + img_name;

    document.getElementById("img01").src = full_image;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}







