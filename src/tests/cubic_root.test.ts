import { cubicRoot } from "../math_functions/cubic_root"

describe("cubicRoot module", () => {
  test("cubicRoot of 125 to equal ~5", () => {
    expect(cubicRoot(125)).toBe(4.999999999999999)
  })
})
