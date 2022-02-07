  // class RomanNumerals {
  //   static #decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  //   static #roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  //   static toRoman(number){
  //     let result   = '';
  
  //     this.#decimals.forEach(function (item, index) {
  //       // console.log('this ', this)          // Здесь this равен undefined почему-то
  //       while (number >= item) {
  //         result += RomanNumerals.#roman[index];
  //         number -= item;
  //       }
  //     });
  
  //     return result;
  //   }
  
  //   static fromRoman(value){
  //     let result = 0;
  
  //     this.#roman.forEach((item, index) => {
  //       // console.log('this ', this)          // Здесь this равен классу RomanNumerals почему-то
  //       while (value.indexOf(item) === 0) {
  //         result += this.#decimals[index]      // Можно написать RomanNumerals.#decimals[index]
  //         value = value.substring(item.length, value.length)
  //       }
  //     })
  
  //     return result;
  //   }
  
  // }

const map = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};

class RomanNumerals {
    static toRoman(num) {
        let str = '';
        for (var i in map) {
            while (num >= map[i]) {
                str += i;
              num -= map[i];
            }
        }
        return str;
    }
    
    static fromRoman(str) {
         return str.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((acc, el) => acc + map[el], 0);
    }
}