//  snail = function(array) {
//     let side = 1; // 1 - вправо, 2 - вниз, 3 - влево, 4 - вверх
//     let result = [];
//     let column = 0, row = 0;
//     const numberOfElements = array[0].length
    
//     let go = (column, row, side) => {
//         switch (side) {
//           case 1: 
//             row++;      // вправо
//             break;
//           case 2:
//             column++;   // вниз
//             break;
//           case 3:
//             row--;      // влево
//             break;
//           case 4:
//             column--;    // вверх
//             break;
//         }
//         return [column, row];
//       }
    
//     for (let i = 0; i <= numberOfElements*numberOfElements-1; i++) {
//         result[i] = array[column][row];
//         array[column][row] = 0;

//         if (( (side === 1) && ((row+1 >= numberOfElements) || (array[column][row+1] === 0)) ) ||
//             ( (side === 3) && ((row-1 < 0)  || (array[column][row-1] === 0)) ) ||
//             ( (side === 2) && ((column+1 >= numberOfElements) || (array[column+1][row] === 0)) ) ){
//           side++;
//         }
  
//         if ( (side === 4) && ((column-1 < 0) || (array[column-1][row] === 0)) ) {
//           side = 1;
//         }
        
//         [column, row] = go(column, row, side);
//     }

//     return result;
//   }

  console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// РАЗОБРАТЬ

function snail(array) { 
  var results = [];
  
  while(array.length > 0) {
    results = results.concat(array.shift());
    
    array.forEach(function (current) {
      results.push(current.pop());
    });
    
    array.forEach(function (current) {
      current.reverse();
    });
    
    array.reverse();
  }
  
  return results;
}

  const snail = function(array) {
    const list = [];
  
    while(array.length) {
      list.push(...array.shift(), ...array.map(row => row.pop()));
      
      array.reverse().map(row => row.reverse());
    }
  
    return list;
  }

  snail = function(array) {
    var size = array.length;
    
    if (size == 0)
      return [];
  
    if (size == 1)
      return array[0];
    
    var top    = array[0].slice(0, -1);
    var right  = array.slice(0, -1).map(a => a[size - 1]);
    var bottom = array[size -1].slice(1).reverse();
    var left   = array.slice(1).map(a => a[0]).reverse();
    var inner  = array.slice(1, -1).map(a => a.slice(1, -1));
  
    return [].concat(top, right, bottom, left, snail(inner));
  }

  snail = function(array) {
    var result;
    while (array.length) {
      // Steal the first row.
      result = (result ? result.concat(array.shift()) : array.shift());
      // Steal the right items.
      for (var i = 0; i < array.length; i++)
        result.push(array[i].pop());
      // Steal the bottom row.
      result = result.concat((array.pop() || []).reverse());
      // Steal the left items.
      for (var i = array.length - 1; i >= 0; i--)
        result.push(array[i].shift());
    }
    return result;
  }

  function snail(array) {
    var vector = [];
    while (array.length) {
      vector.push(...array.shift());
      array.map(row => vector.push(row.pop()));
      array.reverse().map(row => row.reverse());
    }
    return vector;
  }