// МОЁ ПЕРВОЕ РЕШЕНИЕ СПИРАЛИ. РАБОТАЕТ, НО УЖ ОЧЕНЬ ГРОМОЗДКОЕ
// ЗДЕСЬ ИДУ ПО ЛИНИЯМ ИЗ ЦЕНТРА
// function createSpiral(N) {
//   let straightLength = 0;
//   let left = true; // true - left, false - right
//   let spiral = [];
//   let activeNumber = N*N; 
  
//   for (let i = 0; i < N; i++){
//     spiral.push([]);
//   }

//     if ( N % 2 !== 0 ) {
//       let row = Math.trunc(N/2); // откидываем десятичную часть
//       let column = row;
//       spiral[column][row] = activeNumber;
//       activeNumber--;
//       console.log('center = ', row, ' - ', column)
      
//       go(N, straightLength, left, row, column, spiral, activeNumber)
//     }

//     if ( (N % 2 === 0) && (N !== 0)) {
//       let row = (N/2)-1; // откидываем десятичную часть
//       let column = N/2;
//       spiral[column][row] = activeNumber;
//       activeNumber--;

//       console.log('center = ', row, ' - ', column)

//       left = false;

//       go(N, straightLength, left, row, column, spiral, activeNumber)
//     }

//     if (!Number.isInteger(N)){
//       return []
//     }
//   console.log(spiral);
//   return spiral;
// }

// createSpiral(6)

// function go(N, straightLength, left, row, column, spiral, activeNumber) {
//   for (let i = 1; i <= N; i++) { // продвигаемся по 2 линии
//     if (i !== N){
//       straightLength++;
//     }
//     console.log('i === ', i)
//     console.log(left)
//     if (i ==  N){
//       console.log('I`m in!!!!!!!')
//     }

//      if (left) {
//       // влево
//       for (let j = 1; j <= straightLength; j++) {
//         row--;
//         spiral[column][row] = activeNumber;
//         activeNumber--;
//       }

//       if ( activeNumber > 1 ) {
//       // вниз
//         for (let j = 1; j <= straightLength; j++) {
//           column++;
//           spiral[column][row] = activeNumber;
//           activeNumber--;
//         }
//       }
//       console.log(spiral)
//     } else {
//       // вправо
//       for (let j = 1; j <= straightLength; j++) {
//         row++;
//         spiral[column][row] = activeNumber;
//         activeNumber--;
//       }

//       // вверх
//       for (let j = 1; j <= straightLength; j++) {
//         column--;
//         spiral[column][row] = activeNumber;
//         activeNumber--;
//       }
//     }
    
//     left = !left;
//     console.log(spiral)
//   }
// }


// РЕШЕНИЕ СПИРАЛИ В ДВУМЕРНОМ МАССИВЕ ПО ЮРИНОМУ АЛГОРИТМУ
// ПОВОРАЧИВАЕМ ПРИ ОПРЕДЕЛЁННЫХ УСЛОВИЯХ, ИДЁМ ПО ПОРЯДКУ
function createSpiral(N) {
    if ((N < 1) || !Number.isInteger(N)){
      return [];
    }
  
    let side = 1; // 1 - вправо, 2 - вниз, 3 - влево, 4 - вверх
    let spiral = new Array(N).fill([]).map(() => new Array(N).fill(0)); // не уверена, что здесь нужен .fill([])
    let column = 0, row = 0;
  
    let go = (column, row, side) => {
      switch (side) {
        case 1: 
          row++;      // вправо
          break;
        case 2:
          column++;   // вниз
          break;
        case 3:
          row--;      // влево
          break;
        case 4:
          column--;    // вверх
          break;
      }
      return [column, row];
    }
  
    for (let i = 1; i <= N*N; i++) {
      spiral[column][row] = i;
  
      if (( (side === 1) && ((row+1 >= N) || (spiral[column][row+1] > 0)) ) ||
          ( (side === 3) && ((row-1 < 0)  || (spiral[column][row-1] > 0)) ) ||
          ( (side === 2) && ((column+1 >= N) || (spiral[column+1][row] > 0)) ) ){
        side++;
      }

      if ( (side === 4) && ((column-1 < 0) || (spiral[column-1][row] > 0)) ) {
        side = 1;
      }
      
      [column, row] = go(column, row, side);
    }
  
     console.log(spiral);
     return spiral;
  }
  
  createSpiral(5)