function telephoneCheck(str) {
    let ch = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/
  
      return ch.test(str)
  }
  
  
  console.log(telephoneCheck("555-555-5555"));

  
/*
The way to solve this is using a regex that pass through the whole number.
*/