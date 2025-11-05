import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendVerificationCode(email: string, code: string) {
  return await resend.emails.send({
    from: 'injurka@gmail.com',
    to: [email],
    subject: 'Verification code',
    html: `<h1> ${code} </p>`,
  })
}
