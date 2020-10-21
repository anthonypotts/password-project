// Link to HTML //
var generateBtn = document.querySelector("#generate");


// VARIABLES //
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numRandom = "1234567890";
var specialChar = "!@#$%^&*()-_=+`~<>,.;:/?[{]}";

var newPassword = ""
var compiledChar;
var password = {
  charLower: true,
  charUpper: true,
  numRandom: true,
  specialChar: true,
  reset: function() {
    this.charLower = true;
    this.charUpper = true;
    this.numRandom = true;
    this.specialChar = true;
  }
}


// ASSIGNMENT CODE //
function generatePassword() {
  password.reset();

  var pwdLength = window.prompt("How many characters would you like your password to contain? Please pick a number between 8 and 128.");
  
    // DETERMINE IF NUMBER IS BETWEEN 8-128 AND/OR EXISTS //
    if (!pwdLength) {
      window.alert("You need to enter a NUMBER and it must be between 8 and 128. Please try again.");
    }else if (pwdLength <8 || pwdLength > 128) {
      window.prompt("You need to enter a NUMBER and it must be between 8 and 128. Please try again.");
      generatePassword();

    // IF VALID NUMBER EXISTS, CONTINUE AND GATHER USER PREFERENCES //
    }else{
      password.charLower = confirm("Please select 'OK' if you would like 'lower-case letters' in your password");
      password.charUpper = confirm("Please select 'OK' if you would like 'UPPER-CASE LETTERS' in your password");
      password.numRandom = confirm("Please select 'OK' if you would like 'numbers' in your password");
      password.specialChar = confirm("Please select 'OK' if you would like 'special characters' in your passsord");
    };

    if(!password.charLower && !password.charUpper && !password.numRandom && !password.specialChar){
      window.alert("Please select at least one criteria")
      generatePassword();
    }

    if(password.charLower === true){
      compiledChar += charLower;
    }

    if(password.charUpper === true){
      compiledChar += charUpper;
    }

    if(password.numRandom === true){
      compiledChar += numRandom;
    }

    if(password.specialChar === true){
      compiledChar += specialChar;
    }

  for (i = 0; i < pwdLength; i++){
  var char = Math.floor(Math.random() * compiledChar.length);
  newPassword += pwdLength.charAt(char, char +1);
  return newPassword;
  }
    
  window.alert("Your new password is" + newPassword);
};

// WRITE PASSWORD IN  #password INPUT //
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

