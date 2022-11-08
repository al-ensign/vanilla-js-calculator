export const anyRoot = function (prevNum: number, currentNum: number) {
  let result
  if (currentNum != 0) {
    result = prevNum ** (1 / currentNum)
  } else {
    result = "Error: 0-th root"
  }
  return result
}
