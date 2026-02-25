export const dynamic = 'force-dynamic';
// you can also export `runtime = 'edge'` if needed, but default nodejs works here

import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// create reusable transporter using SMTP credentials from environment
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  service: "Gmail",
  port: 587,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  projectType: z.string().min(1),
  message: z.string().min(10),
});

// respond to OPTIONS (CORS preflight) and other methods gracefully
export function OPTIONS() {
  // allow any origin or restrict as needed
  return new NextResponse(null, { status: 200 });
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function POST(request: NextRequest) {
  console.log('contact API invoked with method', request.method);

  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const { name, email, phone, projectType, message } = validatedData;

    // build html body for email
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #d4af37;">New Contact Form Submission</h2>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        </div>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Project Details</h3>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>

        <p style="color: #666; font-size: 14px;">
          This email was sent from the Arterio Bim Solution contact form.
        </p>
      </div>
    `;

    // send mail with defined transport object
    const mailOptions = {
      from: process.env.EMAIL_FROM || email,
      to: process.env.EMAIL_TO || 'dshivam111213@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: htmlBody,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (mailError) {
      console.error('Failed to send email:', mailError);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form', details: (error as Error).message },
      { status: 500 }
    );
  }
}