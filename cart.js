function update(product, price, isIncreasing) {
  const input = document.getElementById(product + '-amount');
  let inputAmount = parseInt(input.value);
  if (isIncreasing) {
    input.value = inputAmount + 1;
  }
  else if (isIncreasing == false && input.value > 0) {
    input.value = inputAmount - 1;
  }
  inputAmount = input.value;
  const productTotal = document.getElementById(product + '-total');
  productTotal.innerText = inputAmount * price;
  updateTotal();
}
function updateTotal() {
  const phoneAmount = parseInt(document.getElementById('phone-amount').value);
  const caseAmount = parseInt(document.getElementById('case-amount').value);
  const phoneTotal = phoneAmount * 1219;
  const caseTotal = caseAmount * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal * 0.1;
  const taxAmount = parseFloat(tax.toFixed(2));
  const totalAmount = subTotal + taxAmount;
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-amount').innerText = taxAmount;
  document.getElementById('total-amount').innerText = totalAmount;
}
document.getElementById('phone-plus').addEventListener('click', function () {
  update('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
  update('phone', 1219, false);
})
document.getElementById('case-plus').addEventListener('click', function () {
  update('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
  update('case', 59, false);
})