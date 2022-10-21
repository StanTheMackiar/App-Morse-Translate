
const outputText = document.querySelector("#outputMorse"); 
const inputText = document.querySelector("#inputMorse"); 

const dataBase = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  Ñ: "--.--",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ",": "--..--",
  ".": ".-.-.-",
  "?": "..--..",
  " ": " / "
};


const translate = ({target}) => {
    outputText.textContent = '';

    const characters = target.value.toUpperCase();
    const charArray = characters.split("")

    charArray.map(char => {
        dataBase[char] 
            ? outputText.textContent += dataBase[char] + " "
            : outputText.textContent += ' ? '
    })
}

  

inputText.addEventListener("input", (e) => translate(e))
