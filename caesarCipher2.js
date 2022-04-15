function rot13(str) {
    let checker = 0
    let newA = []
    newA = str.split("")
    for (let i = 0; i < newA.length; i++){
      checker = newA[i].charCodeAt()
      if (checker > 64 && checker < 91){
        if (checker > 77){
          checker = checker - 13
        }else{
          checker = checker + 13
        }
        newA.splice(i, 1, String.fromCharCode(checker))
      }
    }
    return newA.join('')
      
  }
    console.log(rot13("SERR CVMMN!"));
  
  
/*
Looking for a most functional and clean way to solve i finded this, instead of transform the character to Code in a array, in this way the character is converted inside the loop, and after the changes, the loop return the character to the array.
*/