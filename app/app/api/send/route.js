import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const { name, email, message } = await req.json();

    try {
        const data = await resend.emails.send({
            from: 'sakshishetty.dev',
            to: 'shettysakshi2002@gmail.com',
            subject: `New message from ${name}`,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return Response.json({ success: true, data });
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
