function changeImage(element) {
    let idActual = element.id;
    var imageActual = document.getElementById("images");
    switch (idActual) {
        case '1':
            imageActual.src="./images/guyRotatingOne.PNG"
            break;
        case '2':
            imageActual.src="./images/guyRotatingTwo.PNG"
            break;
        case '3':
            imageActual.src="./images/guyRotatingThree.PNG"
            break;
        default:
            break;
    }
}