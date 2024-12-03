const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

function generateNewColor() {
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * 16)];
    }

    return hexColor;
}

/* 
    invertColor(hex) and padZero(str, len) were taken from the question on StackOverflow.
    Thanks for the help, Onur Yildrim and stack!
*/
function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    else {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

const button = document.getElementById("button");
const colorText = document.getElementById("color");
let root = document.documentElement;
button.onclick = getRandomColor;

function getRandomColor() {
    const color = generateNewColor();
    root.style.setProperty('--background-color', color);
    root.style.setProperty('--color', invertColor(color));
    colorText.innerText = color;
}
