var mobile_menu = document.getElementById('.modal');
var	i = 1;

function menu_open() {
    if (i) {
        modal.style.display = "flex";
        i--;
    }
    else{
        modal.style.display = "none";
        i++;
    }
}

