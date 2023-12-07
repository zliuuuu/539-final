function flip(element) {
    var flipper = element.querySelector(".flipper");
    if (flipper.style.transform == "rotateY(180deg)") {
        flipper.style.transform = "rotateY(0deg)";
    } else {
        flipper.style.transform = "rotateY(180deg)";
    }
}
