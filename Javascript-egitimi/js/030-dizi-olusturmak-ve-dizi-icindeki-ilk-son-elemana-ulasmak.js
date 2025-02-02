// array - dizilerle calismak

//aray olusturmak
let domain = "kodluyoruz"
let isActive = false
let items = [15,25,35, isActive, domain ]

console.log(items)

let emptyArray = [] // bos liste

// Array icerisindeki eleman/oge sayisini ogrenmek
console.log(
    items.length // array icindeki oge sayısı
)
// document.querySelector('#info').innerHTML = items.length

//Aray icindeki ilk elemanın cagrılması
console.log(items[0])

// array icindeki son elemanın cagrilmasi
console.log(items[items.length - 1])

// Aray icindeki ortadaki elemanın cagilmasi
console.log(
    "ortadaki :",
    items[Math.floor(items.length / 2)]
)



// degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi
console.log(
    typeof(items) // object olarak çıktı veriyor
)

console.log(
    Array.isArray(items)
)

// hangileri isAray -> true verir ?

console.log("[] : ", Array.isArray( [] ) )
console.log("1 :",  Array.isArray( 1 ) )
console.log("True :",  Array.isArray( true ) )