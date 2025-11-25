export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  const n1 = collection_1.length
  const n2 = collection_2.length
  const n3 = collection_3.length
  const result: number[] = []
  let i1 = n1 - 1
  let i2 = 0
  let i3 = 0
  while (i1 >= 0 || i2 < n2 || i3 < n3) {
    const v1 = i1 >= 0 ? collection_1[i1] : Infinity
    const v2 = i2 < n2 ? collection_2[i2] : Infinity
    const v3 = i3 < n3 ? collection_3[i3] : Infinity
    if (v1 <= v2 && v1 <= v3) {
      result.push(v1)
      i1 -= 1
    } else if (v2 <= v1 && v2 <= v3) {
      result.push(v2)
      i2 += 1
    } else {
      result.push(v3)
      i3 += 1
    }
  }
  return result
}