// The code below is responsible for the number of itens for the users choice in the quantity section

let elements = '';
for(let i = 1; i <= 99; i++) {
    elements += `<option value="${i}">${i}</option>`;
}

document.getElementById("item-quantity-selection").innerHTML = elements;



let itemPrice = 'R$ 69,90';

function calcTotalPrice() {
    let numberOfItems = elements;

    if(numberOfItems == 1) {
        let price = document.querySelector('#price-total').innerHTML = 'R$ 69,90';
    } else if(numberOfItems > 1) {
        let actualPrice = numberOfItems * itemPrice;
    }
}

calcTotalPrice();