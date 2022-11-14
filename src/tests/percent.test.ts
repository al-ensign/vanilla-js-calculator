import { percentOfNum } from "../math_functions/percent"

describe("percent module", () => {
  test("5 to percent to equal 0.05", () => {
    expect(percentOfNum(5)).toBe(0.05)
  })
})
