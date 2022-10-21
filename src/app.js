import dataBase from './data/baseData.json' assert { type: "json" }
import { copyToClickBoard, removeAccents } from './modules/utils.js';


const morseToLatin = e => {

    latinInput.value = '';

    const charsMorse = e.target.value.split(" ")

    charsMorse.map(char => {
        for (const latin in dataBase) {
            const morseData = dataBase[latin];
            if (char === morseData) latinInput.value += latin
    }
    })
}

  

const latinToMorse = e => {

    morseInput.value = '';

    const characters = removeAccents(e.target.value.toUpperCase());
    const charsLatin = characters.split("")

    charsLatin.map(char => {
        if (dataBase[char]) morseInput.value += dataBase[char] + " "
    })
}


latinInput.addEventListener("input", latinToMorse);
morseInput.addEventListener("input", morseToLatin);
buttonCopyLatin.addEventListener("click", () => copyToClickBoard(latinInput.value));
buttonCopyMorse.addEventListener("click", () => copyToClickBoard(morseInput.value));