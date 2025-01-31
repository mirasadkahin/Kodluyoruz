// *************** prompt ile Kullanicidan bilgi almak ********
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt 

let fullName = prompt("Lütfen Adinizi Giriniz:")

let greeting = document.querySelector("#greeting")
greeting.innerHTML = `${greeting.innerHTML} <small style = "color:red">${fullName}</small>`