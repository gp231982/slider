//jeżeli n === 1 -> 1;
//jeżeli n !== 1 -> n*silnia(n-1)

let silnia = (n) => {

    if (n===1){
      return 1;
    } else {
      return n*silnia(n-1);
    };
  }

  silnia(6);

