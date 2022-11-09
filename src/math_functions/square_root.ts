export const squareRoot = function (num: number) {
  let result
  if (num >= 0) {
    result = num ** 0.5
  } else {
    result = "Error: Root of negative number"
  }
  return result
}
