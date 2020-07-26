// Gdy klikamy na 2 kropke pojawia się drugi obrazek
// 1. Znajdźmy kropkę nr. 2 - done
// 2. Niech kropka 'slucha' na kliknięcie - done
// 3. Po kliknięciu, niech pojawi się obrazek nr. 2 - done
  //3.1 Znaleźć obrazek 2 - done
  //3.2 Dodaćdo obrazka 2 klasę "active"-done
  //3.3 Usunć klasę active z obrazka 1
    //3.3.1 - Znaleźć obrazek 1 - done

let dot1 = document.querySelector("#dot1");
let dot2 = document.querySelector("#dot2");
let dot3 = document.querySelector("#dot3");
let dot4 = document.querySelector("#dot4");

let hideActiveElement = () =>{
  let activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");
}

let showSlide = (slideNumber) => {
  hideActiveElement();
  document.querySelector("#slide" + slideNumber).classList.add("active");
}

let showSlide1 = () => {
  showSlide(1);
};


let showSlide2 = () => {
  showSlide(2);
};

let showSlide3 = () =>{
  showSlide(3);
}

let showSlide4 = () => {
  showSlide(4);
};


dot1.addEventListener("click", showSlide1); //jeśli ktoś cię strzałko kliknie to zrób to co mówi funkcja showSlide2
dot2.addEventListener("click", showSlide2);
dot3.addEventListener("click", showSlide3);
dot4.addEventListener("click", showSlide4);



































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
