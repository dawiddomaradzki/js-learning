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
