

var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");


function inputLenght() {
    return input.value.length;
}



function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    li.addEventListener('click', function() {
        var finished = this.classList.toggle("done");
        var removeBtn = document.createElement('button');
        removeBtn.classList.add('deleteButton');

        if (finished) {
            removeBtn.appendChild(document.createTextNode('delete'));
            li.appendChild(removeBtn)

            removeBtn.addEventListener("click", function() {
                this.parentElement.remove();
            });
        } else {
            this.getElementsByClassName('deleteButton')[0].remove();
        }
    })
    input.value = ''
}

function addListAfterClick() {
    if(inputLenght() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if(inputLenght() > 0 && event.key == 'Enter') {
        createListElement(); 
    }
}

button.addEventListener("click",  addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)



