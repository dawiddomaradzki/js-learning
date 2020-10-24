// basic functions task #1 // Napisz funkcję, która przyjmie jeden parametr - dowolny tekst. Funkcja niech ZWRACA tekst Liczba liter: .... gdzie .... to liczba liter tekstu.

const functionsTask1 = document.querySelector('.button__functionsTask1--js');

let task1Text = 'Jakiś Tekst!';

function textCounter(task1Text) {

    let counter = 1;
    for (let i = 0; i < task1Text.length; i++) {
        if (/^[a-zA-Z]+$/.test(task1Text[i])) {
            counter++
        }
    }
    return counter
}

functionsTask1.addEventListener('click', (e) => {

    console.log(task1Text);
    console.log(task1Text.split(''));
    console.log(textCounter(task1Text));
    console.log(`podany tekst zawiera ${textCounter(task1Text)} liter`);
});

// basic functions task #2 // Napisz funkcje, która zsumuje przekazaną do niej tablicę i zwraca jej sumę.Stwórz dowolną tablicę, a następnie przekaż ją do tej funkcji i wynik wypisz w konsoli.

const functionsTask2 = document.querySelector('.button__functionsTask2--js');

const arrTask2 = [6, 6, 6];
function adding(arrTask2) {
    let sumArrTask2 = 0;
    for (let i = 0; i < arrTask2.length; i++) {
        sumArrTask2 += arrTask2[i];
    }
    return sumArrTask2
}

functionsTask2.addEventListener('click', (e) => {
    console.log(`Suma tablicy [${arrTask2}] wynosi ${adding(arrTask2)}`);
});

// basic functions task #3 // Napisz funkcję, która przyjmie dowolny tekst. Funkcja niech zwraca tekst, który ma zmiksowana wielkość liter np: 
// input -> Ala ma kota
// output -> AlA Ma kOtA
// Dla ułatwienia spacje liczmy jako literę.

const functionsTask3 = document.querySelector('.button__functionsTask3--js');

const task3Text = 'Ala ma kota';

function bigLetters(task3Text) {
    let newTask3Text = task3Text.split('');
    for (let i = 0; i < newTask3Text.length; i += 2) {
        newTask3Text[i] = newTask3Text[i].toUpperCase();
    }
    return newTask3Text.join('');
}

functionsTask3.addEventListener('click', (e) => {
    console.log(bigLetters(task3Text));
});

// basic functions task #4 // Napisz funkcje, która będzie wymagać 2 atrybutów. Funkcja niech sprawdza, czy oba atrybuty są liczbami.Funkcja ma zwracać iloczyn(*) obu liczb.Jeżeli któryś z atrybutów nie jest liczba, funkcja niech zwraca false.

const functionsTask4 = document.querySelector('.button__functionsTask4--js');

function multiplication(number1, number2) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        throw new Error('Podana wartość nie jest typu string')
    }
    const result = number1 * number2;
    return result
}

functionsTask4.addEventListener('click', (e) => {
    console.log(multiplication(6, 6));
});

// basic functions task #5 //Napisz funkcje, która przyjmuje 2 parametry: imię - np: Ala miesiac - np: styczen Funkcja ma zwracac:

// jezeli miesiac to grudzien, styczen, luty: "Ala jezdzi na sankach"
// jezeli miesiac to marzec, kwiecien, maj: "Ala chodzi po kaluzach"
// jezeli miesiac to czerwiec, lipiec, sierpien: "Ala sie opala"
// jezeli miesiac to wrzesien, pazdziernik, listopad: "Ala zbiera liscie"
// Wywołaj funkcje przekazując do niej zmienne: twoje imię i dowolny miesiąc.
// Dopisz w funkcji zabezpieczenie, które pozwoli wpisać miesiac małymi lub dużymi literami.Jeżeli miesiac jest "innym słowem", funkcja niech zwraca "Ala uczy się JS"

const functionsTask5 = document.querySelector('.button__functionsTask5--js');

const miesiace1 = ['grudzien', 'styczen', 'luty'];
const miesiace2 = ['marzec', 'kwiecien', 'maj'];
const miesiace3 = ['czerwiec', 'lipiec', 'sierpien'];
const miesiace4 = ['wrzesien', 'pazdziernik', 'listopad'];

function nameAndMonth(name, month) {
    if (miesiace1.includes(month.toLowerCase(''))) {
        console.log(`${name} jeździ na sankach`)
    }
    if (miesiace2.includes(month.toLowerCase(''))) {
        console.log(`${name} chodzi po kałużach`)
    }
    if (miesiace3.includes(month.toLowerCase(''))) {
        console.log(`${name} sie opala`)
    }
    if (miesiace4.includes(month.toLowerCase(''))) {
        console.log(`${name} zbiera liście`)
    }
    else {
        console.log(`${name} uczy się JS`)
    }
}
functionsTask5.addEventListener('click', (e) => {
    console.log(nameAndMonth('Żegota', 'Wrzesien'));
});

