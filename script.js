// DOM Elements
const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTip = document.getElementById('custom-tip');
const peopleInput = document.getElementById('people');
const tipAmount = document.getElementById('tip-amount');
const totalAmount = document.getElementById('total-amount');
const resetBtn = document.getElementById('reset-btn');

let tipPercentage = 0;

// Event Listeners
billInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);
customTip.addEventListener('input', handleCustomTip);
resetBtn.addEventListener('click', resetCalculator);

tipButtons.forEach(button => {
  button.addEventListener('click', handleTipButtonClick);
});

// Functions
function handleTipButtonClick(e) {
  tipButtons.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');
  tipPercentage = parseInt(e.target.dataset.percent);
  customTip.value = '';
  calculateTip();
}

function handleCustomTip() {
  tipButtons.forEach(btn => btn.classList.remove('active'));
  tipPercentage = parseFloat(customTip.value) || 0;
  calculateTip();
}

function calculateTip() {
  const bill = parseFloat(billInput.value) || 0;
  const people = parseInt(peopleInput.value) || 1;

  const tip = (bill * tipPercentage) / 100;
  const total = bill + tip;
  const tipPerPerson = tip / people;
  const totalPerPerson = total / people;

  tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalAmount.textContent = `$${totalPerPerson.toFixed(2)}`;
}

function resetCalculator() {
  billInput.value = '';
  tipButtons.forEach(btn => btn.classList.remove('active'));
  customTip.value = '';
  peopleInput.value = '1';
  tipAmount.textContent = '$0.00';
  totalAmount.textContent = '$0.00';
  tipPercentage = 0;
}