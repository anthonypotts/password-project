// Link to HTML //
var generateBtn = document.querySelector("#generate");

// VARIABLES //
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numRandom = "1234567890";
var specialChar = "!@#$%^&*()-_=+`~<>,.;:/?[{]}";

var newPassword = "";
var compiledChar;
var password = {
  charLowers: true,
  charUppers: true,
  numRandoms: true,
  specialChars: true,
  reset: function() {
    this.charLowers = true;
    this.charUppers = true;
    this.numRandoms = true;
    this.specialChars = true;
  }
}

// ASSIGNMENT CODE //
function generatePassword() {
  password.reset();

  var pwdLength = parseInt(prompt("How many characters would you like your password to contain? Please pick a number between 8 and 128."));
    // DETERMINE IF NUMBER IS BETWEEN 8-128 AND/OR EXISTS //
    debugger;
    if (!pwdLength) {
      window.alert("You need to enter a NUMBER and it must be between 8 and 128. Please try again.");
    }else if (pwdLength <8 || pwdLength > 128) {
      window.prompt("You need to enter a NUMBER and it must be between 8 and 128. Please try again.");
      generatePassword();

    // IF VALID NUMBER EXISTS, CONTINUE AND GATHER USER PREFERENCES //
    }else{
      password.charLowers = confirm("Please select 'OK' if you would like 'lower-case letters' in your password");
      password.charUppers = confirm("Please select 'OK' if you would like 'UPPER-CASE LETTERS' in your password");
      password.numRandoms = confirm("Please select 'OK' if you would like 'numbers' in your password");
      password.specialChars = confirm("Please select 'OK' if you would like 'special characters' in your passsord");
    };

    if(!password.charLowers && !password.charUppers && !password.numRandoms && !password.specialChars){
      window.alert("Please select at least one criteria")
      generatePassword();
    }

    if(password.charLowers === true){
      compiledChar += charLower;
    }

    if(password.charUppers === true){
      compiledChar += charUpper;
    }

    if(password.numRandoms === true){
      compiledChar += numRandom;
    }

    if(password.specialChars === true){
      compiledChar += specialChar;
    }

  for (i = 0; i < pwdLength; i++){
  var char = Math.floor(Math.random() * compiledChar.length);
  newPassword += compiledChar.charAt(char, char +1);
  }
  return newPassword;
};


// WRITE PASSWORD IN  #password INPUT //
function writePassword() {
  let newPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
