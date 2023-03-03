'use strict'

function Hamburger(size) {
    this.toppings = [];
    this.price = size.price
    this.callories = size.callories
}
Hamburger.prototype.addTopping = function(topping){
    this.toppings.push(topping.name)
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
    name: 'mayo',
    price: 20,
    callories: 42
}
Hamburger.TOPPING_CHEESE = {
    name: 'cheese',
    price: 10,
    callories: 20
}
Hamburger.TOPPING_POTATO = {
    name: 'potato',
    price: 15,
    callories: 10
}
Hamburger.TOPPING_SEASONING = {
    name: 'seasoning',
    price: 15,
    callories: 0
}
Hamburger.TOPPING_SALAD = {
    name: 'salad',
    price: 20,
    callories: 5
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL)
hamburger.addTopping(Hamburger.TOPPING_MAYO)
hamburger.addTopping(Hamburger.TOPPING_POTATO)
hamburger.addTopping(Hamburger.TOPPING_POTATO)

console.log(`Price with ${hamburger.toppings.join(', ')}: ` + hamburger.getPrice());
console.log(`Callories with ${hamburger.toppings.join(', ')}: ` + hamburger.getCallories());