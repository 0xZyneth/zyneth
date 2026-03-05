import { drizzle } from 'drizzle-orm/postgres-js'
import * as schema from './schema/index'

export * from 'drizzle-orm'
export * from './schema/index'

function createDb(databaseUrl: string) {
  return drizzle(databaseUrl, { schema })
}

type Db = ReturnType<typeof createDb>

export { createDb, type Db }
