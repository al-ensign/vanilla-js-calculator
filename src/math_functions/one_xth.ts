export const oneByX = function (num: number) {
  let result
  if (num != 0) {
    result = 1 / num
  } else {
    result = "Error: Division by 0"
  }
  return result
}
