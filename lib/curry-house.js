var curry = require('./curry');

function calculate (num1) {
  return function(opt) {

    switch (opt) {
      case '+' :
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
    to : function(end) {
      return Math.floor(Math.random() * (end - start)) + start;
    },
    toInclude : function(end) {
      return Math.floor(Math.random() * ((end + 1) - start)) + start;
    }
  };
}

function concat(head, tail) {
  return head + tail;
}

var prependGreeting = function(meep) {
  return concat('Hello ', meep);
};

function add (numOne, numTwo, numthree) {
  return numOne + numTwo + numthree;
}

var add4and5 = function(addStuff) {
  return add(4, 5, addStuff);
};

function calculator(operation) {
    switch (operation) {
      case '+' :
        return function(num2, num1) {
          return num1 + num2;
        };
      case 'add' :
        return function(num2, num1) {
          return num1 + num2;
        };

      case '-' :
        return function(num2, num1) {
          return num1 - num2;
        };

      case 'subtract' :
        return function(num2, num1) {
          return num1 - num2;
        };

      case '*' :
        return function(num2, num1) {
          return num1 * num2;
        };

      case 'multiply' :
        return function(num2, num1) {
          return num1 * num2;
        };

      case '/' :
        return function(num2, num1) {
          return num1 / num2;
        };

      case 'divide' :
        return function(num2, num1) {
          return num1 / num2;
        };

      case '%' :
        return function(num2, num1) {
          return num1 % num2;
        };

      case 'modulo' :
        return function(num2, num1) {
          return num1 % num2;
        };

      case '^' :
        return function(num2, num1) {
          return Math.pow(num1, num2);
        };

      case 'power of' :
        return function(num2, num1) {
          return Math.pow(num1, num2);
        };
    }
  }

var add5 = function(num1) {
  return calculator('+')(num1, 5);
};

var sub5 = function(num1) {
  return calculator('-')(5, num1);
};

var multiply5 = function(num1) {
  return calculator('*')(5, num1);
};

var divide5 = function(num1) {
  return calculator('/')(5, num1);
};

var mod5 = function(num1) {
  return calculator('%')(5, num1);
};

var pow3 = function(num1) {
  return calculator('^')(3, num1);
};

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