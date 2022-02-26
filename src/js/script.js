// The code below is responsible for the number of itens for the users choice in the quantity section
let elements = '';
for (let i = 1; i <= 99; i++) {
    elements += `<option value="${i}">${i}</option>`;
}

document.getElementById("item-quantity-selection").innerHTML = elements;




// Here we are making the calculation for knows the price considering the number of items wich are being bougth
function calcTotalPrice() {
    let itemPrice = document.querySelector('#price-total').value;
    let numberOfItems = document.querySelector('#item-quantity-selection').value;

    if (numberOfItems > 1) {
        return itemPrice * 1;
    }
}

calcTotalPrice();




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