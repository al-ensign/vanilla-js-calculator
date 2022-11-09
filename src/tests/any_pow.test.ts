import { anyPow } from "../math_functions/any_pow"

describe("anyPow module", () => {
  test("3 power 5 to equal 243", () => {
    expect(anyPow(3, 5)).toBe(243)
  })
})
