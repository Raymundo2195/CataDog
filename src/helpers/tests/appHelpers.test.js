import { getFilteredKeys } from "../appHelpers"

const obj = { retriever: [], spaniel: [] }
const allKeys = Object.keys(obj)
const possibleKeys = ["retriever", "tabby"]

describe("getFilteredKeys", () => {
  it("returns all keys if possibleKeys is empty", () => {
    expect(getFilteredKeys(obj, [])).toEqual(allKeys)
  })

  it("returns all keys if possibleKeys is not provided", () => {
    expect(getFilteredKeys(obj)).toEqual(allKeys)
  })

  it("returns an empty array if obj is empty", () => {
    expect(getFilteredKeys({}, possibleKeys)).toEqual([])
  })

  it("returns an empty array if obj is undefined", () => {
    expect(getFilteredKeys(undefined, possibleKeys)).toEqual([])
  })

  it("returns only keys that exist on the object", () => {
    expect(getFilteredKeys(obj, possibleKeys)).toEqual(["retriever"])
  })
})