class ArrayUtilities {
  static addZeros = array => array.map((number) => number*=10);
  //모든 숫자에 0을 붙입니다. 숫자 배열을 반환합니다.

  static moreThanFifty = array => array.filter((number) => number > 50);
  //50개 이하의 숫자를 제거합니다. 숫자 배열을 반환합니다.

  static removeFirst = array => array.filter((number, index) => index != 0);
  //배열의 첫 번째 요소를 제거합니다. 숫자 배열을 반환합니다.

  static sumAll(array){
    let sum = 0;
    array.forEach(number => sum = sum+number);
    return sum;
  };
  //배열의 모든 요소를 ​​더합니다. 하나의 숫자를 반환합니다.
  
  static divide(number){
    let arr = [...String(number)];
    return arr;
  };
  //숫자를 가져와서 배열로 나눕니다.
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
