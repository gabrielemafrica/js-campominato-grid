
// costruisco una griglia con square numerati e cliccabili
//prendo un container
const container = document.getElementById("container");
//prendo il bottone

const play = document.getElementById("play");

//popolo array di numeri

const numeriArray = arrayNumeri(1, 100);
// console.log(numeriArray);

//evento click

play.addEventListener(
    "click",

    function () {
    //creo il contenitore
    const containerGrid = createElemento("div", "container-grid");
    //creo la griglia
    for (let i = 0; i < numeriArray.length - 1; i++) {
        //creo il quadrato
        const square = createElemento("div", "square");
        //metto i numeri in uno span
        //crea span
        const numero = createElemento("span", "number");
        //metto il numero
        numero.append(numeriArray[i]);
        //metto span nel square
        square.append(numero);

        //al click lo square si colora
        square.addEventListener(
            'click',
            function () {
                if (this.classList.contains('selected')) {
                    this.classList.remove('selected');
                    console.log(`Hai DESELEZIONATO il numero ${numeriArray[i]}`);
                }else{
                    this.classList.add('selected');
                    console.log(`Hai SELEZIONATO il numero ${numeriArray[i]}`);
                }
                
            }
        )

        //metto square nel container
        containerGrid.append(square);
        //metto il container nel container della pagina
        container.append(containerGrid);
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
    for (let i = numIniziale; i <= numFinale + 1; i++){
        arr.push(i);
    }
    return arr;    
}












