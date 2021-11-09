// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let letters = "abcdefghijklmnopqrstuvwxyz".split([])
  function caesar(input, shift, encode = true) {
    if(!shift || !input || shift == 0|| shift < -25 || shift > 25){
      return false
    }
    if(encode){
      shift = shift * 1
    }else if (!encode){
      shift = shift * -1
    }
    let lowercaseInput = input.toLowerCase()
    let seperatedInput = lowercaseInput.split([])
    let cipher = seperatedInput.map((character)=> {
      let shiftedInput = letters.indexOf(character) + shift
      if (shiftedInput > 25){
        shiftedInput -= 26
      }
      if(shiftedInput < 0){
        shiftedInput += 26
      }if (character == " " || !letters.includes(character)){
        return character
      }
      character = letters[shiftedInput]
      return character
    })
    return cipher.join("")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
