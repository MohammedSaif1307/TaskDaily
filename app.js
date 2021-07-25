var element = [];
var input = document.querySelector("input");

window.onload = function () {
    if (JSON.parse(localStorage.getItem("elements")) != null) {
        element = JSON.parse(localStorage.getItem("elements"));
        display(); 
    }
}

function display() {
    document.querySelector(".list").innerHTML = "";
    for (var i = element.length - 1 ; i >= 0 ; i--) {
        document.querySelector(".list").innerHTML += "<center><div class = 'element'>" + element [i] +
        "<img src= 'user-trash-full-icon.png' class = 'dustbin' onclick='del("+ i +")'></div></center><br>";
    }
}

function addElement() {
    if (input.value.trim() != "") {
        element.push(input.value.trim());
        localStorage.setItem("element", JSON.stringify(element));
        display();
    }
}

function del(index) {
    element.splice(index,1);
    localStorage.setItem("element", JSON.stringify(element));
    display();
}