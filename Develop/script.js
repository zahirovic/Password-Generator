// Assignment code here
var characters = "0123456789abcdegfhijklmnopqrstuvwxyz!@#$%^&*()~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordlength = 8-128; 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", function(

){alert(writePassword)
  ; });

