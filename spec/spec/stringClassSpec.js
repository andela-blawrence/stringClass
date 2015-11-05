'use strict';

describe('Base case for String Class', function () {
  it('String should be an existing class (Constuctor)', function () {
      expect(typeof String).toEqual('function');
      // test if String class inherits from Object();
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
  });
});

describe('wordCount', function () {
  it("should return the number of words in a string using the 'words' method defined on the String class.", function () {
    expect('Strive hard, and success shall be yours!'.wordCount()).toBe(7);
  });
});

describe('toCurrency', function () {
  it('should return a currency representation of the String', function () {
    expect("11111.11".fromCurrency()).toBe("11,111.11");
    expect("30567887.7859".fromCurrency()).toBe("30,567,887.78");
  });
});

describe('fromCurrency', function () {
  it('should return a number representation of the Currency String', function () {
    expect("11,111.11".fromCurrency()).toBe("11111.11");
    expect("30,567,887.7859".fromCurrency()).toBe("30567887.78");
  });
});
