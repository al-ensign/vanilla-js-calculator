import { cubePow } from "../math_functions/cube_pow"

describe("cubePow module", () => {
  test("cube of 5 to equal 125", () => {
    expect(cubePow(5)).toBe(125)
  })
})
