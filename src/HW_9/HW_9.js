import './HW_9.scss'

function on(elem) {
    var x, lights = document.querySelectorAll("#back > div");
    for (x in lights) {
        lights[x].className = "closed"
    }
    elem.className = "open"
}