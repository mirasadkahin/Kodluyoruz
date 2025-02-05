//fetch api ile calismak
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


//json dosyadan veri çekmek:
fetch("data/settings.json").then(
    Response => {
        return Response.json()
  }
) .then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.username)
}) 



let userListDOM = document.querySelector("#userList")
// API uzerinden veri çektik
fetch("https://jsonplaceholder.typicode.com/posts").then(
     response => response.json()
    ).then(responseJson => {
        responseJson.forEach(item => {
            let liDOM = document.createElement("li")
            liDOM.innerHTML = item.title
            userListDOM.appendChild(liDOM)
        });
    })