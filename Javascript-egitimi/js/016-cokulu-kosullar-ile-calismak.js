//********************* Coklu Kosullarla Calismak ******************

let userName = prompt("Kullanıcı Adınız:")
let age = prompt("Yasiniz:")
let info = document.querySelector("#info")

if (userName && age >= 18 ) {
    info.innerHTML = "Ehliyet alabilirsiniz"
}
else if (!userName) {
    info.innerHTML = "Kullanızı Adı Yok"
}
else if (!(age>=18)){
    info.innerHTML = "Yaş Bilginiz Yok veya 18 yaşından küçüksünüz"
}