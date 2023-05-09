
// costruisco una griglia con square numerati e cliccabili
//prendo un container
const container = document.getElementById("grid");

//prendo il livello
const level = parseInt(document.getElementById("level").value);
console.log(level);
//prendo il bottone

const play = document.getElementById("play");

//popolo array di numeri

const easy = arrayNumeri(1, 100);
console.log(easy);
const normal = arrayNumeri(1, 81);
console.log(normal);
const hard = arrayNumeri(1, 49);
console.log(hard);
// console.log(numeriArray);

//evento click
play.addEventListener(
    "click",
    function(){
        if (level === 1){
            generaGrigliaConLivello(easy);
            //aggiungo la classe difficolta
            const quadrati = document.querySelectorAll("div.square");
            for (let i = 0; i < quadrati.length; i++) {
                quadrati[i].classList.add("easy");
            }
        }else if (level === 2) {
            generaGrigliaConLivello(normal);
            //aggiungo la classe difficolta
            const quadrati = document.querySelectorAll("div.square");
            for (let i = 0; i < quadrati.length; i++) {
                quadrati[i].classList.add("normal");
            }
        } else if (level === 3) {
            generaGrigliaConLivello(hard);
            //aggiungo la classe difficolta
            const quadrati = document.querySelectorAll("div.square");
            for (let i = 0; i < quadrati.length; i++) {
                quadrati[i].classList.add("hard");
            }       
        }
    }
)
    



//funzioni
// creare un elemento e assegnargli una classe
function createElemento(tagType, classToAdd) {
    const newElement = document.createElement(tagType);
    newElement.classList.add(classToAdd);
    return newElement;
}
//creo un array ordinato con inizio e fine
function arrayNumeri(numIniziale, numFinale){
    const arr = [];
    for (let i = numIniziale; i <= numFinale; i++){
        arr.push(i);
    }
    return arr;    
}
//finzione che genera la griglia a seconda del livello
function generaGrigliaConLivello(livelloDifficolta) {
    //creo il contenitore
    const containerGrid = createElemento("div", "container-grid");
    //creo la griglia
  
    for (let i = 0; i < livelloDifficolta.length; i++) {
        //creo il quadrato
        const square = createElemento("div", "square");

        //metto i numeri in uno span
        //crea span
        const numero = createElemento("span", "number");
        //metto il numero
        numero.append(livelloDifficolta[i]);
        //metto span nel square
        square.append(numero);
        
        //al click lo square si colora
        square.addEventListener(
            'click',
            function () {
                if (this.classList.contains('selected')) {
                    this.classList.remove('selected');
                    console.log(`Hai DESELEZIONATO il numero ${livelloDifficolta[i]}`);
                }else{
                    this.classList.add('selected');
                    console.log(`Hai SELEZIONATO il numero ${livelloDifficolta[i]}`);
                }
                
            }
        )
            
            //metto square nel container
            containerGrid.append(square);
            //metto il container nel container della pagina
            container.append(containerGrid);
    }
}












