// Моё решение ПОИСК ПРОПУЩЕННОЙ БУКВЫ В КУСКЕ АЛФАВИТА
//   function findMissingLetter(startArr) {
//     let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//     let newArr;

//     if (startArr.join('') === startArr.join('').toUpperCase()) {
//         newArr = arr_EN.slice(arr_EN.indexOf(startArr[0]), arr_EN.indexOf(startArr[0]) + startArr.length + 1);
//     } else {
//         newArr = arr_en.slice(arr_en.indexOf(startArr[0]), (arr_en.indexOf(startArr[0]) + startArr.length + 1));
//     }

//     return foundLetter(newArr, startArr);
//     }

//     function foundLetter(newArr, startArr) {
//         let letter;
//         let firstLetterFound = 0;

//         newArr.forEach( (elem, index, newArr) => { 
//             if ((startArr[index] !== newArr[index])&&(firstLetterFound < 1)) {
//                 letter = elem;
//                 firstLetterFound++
//             }
//         }) 

//         return letter;
//     }

//     findMissingLetter(['a','b','c','d','f'])

// ИЗУЧИТЬ
function findMissingLetter(array) {
    let first = array[0].charCodeAt(0)
    for (let i = 1; i < array.length; i++) {
      if (first + i !== array[i].charCodeAt(0)) {
        return String.fromCharCode(first + i)
      }
    }
    throw new Error("Invalid input")
  }