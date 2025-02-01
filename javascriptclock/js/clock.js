

let fullName = prompt("Lütfen Adınızı Giriniz:")
let now = new Date();


let myName = document.querySelector('#myName')
myName.innerHTML = `${fullName}`


function updateClock() {
    let now = new Date();

    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = days[now.getDay()];

    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    let timeString = `${hours}:${minutes}:${seconds} - ${day}`;
    document.getElementById("myClock").innerText = timeString;
}

setInterval(updateClock, 1000); // Her saniyede bir güncelle
updateClock(); // Sayfa açıldığında hemen göster