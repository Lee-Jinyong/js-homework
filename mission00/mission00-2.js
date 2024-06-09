function getNumberAtArray(arr, index) {
  if(!Array.isArray(arr)) {
    throw new Error('첫 번째 인수의 자료형이 배열이 아닙니다.');
  } else if(arr[index] === undefined) {
    throw new Error('배열에 해당 index 값이 존재하지 않습니다.');
  } else {
    return arr[index];
  }
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!