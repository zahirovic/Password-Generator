// Assignment code here


// Get references to the #generate element
// added var characters and length
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!@#$%^&*()";
var allChars = numbers + upperChars + lowerChars + specialChars;
var passwordlength = 128 <= 8; 
var random_string = '';



  
// Write password to the #password input
function writePassword() {
  // prompt added for number of characters
  let passwordlength = prompt("Type in number of characters. Must be between 8 and 128");
// added uppercase characters confirm
  let upperChars = false
  if (confirm("Would you like uppercase characters?")){
    upperChars = true
  };
  // added lowercase characters confirm
  let lowerChars = false
  if (confirm("Would you like lowercase characters?")){
    lowerChars = true
  };
    // added numbers characters confirm
    let numbers = false
    if (confirm("Would you like numbers?")){
      numbers = true
    };
  // added special characters confirm
  let specialChars = false
  if (confirm("Would you like special characters?")){
    specialChars = true
  };
 
  function generatePassword (passwordlength, upperChars, lowerChars, numbers, specialChars){
    var length = passwordlength
    random_string 
     var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
   var charLength = chars.length;
   var result = '';
   for ( var i = 0; i < length; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
   }
   return result;
    }
  var password = generatePassword ()

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
// added alert
generateBtn.addEventListener("click", writePassword)
generateBtn.addEventListener("click", function(

  ){alert(writepassword) 
  });

