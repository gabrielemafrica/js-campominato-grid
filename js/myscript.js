
// costruisco una griglia con square numerati e cliccabili
//prendo un container
const container = document.getElementById("grid");


//prendo il bottone

const play = document.getElementById("play");

//evento click
play.addEventListener(
    "click",
    function(){

        //pulisco la pagina
        container.innerHTML = "";

        //prendo il livello
        const level = parseInt(document.getElementById("level").value);
        console.log("livello di gioco:" ,level);
        //variabile numero celle e difficoltá
        let numeroCelle;
        let levelClass;
        //cambio celle in base al livello
        if (level === 1) {
            numeroCelle = 100;
            levelClass = "easy";
        } else if (level === 2){
            numeroCelle = 81;
            levelClass = "normal";
        } else if (level === 3){
            numeroCelle = 49;
            levelClass = "hard";
        }
        for (let i = 1; i <= numeroCelle; i++) {
            
            //creo il quadrato
            const square = createElemento("div", "square");

            //metto i numeri nel quadrato
            square.innerHTML = i;

            //assegno le classi
            square.classList.add(levelClass);

            //al click lo square si colora
            square.addEventListener(
                'click',
                function () {
                    if (this.classList.contains('selected')) {
                        this.classList.remove('selected');
                        console.log(`Hai DESELEZIONATO il numero ${i}`);
                    }else{
                        this.classList.add('selected');
                        console.log(`Hai SELEZIONATO il numero ${i}`);
                    }
                    
                }
            )
            //metto square nel container
            container.append(square);
            //assegno classe al container
            container.classList.add("container-grid");
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











