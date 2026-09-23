//HTMl elements
let input = document.getElementById("amount");
const convertBtn = document.getElementById("convertBtn");
let diffCurrency = document.getElementById("diffCurrency");
const message = document.getElementById("message");

async function convertCurrency() {
    try {
    let response = await fetch("https://api.frankfurter.dev/v2/rates?base=usd");
    let data = await response.json();
    //const targetCurrency = diffCurrency;
    const option = document.createElement("option");
    for (let i = 0; i < data.length; i++){
        if (diffCurrency === data.quote[i]) {
        option.value = data[i].quote;
        option.textContent = data[i].quote;
            //console.log(data[0].quote);
            diffCurrency.appendChild(option);
            message.textContent = data[i].quote;
            // it was showing all of the currency in dropdown, but there is somthing wroung in the if statement area
        }
    }
    //fix this
    } catch(error) {
        console.log("Converision Failed!", error.message)
    }
}

convertBtn.addEventListener("click", convertCurrency);