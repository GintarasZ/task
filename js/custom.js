if(document.getElementsByClassName('header_images_div').length>0) {
    var first_image = document.getElementById("first_image");
    if (first_image.checked == true) {
        document.getElementById("imagetest").innerHTML = "<img src='/images/1.jpg'  style='padding-top: 0px'>";
        document.getElementById("first_image_div").classList.add("display_as_block");
        document.getElementById("ptest").classList.add("selected");
    }
}

if(document.getElementsByClassName('header_images_div').length>0) {
    document.getElementById('header_images_div').onclick = function () {
        var first_image = document.getElementById("first_image");
        var second_image = document.getElementById("second_image");
        var third_image = document.getElementById("third_image");
        if (first_image.checked == true) {
            document.getElementById("imagetest").innerHTML = "<img src='/images/1.jpg'  style='padding-top: 0px'>";
            document.getElementById("first_image_div").classList.add("display_as_block");
            document.getElementById("ptest").classList.add("selected");
        } else {
            document.getElementById("imagetest").innerHTML = "<img src='/images/1n.jpg'  style='padding-top: 0px'>";
            document.getElementById("first_image_div").classList.remove("display_as_block");
            document.getElementById("ptest").classList.remove("selected");
        }
        if (second_image.checked == true) {
            document.getElementById("imagetest2").innerHTML = "<img src='/images/2.jpg'  style='padding-top: 0px'>";
            document.getElementById("second_image_div").classList.add("display_as_block");
            document.getElementById("ptest2").classList.add("selected");
        } else {
            document.getElementById("imagetest2").innerHTML = "<img src='/images/2n.jpg'  style='padding-top: 0px'>";
            document.getElementById("second_image_div").classList.remove("display_as_block");
            document.getElementById("ptest2").classList.remove("selected");
        }
        if (third_image.checked == true) {
            document.getElementById("imagetest3").innerHTML = "<img src='/images/3.jpg'  style='padding-top: 0px'>";
            document.getElementById("third_image_div").classList.add("display_as_block");
            document.getElementById("ptest3").classList.add("selected");
        } else {
            document.getElementById("imagetest3").innerHTML = "<img src='/images/3n.jpg'  style='padding-top: 0px'>";
            document.getElementById("third_image_div").classList.remove("display_as_block");
            document.getElementById("ptest3").classList.remove("selected");
        }
    }
}