//  ************* Boolean Veri Turu ile Calıismak *************

// 0 ve 1' i Anlamak ->
let isActive = false // 0
isActive = true // 1
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)


Boolean("11") // true
Boolean("0") // ture
Boolean("") // false

userName = "user"
console.log("User Name:", Boolean(userName))


// 0, -0, null, false, NaN, undefined, ("") ->
Boolean(0) // false
Boolean(-0) // false
Boolean(-0.1) //true
Boolean(0 ===0)//true
// Not: karar yapiları kısmanda tekrar anlatilicak
Boolean(userName.length > 0) // true