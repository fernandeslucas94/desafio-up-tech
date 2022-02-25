// The code below is responsible for the number of itens for the users choice

let elements = '';
for(let i = 1; i <= 99; i++) {
    elements += `<option value="${i}">${i}</option>`;
}

document.getElementById("item-quantity-selection").innerHTML = elements;