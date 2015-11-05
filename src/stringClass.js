'use strict';

/**
 * Author : Lawrence Bolutife
 *
 * Description : String Class
 */

/**
 * [hasVowels description]
 * @return {Boolean} [description]
 */
String.prototype.hasVowels = function hasVowels () {
  // copying an instance of this(object inheriting this method).
  var _this = this,
      regex = /[aeiou]/gmi;
  if (typeof _this === 'string' && _this) {
    return regex.test(_this);
  } else  {
    throw new TypeError('Invalid string');
  }
};

/**
 * [toUpper description]
 * @return {String} [description]
 */
String.prototype.toUpper = function () {
  var _this = this,
      regex = /[a-z]/g;
  function replaceLower ( char ) {
    return String.fromCharCode(char.charCodeAt() - 32);
  }
  if (typeof _this && _this) {
    return _this.replace(regex, replaceLower);
  } else {
      throw new TypeError('Invalid string');
  }
};

/**
 * [toLower description]
 * @return {String} [description]
 */
String.prototype.toLower = function () {
  var _this = this,
      regex = /[A-Z]/g;
  function replaceUpper ( char ) {
    return String.fromCharCode(char.charCodeAt() + 32);
  }
  if (typeof _this && _this) {
    return _this.replace(regex, replaceUpper);
  } else {
    throw new TypeError('Invalid string');
  }
};

/**
 * [ucFirst description]
 * @return {String} [description]
 */
String.prototype.ucFirst = function () {
  var _this = this;
  if (typeof _this && _this) {
    return _this[0].toUpper() + _this.substring(1).toLower();
  } else {
    throw new TypeError('Invalid string');
  }
};

/**
 * [isQuestion description]
 * @return {Boolean} [description]
 */
String.prototype.isQuestion = function isQuestion () {
  var _this = this,
      regex = /\?$/m;
  if (typeof _this === 'string' && _this) {
    return regex.test(_this);
  } else {
    throw new TypeError ('Invalid string');
  }
};

/**
 * [words description]
 * @return {Array (Object)} [description]
 */
String.prototype.words = function () {
  var _this = this,
      prepRegex = /[^A-Za-z-]/gm,
      splitRegex = /\s/;
  function sanctify ( elem ) {
    return Boolean(elem) === true;
  }
  if (_this && typeof _this === 'string') {
    _this = _this.replace(prepRegex, " ").split(splitRegex);
    return _this.filter(sanctify);
  } else {
    throw new TypeError ('Invalid String');
  }
};

/**
 * [wordCount description]
 * @return {Number} [description]
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
 * [toCurrency description]
 * @return {String} [description]
 */
String.prototype.toCurrency = function () {

};

/**
 * [fromCurrency description]
 * @return {Number} [description]
 */
String.prototype.fromCurrency = function () {
  var _this = this,
      regexReplace = /[,]/g,
      regexTrim = /[\d]+\.[\d]{2}/g;
  if (_this && typeof _this === 'string') {
    _this = _this.replace(regexReplace, "");
    return regexTrim.exec(_this)[0];
  } else {
    throw new TypeError ('Invalid String');
  }
};
