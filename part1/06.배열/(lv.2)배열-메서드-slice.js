/**
 * [(lv.2)배열-메서드-slice.js]
 *
 * - subArray를 작성하세요.
 * - 파라미터는 arr, start, end 순서입니다.
 * - arr 배열의 start부터 end까지의 원소로 이루어진 새 배열을 반환하세요.
 * - end가 없으면 start부터 끝까지 잘라서 반환하세요.
 * 반드시 slice 메서드를 사용해야 합니다.
 *
 * @param {any[]} arr
 * @param {number} start
 * @param {number} [end]
 * @returns {any[]} 잘려진 새 배열
 */

// *slice() 메서드는 새 배열을 반환*

function subArray(arr, start, end) {
  // TODO
  //   if (!arr.includes("end")) {   // end는 '숫자형 매개변수', includes는 문자열이 있는지를 확인
  //     arr.slice(start);  // return ~ 으로 반환값을 저장하기
  //   } else {
  //     arr.slice(start, end);  // return ~ 으로 반환값을 저장하기
  //   }
  //   return subArray;  // 함수 자체를 반환하고 있음

  if (typeof end === "undefined") {
    return arr.slice(start);
  }
  return arr.slice(start, end);
}

// export를 수정하지 마세요.
export { subArray };
