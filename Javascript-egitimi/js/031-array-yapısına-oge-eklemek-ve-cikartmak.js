// Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi
// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let items = [10, 20, 30, 40, ]
console.log("items - ilk hali : ", items)

// Array: sona oge/eleman eklemek -> push
items.push(50)
console.log("50 : ", items)

//Array: basa oge eklemek -> unshift 
items.unshift(5)
console.log("5 : ", items)
//Array: sondaki ogeyi cikartmak -> pop
let lastItem = items.pop() // son elemanı lastItem icerisine ekledik
console.log("lastItem: ", lastItem, ", items: " ,items )

//Array: bastaki ogeyi cikartmak -> shift 
let firstItem = items.shift() // ilk elemanı firstItem icerisine ekledik
console.log("firstItem: ", firstItem, ", items: " ,items )

//Array icindeki bir ogenin bilgisinin degistirilmesi:
//son ogenin degistirilmesi
items[items.length - 1] = 1000;
console.log(items)

//ilk ogenin degistirilmesi:
items[0] = 5;
console.log(items)

