import { factorialNum } from "../math_functions/factorial"

describe("factorial module", () => {
  test("factorial of 5 to equal 120", () => {
    expect(factorialNum(5)).toBe(120)
  })
})
