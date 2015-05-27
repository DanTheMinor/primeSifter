function listNum(integer) {
  var numbers = [];
  for ( var i = 2; i <= integer; i++ ) {
    numbers.push(i);
  }
  return numbers
}

function findPrimes(integer){
  var myArray = listNum(integer)
  var cleanArray = removeNum(myArray, 2)
  for (var i = 3; i <= Math.ceil(integer / 2); i += 2) {
    cleanArray = removeNum(cleanArray, i)
  }
  return cleanArray;
}

function removeNum(array, integer) {
  var lastNum = array[array.length]
  array.forEach(function(element, index, array) {
    if (element % integer === 0 && element !== integer) {
      array.splice(index, 1)
    }
  });
  return array
}

function findPrimesFast(integer){
  var myArray = listNum(integer)
  var cleanArray = removeNumFast(myArray, 2)
  for (var i = 3; i <= Math.ceil(Math.sqrt(integer)); i += 2) {
    removeNum(cleanArray, i);
  }
  return cleanArray;
}

function removeNumFast(array, integer) {
  var lastNum = array[array.length]
  array.forEach(function(element, index, array) {
    if (element % integer === 0 && element !== integer) {
      array.splice(index, 1)
    }
  });
  return array
}


function formatString(array) {
  var string = array.join(", ")
  return string
}
// 
// function buildMap(integer) {
//   var array = [];
//   for (var i = 0; i <= integer; i++) {
//     array.push(0);
//   }
//   return array;
// }
//
// function mapArray(array, integer) {
//   var lastNum = array[array.length];
//   var  mapArray = buildMap(array.length);
//   debugger
//   array.forEach(function(element, index, array) {
//     if (element % integer === 0 && element !== integer) {
//       //array.splice(index, 1)
//       mapArray[index] = 1;
//     }
//   });
//   return mapArray
// }
//
// function doMap(array) {
//   var myArray = listNum(integer)
//   for (var i = 3; i <= Math.ceil(integer/2); i++) {
//     mapArray(cleanArray, i);
//   }
//   return cleanArray;
// }

$(document).ready(function() {
  $("form#primes").submit(function(event) {
    var integer = parseInt($("input#number").val());
    var start = performance.now();
    //var array = findPrimes(integer);
    var array = findPrimesFast(integer); //remove later
    var end = performance.now();;
    var results = end - start;
    console.log(results);
    var string = formatString(array)
    $("p#results").text(string)
    event.preventDefault();
  })
})
