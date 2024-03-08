// for top switch to switch to password mode
const switchToPassword = document.getElementById("switchToPassword");
const passPhraseUI = document.getElementById("passPhraseUI");
const passWordUI = document.getElementById("passWordUI");
switchToPassword.addEventListener("click", function () {
  passPhraseUI.setAttribute("class", "hidden");
  passWordUI.setAttribute("class", "block");
  switchToPassphrase.setAttribute("class", "py-4 w-full");
  switchToPassword.setAttribute(
    "class",
    "py-4 border-l-2 border-purple-300 w-full bg-purple-200"
  );
});

// for copy functionality
let clipboard = new ClipboardJS("#copyPassPhrase");

let length = 3; // number of words in passphrase
let inclNum = false; // include numbers in passphrase
let inclChar = false; // include special characters in passphrase
let inclUpper = true; // include uppercase letters in passphrase, default is true for more strength
let changeSep = false; // change separator from blank space to hyphen

function generatePassphrase() {
  let password = "";
  let tempWord = "";
  let numPlace = 0;
  let charPlace = 0;

  // include one number and one character in the passphrase
  inclNum ? (numPlace = secureRandom(length)) : "";
  inclChar ? (charPlace = secureRandom(length)) : "";
  while (numPlace === charPlace) {
    charPlace = secureRandom(length);
  }

  for (let i = 0; i < length; i++) {
    tempWord = "";
    // adding special character if toggle is on
    if (inclChar) {
      const chars = "!@#$%&*+<>?";
      const selectedChar = chars.charAt(secureRandom(chars.length));
      i == charPlace ? (tempWord += selectedChar) : "";
    }

    // adding a random word in the password
    let randomWord = wordsArray[secureRandom(wordsArray.length)];
    tempWord += randomWord;
    if (inclUpper) {
      const addUpperIndex = secureRandom(tempWord.length);
      tempWord =
        tempWord.slice(0, addUpperIndex) +
        tempWord.charAt(addUpperIndex).toUpperCase() +
        tempWord.slice(addUpperIndex + 1);
    }

    // adding a number to the password if toggled
    if (inclNum) {
      i == numPlace ? (tempWord += secureRandom(10)) : "";
    }

    // adding separator according to the preference
    if (changeSep && i != length - 1) {
      tempWord += "-";
    } else {
      tempWord += " ";
    }
    password += tempWord;
  }
  const passPhraseBox = document.getElementById("passPhraseBox");
  passPhraseBox.innerHTML = password;
}

// adding click event on button
const genPassPhraseBtn = document.getElementById("generatePassPhrase");
genPassPhraseBtn.addEventListener("click", () => {
  generatePassphrase();
});

// detect the preference change and update the password and UI accordingly
document.getElementById("three").addEventListener("click", () => {
  length = 3;
  generatePassphrase();
  document.getElementById("four").setAttribute("class", "px-4 py-1.5 border-l");
  document
    .getElementById("three")
    .setAttribute("class", "px-4 py-1.5 rounded-l-sm bg-purple-200");
  document
    .getElementById("five")
    .setAttribute("class", "px-4 py-1.5 border-l rounded-r-sm");
});

document.getElementById("four").addEventListener("click", () => {
  length = 4;
  generatePassphrase();
  document
    .getElementById("three")
    .setAttribute("class", "px-4 py-1.5 rounded-l-sm");
  document
    .getElementById("four")
    .setAttribute("class", "px-4 py-1.5 border-l bg-purple-200");
  document
    .getElementById("five")
    .setAttribute("class", "px-4 py-1.5 border-l rounded-r-sm");
});

document.getElementById("five").addEventListener("click", () => {
  length = 5;
  generatePassphrase();
  document
    .getElementById("three")
    .setAttribute("class", "px-4 py-1.5 rounded-l-sm");
  document.getElementById("four").setAttribute("class", "px-4 py-1.5 border-l");
  document
    .getElementById("five")
    .setAttribute("class", "px-4 py-1.5 border-l rounded-r-sm bg-purple-200");
});

document.getElementById("inclNum").addEventListener("change", () => {
  inclNum = !inclNum;
  generatePassphrase();
});

document.getElementById("inclChar").addEventListener("change", () => {
  inclChar = !inclChar;
  generatePassphrase();
});

document.getElementById("inclUpper").addEventListener("change", () => {
  inclUpper = !inclUpper;
  generatePassphrase();
});

document.getElementById("chngSep").addEventListener("change", () => {
  changeSep = !changeSep;
  generatePassphrase();
});

// calling the function on page load
generatePassphrase();
