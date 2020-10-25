// Caesar Cipher

let caesarButton = document.querySelector('.button__caesar--js');
const caesarAlphabet = {
    'a':'n',
    'b':'o',
    'c':'p',
    'd':'q',
    'e':'r',
    'f':'s',
    'g':'t',
    'h':'u',
    'i':'v',
    'j':'w',
    'k':'x',
    'l':'y',
    'm':'z',
    'n':'a',
    'o':'b',
    'p':'c',
    'r':'e',
    's':'f',
    't':'g',
    'u':'h',
    'w':'j',
    'y':'l',
    'z':'m',
    'A': 'N',
    'B': 'O',
    'C': 'P',
    'D': 'Q',
    'E': 'R',
    'F': 'S',
    'G': 'T',
    'H': 'U',
    'I': 'V',
    'J': 'W',
    'K': 'X',
    'L': 'Y',
    'M': 'Z',
    'N': 'A',
    'O': 'B',
    'P': 'C',
    'R': 'E',
    'S': 'F',
    'T': 'G',
    'U': 'H',
    'W': 'J',
    'Y': 'L',
    'Z': 'M'
    };

const caesar13 = (event) => {
    event.preventDefault();
    let textInput = document.getElementById("textInput").value;
    
    if (textInput.length == 0 || textInput.match(/^[0-9]+$/) != null) {
        throw new Error(`podano puste pole lub ciąg cyfr`);
    }

    caesarInput = textInput.replace(/[a-z]/gi, e => caesarAlphabet[e]);
    return caesarInput;
}

caesarButton.addEventListener('click', (e) => {
    console.log(caesar13(event));
});