/**
 * [(lv.2)배열-메서드-some-and-every.js]
 *
 * 주어진 배열(arr)에 대해:
 * 1) hasNegative 함수: 배열에 음수가 하나라도 있으면 true, 없으면 false를 반환하세요. (Array.prototype.some 메서드를 사용)
 * 2) allPositive 함수: 배열이 전부 양수라면 true, 하나라도 0 이하의 숫자가 있으면 false를 반환하세요. (Array.prototype.every 메서드를 사용)
 *
 * @param {number[]} arr
 * @returns {boolean}
 */

// TODO: hasNegative 함수를 작성하세요.
// function hasNegative() {   //arr를 함수의 매개변수로 추가해야 함
//   // const negative = (el) => el < 0;
//   // return arr.some(negative);  // 배열을 지정해야 함. 현재는 arr가 정의되지 않음
// }
function hasNegative(arr) {
  return arr.some((el) => el < 0);
}

// // TODO: allPositive 함수를 작성하세요.
// function allPositive() {
//   const positive = (element) => element > 0;
//   return arr.every(positive);
// }
function allPositive(arr) {
  return arr.every((el) => el > 0);
}

// export를 수정하지 마세요.
export { hasNegative, allPositive };
