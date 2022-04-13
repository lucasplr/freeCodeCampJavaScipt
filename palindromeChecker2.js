function palindrome(str) {
    str = str.match(/[a-zA-Z0-9]/gi).join("")
    str = str.toLowerCase()
  
    let rev = str.split("").reverse().join("")
    if (rev === str.valueOf()){
      return true
    }else{
      return false
    }
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"));
  
/*
  In this version the regex was remade, instead of .filter, i used .match, and setted the characters that have to match. With this is easier to understand and is much more clean.

*/