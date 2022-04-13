function convertToRoman(num) {
    let romanNumber = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],//another special character
        [10, "X"],
        [9, "IX"],//9, another special character
        [5, "V"],
        [4, "IV"],//4 is a especial character symbol in roman numeric
        [1, "I"]
]

    if (num === 0){
        return ""
    }
    for (var i = 0; i < romanNumber.length; i++) {
        if (num >= romanNumber[i][0]) {
          return romanNumber[i][1] + convertToRoman(num - romanNumber[i][0]);
        }
      }
   }
   
   console.log(convertToRoman(5));

/*
At first i needed help to figure out the logic to convert to roman numeral. With google i figured out that is possible by doing an array with the number related to the objects.
The logic is to do a loop in the objects and see if the number is greater or equal to a number with a symbol. If it is , the the code will return the symbol, and if the number is greater, the code will do a minus operation to catch the symbol below the number and add to the return.
At the first attempt, the array that i made was in ascending order, that later on i discover that was wrong, because the number always will be greater or equal to 1, causing the return always be a set of "I".
*/