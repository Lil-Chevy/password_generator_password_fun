// Assignment code here
var question2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var question3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var question4 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var question5 = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '_', ']', '^','`', '{', '|', '}', '~'];
let allArrays = [question2, question3, question4, question5];
let allPossibleCharacters = [...question2,...question3,...question4,...question5];
let lowercaseEl = document.getElementById("lower-case");
let uppercaseEl = document.getElementById("upper-case");
let numericEl = document.getElementById("numeric");
let specialCharactersEl = document.getElementById("special-characters");
// Starting window alerts and prompts
    // number of Characters.
window.alert("Hello, welcome to the Password Generator! Please input the length of your password and check the checkboxes to customize your password!");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // number of characters.
  var windowPromptCharacters = window.prompt("How many characters would you like your password to contain?");
  window.localStorage.setItem ("total_characters", windowPromptCharacters);
  if (windowPromptCharacters >= 8 && windowPromptCharacters <= 128){
  } else if (windowPromptCharacters <= 7 || windowPromptCharacters >= 129) {
    window.alert("Please have your password contain 8 - 128 characters!");
    writePassword();
  }
};
writePassword();
function validateCheckbox (){
  let checkedValues = [];
  if (lowercaseEl.checked){
    checkedValues.push(0);
  }
  if (uppercaseEl.checked){
    checkedValues.push(1);
  }
  if (numericEl.checked){
    checkedValues.push(2);
  }
  if (specialCharactersEl.checked){
    checkedValues.push(3);
  }
  return checkedValues;
};
  function generateRandomCharacter(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generatePassword() {
    let checkedValues = validateCheckbox();
    let remainingArray = [];
    console.log(checkedValues);
    let newArray = [];
    for (i=0; i< checkedValues.length; i++){
      newArray.push(generateRandomCharacter(allArrays[checkedValues[i]]));
      remainingArray.push(...allArrays[checkedValues[i]]);
    }
    let remainingCharacters = window.localStorage.getItem("total_characters")-checkedValues.length;
    for(j=0;j<remainingCharacters; j++){
      newArray.push(generateRandomCharacter(remainingArray));
    }
    console.log(newArray);
    let displayString = newArray.join('');
    var passwordText = document.querySelector("#password");
    // let parsedArray = ...newArray
    passwordText.innerHTML = displayString;
  };


  console.log(window.localStorage.getItem("total_characters"));



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

