import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { verifyTurnstile } from '@/lib/turnstile'

const schema = z.object({
    name:         z.string().min(1, 'Name is required'),
    company:      z.string().optional(),
    email:        z.email('Invalid email'),
    practiceArea: z.string().min(1, 'Please select a practice area'),
    message:      z.string().min(10, 'Message must be at least 10 characters'),
    cfToken:      z.string().min(1, 'Missing Turnstile token'),
})

export async function POST(req: NextRequest) {
    let body: unknown
    try {
        body = await req.json()
    } catch {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
    }

    const result = schema.safeParse(body)
    if (!result.success) {
        return NextResponse.json({ error: result.error.issues }, { status: 422 })
    }

    const { cfToken, ...data } = result.data

    // ── Turnstile verification
    if (!await verifyTurnstile(cfToken)) {
        return NextResponse.json({ error: 'Turnstile verification failed' }, { status: 400 })
    }

    // ── Console (dev)
    console.log('[Contact Form Submission]', data)

    // ── Database (Prisma)
    // import { prisma } from '@/lib/prisma'
    // await prisma.enquiry.create({
    //     data: {
    //         name:         data.name,
    //         company:      data.company ?? null,
    //         email:        data.email,
    //         practiceArea: data.practiceArea,
    //         message:      data.message,
    //     },
    // })

    // ── Email (Resend)
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //     from:    'website@dejudom.com',
    //     to:      'dej-udom@dejudom.com',
    //     subject: `New enquiry from ${data.name} — ${data.practiceArea}`,
    //     text: [
    //         `Name: ${data.name}`,
    //         `Company: ${data.company ?? '—'}`,
    //         `Email: ${data.email}`,
    //         `Practice Area: ${data.practiceArea}`,
    //         `Message:\n${data.message}`,
    //     ].join('\n'),
    // })

    return NextResponse.json({ success: true })
}
