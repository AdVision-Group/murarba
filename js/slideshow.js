function nextSlide() {
    var slideshow = document.getElementById("slides");
    
    var width = document.documentElement.clientWidth;
    var doubleWidth = (-width).toString() + "px";
    var tripleWidth = (-width * 2).toString() + "px";
    
    document.getElementById("arrow-right").style.opacity = "1";
    document.getElementById("arrow-left").style.opacity = "1";
    
    if ($("#slides").css("margin-left").toLowerCase() == "0px") {
        slideshow.style.marginLeft = doubleWidth;
    } else if ($("#slides").css("margin-left").toLowerCase() == doubleWidth) {
        slideshow.style.marginLeft = tripleWidth;
        
        document.getElementById("arrow-right").style.opacity = "0";
    }
}

function previousSlide() {
    var slideshow = document.getElementById("slides");
    
    var width = document.documentElement.clientWidth;
    var doubleWidth = (-width).toString() + "px";
    var tripleWidth = (-width * 2).toString() + "px";
    
    document.getElementById("arrow-right").style.opacity = "1";
    document.getElementById("arrow-left").style.opacity = "1";
    
    if ($("#slides").css("margin-left").toLowerCase() == tripleWidth) {
        slideshow.style.marginLeft = doubleWidth;
    } else if ($("#slides").css("margin-left").toLowerCase() == doubleWidth) {
        slideshow.style.marginLeft = "0px";
        
        document.getElementById("arrow-left").style.opacity = "0";
    }
}