//OBTENIENDO LOS ELEMENTOS HTML

const outputText = document.querySelector("#outputMorse"); // OUTPUT
const inputText = document.querySelector("#inputMorse"); // INPUT

//FUNCION QUE CONVIERTE LAS LETRAS

const traductor = {
baseDatos: function(latin) {
        switch (latin) {
            case ' ': 
            case '  ':
            case '   ':
                outputText.innerHTML += ' / ';
                break;
            case 'A': 
            case 'Á':
                outputText.innerHTML += '.-';
                break;
            case 'B': 
                outputText.innerHTML += '-...';
                break;   
            case 'C': 
                outputText.innerHTML += '-.-.';
                break;  
            case 'D': 
                outputText.innerHTML += '-..';
                break;
            case 'E': 
            case 'É': 
                outputText.innerHTML += '.';
                break;     
            case 'F':
                outputText.innerHTML += '..-.';
                break;
            case 'G':
                outputText.innerHTML += '--.';
                break;
            case 'H':
                outputText.innerHTML += '....';
                break;
            case 'I':
            case 'Í': 
                outputText.innerHTML += '..';
                break;
            case 'J':
                outputText.innerHTML += '.---';
                break;
            case 'K':
                outputText.innerHTML += '-.-';
                break;
            case 'L':
                outputText.innerHTML += '.-..';
                break;
            case 'M':
                outputText.innerHTML += '--';
                break;
            case 'N':
                outputText.innerHTML += '-.';
                break;
            case 'Ñ':
                outputText.innerHTML += '--.--';
                break;
            case 'O': 
            case 'Ó':
                outputText.innerHTML += '---';
                break;
            case 'P': 
                outputText.innerHTML += '.--.';
                break;
            case 'Q':
                outputText.innerHTML += '--.-';
                break;
            case 'R':
                outputText.innerHTML += '.-.';
                break;
            case 'S':
                outputText.innerHTML += '...';
                break;
            case 'T':
                outputText.innerHTML += '-';
                break;
            case 'U':
            case 'Ú': 
                outputText.innerHTML += '..-';
                break;
            case 'V':
                outputText.innerHTML += '...-';
                break;
            case 'W':
                outputText.innerHTML += '.--';
                break;
            case 'X':
                outputText.innerHTML += '-..-';
                break;
            case 'Y':
                outputText.innerHTML += '-.--';
                break;
            case 'Z':
                outputText.innerHTML += '--..';
                 break;  
            case '1':
                outputText.innerHTML += '.----';
                 break;               
            case '2':  
                outputText.innerHTML += '..---';
                 break; 
            case '3':  
                outputText.innerHTML += '...--';
                 break; 
            case '4':  
                outputText.innerHTML += '....-';
                 break; 
            case '5':  
                outputText.innerHTML += '.....';
                 break; 
            case '6':  
                outputText.innerHTML += '-....';
                 break; 
            case '7':  
                outputText.innerHTML += '--...';
                 break; 
            case '8':  
                outputText.innerHTML += '---..';
                 break; 
            case '9':  
                outputText.innerHTML += '----.';
                break; 
            case '0':  
                outputText.innerHTML += '-----';
                break; 
            case ',':  
                outputText.innerHTML += '--..--';
                break; 
            case '.':  
                outputText.innerHTML += '.-.-.-';
                break; 
            case '?':  
                outputText.innerHTML += '..--..';
                break; 
            default:
                outputText.innerHTML += 'Null';
                break;
        }
    },
}

//EVENTOS
inputText.addEventListener('input', traducir)

//FUNCION QUE EJECUTA EL PROGRAMA
function traducir(event) {
    console.time("Cuanto tardo el codigo?")
    outputText.innerHTML = '';
    for (let letras of inputText.value) {
        letras = letras.toUpperCase();
        traductor.baseDatos(letras);
        outputText.innerHTML += ' ';
        console.log(letras + "=" + outputText.value);
        console.count("Numero de ciclos?")
    }
    console.timeEnd("Cuanto tardo el codigo?");
}


const saber = `Codigo Morse Translator`
console.log(saber.length);