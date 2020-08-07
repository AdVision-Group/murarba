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