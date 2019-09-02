let start = new Date().getTime();

function getRandomColor() {

    const letters = '0123456789ABCDEF'.split('');

    let color = '#';

    for (let i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];

    }

    return color;

}

function makeShapeAppear() {

    const top = Math.random() * 400;

    const left = Math.random() * 400;

    const width = (Math.random() * 200) + 100;

    if (Math.random() > 0.5) {

        document.getElementById("shape").style.borderRadius = "50%";

    } else {

        document.getElementById("shape").style.borderRadius = "0";

    }

    document.getElementById("shape").style.backgroundColor = getRandomColor();

    document.getElementById("shape").style.width = width + "px";

    document.getElementById("shape").style.height = width + "px";

    document.getElementById("shape").style.top = top + "px";

    document.getElementById("shape").style.left = left + "px";

    document.getElementById("shape").style.display = "block";

    start = new Date().getTime();

}

function appearAfterDelay() {

    setTimeout(makeShapeAppear, Math.random() * 2000);

}

appearAfterDelay();

document.getElementById("shape").onclick = function () {

    document.getElementById("shape").style.display = "none";

    const end = new Date().getTime();

    const timeTaken = (end - start) / 1000;

    document.getElementById("timeTaken").innerHTML = timeTaken + "s";

    appearAfterDelay();

};