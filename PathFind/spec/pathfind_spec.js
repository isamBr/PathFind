const {pathfind} = require('../pathfind')

describe('Pathfind', () => {
  it('start and end the same', () => {
    const A = [
      [true, true, true, true, true],
      [true, false, false, false, true],
      [true, true, true, true, true],
      [true, true, true, true, true],
      [true, true, true, true, true]
    ]
    const P = [0, 0]
    const Q = [0, 0]
    expect(pathfind(A, P, Q)).toBe(0)
  })

  it('example case1', () => {
    const A = [
      [true, true, true, true, true],
      [true, false, false, false, true],
      [true, true, true, true, true],
      [true, true, true, true, true],
      [true, true, true, true, true]
    ]
    const P = [1, 0]
    const Q = [2, 3]
    expect(pathfind(A, P, Q)).toBe(6)
  })

   it('example case2', () => {
    const A = [
      [true, true, true, true, true],
      [true, false, false, false, true],
      [true, true, true, true, true],
      [true, true, true, true, true],
      [true, true, true, true, true]
    ]
    const P = [0, 0]
    const Q = [2, 3]
    expect(pathfind(A, P, Q)).toBe(5)
  })

	
	it('example case3', () => {
    const A = [
      [true, true, true, true, true],
      [false, false, false, false, true],
      [true, true, true, true, true],
      [true, true, true, true, true],
      [true, true, true, true, true]
    ]
    const P = [1, 0]
    const Q = [2, 3]
    expect(pathfind(A, P, Q)).toBe(8)
  })
 
})
