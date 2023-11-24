passPhrase = document.getElementById("passPhrase");
passWord = document.getElementById("passWord");

showPasswordBtn = document.getElementById("showPasswordBtn");
showPassphraseBtn = document.getElementById("showPassphraseBtn");

showPasswordBtn.addEventListener("click", function () {
  passPhrase.setAttribute("class", "hidden");
  passWord.setAttribute("class", "block");
  showPassphraseBtn.setAttribute("class", "py-4 w-full");
  showPasswordBtn.setAttribute(
    "class",
    "py-4 border-l-2 border-purple-300 w-full bg-purple-200"
  );
});

showPassphraseBtn.addEventListener("click", function () {
  passPhrase.setAttribute("class", "block");
  passWord.setAttribute("class", "hidden");
  showPassphraseBtn.setAttribute("class", "py-4 w-full bg-purple-200");
  showPasswordBtn.setAttribute(
    "class",
    "py-4 border-l-2 border-purple-200 w-full"
  );
});

// code for the password section button.
let pinclNum = document
  .getElementById("pinclNum")
  .addEventListener("change", () => {
    pinclNum = !pinclNum;
    generatePassword();
    console.log("num",pinclNum)
  });
  pinclNum = true;

let pinclChar = document
  .getElementById("pinclChar")
  .addEventListener("change", () => {
    pinclChar = !pinclChar;
    generatePassword();
    console.log("char",pinclChar)
  });
  pinclChar = true;

let pinclUpper = document
  .getElementById("pinclUpper")
  .addEventListener("change", () => {
    pinclUpper = !pinclUpper;
    generatePassword();
    console.log("upper",pinclUpper)
  });
  pinclUpper = true;

let lengthSlider = document.getElementById("lengthSlider");
let lengthSliderVal = lengthSlider.value;
let putPassword = document.getElementById("putPassword");
let charNumValue = document.getElementById("charNumValue");
let generatePW = document.getElementById("generatePW");

const generatePassword = () => {
  let generatedPassword = "";
  let passwordSet = "abcdefghijklmnopqrstuvwxyz";
  let passwordCharSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordCharSetSpecial = "!@#$%^&*+~=";
  if (pinclNum) {
    passwordSet += "0123456789";
  }
  if (pinclChar) {
    passwordSet += passwordCharSetSpecial ;
  }
  if (pinclUpper) {
    passwordSet +=  passwordCharSetUpper;
  }
  for (let i = 0; i < lengthSliderVal; i++) {
    generatedPassword += passwordSet.charAt(
      Math.floor(Math.random() * passwordSet.length)
    );
  }
  putPassword.innerText = generatedPassword;
};

lengthSlider.addEventListener("change", () => {
  lengthSliderVal = lengthSlider.value;
  charNumValue.innerText = lengthSliderVal;
  generatePassword();
});

generatePassword();
generatePW.addEventListener("click", generatePassword);


faqHeading = document.querySelectorAll(".faqHeading");
faqAnswer = document.querySelectorAll(".faqAnswer");

faqHeading.forEach((faqHeading) => {
  faqHeading.addEventListener("click", () => {
    faqHeading.nextElementSibling.classList.toggle("hidden");
  });
});