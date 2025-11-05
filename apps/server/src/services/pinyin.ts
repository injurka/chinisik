import { prisma } from '~/prisma'

class PinyinService {
  getPinyin = async () => {
    const initials = await prisma.pinyinInitial.findMany({
      select: {
        id: true,
        name: true,
        pos: true,
      },
    })

    const finals = await prisma.pinyinFinal.findMany({
      select: {
        id: true,
        name: true,
        pos: true,
      },
    })

    const initialsFinals = await prisma.pinyinInitialsFinals.findMany({
      include: {
        initial: true,
        finalTone: {
          include: {
            final: true,
          },
        },
      },
    })

    const initialWithFinal: { [key: string]: number[] } = {}

    initialsFinals.forEach((initFinal) => {
      const initial = initFinal.initial
      const finalTone = initFinal.finalTone

      if (initial && finalTone) {
        const final = finalTone.final
        if (final) {
          const key = `${initial.name}+${final.name}`

          if (!initialWithFinal[key]) {
            initialWithFinal[key] = []
          }
          const tones = initialWithFinal[key]
          if (!tones.includes(finalTone.toneType)) {
            tones.push(finalTone.toneType)
          }
        }
      }
    })

    return {
      initials,
      finals,
      initialWithFinal,
    }
  }
}

export { PinyinService }
