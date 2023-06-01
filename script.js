console.log('JS OK')

//Recupero prev e next
const prevButton =document.getElementById('prev');
const nextButton =document.getElementById('next');

//Recupero la gallery
const gallery=document.querySelector('.gallery');

//Prepariamo le immagini
const sources=['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp']

let imageElements='';

//Per ogni source creo un tag img
for(let i=0; i< sources.length; i++){
    imageElements += `<img src="${sources[i]}" >`;

//Inserisco le immagini nel DOM
gallery.innerHTML = imageElements;

}
//Recupero tutte le imaggini
const images =document.querySelectorAll('#carousel img');

//Preparo la gestione dell'index
let currentIndex=0;

//imposto la prima immagine come quella attiva
images[currentIndex].classList.add('active');

//Metto in ascolto il next
nextButton.addEventListener('click',function(){

    //! Controllo
    if(currentIndex === images.length -1){
        //Rimuovo la classe active dall' immagine corrispondente al currentIndex
        images[currentIndex].classList.remove('active');
        currentIndex=0
    };
        //Rimuovo la classe active dall' immagine corrispondente al currentIndex
        images[currentIndex].classList.remove('active');
    
        //Incremento il current index
        currentIndex++;
        
        //Aggiungo la classe active all'immagine corrispondente al nuovo currentindex
        images[currentIndex].classList.add('active');
})

//Metto in ascolto il prev
prevButton.addEventListener('click',function(){

    //!Controllo
    if(!currentIndex)return;

    //Rimuovo la classe active dall'immagine corrispondente al currentIndex
    images[currentIndex].classList.remove('active');

    //Decremento il current index
    currentIndex--;

    //Aggiungo la classe active all'immagine corrispondete al nuovo currentindex
    images[currentIndex].classList.add('active');
})