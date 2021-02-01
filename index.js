// lista krokow:
// <!-- JS 00 / show list of available currencies PLN -->
// <!-- JS 01 / type how much to convert -->
// <!-- JS 02 / show list of available currencies -->
// <!-- JS 03 / button ktory on click triggers 01 -->

// url dla id pln = http://api.nbp.pl/api/exchangerates/rates/a/pln/
// url dla id euro = http://api.nbp.pl/api/exchangerates/rates/a/eur/
// url dla id dollar = http://api.nbp.pl/api/exchangerates/rates/a/usd/
// url dla id franc = http://api.nbp.pl/api/exchangerates/rates/a/chf/


let body = document.querySelector("body");
// 01 input w ktory wpisywana jest ilosc do przeliczenia
let number = document.getElementById("number");
// 03 button do convertowania
let button = document.getElementById("button");
// 04 here tu pojawi sie resultat
let result = document.getElementById("result");

// funkcja ktora powinna przemnozyc wybrana walute (x) razy wpisana ilosc PLNow ("number")

document.getElementById("button").addEventListener("click", function() {
  let x = document.getElementById("currencyListFrom").value;
  let number = document.getElementById("number").value;
  document.getElementById("result").innerHTML = number * x;
}

// i to trzeba pewnie jakos zmiksowac z wyrywkami z ponizszego :D
//  ale jak dolozyc do tego api z wybranych <select> walut?

button.addEventListener("click", () => {
      fetch("https://api.frankfurter.app/latest")
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        let selection = document.createElement("select");
          Object.values(data.rates).forEach(option => {
            const opt = document.createElement("option");
            opt.innerHTML += option;
            selection.appendChild(opt);
          });
        document.body.appendChild(selection);
      })
      .catch(err => console.log(err))
    });