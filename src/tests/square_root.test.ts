import { squareRoot } from "../math_functions/square_root"

describe("squareRoot module", () => {
  test("square root of 25 to equal 5", () => {
    expect(squareRoot(25)).toBe(5)
  }),
    test("(-15) power 0 equal to Error", () => {
      expect(squareRoot(-15)).toBe("Error: Root of negative number")
    })
})
