// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
}

function getRandomItem(list){
  //return list[randomInt(0, list.length - 1)]
  return list[Math.floor(Math.random()*list.length - 1)]
}

// generatePassword function defined
function generatePassword() {
  var userInput = window.prompt("Please pick a password length between 8 and 128 characters")

  if (userInput < 8 || userInput > 128) {
    window.alert("Password length must be between 8 and 128.")
    return
  }

  var userNumbers = window.confirm('Do you want numbers in your password?')
  var userSymbols = window.confirm('Do you want symbols in your password?')
  var userUppercase = window.confirm('Do you want uppercase letters in your password?')
  var userLowercase = window.confirm('Do you want lowercase letters in your password?')

  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+"]
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var characterData = []

  if (userNumbers === true) {
    characterData.push(numbers)
  }
  if (userSymbols === true) {
    characterData.push(symbols)
  }
  if (userUppercase === true) {
    characterData.push(uppercase)
  }
  if (userLowercase === true) {
    characterData.push(lowercase)
  }
  if (characterData === 0){
    characterData.push(lowercase)
  }
console.log(characterData)
  var generatedPassword = ""

  for (var i = 0; i < userInput; i++) {
    var randomItem = getRandomItem(characterData)
    var randomChar = getRandomItem(randomItem)
    generatedPassword += randomChar
  }
console.log(generatedPassword)
  return generatedPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
