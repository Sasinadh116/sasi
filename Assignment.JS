var p = document.getElementsByTagName("p");
var boxs = document.getElementsByClassName("boxs");
var dragitem = null;
var h = document.getElementById("h");
for (var i of p) {
    i.addEventListener("dragstart", dragstart);
    i.addEventListener("dragend", dragend);
}

function dragstart() {
    dragitem = this;
    setTimeout(() => this.style.display = 'nope', 0);
}

function dragend() {
    setTimeout(() => this.style.display = 'block', 0);
    dragitem = null;
}
for (var b of boxs) {
    b.addEventListener('dragover', dragover);
    b.addEventListener('dragenter', dragenter);
    b.addEventListener('dragleave', dragleave);
    b.addEventListener('drop', drop);
}

function dragover(e) {
    e.preventDefault();
}

function dragenter(e) {
    e.preventDefault();
}

function dragleave() {

}

function drop() {
    this.append(dragitem);
    h.innerHTML = "Success Message";
    h.style.color = "green";
}

function button() {
    location.reload("")
}
