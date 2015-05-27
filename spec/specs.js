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
