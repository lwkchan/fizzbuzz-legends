describe('FizzBuzz', function() {

  var fizzbuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {

      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
      expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
      expect(fizzbuzz.isDivisibleByThree(6)).toBe(true);
      expect(fizzbuzz.isDivisibleByThree(32)).toBe(false);
    });

    it('divisible by 5', function() {

      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
      expect(fizzbuzz.isDivisibleByFive(10)).toBe(true);
      expect(fizzbuzz.isDivisibleByFive(15)).toBe(true);
      expect(fizzbuzz.isDivisibleByFive(9)).toBe(false);
    });

    it('divisible by 15', function(){

      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFifteen(5)).toBe(false);
      expect(fizzbuzz.isDivisibleByFifteen(10)).toBe(false);
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
      expect(fizzbuzz.isDivisibleByFifteen(30)).toBe(true);
    });

  });

  describe('returns fizz/buzz/fizzbuzz on multiples of 3/5/15 respectively', function() {

    it ('returns fizz on multiples of 3', function(){

      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.play(3)).toEqual('fizz');
      expect(fizzbuzz.play(6)).toEqual('fizz');
      expect(fizzbuzz.play(9)).toEqual('fizz');
    });

    it ('returns buzz on multiples of 5', function(){

      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.play(5)).toEqual('buzz');
      expect(fizzbuzz.play(10)).toEqual('buzz');
      expect(fizzbuzz.play(20)).toEqual('buzz');
    });

    it ('returns fizzbuzz on multiples of 15', function(){

      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.play(15)).toEqual('fizzbuzz');
      expect(fizzbuzz.play(30)).toEqual('fizzbuzz');
      expect(fizzbuzz.play(105)).toEqual('fizzbuzz');
    });

    it ('returns the number if not a multiple of 3 or 5', function(){

      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.play(2)).toEqual(2);
      expect(fizzbuzz.play(4)).toEqual(4);
      expect(fizzbuzz.play(86)).toEqual(86);
    });




  });

});
