
var curry = require('./curry');

function calculate (num1) {
  return function(opt) {

    switch (opt) {
      case '+'  :
        return function(num2) {
          return num1 + num2;
        };
      case 'add' :
        return function(num2) {
          return num1 + num2;
        };

      case '-' :
        return function(num2) {
          return num1 - num2;
        };

      case 'subtract' :
        return function(num2) {
          return num1 - num2;
        };

      case '*' :
        return function(num2) {
          return num1 * num2;
        };

      case 'multiply' :
        return function(num2) {
          return num1 * num2;
        };

      case '/' :
        return function(num2) {
          return num1 / num2;
        };

      case 'divide' :
        return function(num2) {
          return num1 / num2;
        };

      case '%' :
        return function(num2) {
          return num1 % num2;
        };

      case 'modulo' :
        return function(num2) {
          return num1 % num2;
        };

      case '^' :
        return function(num2) {
          return Math.pow(num1, num2);
        };

      case 'power of' :
        return function(num2) {
          return Math.pow(num1, num2);
        };
    }
  };

}

function random (start) {
  return {
    to: function (end) {
      return Math.floor(Math.random() * (end - start)) + start;
    },
    toInclude: function (end) {
      return Math.floor(Math.random() * (end - start + 1)) + start;
    }
  };
}

function concat(head, tail){
    return head + tail;
}

var prependGreeting = curry(concat,
  'Hello');

function add () {

}

var add4and5 = null;

function calculator(){

}

var add5 = null;
var sub5 = null;
var multiply5 = null;
var divide5 = null;
var mod5 = null;
var pow3 = null;

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};