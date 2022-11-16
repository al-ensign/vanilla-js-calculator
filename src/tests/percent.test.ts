import { percentOfNum } from "../math_functions/percent"

describe("percent module", () => {
  test("50 of 100 to equal 0.5", () => {
    expect(percentOfNum(50, 100)).toBe(50)
  })
})
