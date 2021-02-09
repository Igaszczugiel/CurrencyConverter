let body = document.querySelector("body");
// 01 input w ktory wpisywana jest ilosc do przeliczenia
let number = document.getElementById("number");
// 03 button do convertowania
let button = document.getElementById("button");
// 04 here tu pojawi sie resultat
let result = document.getElementById("result");

// funkcja ktora powinna przemnozyc wybrana walute (x) razy wpisana ilosc PLNow ("number") - moje wypociny

document.getElementById("button").addEventListener("click", function() {
  let x = document.getElementById("currencyListFrom").value;
  let number = document.getElementById("number").value;
  document.getElementById("result").innerHTML = number * x;
}



// tresc zadania
// Korzystając z darmowego API ze strony NBP (https://api.nbp.pl/?ref=public-apis) 
// należy stworzyć prosty przelicznik walut uwzględniający następujące waluty: 
// euro, dolary amerykańskie, franki szwajcarskie. Aplikacja ma umożliwiać 
// przeliczanie wybranej waluty na złotówki. Kurs danej waluty ma być brany jako
// najnowszy (z dnia bieżącego).

// <!-- JS 00 / show list of available currencies PLN -->
// <!-- JS 01 / type how much to convert -->
// <!-- JS 02 / show list of available currencies -->
// <!-- JS 03 / button ktory on click triggers 01 -->


// url dla id pln = http://api.nbp.pl/api/exchangerates/rates/a/pln/
// url dla id euro = http://api.nbp.pl/api/exchangerates/rates/a/eur/
// url dla id dollar = http://api.nbp.pl/api/exchangerates/rates/a/usd/
// url dla id franc = http://api.nbp.pl/api/exchangerates/rates/a/chf/

// 01 input w ktory wpisywana jest ilosc do przeliczenia
let number = document.getElementById("number");
// 03 button do convertowania
let button = document.getElementById("button");
// 04 here tu pojawi sie resultat
let result = document.getElementById('result');
let body = document.querySelector("body");
let final;

function convertCurrency() {
    let url = 'http://api.nbp.pl/api/exchangerates/rates/a/';
    let urlApi = (url + '/?format=json')

    fetch(urlApi).then(resp => resp.json()).then((response) => {
        
        final = {
            mid: response.rates[0].mid,
        }   
        let sum = final.mid * number.value
       
        result.innerHTML = sum
    })
}; 

function convertCurrency()



// tu jest cos co sie przyda
var button = document.getElementById('getCurrencies');
  var body = document.querySelector("body");
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









//
//
//
//
// tresc podobnego zadania 
// <html lang="en">
//   <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//   <title>COCO</title>
// </head>
// <body>
//   <button id="getCurrencies">Click me</button>

//   <script>
//   var button = document.getElementById('getCurrencies');
//   var body = document.querySelector("body");
//   button.addEventListener("click", () => {
//     fetch("https://api.frankfurter.app/latest")
//     .then(resp => resp.json())
//     .then(data => {
//       console.log(data);
//       let selection = document.createElement("select");
//         Object.values(data.rates).forEach(option => {
//           const opt = document.createElement("option");
//           opt.innerHTML += option;
//           selection.appendChild(opt);
//         });
//       document.body.appendChild(selection);
//     })
//     .catch(err => console.log(err))
//   });
//   </script>
// </body>
// </html>

// <!-- async function getCurrencyList() {
// 	let result = await fetch("https://api.frankfurter.app/latest")
// 		.then(function(response) {
// 			return response.json();
// 		})
// 		.then(function(jsonResponse) {
// 			let slt = document.createElement("select");
// 			for(let i = 0; i < Object.keys(jsonResponse.rates).length; i++) {
// 				let opt = document.createElement('option');
// 				opt.setAttribute('value', Object.keys(jsonResponse.rates)[i]);
// 				opt.innerHTML += Object.values(jsonResponse.rates)[i];
// 				slt.appendChild(opt);
// 			}
// 			document.body.appendChild(slt);
// 		});
// } -->