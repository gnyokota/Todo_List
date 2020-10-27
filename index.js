var button = document.getElementById("check-btn");
var input = document.getElementById("user-input");
var orderedList = document.getElementsByClassName("main-list")[0];
var li = document.querySelector("li");

button.addEventListener("click", addListContent);

input.addEventListener("keypress", function(event){
    if (input.value.length > 0 && event.keyCode === 13){
        addListContent();
    }
});

function addListContent(){
    // do not add empty input value
    if (input.value.length > 0){
    var li = document.createElement("li");
    var text = document.createTextNode(input.value);
    li.appendChild(text);
    orderedList.appendChild(li);
    // empty input value
    input.value = null;
    }
}

