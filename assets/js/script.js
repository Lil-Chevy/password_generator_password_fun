// Assignment code here



// Starting window alert
window.alert("Hello, welcome to the Password Generator! Please click the 'Generate Password' button, and answer the following questions to generate your password.");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  var windowPromptCharacters = window.prompt("How Many characters would you like your password to contain?");
  var caseSensitive = window.prompt("would you like for your password to be case sensitive? this would include uppercase fonts in your password", "yes or no");
  var numerical = window.prompt("Would you like for your password to contain numbers?" , "yes or no");
  var specialCharacters = window.prompt("Would you like for your password to contain special characters? (Yes/No)", "yes or no");
  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
