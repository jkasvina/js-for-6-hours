// function solution(input, markers) {
//     markers.forEach((value) => {
//       let markerIndex = input.indexOf(value);

//       if (input.indexOf("\n", markerIndex) !== -1) {
//         while (input.charAt(markerIndex-1) === ' '){
//           markerIndex = markerIndex-1;
//         }
//         input = input.replace(input.slice(markerIndex, input.indexOf("\n")), '').trim();
//       } else {
//         while (input.charAt(markerIndex-1) === ' '){
//           markerIndex = markerIndex-1;
//         }
//         input = input.replace(input.slice(markerIndex), '').trim();
//       }
//     })

//     return input;
// };

solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]) // apples, plums\npears\noranges
solution("Q @b\nu\ne -e f g", ["@", "-"]) // Q\nu\ne


// спросить у сани
function solution(input, markers) {
    return input.split('\n').map(
      line => markers.reduce(   // не понимаю, как здесь работает reduce (почему передаётся line, а не previousValue
                                // зачем ", line" в конце выражения
        (line, marker) => line.split(marker)[0].trim(), line // разделяем каждую строку по маркеру
                                                             // на элементы массива и удаляем все пробелы
      )
    ).join('\n')
  }