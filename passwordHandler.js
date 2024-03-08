// for top switch to switch to passphrase mode
const switchToPassphrase = document.getElementById("switchToPassphrase");
const passPhraseUI = document.getElementById("passPhraseUI");
const passWordUI = document.getElementById("passWordUI");
switchToPassphrase.addEventListener("click", function () {
  passPhraseUI.setAttribute("class", "block");
  passWordUI.setAttribute("class", "hidden");
  switchToPassphrase.setAttribute("class", "py-4 w-full bg-purple-200");
  switchToPassword.setAttribute(
    "class",
    "py-4 border-l-2 border-purple-200 w-full"
  );
});

// for copy functionality
let clipboard2 = new ClipboardJS("#copyPassword");

// preferences variables
let pinclNum = true;
let pinclChar = true;
let pinclUpper = true;
let lengthSliderVal = document.getElementById("lengthSlider").value;

const generatePassword = () => {
  let generatedPassword = "";
  let passwordSet = "abcdefghijklmnopqrstuvwxyz";
  let passwordCharSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordCharSetSpecial = "!@#$%^&*+~=";
  if (pinclNum) {
    passwordSet += "0123456789";
  }
  if (pinclChar) {
    passwordSet += passwordCharSetSpecial;
  }
  if (pinclUpper) {
    passwordSet += passwordCharSetUpper;
  }
  for (let i = 0; i < lengthSliderVal; i++) {
    generatedPassword += passwordSet.charAt(secureRandom(passwordSet.length));
  }
  const passwordBox = document.getElementById("passwordBox");
  passwordBox.innerText = generatedPassword;
};

// adding the click event on the button
const genPasswordBtn = document.getElementById("generatePassword");
genPasswordBtn.addEventListener("click", generatePassword);

// update UI on preference change
document.getElementById("lengthSlider").addEventListener("change", () => {
  lengthSliderVal = document.getElementById("lengthSlider").value;
  charNumValue.innerText = lengthSliderVal;
  generatePassword();
});

document.getElementById("pinclUpper").addEventListener("change", () => {
  pinclUpper = !pinclUpper;
  generatePassword();
  console.log("upper", pinclUpper);
});

document.getElementById("pinclChar").addEventListener("change", () => {
  pinclChar = !pinclChar;
  generatePassword();
  console.log("char", pinclChar);
});

document.getElementById("pinclNum").addEventListener("change", () => {
  pinclNum = !pinclNum;
  generatePassword();
  console.log("num", pinclNum);
});

// calling function on page load
generatePassword();
