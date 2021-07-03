// objectsFirst task #1 // Stwórz 2 obiekty:rectangle i circle. Obiekt rectangle powinien mieć właściwości height, width, natomiast circle właściwość radius. Oba obiekty powinny mieć metodę showArea(), która zwróci pole danej figury.

const objectsFirstTask1 = document.querySelector(".button__objectsFirst1--js");

const rectangle = {
  height: 20,
  width: 5,
  showArea() {
    return console.log(
      `Kwadrat ma szerokość ${this.width} i wysokość ${
        this.height
      }. Jego pole wynosi ${this.height * this.width}.`
    );
  },
};

const circle = {
  radius: 15,
  showArea() {
    return console.log(
      `Koło ma promień ${this.radius}. Jego pole wynosi ${
        this.radius * this.radius * 3.14
      }.`
    );
  },
};

objectsFirstTask1.addEventListener("click", (e) => {
  rectangle.showArea();
  circle.showArea();
});

// objectsFirst task #2 //

const objectsFirstTask2 = document.querySelector(".button__objectsFirst2--js");

const currentUser = {
  name: "Dawid",
  surname: "Domaradzki",
  email: "dawid@pl.pl",
  www: "dawid.pl",
  userType: "male",
  isActive: true,
  show() {
    return console.log(
      `Imię: ${this.name}, Nazwisko: ${this.surname}, Email: ${this.email}, www: ${this.www},	Płeć: ${this.userType}, Aktywny: ${this.isActive}`
    );
  },
  setActive(active) {
    this.isActive = active;
    return console.log(`Aktywny: ${this.isActive}`);
  },
};

objectsFirstTask2.addEventListener("click", (e) => {
  currentUser.show();
  currentUser.setActive(false);
});

// objectsFirst task #3 //
const objectsFirstTask3 = document.querySelector(".button__objectsFirst3--js");

const book = {
  title: "Wiedźmin",
  author: "Andrzej Sapkowski",
  pageCount: 666,
  publisher: "Znak",
  showDetails() {
    for (const key in book) {
      if (typeof book[key] !== "function") {
        console.log(`${key} ${book[key]}`);
      }
    }
  },
};

objectsFirstTask3.addEventListener("click", (e) => {
  book.showDetails();
  console.log(Object.keys(book));
  console.log(Object.values(book));
  console.log(Object.entries(book));
});
