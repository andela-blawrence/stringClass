'use strict';

/*
* Author : Lawrence Bolutife
* Description : Spec file for the newly added methods to the String Class. Test to
* 							ensure that all method behave as expected, return the right values and data type.
*/

describe('Base case for String Class', function () {
  it('String should be an existing class (Constuctor)', function () {
    expect(typeof String).toEqual('function');
    expect(String.prototype).toBeDefined();
  });
});

describe('String Class', function () {
  it('All newly added methods of the should return the right datatypes', function () {
    expect(typeof 'iodine'.hasVowels()).toEqual('boolean');
    expect(typeof 'frkspwb'.hasVowels()).toEqual('boolean');
    expect(typeof 'javascript Is seXy'.toUpper()).toEqual('string');
    expect(typeof 'JAVASCRIPT IS SEXY'.toLower()).toEqual('string');
    expect(typeof 'factory Functions'.ucFirst()).toEqual('string');
    expect(typeof 'is javascript really sexy?'.isQuestion()).toEqual('boolean');
    expect(typeof 'is javascript really sexy'.isQuestion()).toEqual('boolean');
    expect(typeof 'Strive hard, and success shall be yours!'.words()).toEqual('object');
    expect(typeof 'Strive hard, and success shall be yours!'.wordCount()).toBe('number');
    expect(typeof "305*^^#@!#)67887.7859586587".toCurrency()).toBe('string');
    expect(typeof "23,789.00".fromCurrency()).toBe('number');
  });
});

describe('hasVowels', function () {
  it('should return true if string contains a vowel letter (character).', function () {
    expect('iodine'.hasVowels()).toEqual(true);
  });

  it('should return false if string does not contain a vowel letter (character).', function () {
    expect('frkspwb'.hasVowels()).toEqual(false);
  });
});

describe('toUpper', function () {
  it('should return calling Object(string) Captitalized.', function () {
    expect('javascript Is seXy'.toUpper()).toEqual('JAVASCRIPT IS SEXY');
  })
});

describe('toLower', function () {
  it('should return calling Object(string) Captitalized', function () {
    expect('JAVASCRIPT IS SEXY'.toLower()).toEqual('javascript is sexy');
  });
});

describe('ucFirst', function () {
  it('should return calling Object(string) with first character only captitalized', function () {
    expect('closures'.ucFirst()).toEqual('Closures');
    expect('factory Functions'.ucFirst()).toEqual('Factory functions');
  });
});

describe('isQuestion', function () {
  it('should return true if calling Object(string) is a question (ends with question mark)', function () {
    expect("is javascript really sexy?".isQuestion()).toEqual(true);
  });
  it('should return false if calling Object(string) is not a question (does not end with question mark)', function () {
    expect("is javascript really sexy".isQuestion()).toEqual(false);
  });
});

describe('words', function () {
  it('should return a list of the words in the calling Object(string), as an Array', function () {
    expect('Strive hard, and success shall be yours!'.words()).toEqual(['Strive', 'hard', 'and', 'success', 'shall', 'be', 'yours']);
    expect("We ain't dumb brother!".words()).toEqual(['We', "ain't", 'dumb', 'brother']);
  });
});

describe('wordCount', function () {
  it("should return the number of words in a string using the 'words' method defined on the String class.", function () {
    expect('Strive hard, and success shall be yours!'.wordCount()).toBe(7);
  });
});

describe('toCurrency', function () {
  it('should return a currency representation of the String', function () {
    expect("11111.11".toCurrency()).toBe("11,111.11");
    expect("30567887.7859".toCurrency()).toBe("30,567,887.79");
    expect("305*^^#@!#)67887.7859586587".toCurrency()).toBe("30,567,887.79");
    expect("34578".toCurrency()).toBe("34,578.00");
  });
});

describe('fromCurrency', function () {
  it('should return a number representation of the Currency String', function () {
    expect("11,111.11".fromCurrency()).toBe(11111.11);
    expect("30,567,887.7859".fromCurrency()).toBe(30567887.78);
    expect("23,789.00".fromCurrency()).toBe(23789.00);
  });
});
