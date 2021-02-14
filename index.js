let body = document.querySelector("body");
// 01 input w ktory wpisywana jest ilosc do przeliczenia
let number = document.getElementById("number");
// 03 button do convertowania
let button = document.getElementById("button");
// 04 here tu pojawi sie resultat
let result = document.getElementById("result");

// <!-- JS 00 / show list of available currencies PLN -->
// <!-- JS 01 / type how much to convert -->
// <!-- JS 02 / show list of available currencies -->
// <!-- JS 03 / button ktory on click triggers 01 -->


// url dla id pln = http://api.nbp.pl/api/exchangerates/rates/a/pln/
// url dla id euro = http://api.nbp.pl/api/exchangerates/rates/a/eur/
// url dla id dollar = http://api.nbp.pl/api/exchangerates/rates/a/usd/
// url dla id franc = http://api.nbp.pl/api/exchangerates/rates/a/chf/?format=json


function convertCurrency() {
    let url = 'http://api.nbp.pl/api/exchangerates/rates/a/';
    let finalAmount = document.getElementById('currencyListFrom').options[document.getElementById('currencyListFrom').selectedIndex].value;
    let currency = finalAmount;
    let urlResult = (url + currency+'/?format=json');

    fetch(urlResult).then(resp => resp.json()).then((response) => {
        // let franc = przypisz wartosc 
        console.log(response.rates[0].mid);

        // final = {
        //     mid: response.rates[0].mid,
        // }   
        // let sum = final.mid * number.value
       
        // result.innerHTML = sum
    })
}; 

convertCurrency();
