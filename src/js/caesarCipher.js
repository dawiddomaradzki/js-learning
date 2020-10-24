// Caesar Cipher

let caesarButton = document.querySelector('.button__caesar--js');

function sConsole(event) {
    event.preventDefault();
    var textInput = document.getElementById("textInput").value;
    return textInput;
}

caesarButton.addEventListener('click', (e) => {
    console.log(sConsole(event));
});