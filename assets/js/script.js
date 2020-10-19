// Link to HTML //
var generateBtn = document.querySelector("#generate");

// VARIABLES //
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numRandom = "1234567890";
var specialChar = "!@#$%^&*()-_=+`~<>,.;:/?[{]}";

var newPassword = ""
var userChoices;
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
