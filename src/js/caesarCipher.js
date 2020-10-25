// Caesar Cipher

let caesarButton = document.querySelector('.button__caesar--js');
const alphabet = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż';

const sConsole = (event) => {
    event.preventDefault();
    var textInput = document.getElementById("textInput").value;
    // let inputArray = textInput.split('');

    if (textInput.length == 0 || textInput.match(/^[0-9]+$/) != null) {
        throw new Error(`podano puste pole lub ciąg cyfr`);
    }

    
    return textInput;
}

// function caesar13(textInput) {
//     let inputArray = textInput.split('');
//     return inputArray;
// }

caesarButton.addEventListener('click', (e) => {
    console.log(sConsole(event));
});