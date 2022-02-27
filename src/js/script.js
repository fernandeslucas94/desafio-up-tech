// The code below is responsible for the number of itens for the users choice in the quantity section
let elements = '';
for (let i = 1; i <= 99; i++) {
    elements += `<option value="${i}">${i}</option>`;
}

document.getElementById("item-quantity-select").innerHTML = elements;




// Here we are making the calculation for knows the price considering the number of items wich are being bougth
let price = 69.90;
let quantity = document.querySelector("#item-quantity-select");
let totalValue = document.querySelector("#total");

function calcPrice() {
    let selectedValue = quantity.value;
    let total = price * selectedValue;

    totalValue.innerHTML = total.toFixed(2);
}

calcPrice();

quantity.addEventListener("change", calcPrice);




// Validation logic for the required fields
function validation() {

    let userFullName = document.querySelector('#userFullName');
    let userEmail = document.querySelector('#userEmail');
    let userCPF = document.querySelector('#userCPF');
    let cardCVV = document.querySelector('#credit-card-cvv');
    let cardFlag = document.querySelector('#credit-card-flag');
    let cardGoodThru = document.querySelector('#card-good-thru');

    if (userFullName.value == "" || userEmail.value == "" || userCPF.value == "") {

        alert("Informe seus dados completos!");
        return;
    }

    if (cardCVV.value == "" || cardFlag.value == "" || cardGoodThru.value == "") {

        alert("Preencha as informações do cartão de crédito")
        return;

    } else {
        alert("Pedido efetuado com sucesso!");
    }
}