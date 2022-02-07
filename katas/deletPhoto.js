// deleteNth ([1,1,1,1],2) 
// return [1,1] (оставить только n повторений)
// Моё работающее решение с arr.filter
function deleteNth(arr,n){
  let album = new Map();

  arr = arr.filter((photo) => {
    if (album.has(photo)){
      album.set(photo, album.get(photo) + 1);
      return album.get(photo) <= n;
    } else {
      album.set(photo, 1);
      return true;
    }
  });

  return arr;
  }

РАЗОБРАААААТЬ
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}
// РАЗОБРАААААТЬ
const deleteNth = (arr,x) => arr.filter((e,i)=> arr.slice(0,i).filter(f=>f== e).length < x );
// РАЗОБРАААААТЬ
function deleteNth(arr,x){
  let h = {};
  return arr.filter((n) => (h[n] = ~~h[n] + 1) <= x);
}
// array.every

function listSquared(m, n) {
  let arr = [];

  for(let i = m; i <= n; i++) {
    let summ = 0;
    for(let num = 1; num <= i/2; num++){
      if(i % num === 0){
        summ += num*num;
      }
    }
    summ += i*i;

    if (Number.isInteger(Math.sqrt(summ))){
      arr.push([i, summ])
    }
}
console.log(arr)
}

listSquared(42, 250)
[[1, 1], [42, 2500], [246, 84100]]


