import { isObject, isPrimitive } from "./jsonUtils"

describe("jsonUtils#isPrimitive", () => {
  it.each([
    [null, true],
    [1, true],
    ["s", true],
    [{}, false],
    [[], false]
  ])(
    "given %p returns %p", (value, expected) => {
      expect(isPrimitive(value)).toBe(expected)
    }
  )
})

describe("jsonUtils#isObject", () => {
  it.each([
    [null, false],
    [{}, true],
    [[], false],
  ])("given %p returns %p", (value, expected) => {
    expect(isObject(value)).toBe(expected)
  })
})
