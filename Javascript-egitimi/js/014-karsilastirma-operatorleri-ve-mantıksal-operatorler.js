// ********** Karsilastirma Operatorleri ve Mantıksal Operatorler *************
//https://www.w3schols.com/js/js_comparisons.asp

let price = "100"
let user = "gues"
// == Eşitse

console.log("== :", price == 1)
console.log("== :", price == 100)

// === Hem değeri hem de türü eşitse

console.log("=== :", price === 100)
console.log("=== :", price === "100 ")
// != Eşit değilse 
console.log(user != "guest")

// < küçükse
console.log("price < 100 ",price < 100)

// <= Küçük veya esitse
console.log("price <= 100 ",price <= 100) 

// > Büyükse
console.log("price > 100 ",price > 100)

// >= Büyük veya eşitse
console.log("price >= 100 ",price >= 100)

// && ve
price = 0 
console.log( price > 0 && user != "guest" )


// || veya 
console.log( price > 0 || user != "guest" )


// ! değil(tersi)
user = "guest"
price = "1"
console.log( price > 0 && !user == "guest" )