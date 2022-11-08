export const factorialNum = function (num: number) {
  let result = 1
  if (num > 0) {
    for (let i = 2; i <= num; i++) {
      result = result * i
    }
  } else if (num == 0) {
    result = 0
  } else {
    result = -1
  }

  return result
}
