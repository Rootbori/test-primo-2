import { describe, it, expect } from 'vitest'
import { merge } from '../src/merge'

describe('merge', () => {
  it('merges three collections into ascending order', () => {
    const a = [9, 5, 1]
    const b = [0, 2, 4]
    const c = [3, 6, 7]
    expect(merge(a, b, c)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9])
  })

  it('handles empty arrays', () => {
    expect(merge([], [], [])).toEqual([])
    expect(merge([3, 2, 1], [], [])).toEqual([1, 2, 3])
    expect(merge([], [0, 1], [])).toEqual([0, 1])
    expect(merge([], [], [0, 1])).toEqual([0, 1])
  })

  it('handles duplicates', () => {
    const a = [5, 5, 3]
    const b = [0, 0, 3]
    const c = [3, 5, 5]
    expect(merge(a, b, c)).toEqual([0, 0, 3, 3, 3, 5, 5, 5, 5])
  })

  it('handles negative values', () => {
    const a = [2, -1, -3]
    const b = [-2, 0, 4]
    const c = [-4, -1, 1]
    expect(merge(a, b, c)).toEqual([-4, -3, -2, -1, -1, 0, 1, 2, 4])
  })
})