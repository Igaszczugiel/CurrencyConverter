// <!-- JS 00 / show list of available currencies PLN -->
// <!-- JS 01 / type how much to convert -->
// <!-- JS 02 / show list of available currencies -->
// <!-- JS 03 / button ktory on click triggers 01 -->

// url dla id pln = http://api.nbp.pl/api/exchangerates/rates/a/pln/
// url dla id euro = http://api.nbp.pl/api/exchangerates/rates/a/eur/
// url dla id dollar = http://api.nbp.pl/api/exchangerates/rates/a/usd/
// url dla id franc = http://api.nbp.pl/api/exchangerates/rates/a/chf/?format=json


let result = document.getElementById("result");
let form = document.querySelector('#convertIt');

form.addEventListener("submit", convertCurrency);

function convertCurrency(event) {
    event.preventDefault();
    // to stopuje forme przed naturalnym zachowaniem 
    // (przeladowanie strony - default behaviour)
    let currencyCode = document.querySelector('#currencyListFrom').value;
    let url = `http://api.nbp.pl/api/exchangerates/rates/a/${currencyCode}/?format=json`;

    fetch(url).then(resp => resp.json()).then((response) => {
        console.log(response.rates[0].mid);
        let currencyRate = response.rates[0].mid;
        let amount = document.getElementById("amount").value;
        let total = currencyRate * amount;
        result.innerHTML = total;
    })
}; 
