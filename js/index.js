function showImage(image) {
    var path = "assets/" + image + ".jpg";
    
    document.getElementById("gallery-image").src = path;
    document.getElementById("gallery-image-container").style.display = "flex";
}

function hideImage() {
    document.getElementById("gallery-image-container").style.display = "none";
}

function showMenu() {
    var height = document.getElementById("mobile-menu-content").offsetHeight;
    
    var menu = document.getElementById("mobile-menu");
    menu.style.height = height + "px";
    //menu.style.maxHeight = "300px";
    
    document.getElementById("button").setAttribute("onclick", "javascript:hideMenu();");
}

function hideMenu() {
    var menu = document.getElementById("mobile-menu");
    menu.style.height = "0px";
    
    document.getElementById("button").setAttribute("onclick", "javascript:showMenu();");
}

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