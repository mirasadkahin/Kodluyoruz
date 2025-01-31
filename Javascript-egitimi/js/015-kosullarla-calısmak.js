// *************** Kosullarla Calıismak *************
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else


let userName = prompt("Kullanıcı Adinizi Giriniz:")
// eger kullanici bilgisi varsa ekrana ismini yazdir
// eger (userName.length>0) {console.log(userName)} degilse{console.log("bilgi yok")}
// if (userName.length>0) {console.log(userName)} else{console.log("bilgi yok")}
 if (userName.length > 0 ) {
    console.log(`Kullanıcı Bilginiz ${userName}`)
 }
 else  {
    console.log("Bilgi Yok") 
 }

