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

let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let tasgel = document.querySelector(".tasgel")
menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    sidebar.classList.toggle("active");
});


let textcard = document.querySelectorAll(".test-card");
let btnmu = document.querySelectorAll(".btn-play-mu");

textcard.forEach((ele, index) => {
    ele.addEventListener("mouseover", () => {
        btnmu[index].classList.toggle("active")
    })
    ele.addEventListener("mouseout", () => {
        btnmu.forEach((b) => {
            b.classList.remove("active")
        })
    })
})



let audio = document.getElementById('audio');
let btnmuplay = document.querySelectorAll(".btn-play-mu .fa-play");
let btnmupause = document.querySelectorAll(".btn-play-mu .fa-pause");
let barmusic = document.querySelector(".barmusic")
let count = 0;



function playPause(){
	if(count === 0){
        count = 1;
		audio.play();
        btnmu.forEach((ele, index) => {
            btnmu[index].classList.add("active-1")
        })
        btnmuplay.forEach((i,index) => {
            btnmuplay[index].classList.add("sh")
        })
        btnmupause.forEach((i,index) => {
            btnmupause[index].classList.remove("sh")
        })
        barmusic.classList.add("active")
	}else{
        count = 0;
		audio.pause();
        btnmu.forEach((ele, index) => {
            btnmu[index].classList.remove("active-1")
        })
        btnmuplay.forEach((i,index) => {
            btnmuplay[index].classList.remove("sh")
        })
        btnmupause.forEach((i,index) => {
            btnmupause[index].classList.add("sh")
        })
        barmusic.classList.remove("active")
	}
}

var x = window.matchMedia("(max-width: 767px)");

function x() {
    textcard.forEach((ele, index) => {
        ele.addEventListener("mouseover", () => {
            btnmu[index].classList.toggle("active")
        })
        ele.addEventListener("mouseout", () => {
            btnmu.forEach((b) => {
                b.classList.toggle("active")
            })
        })
    })
    console.log(`hello`)
}

