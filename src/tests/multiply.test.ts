import { multiplyNum } from "../math_functions/multiply"

describe("multiply module", () => {
  test("multiply 5 by 2 to equal 10", () => {
    expect(multiplyNum(5, 2)).toBe(10)
  })
})
