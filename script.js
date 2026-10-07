//HTMl elements
let input = document.getElementById("amount");
const convertBtn = document.getElementById("convertBtn");
let diffCurrency = document.getElementById("diffCurrency");
const message = document.getElementById("message");
const destination = document.getElementById("destinationCurrency");

async function convertCurrency() {
    try {
    let response = await fetch("https://api.frankfurter.dev/v2/rates?base=usd");
    let data = await response.json();
    const dst = diffCurrency.value
    //const targetCurrency = diffCurrency;
    for (let i = 0; i < data.length; i++){
        const option = document.createElement("option");
        //if (diffCurrency === data[i].quote) {
        option.value = data[i].quote;
        option.textContent = data[i].quote;
            //console.log(data[0].quote);
            diffCurrency.appendChild(option);

            //when user selects currency
            diffCurrency.addEventListener("change", () => {
                if (data[i].quote === dst) {
                    destination.textContent = `${data[i].rate} ${data[i].quote}`;
                }
                convertBtn.addEventListener("click", () => {
                    if (input.value === "") {
                        //alert("Please Enter the Amount in USD");
        
                        return;
                    }
                    if (data[i].quote === dst) {
                        let conversion = input.value*data[i].rate;
                        message.textContent = input.value + " USD is equal to " + conversion + dst; 
                    }
                    
                })
            })
            //message.textContent = data[i].quote;
        //}
        
    }
    //fix this
    } catch(error) {
        console.log("Converision Failed!", error.message)
    }
}

//convertBtn.addEventListener("click", convertCurrency);
convertCurrency()