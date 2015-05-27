describe('listNum', function() {
  it('creates a list of numbers, from 2...your number', function() {
    expect(listNum(7)).to.eql([2, 3, 4, 5, 6, 7])
  });
});

describe('removeNum', function(){
  it('removes all even numbers from an array', function(){
    var myArray = listNum(5)
    expect(removeNum(myArray, 2)).to.eql([2, 3, 5])
  })
})

describe('findPrimes', function(){
  it('returns a list of prime numbers', function(){
    expect(findPrimes(10)).to.eql([2, 3, 5, 7]);
  })
})

describe('removeNumFast', function(){
  it('removes all even numbers from an array', function(){
    var myArray = listNum(5)
    expect(removeNumFast(myArray, 2)).to.eql([2, 3, 5])
  })
})

// describe('findPrimesFast', function(){
//   it('returns a list of prime numbers', function(){
//     expect(findPrimesFast(10)).to.eql([2, 3, 5, 7]);
//   })
// })
//
// describe('doMap', function() {
//   it('assigns an array that maps whether a number is prime or not', function() {
//     var primeArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
//     expect(doMap(primeArray)).to.eql([1, 1, 0, 1, 0, 1, 0, 0, 0, 1])
//   })
// })

//performance for 10,000 iterations is 112+- 3 milleseconds
//performance for 10,000 iterations is 6+- 1 milliseconds

//[2, 3, 4, 5, 6]
//[1, 1, 0, 1, 0]

//[2, 3, ,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//[3, 5, 7, 9, 11, 13, 15]
//[3, 5, 7, 11, 13, 15]
