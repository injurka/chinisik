import HSKLevel1 from '../../../data/hsk/level-1.json'

function mockHsk() {
  return HSKLevel1.map(m => ({ ...m, level: 1 }))
}

export { mockHsk }
