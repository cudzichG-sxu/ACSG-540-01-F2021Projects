function setProperties(element) {
    let idActual = element.id;

    switch (idActual) {
        case 'phraseOne':
            element.style.color = 'purple';
            element.style.fontFamily = 'cursive';
            element.style.fontStyle = 'italic';
            element.style.fontSize = 'small';
            break;

        case 'phraseTwo':
            element.style.color = 'red';
            element.style.fontStyle = 'oblique';
            element.style.fontFamily = 'monospace';
            element.style.fontSize = 'x-large';
            break;

        case 'phraseThree':
            element.style.color = 'yellow';
            element.style.fontStyle = 'italic';
            element.style.fontFamily = 'Tahoma';
            element.style.fontSize = 'xx-large';
            break;

        default:
            break;
    }
}

function setBackToNormal(element) {
    element.style.color = 'blue';
    element.style.fontStyle = 'normal';
    element.style.fontFamily = 'Arial, Helvetica, sans-serif';
    element.style.fontSize = 'medium';
}