console.log('JS OK')

//Recupero prev e next
const prevButton =document.getElementById('prev');
const nextButton =document.getElementById('next');

//Recupero tutte le imaggini
const images =document.getElementById('#carousel img');

//Preparo la gestione dell'index
let currentIndex=0;

//imposto la prima immagine come quella attiva
images[currentIndex].classList.add('active');

//Metto in ascolto il next
nextButton.addEventListener('click',function(){

    //Rimuovo la classe active dall' immagine corrispondente al currentIndex
    images[currentIndex].classList.remove('active');

    //Incremento il current index
    currentIndex++;
    
    //Aggiungo la classe active all'immagine corrispondente al nuovo currentindex
    images[currentIndex].classList.add('active');
})