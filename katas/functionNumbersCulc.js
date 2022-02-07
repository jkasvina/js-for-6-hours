function zero() { return (typeof arguments[0] === 'function') ? arguments[0](0) : 0 }
function one() { return (typeof arguments[0] === 'function') ? arguments[0](1) : 1 }
function two() { return (typeof arguments[0] === 'function') ? arguments[0](2) : 2 }
function three() { return (typeof arguments[0] === 'function') ? arguments[0](3) : 3 }
function four() { return (typeof arguments[0] === 'function') ? arguments[0](4) : 4 }
function five() { return (typeof arguments[0] === 'function') ? arguments[0](5) : 5 }
function six() { return (typeof arguments[0] === 'function') ? arguments[0](6) : 6 }
function seven() { return (typeof arguments[0] === 'function') ? arguments[0](7) : 7 }
function eight() { return (typeof arguments[0] === 'function') ? arguments[0](8) : 8 }
function nine() { return (typeof arguments[0] === 'function') ? arguments[0](9) : 9 }

function plus(number) { return (x) => x + number }
function minus(number) { return (x) => x - number }
function times(number) { return (x) => x * number }
function dividedBy(number) { return (x) => Math.trunc(x/number) }

console.log( seven(times(five())) ) // 35

// РЕШЕНИЕ БЕЗ arguments
// var n = function(digit) {
//     return function(op) {
//       return op ? op(digit) : digit;
//     }
//   };
//   var zero = n(0);
//   var one = n(1);
//   var two = n(2);
//   var three = n(3);
//   var four = n(4);
//   var five = n(5);
//   var six = n(6);
//   var seven = n(7);
//   var eight = n(8);
//   var nine = n(9);
  
//   function plus(r) { return function(l) { return l + r; }; }
//   function minus(r) { return function(l) { return l - r; }; }
//   function times(r) { return function(l) { return l * r; }; }
//   function dividedBy(r) { return function(l) { return l / r; }; }