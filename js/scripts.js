function listNum(integer) {
  var numbers = [];
  for ( var i = 2; i <= integer; i++ ) {
    numbers.push(i);
  }
  return numbers
}

function removeMultiple(array) {
  for (var n = 2; n <= array[array.length]; n++) {
    for(var i = 0; i <= array.length; i++) {
      if (n % array[i] == 0) {
        array.splice(i, 1)
        i -= 1
      }
    }
  }
  return array
}

function findPrimes(integer){
  var myArray = listNum(integer)
  var cleanArray = myArray
  for (var i = 2; i <= Math.ceil(integer / 2); i++) {
    cleanArray = removeNum(cleanArray, i)
  }
  return cleanArray;
}

function removeNum(array, integer) {
  var myArray = array;
  var lastNum = array[array.length]
  myArray.forEach(function(element, index, array) {
    if (element % integer === 0 && element !== integer) {
      myArray.splice(index, 1)
    }
  });
  return myArray
}

function formatString(array) {
  var string = array.join(", ")
  return string
}

$(document).ready(function() {
  $("form#primes").submit(function(event) {
    var integer = parseInt($("input#number").val());
    var array = findPrimes(integer);
    var string = formatString(array)
    $("p#results").text(string)
    event.preventDefault();
  })
})
