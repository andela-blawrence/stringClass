'use strict';

/**
 * Author : Lawrence Bolutife
 *
 * Description : String Class. Using Prototype Oriented Programming,
 * 							 methods, procedures and instance attributes are added to the
 * 							 String class to support more string manipulation features.
 */

/**
 * hasVowels : Returns true if the string contains vowels. This method
 * 						 uses Regular Expression to implement this logic.
 * @return {Boolean} 'true' if vowel character is found, 'false' if not.
 */
String.prototype.hasVowels = function hasVowels () {
  // copying an instance of this(object inheriting this method).
  var _this = this,
      regex = /[aeiou]/gmi;
  if (_this && typeof _this === 'string') {
    return regex.test(_this);
  } else  {
    throw new TypeError('Invalid string');
  }
};

/**
 * toUpper : Converts a given string to all Uppercase characters.
 * @return {String} String returned in all caps.
 */
String.prototype.toUpper = function () {
  var _this = this,
      regex = /[a-z]/g;
  function replaceLower ( char ) {
    return String.fromCharCode(char.charCodeAt() - 32);
  }
  if (_this && typeof _this === 'string') {
    return _this.replace(regex, replaceLower);
  } else {
    throw new TypeError('Invalid string');
  }
};

/**
 * toLower : Converts a given string to all lowercase characters.
 * @return {String} Returns the String in question but with all characters in upper cases as applicable.
 */
String.prototype.toLower = function () {
  var _this = this,
      regex = /[A-Z]/g;
  function replaceUpper ( char ) {
    return String.fromCharCode(char.charCodeAt() + 32);
  }
  if (_this && typeof _this === 'string') {
    return _this.replace(regex, replaceUpper);
  } else {
    throw new TypeError('Invalid string');
  }
};

/**
 * ucFirst : Converts only the first character in a given string to Uppercase.
 * @return {String}
 */
String.prototype.ucFirst = function () {
  var _this = this;
  if (_this && typeof _this === 'string') {
    return _this[0].toUpper() + _this.substring(1).toLower();
  } else {
    throw new TypeError('Invalid string');
  }
};

/**
 * isQuestion :  Return true if the string is a question (ending with a question mark)
 * @return {Boolean} true or false
 */
String.prototype.isQuestion = function isQuestion () {
  var _this = this,
      regex = /.{1,}\?$/g;
  if (_this && typeof _this === 'string') {
    return regex.test(_this);
  } else {
    throw new TypeError ('Invalid string');
  }
};

/**
 * words : Breaks a string of words into an array of words.
 * @return {Array (Object)} Returns an array of words from a string.
 */
String.prototype.words = function () {
  var _this = this,
      prepRegex = /[^A-Za-z-']/gm,
      splitRegex = /\s/;
  function isTruthy ( elem ) {
    return Boolean(elem) === true;
  }
  if (_this && typeof _this === 'string') {
    _this = _this.replace(prepRegex, " ").split(splitRegex);
    return _this.filter(isTruthy);
  } else {
    throw new TypeError ('Invalid String');
  }
};

/**
 * wordCount : Uses the word method to get the number of words in an array.
 * @return {Number} number of words.
 */
String.prototype.wordCount = function wordCount () {
  var _this = this;
  if (_this && typeof _this === 'string') {
    return _this.words().length;
  } else {
    throw new TypeError ('Invalid String');
  }
};

/**
 * toCurrency : Converts a number in string to it's currency representation.
 * @return {String} currency reporesentation of string value.
 */
String.prototype.toCurrency = function toCurrency () {
  var _this = this,
      regexReplace = /\d(?=(\d{3})+\.)/g,
      replacer = '$&,',
      regexCleanse = /[^\d\.]/g;
  if (_this && typeof _this === 'string') {
    _this = _this.replace(regexCleanse, '');
    // Convert string to currency format.
    _this = Number(_this).toFixed(2).toString();
    return _this.replace(regexReplace, replacer);
  } else {
    throw new TypeError ('Invalid String');
  }
};

/**
 * fromCurrency : Converts currency in string to an actual number (Not excluding the decimal point).
 * @return {Number} number representation of currency string.
 */
String.prototype.fromCurrency = function () {
  var _this = this,
      regexReplace = /\,/g,
      regexTrim = /[\d]+\.?[\d]{2}?/g,
      regexTest = /\./g;
  if (!regexTest.test(_this)) {
    throw new TypeError ('Invalid currency format');
  }
  if (_this && typeof _this === 'string') {
    _this = _this.replace(regexReplace, "");
    return Number(regexTrim.exec(_this)[0]);
  } else {
    throw new TypeError ('Invalid String');
  }
};
