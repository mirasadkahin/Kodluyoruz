//************************ Degisken Tanımlama Kurallari*******************


//## Degisken genel tanimlama kurallari:
//camelCase Kullanimi:

let fullname = "" // bu değil
let kodluyoruz_server_info = "" // bu da değil 
let fullName = ""
let kodluyoruzServerInfo = ""
let kodluyoruzSERverInfo = "" // bu da degil

// let firstName = "Miraç Sadık", lastName = "Şahin"
let firstName = "Miraç Sadık"
let lastName = "Şahin"
console.log(firstName, lastName)

//UPPER_CASE kullanımı
const password = "1234" //bu da değil
const PASSWORD = "1234"
const SERVER_PASSWORD = "1234"

//DEGİSKENLERDE turkce ve diğer dillerin kullanimi:

let türkçeBilgi = 'Türkçe Bilgi Yazdırılıyor..' // bu doğru kullanım değil :)
let info = 'Türkçe Bilgi Yazdırılıyor..'
console.log(info)

//anlamsız degisken adlari kullanmayin!
//https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered
// When I wrote this, only God and I understood what I was doing 
//Now, God only Knows
let x = 1; // bu doğru kullanim degil
//x, y, z, k, i, e, gibi alamsiz degisken isimlerini kullanmayin

//### Ek Bilgi:
// 1: boolean tanimlarken is/has kullanimi:
let isActive = true
let hasPassword = false

//2: Line Length < 80
dshafuhdsauıhfuısadhfuıshauıjkxzckjcxzbxhvauhdfusahcvzxvhxczjvbhxczjbbhjbapıdoa