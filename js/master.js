// let onLode = document.querySelector(".swiper-container");

// function lode() {
//     onLode.classList.add("none")
// }

// setTimeout(() => {
//     onLode.remove()
// }, 3000)


let searchbtn = document.querySelector(".searchbtn");
let closebtn = document.querySelector(".closebtn");
let searchBox = document.querySelector(".searchBox");
let overlay = document.querySelector(".overlay")
let icone = document.querySelector(".icone")
searchbtn.onclick = function() {
    searchBox.classList.add("active")
    closebtn.classList.add("active")
    searchbtn.classList.add("active")
    overlay.classList.add("active")
}

closebtn.onclick = function() {
    searchBox.classList.remove("active")
    closebtn.classList.remove("active")
    searchbtn.classList.remove("active")
    overlay.classList.remove("active")
}