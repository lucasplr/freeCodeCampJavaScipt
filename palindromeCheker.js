function palindrome(str) {
    str = str.replace(/\s|_|,|\.|\/|\-|\)|\(/gi, "")
             .toLowerCase()
    let r = str.split("").reverse().join("")
    if (r === str.valueOf()){
      return true
    }else{
      return false
    }
  }
  
  console.log(palindrome("My age is 0, 0 si ega ym."));
  
/*
  First attempt.
  Used a split to reverse the phrase and see if it is equal to the original, if it's true, the phrase is a palindrome.


  In the first attempt the regex was made to achieve the challenge, but is no much organized.

  
*/