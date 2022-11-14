export const divideByNum = function (prevNum: number, currentNum: number) {
  let result
  if (currentNum != 0) {
    result = prevNum / currentNum
  } else {
    result = "Error: Division by 0"
  }
  return result
}