// basic functions task #6 // Mamy przykładowy tekst: const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka"; Napisz funkcję, która przyjmie 2 atrybuty:
// tekst
// znak rozdziału(np. |)
// Skorzystaj z odpowiedniej metody, tak aby rozdzielić przekazany do funkcji tekst na części za pomocą przekazanego znaku rozdziału.W wyniku rozdzielenia powinieneś dostać tablicę.Funkcja niech posegreguje tą tablicę alfabetycznie.Następnie funkcja niech połączy tą tablicę w nowy tekst wstawiając między imiona znak wcześniejszego rozdziału.Skorzystaj tutaj z innej odpowiedniej metody js.input -> "Ania|Marcin|Bartek" output -> "Ania|Bartek|Marcin".Wywołaj tę funkcję przekazując do niej str z początku zadania.

const functionsTask6 = document.querySelector('.button__functionsTask6--js');

const names = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
const sign = "|";

function namesAndSign(names, sign) {
    const arrNames = names.split(sign).sort().join(sign);
    return arrNames
    console.log(arrNames);
}

functionsTask6.addEventListener('click', (e) => {
    console.log(`${names} imiona przed sortowaniem`);
    console.log(namesAndSign(names, sign) + ` imiona po sortowaniu`);
});

// basic functions task #7
// Napisz 2 funkcje.Każda z nich niech przyjmuje tablicę imion.
// Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane dużymi literami. Druga funkcja niech zwraca nową tablicę, w której imiona mają zmienną wielkość liter.
//     input -> ["Ania", "Marcin", "Bartek", "Piotr"]
// output1 -> ["ANIA", "MARCIN", "BARTEK", "PIOTR"]
// output2 -> ["AnIa", "MaRcIn", "BaRtEk", "PiOtR"]

const functionsTask7 = document.querySelector('.button__functionsTask7--js');
let task7names = ["Ania", "Marcin", "Bartek", "Piotr"];

function namesInterlace(task7names) {
    task7names = task7names.map(function (x) {
        return x.toUpperCase().split('');
    });
    task7names = task7names.map(function (x) {
        for (let i = 1; i < x.length; i += 2) {
            x[i] = x[i].toLowerCase();
        }
        return x.join('');
    });
    return task7names;
}

functionsTask7.addEventListener('click', (e) => {
    console.log(namesInterlace(task7names));
});


// basic functions task #8 
// Napisz funkcję checkFemale, która sprawdza przekazane do niej imię.Zróbmy proste teoretyczne założenie, że jeżeli imię kończy się literą "a" to jest to żeńskie imię, w przeciwnym wypadku męskie.Funkcja powinna wracać true jeżeli imię jest żeńskie i false jeżeli jest męskie.Przykładowo:
// checkFemale("Ania") === true
// checkFemale("Marcin") === false

const functionsTask8 = document.querySelector('.button__functionsTask8--js');

function getAName() {
    let name = prompt('Podaj swoje imię');
    return name;
}

functionsTask8.addEventListener('click', (e) => {
    let nameInput = getAName();
    if (nameInput.endsWith('a') === true) {
        console.log(`Cześć ${nameInput}, ładnie dziś wyglądasz :)`);
    }
    else {
        console.log(`${nameInput}! Siema chopie!`);
    }
});

// basic functions task #9 
// Napisz funkcję countWomanInTable(arr), do której przekażesz tablicę userów, którą masz poniżej.Funkcja powinna sprawdzić każdego użytkownika w tablicy i zwrócić ile jest kobiet.Wykorzystaj tutaj funkcję z poprzedniego zadania.Jak pobrać imię z usera ? Możesz to osiągnąć za pomocą metody split().Podziel string na 2 części - uzyskasz tablicę 2 elementów.Pierwszy to imię, drugi to nazwisko
// const users = ["Ania Nowak", "Piotr Kowalski", "Bartek Kosecki", "Natalia Nowak", "Weronika Piotrowska", "Agata Beatczak", "Tomasz Nowak", "Mateusz Kowalski", "Marcin Kotecki", "Betata Lecka", "Katarzyna Melecka"]

const functionsTask9 = document.querySelector('.button__functionsTask9--js');

let users = ["Ania Nowak", "Piotr Kowalski", "Bartek Kosecki", "Natalia Nowak", "Weronika Piotrowska", "Agata Beatczak", "Tomasz Nowak", "Mateusz Kowalski", "Marcin Kotecki", "Betata Lecka", "Katarzyna Melecka"]

function countWomanInTable(users) {
    let newUsers = users.join(' ').split(' ');
    let counter = 0;
    for (let i = 0; i < newUsers.length; i += 2) {

        if (newUsers[i].endsWith('a') === true) {
            counter++;
        }
    }
    return counter;

}

functionsTask9.addEventListener('click', (e) => {
    console.log(`Ilość kobiet w tablicy to: ${countWomanInTable(users)}`);
});