import { tenPowX } from "../math_functions/ten_pow_x"

describe("tenPowX module", () => {
  test("10 power 5 to equal 100000", () => {
    expect(tenPowX(5)).toBe(100000)
  })
})
