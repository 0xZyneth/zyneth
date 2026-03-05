import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, interests } = body

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'firstName, lastName, and email are required' },
        { status: 400 },
      )
    }

    const apiUrl = process.env.WAITLIST_API_URL

    if (apiUrl) {
      const res = await fetch(`${apiUrl}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, interests }),
      })
      const data = await res.json()
      return NextResponse.json(data, { status: res.status })
    }

    // Fallback: just acknowledge if no API backend configured
    return NextResponse.json(
      { message: 'Added to waitlist (no backend configured)' },
      { status: 201 },
    )
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
