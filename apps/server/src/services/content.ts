import { prisma } from '~/prisma'

class CmsService {
  //* Read
  getContent = async (sysname: string) => {
    const data = await prisma.cms.findFirstOrThrow({
      where: {
        sysname,
      },
    })

    return data.value
  }
}

export { CmsService }
