// ********* String Veri Turu İslemleri ************
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "halanyalcinkaya@gmail.com"
let firstName = "hakan"
let lastName = "YALCINKAYA"

//string karakter sayısı -> length
console.log( email.length)

// ilk karakteri bulmak -> [0]:
console.log(firstName[0])
console.log(firstName.charAt(1))

//buyuk harf / kucuk harf :
firstName = firstName.toUpperCase()
console.log(firstName)


firstName = firstName.toLowerCase()
console.log(firstName)

//string içinde istediğimiz bilgiyi aramak ve yerini bulmak -> search:

console.log(email.search("@"))
console.log(email[15])


email.search('olmayan') // -1

// belli bir yere kadar al --> slice : (domain bilgisi)
let DOMAIN = email.slice( email.search("@") + 1)
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.')) // sadece gmail kismini  aldik
)

// bilgiyi degistir -> replace :

email = email.replace('gmail.com', 'kodluyoruz.org') 
console.log(email)

// istediğiniz bilgi var mı ? -> includes : 
 email.includes('osahfosd') // false
 email.includes('@') // true

 //istediğim bilgiyle basladi mi ? bitti mi? -> startsWidth, endsWidth: 

 console.log(
    email.endsWith('kodluyoruz.org')
 )

 //ilk harflerini buyuk yapmak

 let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLocaleLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLocaleLowerCase()}`
 console.log(fullName)







 let url = "www.kodluyoruz.org";
let language = "Java";
 language = language.replace('Java' , 'JavaScript')
 console.log(language)