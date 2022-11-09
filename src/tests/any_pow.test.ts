import { anyPow } from "../math_functions/any_pow"

describe("anyPow module", () => {
  test("3 power 5 to equal 243", () => {
    expect(anyPow(3, 5)).toBe(243)
  }),
    test("(-15) power 0 equal to 1", () => {
      expect(anyPow(-15, 0)).toBe(1)
    })
})
