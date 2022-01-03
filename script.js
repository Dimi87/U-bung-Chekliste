const btn = document.querySelector("button")
btn.addEventListener("click", function() {
   
    const ul = document.querySelector("ul")
    const newLi = document.createElement("li")
    const liTex = document.createTextNode("quattro")
    newLi.appendChild(liTex)
    ul.appendChild(newLi)
})


const btnDelete = document.querySelector("button:nth-child(2)")
btnDelete.addEventListener("click", function() {
   
    const ul = document.querySelector("ul")
    ul.innerText = ""
})












//btn.addEventListener("click", function(e) {
    //console.log("Der Button wurde geklickt!")
    //console.log(e.target)
//});


//const main = document.querySelector("button")
//main.addEventListener("click", function() {
    //console.log("Das Main wurde geklickt!")
//});