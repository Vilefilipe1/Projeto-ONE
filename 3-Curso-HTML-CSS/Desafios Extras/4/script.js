let a = 0
let importante = document.getElementsByClassName("urgente");
importante[0].style.color = "red";

function myFunction(color1, color2) {
    importante[0].style.color == color1 ? importante[0].style.color = color2:importante[0].style.color = color1;
}

while (a == 0) {
    setTimeout(myFunction("black", "red"), 100);
    setTimeout(myFunction("red", "black"), 100);
}

