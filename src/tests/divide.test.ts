import { divideByNum } from "../math_functions/divide"

describe("divideByNum module", () => {
  test("divide 25 by 5 to equal 5", () => {
    expect(divideByNum(25, 5)).toBe(5)
  }),
    test("divide 25 by 0 equal to Error", () => {
      expect(divideByNum(25, 0)).toBe("Error: Division by 0")
    })
})
