import { createDb, waitlist } from '@zyneth/database'

const db = createDb(process.env.DATABASE_URL!)

const server = Bun.serve({
  port: Number(process.env.PORT) || 3001,

  async fetch(req) {
    const url = new URL(req.url)

    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': process.env.CORS_ORIGIN || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders })
    }

    if (url.pathname === '/api/waitlist' && req.method === 'POST') {
      try {
        const body = (await req.json()) as {
          firstName?: string
          lastName?: string
          email?: string
          interests?: string
        }
        const { firstName, lastName, email, interests } = body

        if (!firstName || !lastName || !email) {
          return Response.json(
            { error: 'firstName, lastName, and email are required' },
            { status: 400, headers: corsHeaders },
          )
        }

        const result = await db
          .insert(waitlist)
          .values({ firstName, lastName, email, interests })
          .onConflictDoNothing({ target: waitlist.email })
          .returning()

        if (result.length === 0) {
          return Response.json(
            { message: 'Already on the waitlist' },
            { status: 200, headers: corsHeaders },
          )
        }

        return Response.json(
          { message: 'Added to waitlist', id: result[0].id },
          { status: 201, headers: corsHeaders },
        )
      } catch {
        return Response.json(
          { error: 'Internal server error' },
          { status: 500, headers: corsHeaders },
        )
      }
    }

    if (url.pathname === '/health') {
      return Response.json({ status: 'ok' }, { headers: corsHeaders })
    }

    return Response.json(
      { error: 'Not found' },
      { status: 404, headers: corsHeaders },
    )
  },
})

// biome-ignore lint/suspicious/noConsole: startup log
console.log(`Waitlist API running on port ${server.port}`)
