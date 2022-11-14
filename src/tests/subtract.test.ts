import { subtractNum } from "../math_functions/subtract"

describe("subtract module", () => {
  test("subtract 5 - 1 to equal 4", () => {
    expect(subtractNum(5, 1)).toBe(4)
  })
})
