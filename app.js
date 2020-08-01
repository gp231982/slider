// Gdy klikamy na 2 kropke pojawia się drugi obrazek
// 1. Znajdźmy kropkę nr. 2 - done
// 2. Niech kropka 'slucha' na kliknięcie - done
// 3. Po kliknięciu, niech pojawi się obrazek nr. 2 - done
//3.1 Znaleźć obrazek 2 - done
//3.2 Dodaćdo obrazka 2 klasę "active"-done
//3.3 Usunć klasę active z obrazka 1
//3.3.1 - Znaleźć obrazek 1 - done

let activeSlideNumber = 1;

let dot1 = document.querySelector("#dot1");
let dot2 = document.querySelector("#dot2");
let dot3 = document.querySelector("#dot3");
let dot4 = document.querySelector("#dot4");

let numberOFSlides = document.querySelectorAll(".slide").length;

let hideActiveElement = () => {
  let activeElement = document.querySelector(".active");
  if (activeElement) {
    activeElement.classList.remove("active");
  }

  let activeDot = document.querySelector(".dot-active");
  activeDot.classList.remove("dot-active");
};

let showSlide = (slideNumber) => {
  activeSlideNumber = slideNumber;
  hideActiveElement();
  document.querySelector("#slide" + slideNumber).classList.add("active");
  document.querySelector("#dot" + slideNumber).classList.add("dot-active");
};

let showSlide1 = () => {
  showSlide(1);
};

let showSlide2 = () => {
  showSlide(2);
};

let showSlide3 = () => {
  showSlide(3);
};

let showSlide4 = () => {
  showSlide(4);
};

let showNextSlide = function () {
  //to jest to samo co zwykła funkcja strzałkowa jesli w środku funkcji nie ma "this".
  if (activeSlideNumber === numberOFSlides) {
    showSlide(1);
  } else {
    showSlide(activeSlideNumber + 1);
  }
};

let showPreviousSlide = () => {
  //to jest to samo co zwykła funkcja strzałkowa jesli w środku funkcji nie ma "this".
  if (activeSlideNumber === 1) {
    showSlide(numberOFSlides);
  } else {
    showSlide(activeSlideNumber - 1);
  }
};

dot1.addEventListener("click", showSlide1); //jeśli ktoś cię strzałko kliknie to zrób to co mówi funkcja showSlide2
dot2.addEventListener("click", showSlide2);
dot3.addEventListener("click", showSlide3);
dot4.addEventListener("click", showSlide4);

//1. znajdz strzałkę w prawo//
//2. POkaż nastepny slide po kliknięciu na strząłkę w prawo //

let arrowRight = document.querySelector("#arrow-right"); // szkanie elementu o danym Id//
let arrowLeft = document.querySelector("#arrow-left");

arrowRight.addEventListener("click", showNextSlide);
arrowLeft.addEventListener("click", showPreviousSlide);

let onKeyDown = (event) => {
  if (event.keyCode === 39) {
    showNextSlide();
  }

  if (event.keyCode === 37) {
    showPreviousSlide();
  }
};

//jeśli klikamy strzałkę w prawo
//showNextSlide();
//Jeśli klikamy strzałkę w lewo
//showPreviousSlide();

document.addEventListener("keydown", onKeyDown);

showSlide(activeSlideNumber);

//jest podzielna przez 15 - FizzBuzz!
// jest podzielna przez 3 - Fizz.
// jest podzielna przez 5 - Buzz.
// W innym przypadku - wyświetlamy liczbę.

//fizzBuzz(1);
//###1

//fizzBuzz(3);
//### Fizz;

//fizzBuzz(5);
//### Buzz;

//fizzBuzz(15);
//### FizzBuzz;

let fizzBuzz = (n) => {
  if (n % 15 === 0) {
    console.log("FizzBuzz!");
  } else if (n % 5 === 0) {
    console.log("Buzz");
  } else if (n % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(n);
  }
};
fizzBuzz(7);

















// let dlugoscNapisu = (napis) => {
//   return napis.length;
// };

// let doKwadratu = (x) => {
//   let wynik = x * x;
//   return wynik;
// };

// let dlugosc = dlugoscNapisu("ABCDEFG");
// let kwadrat = doKwadratu(dlugosc);

// console.log(kwadrat);

// // let funkcjaLiniowa = (a, x, b) => {
// //   let wynik = a * x + b;
// //   return wynik;
// // };

// // funkcjaLiniowa(10, 2, 20);
// // console.log(funkcjaLiniowa(10, 2, 20));

// // let PLNtoEUR = (zloty) => {
// //   let wynik = 0.23 * zloty;
// //   return wynik;
// // };

// // console.log(PLNtoEUR(10));

// // let EURtoUSD = (euro) => {
// //   let wynik = 1.17 * euro;
// //   return wynik;
// // };

// // console.log(EURtoUSD(10));

// // let convert = (kwota, kursWymiany) =>{
// //  let wynik = kwota*kursWymiany;
// //  return wynik;
// // }

// // let PLNtoEUR = (zloty) => {
// //   let wynik = convert(zloty,0.23)
// //   return wynik;
// // };

// // let EURtoUSD = (euro) => {
// //   let wynik = convert(euro,1.17);
// //   return wynik;
// // };

// // let euro = PLNtoEUR(100);
// // let usd = EURtoUSD(euro);

// // console.log(euro);
// // console.log(usd);

// let Potega = (liczba, wykladnik) =>{
// let wynik = Math.pow(liczba, wykladnik);
// return wynik;
// }
// console.log(Potega(2,10));
// console.log(Potega(4,10));
// console.log(Potega(3,10));
// console.log(Potega(3,10));
// console.log(Potega(3,10));
// console.log(Potega(1,10));
// console.log(Potega(20,10));
