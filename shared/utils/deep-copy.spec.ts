import { describe, expect, it } from 'vitest'

import { deepCopy } from './deep-copy'

describe('deepCopy', () => {
  it('should create a deep copy of an object', () => {
    const original = { a: 1, b: { c: 2 } }
    const copy = deepCopy(original)
    expect(copy).toEqual(original)
    expect(copy).not.toBe(original) // Ensure it's a deep copy, not a reference
  })

  it('should create a deep copy of an array', () => {
    const original = [1, 2, [3, 4]]
    const copy = deepCopy(original)
    expect(copy).toEqual(original)
    expect(copy).not.toBe(original) // Ensure it's a deep copy, not a reference
  })

  it('should create a deep copy of a primitive value', () => {
    const original = 42
    const copy = deepCopy(original)
    expect(copy).toEqual(original)
    expect(copy).toBe(original) // Ensure it's a primitive value, not a reference
  })
})
