import { squarePow } from "../math_functions/square_pow"

describe("squarePow module", () => {
  test("square of 5 to equal 25", () => {
    expect(squarePow(5)).toBe(25)
  })
})
