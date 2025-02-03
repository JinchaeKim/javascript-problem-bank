/**
 * [(lv.2)rotate-array.js]
 *
 * 배열 arr의 마지막 요소를 맨 앞으로 이동하여, 오른쪽으로 한 칸씩 이동된 새 배열을 반환하세요.
 * 예) [1, 2, 3] -> [3, 1, 2]
 *
 * @param {any[]} arr
 * @returns {any[]} 요소가 오른쪽으로 한 칸씩 이동된 새 배열
 */
function rotateArray(arr) {
  // TODO: 원본을 변경하지 않고, 마지막 요소를 맨 앞으로 이동한 새 배열을 반환
  let array = [...arr];
  // 마지막 요소 출력
  let last = array.pop();
  // 배열 맨 앞에 추가, 추가한 값을 반환
  array.unshift(last);
  // 새 배열 출력
  return array;
}

// export를 수정하지 마세요.
export { rotateArray };
