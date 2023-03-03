'use strict'

function Hamburger(size) {
    this.price = size.price
    this.callories = size.callories
}
Hamburger.prototype.addTopping = function(topping){
    this.price += topping.price
    this.callories += topping.callories
}
Hamburger.prototype.getPrice = function(){
    return this.price
}
Hamburger.prototype.getCallories = function(){
    return this.callories
}
Hamburger.SIZE_SMALL = {
    price: 50,
    callories: 20
}
Hamburger.SIZE_MEDIUM = {
    price: 75,
    callories: 30
}
Hamburger.SIZE_BIG = {
    price: 100,
    callories: 40
}
Hamburger.TOPPING_MAYO = {
    price: 20,
    callories: 42
}
Hamburger.TOPPING_CHEESE = {
    price: 10,
    callories: 20
}
Hamburger.TOPPING_POTATO = {
    price: 15,
    callories: 10
}
Hamburger.TOPPING_SEASONING = {
    price: 15,
    callories: 0
}
Hamburger.TOPPING_SALAD = {
    price: 20,
    callories: 5
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL)
console.log(hamburger)
hamburger.addTopping(Hamburger.TOPPING_MAYO)
console.log(hamburger)
hamburger.addTopping(Hamburger.TOPPING_POTATO)
console.log(hamburger)
hamburger.addTopping(Hamburger.TOPPING_POTATO)
console.log(hamburger)

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCallories());