// JavaScript Document
var fotoFilm

fotoFilm = document.querySelector(".nav li:nth-of-type(1) img");

fotoFilm.addEventListener("click", veranderMezelf);

function veranderMezelf(){
    let achtergrond = document.querySelector("main");
    achtergrond.classList.toggle("aangepaste");
}

var fotoMenu

fotoMenu = document.querySelector(".nav li:nth-of-type(2) img");

fotoMenu.addEventListener("click", veranderNaarMenu);

function veranderNaarMenu(){
    let achtergrond = document.querySelector("main");
    achtergrond.classList.toggle("menuAchtergrond");
}

