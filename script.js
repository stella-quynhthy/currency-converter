//HTMl elements
let input = document.getElementById("amount");
const convertBtn = document.getElementById("convertBtn");
let diffCurrency = document.getElementById("diffCurrency");

async function convertCurrency() {
    let response = await fetch("https://api.frankfurter.dev/v2/rates?base=usd ");
    let data = response.json();
    //console.log(data.42.rate);
    //fix this
}

convertBtn.addEventListener("click", convertCurrency);