const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
]

let immagini = "";

//Per ogni indice aggiungo il relativo contenuto
for (let i=0; i<items.length; i++) {

    immagini += `<div class="main-picture">

                    <img src="${items[i]}">
                    <div class="text">
                        <h2>${title[i]}</h2>
                        <p>${text[i]}</p>
                    </div>

                </div>`;

}

//Inserisco i div creati in precendenza nel container
let immagineCorrente = document.querySelector(".main-image");
immagineCorrente.innerHTML = immagini;

//Indico una variabile di partenza
let momento = 0;

//Inserisco nella variabile corrente la classe on
let immagineAttiva = document.getElementsByClassName("main-picture");
let overlay = document.getElementsByClassName("overlay");

immagineAttiva[momento].classList.add("on");
overlay[momento].classList.add("on");

//Cambio momento in base al click 
const arrowUp = document.getElementById("arrow-up");

arrowUp.addEventListener("click",

    function() {

        immagineAttiva[momento].classList.remove("on");
        immagineAttiva[momento + 1].classList.add("on");

    }

)
