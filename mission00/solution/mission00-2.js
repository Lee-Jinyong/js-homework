// 1. arr 변수가 배열인지 확인하기
// 2. 0보다 크거나 같음 && 배열의 길이보다 작을 때

function getNumberAtArray(arr, index) {
  if(Array.isArray(arr)) {
    if(index >= 0 && index < arr.length) {
      return arr[index];
    } else {
      throw new Error(`배열에 없는 index입니다.`);
    }
  } else {
    throw new Error(`getNumberAtArray 함수의 첫 번째 인수는 배열 타입이어야 합니다.`);
  }
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!