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

//Inserisco nella variabile la classe on
let immagineAttiva = document.getElementsByClassName("main-picture");
immagineAttiva[0].classList.add("on");