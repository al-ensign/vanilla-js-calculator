export const percentOfNum = function (prevNum: number, currentNum: number) {
  let result
  if (currentNum != 0) {
    result = (prevNum / currentNum) ** 100
  } else {
    result = "Error: Percent of 0"
  }
  return result
}
