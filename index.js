// Write your solution in this file!
var customerName="bob"
function upperCaseCustomerName(){
    customerName = (customerName.toUpperCase())
}
var bestCustomer;
function setBestCustomer(){
  return (bestCustomer = 'not bob')
}
function overwriteBestCustomer(){
    return (bestCustomer = 'maybe bob')
}
const leastFavoriteCustomer="John"
function changeLeastFavoriteCustomer(){
     leastFavoriteCustomer = 'not John'
}