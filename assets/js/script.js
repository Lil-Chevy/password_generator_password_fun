// Assignment code here
var question2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var question3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var question4 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var question5 = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '_', ']', '^','`', '{', '|', '}', '~'];

// Starting window alerts and prompts
    // number of Characters.
window.alert("Hello, welcome to the Password Generator! Please click the 'Generate Password' button after answering the following questions to customize your password.");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // number of characters.
  var windowPromptCharacters = window.prompt("How many characters would you like your password to contain?");
  window.localStorage.setItem ("Total Number of Characters", windowPromptCharacters);
  if (windowPromptCharacters >= 8 && windowPromptCharacters <= 128){
  } else if (windowPromptCharacters <= 7 || windowPromptCharacters >= 129) {
    window.alert("Please have your password contain 8 - 128 characters!");
    writePassword();
  };

  // case sensitive password?
  var caseSensitive = window.prompt("would you like for your password to be case sensitive? this would include uppercase fonts in your password", "yes or no");
  window.localStorage.setItem("Case Sensitive", caseSensitive);
  // will it include numbers?
  var numerical = window.prompt("Would you like for your password to contain numbers?" , "yes or no");
  window.localStorage.setItem("numerical Data", numerical);
  // special characters.
  var specialCharacters = window.prompt("Would you like for your password to contain special characters? (Yes/No)", "yes or no");
  window.localStorage.setItem("Special Characters", specialCharacters);
  // changing to lowercase.

  window.localStorage.getItem(localStorage);
  console.log(JSON.stringify(localStorage));


  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

