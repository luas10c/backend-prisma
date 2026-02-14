import { defineConfig, env } from 'prisma/config'
import { config } from 'dotenv'
import { join } from 'node:path'

config({
  path: join(import.meta.dirname, '.env.local'),
  quiet: true
})

export default defineConfig({
  schema: 'src/database/schema.prisma',
  migrations: {
    path: 'src/database/migrations'
  },
  datasource: {
    url: env('DATABASE_URL')
  }
})
