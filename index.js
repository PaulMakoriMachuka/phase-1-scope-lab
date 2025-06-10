// 1) Declare global variable
var customerName = 'bob';

// 2) Modifies customerName to uppercase
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3) Set best customer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Implicitly creates a global variable
}

// 4) Overwrite best customer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5) Attempt to reassign a const (will throw if you try to reassign)
const leastFavoriteCustomer = 'someone';

// Function that tries to reassign a const (should fail)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will throw an error
}

module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
};

