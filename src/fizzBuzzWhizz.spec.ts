import { game } from "./fizzBuzzWhizz";

describe('FizzBuzzWhizz Game', () => {
  test('should return 1 for 1', () => { expect(game(1)).toEqual(1); });
  test('should return Whizz for 2', () => { expect(game(2)).toEqual("Whizz"); });
  test('should return FizzWhizz for 3', () => { expect(game(3)).toEqual("FizzWhizz"); });
  test('should return 4 for 4', () => { expect(game(4)).toEqual(4); });
  test('should return BuzzWhizz for 5', () => { expect(game(5)).toEqual("BuzzWhizz"); });
  test('should return Fizz for 6', () => { expect(game(6)).toEqual("Fizz"); });
  test('should return Whizz for 7', () => { expect(game(7)).toEqual("Whizz"); });
  test('should return 8 for 8', () => { expect(game(8)).toEqual(8); });
  test('should return Fizz for 9', () => { expect(game(9)).toEqual("Fizz"); });
  test('should return Buzz for 10', () => { expect(game(10)).toEqual("Buzz"); });
  
  test('should return Whizz for 11', () => { expect(game(11)).toEqual("Whizz"); });
  test('should return Fizz for 12', () => { expect(game(12)).toEqual("Fizz"); });
  test('should return Whizz for 13', () => { expect(game(13)).toEqual("Whizz"); });
  test('should return 14 for 14', () => { expect(game(14)).toEqual(14); });
  test('should return FizzBuzz for 15', () => { expect(game(15)).toEqual("FizzBuzz"); });
  test('should return 16 for 16', () => { expect(game(16)).toEqual(16); });
  test('should return Whizz for 17', () => { expect(game(17)).toEqual("Whizz"); });
  test('should return Fizz for 18', () => { expect(game(18)).toEqual("Fizz"); });
  test('should return Whizz for 19', () => { expect(game(19)).toEqual("Whizz"); });
  test('should return Buzz for 20', () => { expect(game(20)).toEqual("Buzz"); });

  test('should return Fizz for 21', () => { expect(game(21)).toEqual("Fizz"); });
  test('should return 22 for 22', () => { expect(game(22)).toEqual(22); });
  test('should return Whizz for 23', () => { expect(game(23)).toEqual("Whizz"); });
  test('should return Fizz for 24', () => { expect(game(24)).toEqual("Fizz"); });
  test('should return Buzz for 25', () => { expect(game(25)).toEqual("Buzz"); });
  test('should return 26 for 26', () => { expect(game(26)).toEqual(26); });
  test('should return Fizz for 27', () => { expect(game(27)).toEqual("Fizz"); });
  test('should return 28 for 28', () => { expect(game(28)).toEqual(28); });
  test('should return Whizz for 29', () => { expect(game(29)).toEqual("Whizz"); });
  test('should return FizzBuzz for 30', () => { expect(game(30)).toEqual("FizzBuzz"); });

  test('should return Whizz for 31', () => { expect(game(31)).toEqual("Whizz"); });
  test('should return 32 for 32', () => { expect(game(32)).toEqual(32); });
  test('should return Fizz for 33', () => { expect(game(33)).toEqual("Fizz"); });
  test('should return 34 for 34', () => { expect(game(34)).toEqual(34); });
  test('should return Buzz for 35', () => { expect(game(35)).toEqual("Buzz"); });
  test('should return Fizz for 36', () => { expect(game(36)).toEqual("Fizz"); });
  test('should return Whizz for 37', () => { expect(game(37)).toEqual("Whizz"); });
  test('should return 38 for 38', () => { expect(game(38)).toEqual(38); });
  test('should return Fizz for 39', () => { expect(game(39)).toEqual("Fizz"); });
  test('should return Buzz for 40', () => { expect(game(40)).toEqual("Buzz"); });
});