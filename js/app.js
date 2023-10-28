"use strict";

let tab = document.querySelectorAll(".tab");
let text = document.querySelectorAll(".text");
let tabs = document.querySelector(".tabs")
let darkTheme = document.querySelector(".fa-solid")

window.onload = () => {
    TextHide()
    tab[0].classList.add("active")
    text[0].classList.remove("close")
}

function TextHide(){
    for (let i = 0; i < text.length; i ++) {
        tab[i].classList.remove("active");
        text[i].classList.add("close");
    }
}

tabs.onclick = (e) => {
    let target = e.target
    TextHide()
    for (let i = 0; i < tab.length; i++){
        if (tab[i] == target) {
            tab[i].classList.toggle("active")
            text[i].classList.toggle("close")
        }
    }
}




darkTheme.onclick = () => {
    document.body.classList.toggle("dark_theme")

    if(document.body.classList.contains("dark_theme")){
        darkTheme = classList.remove("fa-moon")
        darkTheme = classList.add("fa-sun")
    }
}