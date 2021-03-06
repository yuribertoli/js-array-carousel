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
    'Svezia Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Svizzera Lorem ipsum',
    'Gran Bretagna Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Germania Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Paradise Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
]

let immagini = "";
let thumbnails = "";

//Per ogni indice aggiungo il relativo contenuto
for (let i=0; i<items.length; i++) {

    immagini += `<div class="main-picture">

                    <img src="${items[i]}">
                    <div class="text">
                        <h2>${title[i]}</h2>
                        <p>${text[i]}</p>
                    </div>

                </div>`;

    thumbnails += `<div class="pictures">
                        <img src="${items[i]}">
                        <div class="overlay"></div>
                    </div>`;

}

//Inserisco i div creati in precendenza nel for
let immagineCorrente = document.querySelector(".main-image");
immagineCorrente.innerHTML = immagini;

let diapositivaCorrente = document.querySelector(".thumbnails");
diapositivaCorrente.innerHTML = thumbnails;

//Indico una variabile di partenza
let momento = 0;

//Inserisco nella variabile corrente la classe on
let immagineAttiva = document.getElementsByClassName("main-picture");
let overlay = document.getElementsByClassName("overlay");

immagineAttiva[momento].classList.add("on");
overlay[momento].classList.add("on");

//Cambio momento in base al click 
let arrowDown = document.getElementById("arrow-down");

arrowDown.addEventListener("click",

function () {

    if (momento < items.length - 1) {

        immagineAttiva[momento].classList.remove('on');
        overlay[momento].classList.remove('on');

        momento++; //vado alla slide seguente

        immagineAttiva[momento].classList.add('on');
        overlay[momento].classList.add('on');

    } else {

        immagineAttiva[momento].classList.remove('on');
        overlay[momento].classList.remove('on');

        momento = 0; //vai alla prima slide

        immagineAttiva[momento].classList.add('on');
        overlay[momento].classList.add('on');
    }

}

);



let arrowUp = document.getElementById("arrow-up");

arrowUp.addEventListener('click', 
function() {

    if (momento > 0) {

        immagineAttiva[momento].classList.remove('on');
        overlay[momento].classList.remove('on');

        momento--; //vado alla slide precedente

        immagineAttiva[momento].classList.add('on');
        overlay[momento].classList.add('on');

    } else {

        immagineAttiva[momento].classList.remove('on');
        overlay[momento].classList.remove('on');
        
        momento = immagineAttiva.length - 1;

        immagineAttiva[momento].classList.add('on');
        overlay[momento].classList.add('on');

    }
}
);


//Alternativa codice click

/* //Definisco la variabile click per l'addEventListener
let click = 0;

document.getElementById("arrow-down").addEventListener("click",

    function () {

        click = click + 1;
        
        if (click == items.length) {
            click = 0;
        }

        if (click == 0) {

            immagineAttiva[items.length - 1].classList.remove("on");
            overlay[items.length - 1].classList.remove("on");

        } else {

            immagineAttiva[click - 1].classList.remove("on");
            overlay[click - 1].classList.remove("on");

        }

        immagineAttiva[click].classList.add("on");
        overlay[click].classList.add("on");

    }

);

document.getElementById("arrow-up").addEventListener("click",

    function() {

        if (click == 0) {
            click = items.length;
        }

        click = click - 1;

        if (click == items.length - 1) {

            immagineAttiva[0].classList.remove("on");
            overlay[0].classList.remove("on");

        } else {

            immagineAttiva[click + 1].classList.remove("on");
            overlay[click + 1].classList.remove("on");

        }

        immagineAttiva[click].classList.add("on");
        overlay[click].classList.add("on");

    }

);  */

