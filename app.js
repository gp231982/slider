

let activeSlideNumber = 1;

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

document.addEventListener("keydown", onKeyDown);

showSlide(activeSlideNumber);


for (let i = 0; i<4; i=i+1){
// i===0 true
let showSlideByNumber = () =>{
  showSlide(i+1);
}
document.querySelector("#dot"+(i+1)).addEventListener("click",showSlideByNumber);
};

























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
fizzBuzz(45);

//jeżeli n === 1 -> 1;
//jeżeli n !== 1 -> n*silnia(n-1)

let silnia = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n * silnia(n - 1);
  }
};

console.log(silnia(6));

//wyznaczanie n-tego wyrazu ciagu fibonacciego.

//jeżeli n===1 lub n===2 -> 1
//jeżeli n!==1 i n!==2 -> fibonacci(n-1) + fibonacci(n-2)

let fibonacci = (n) => {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

console.log(fibonacci(6));

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

showSlide(activeSlideNumber);

for (let i = 0; i < 10; i = i + 1) {
  console.log(name);
}

// //for (
//   let rzeczyDoSpakowania = 100;
//   rzeczyDoSpakowania > 0;
//   rzeczyDoSpakowania = rzeczyDoSpakowania - 10)
//  {
//   wezRzeczy();
//   wlożRzeczy();
// //};

// function nieparzyste(n) {
//   for (let i = 0; i < n; i = i + 1)
//   console.log(2*i+1);
// }

// nieparzyste(10)

function kwadraty(n) {
  for (let i = 0; i < n; i = i + 1)
  console.log(i*i);
}

kwadraty(20)

