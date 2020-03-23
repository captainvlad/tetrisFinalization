const TYPE_COLORS = {
  //Added rotations and coordinates
  "L": 'red',
  "LL": 'red',
  "LLL": 'red',
  "LLLL": 'red',
  "T": 'purple',
  "TT": 'purple',
  "TTT": 'purple',
  "TTTT": 'purple',
  "I": 'green',
  "II": 'green'
}

const INITIAL_POSITIONS = {
  "L": [[9, 1], [8, 1], [8, 2], [8, 3]],
  "LL": [[9,1], [8,1], [7,1], [9,2]],
  "LLL": [[9,2], [8,2], [7,2], [7,1]],
  "LLLL": [[9,1], [9,2], [9,3], [8,3]],
  "T": [[9, 1], [9, 2], [9, 3], [8, 2]],
  "TT": [[7, 3], [9, 3], [8, 3], [8, 2]],
  "TTT": [[7, 2], [8, 2], [8, 3], [9, 2]],
  "TTTT": [[8, 1], [8, 2], [8, 3], [9, 2]],
  "I": [[9, 2], [8, 2], [7, 2]],
  "II": [[9, 1], [9, 2], [9, 3]]
}

// Event keys
const DOWN  = 40;
const LEFT  = 37;
const RIGHT = 39;
const PAUSE = 32;