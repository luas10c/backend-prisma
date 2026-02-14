import type { Application } from 'express'

import { prisma } from './database/prisma'

export function router(app: Application) {
  app.get('/', async function (request, response) {
    const data = await prisma.fact.findMany()

    return void response.status(200).json({
      statusCode: 200,
      data
    })
  })
}
