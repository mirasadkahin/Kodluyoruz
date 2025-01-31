// ************ let ve cons ile Degisken Tamimlama *************

// var ile degisken tanimlamak:
// var serverName = "kodluyoruz.org"
// console.log(serverName)


// let ile degiskeni bos tanimlamak
serverName = "https://kodluyoruz.org"
console.log(serverName)

//let ile degiskene bilgi atayarak tanimlamak:
let password = "1234";
console.log(password)

// degisken atamasi yapmadan once kullanmaya calıimak
/* HATALI KULLANIM
console.log(fullName)
let fullName = "Miraç Sadık Şahin"
*/

let fullName = "Miraç Sadık Şahin"

//let ile tanimlanan degiskenin icindeki bilgiyi degiştirmek:

fullName = "Lorem Ipsum Dolor"
console.log(fullName)

//birlestirme veya ekleme islemi

fullName + "Yeni EKlenen Bilgi"
console.log(fullName + " Test Bilgisi") // ekle ve goster ama degiskeni eklemedik

fullName = fullName + " Yeni bilgi"
fullName ="2: Bilgi" + fullName

fullName= "Sifirladik"
fullName += " ve Yeni Bilgi Eklendi"
console.log(fullName)

// const ile degiskeni bos tanmlamaya calısmak :( :
//const serverPassword; // sadece degisken tanımlandı ama içi boş

// const ile degisken tanimlamak 
const SERVER_PASSWORD = "gsduıgfaıus"
console.log(SERVER_PASSWORD)

// SERVER_PASSWORD = "1234"
// console.log(SERVER_PASSWORD)
  