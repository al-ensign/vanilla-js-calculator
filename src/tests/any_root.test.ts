import { anyRoot } from "../math_functions/any_root"

describe("anyRoot module", () => {
  test("5-th root of 100000 to equal 10", () => {
    expect(anyRoot(100000, 5)).toBe(10.000000000000002)
  }),
    test("4-th root of -100 equal to Error", () => {
      expect(anyRoot(-100, 4)).toBe("Error: Root of negative number")
    }),
    test("3-th root of -100 equal to -4.6", () => {
      expect(anyRoot(-100, 3)).toBe(-4.641588833612778)
    })
})
