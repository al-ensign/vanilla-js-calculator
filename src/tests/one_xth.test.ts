import { oneByX } from "../math_functions/one_xth"

describe("oneByX module", () => {
  test("compute 1 by 5 to equal 5", () => {
    expect(oneByX(5)).toBe(0.2)
  }),
    test("compute 1 by 0 to equal to Error", () => {
      expect(oneByX(0)).toBe("Error: Division by 0")
    })
})
