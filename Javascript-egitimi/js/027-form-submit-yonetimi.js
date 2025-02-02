// FORM SUBMİT:

let forDOM = document.querySelector("#userForm")
forDOM.addEventListener('submit', formSubmit)

function formSubmit(event){
    event.preventDefault() //default islemi engelledik...
    console.log("islem gerçekleşti")
}