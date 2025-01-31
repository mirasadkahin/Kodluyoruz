// ************** ternary operator ile short if kullanimi ******************

// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulanuamadi yaz

let userName = prompt("Kullanici Adinizi Yazin")
let info = document.querySelector("#info")

// ternary kullanimi:
// kosul ? dogruysa : yanlıssa
// userName.length > 0 ? userName : "Kullanici Bilginiz Bulunamad :(
info.innerHTML = `${userName.length > 0 ? userName : "Kullanici Bilginiz Bulunamad :("}`