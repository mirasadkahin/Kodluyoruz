// Object Key - Value:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

let laptop1 = { 
    brand: "Apple",
    model: "MacBook Pro",
    "2kg": "2",
    // modal-Name : "MacBook Pro"
    modal_name: "MacBook Pro"
}

console.log(laptop1)
// Dogru Anahtar Bilgisi Olusturmak
console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["modal"])
console.log(laptop1["2kg"])

// Anahtar bilgisine yeni deger eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1)

//yeni Bilgi Eklemek
laptop1.version = "10.15.7"
console.log(laptop1)


//Anahtar Bilgilerine Ulasmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyİnfo => {
    console.log(keyİnfo)
    console.log(laptop1[keyİnfo])
});
// Deger Bilgilerine Ulasmak (values) -> Object.values(item)

console.log(
    Object.values(laptop1)
)


let values = Object.values(laptop1)

values.forEach(value => {
    console.log("value: ", value)
});




let setting = {
    password: 1234,
    userName: 'user1'
}