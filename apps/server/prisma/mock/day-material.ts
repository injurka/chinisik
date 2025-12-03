import mockDayMaterialJSON from '../../data/day-material/day-material.json'

export function mockDayMaterial() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1)


  return [
    {
      ...mockDayMaterialJSON[0],
      date: today,
    },
    {
      ...mockDayMaterialJSON[1],
      date: tomorrow,
    },
  ]
}
