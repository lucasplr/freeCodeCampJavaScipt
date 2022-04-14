function rot13(str) {
    let newA = [...str]
    let newA2 = []
    let newA3 = []
    let newA4 = ""
    for (let i = 0; i < newA.length; i++){
      if (newA[i].match(/\w/g)){
      newA2.push(newA[i].charCodeAt(0))
      }else{
        newA2.push(newA[i])
      }
    }
    for (let i = 0; i < newA2.length; i++){
      if (newA2[i] + 13 > 90){
        newA3.push((newA2[i]+ 13 - 90) + 64)
      }else{
        newA3.push(newA2[i] + 13)
      }
    }
    for (let i = 0; i < newA3.length; i++){
          if (newA[i].match(/\w/g)){
      newA4 += (String.fromCharCode(newA3[i]))
          }else{
            newA4 += newA2[i]
          }
    }
    return newA4.replace(/(-)/g, " ")  
      
  }
    console.log(rot13("SERR CVMMN!"));
  
    /*
    I have tried a bunch of methods to solve this challenge, but the way i found that passed the test was this. This is not a smart way to solve, but, was the way that a figured out without have to search the answer.
    In sequence i will do a research to find a way to resolve this in a cleaner and functional way.
    */