export const anyRoot = function (prevNum: number, currentNum: number) {
  let result
  if (currentNum != 0 && currentNum % 2 == 0) {
    if (prevNum < 0) {
      result = "Error: Root of negative number"
    } else {
      result = prevNum ** (1 / currentNum)
    }
  } else if (currentNum != 0 && currentNum % 2 != 0) {
    result = prevNum ** (1 / currentNum)
  } else {
    result = "Error: 0-th root"
  }
  return result
}

console.log(anyRoot(10, 2))
