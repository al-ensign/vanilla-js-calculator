import { addNum } from "../math_functions/add"

describe("add module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(addNum(1, 2)).toBe(3)
  })
})
