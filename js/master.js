// let onLode = document.querySelector(".swiper-container");

// function lode() {
//     onLode.classList.add("none")
// }

// setTimeout(() => {
//     onLode.remove()
// }, 3000)

let aheader = document.querySelectorAll(".aheader");

aheader.forEach(function (ele) {
    ele.onclick = function () {
        aheader.forEach(function (ele) {
        ele.classList.remove("active")
        });

        this.classList.add("active");
    };
});


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

let liheaderserSearchbtn = document.querySelector(".liheader-ser .searchbtnser")
let liheaderser = document.querySelector(".liheader-ser ")

window.onscroll = () => {
    if (scrollY >= 100) {
        liheaderserSearchbtn.classList.add("active")
        liheaderser.classList.add("active")
    } else {
        liheaderserSearchbtn.classList.remove("active")
        liheaderser.classList.remove("active")
    }
    let searchbtn = document.querySelector(".searchbtnser");
    let closebtn = document.querySelector(".closebtn");
    let searchBox = document.querySelector(".searchBox");
    searchbtn.onclick = function() {
        searchBox.classList.add("active")
        closebtn.classList.add("active")
        searchbtn.classList.add("active")
        overlay.classList.add("active")
    }
    closebtn.onclick = function() {
        searchBox.classList.remove("active")
        closebtn.classList.remove("active")
        overlay.classList.remove("active")
    }
    
}