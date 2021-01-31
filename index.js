// <!-- JS 01 / show result of the function id="result" -->
// czyli resultat przeliczenia danej waluty na PLN


// <!-- JS 02 / show list of available currencies id="currencyList" -->
 

// <!-- JS 03 / button ktory on click triggers 01 / id="button"-->





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
