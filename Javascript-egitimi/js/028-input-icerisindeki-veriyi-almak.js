 // INPUT icindeki değeri(value) almak 

 let forDOM = document.querySelector("#userForm")
forDOM.addEventListener('submit', formSubmit)

function formSubmit(event){
    event.preventDefault() //default islemi engelledik...
    console.log("islem gerçekleşti")
    
    let scoreInputDOM = document.querySelector("#score")
    console.log(scoreInputDOM.value)
    localStorage.setItem('score', scoreInputDOM.value)
}