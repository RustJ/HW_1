import './HW_9.scss'

document.getElementById('red').onclick = flashRed;
document.getElementById('yellow').onclick = flashYellow;
document.getElementById('green').onclick = flashGreen;

function flashRed() {
    none();
    document.getElementById('red').style.backgroundColor = "red";
}

function flashYellow() {
    none();
    document.getElementById('yellow').style.backgroundColor = "yellow";
}

function flashGreen() {
    none();
    document.getElementById('green').style.backgroundColor = "green";
}

function none() {
    document.getElementById('red').style.backgroundColor = "black";
    document.getElementById('yellow').style.backgroundColor = "black";
    document.getElementById('green').style.backgroundColor = "black";
}