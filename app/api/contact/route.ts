import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();
    console.log(name, email, subject, message);
    // // Validate required fields
    // if (!name || !email || !subject || !message) {
    //   return NextResponse.json(
    //     { error: 'All fields are required' },
    //     { status: 400 }
    //   );
    // }

    // // Validate email format
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   return NextResponse.json(
    //     { error: 'Invalid email format' },
    //     { status: 400 }
    //   );
    // }

    // // Create transporter (using Gmail as example - you would configure this with your actual email service)
    // const transporter = nodemailer.createTransporter({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER || 'your-email@gmail.com',
    //     pass: process.env.EMAIL_PASSWORD || 'your-app-password',
    //   },
    // });

    // // Email content
    // const mailOptions = {
    //   from: process.env.EMAIL_USER || 'your-email@gmail.com',
    //   to: 'hello@arteriodesign.com', // Your business email
    //   subject: `New Contact Form Submission: ${subject}`,
    //   html: `
    //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    //       <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
    //         New Contact Form Submission
    //       </h2>
          
    //       <div style="margin: 20px 0; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
    //         <p><strong>Name:</strong> ${name}</p>
    //         <p><strong>Email:</strong> ${email}</p>
    //         <p><strong>Subject:</strong> ${subject}</p>
    //       </div>
          
    //       <div style="margin: 20px 0;">
    //         <h3 style="color: #374151;">Message:</h3>
    //         <div style="padding: 15px; background-color: #ffffff; border-left: 4px solid #f97316; border-radius: 4px;">
    //           ${message.replace(/\n/g, '<br>')}
    //         </div>
    //       </div>
          
    //       <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
    //         <p>This message was sent from the Arterio Design Studio contact form.</p>
    //         <p>Reply directly to this email to respond to the client.</p>
    //       </div>
    //     </div>
    //   `,
    // };

    // // Auto-reply to the client
    // const autoReplyOptions = {
    //   from: process.env.EMAIL_USER || 'your-email@gmail.com',
    //   to: email,
    //   subject: 'Thank you for contacting Arterio Design Studio',
    //   html: `
    //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    //       <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
    //         Thank you for your message!
    //       </h2>
          
    //       <p style="font-size: 16px; line-height: 1.6;">Hi ${name},</p>
          
    //       <p style="font-size: 16px; line-height: 1.6;">
    //         Thank you for reaching out to Arterio Design Studio. We've received your message and will get back to you within 24 hours.
    //       </p>
          
    //       <div style="margin: 20px 0; padding: 20px; background-color: #fef3e8; border-radius: 8px; border-left: 4px solid #f97316;">
    //         <p style="margin: 0; font-weight: 500;">Your message:</p>
    //         <p style="margin: 10px 0 0 0; font-style: italic;">"${subject}"</p>
    //       </div>
          
    //       <p style="font-size: 16px; line-height: 1.6;">
    //         In the meantime, feel free to explore our portfolio at our website or follow us on social media for design inspiration.
    //       </p>
          
    //       <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
    //         <p style="font-weight: 500;">Best regards,</p>
    //         <p>The Arterio Design Studio Team</p>
    //         <p style="color: #6b7280; font-size: 14px;">
    //           📞 +1 (555) 123-4567<br>
    //           📧 hello@arteriodesign.com<br>
    //           📍 123 Design Street, Creative City
    //         </p>
    //       </div>
    //     </div>
    //   `,
    // };

    // Send both emails
    // await Promise.all([
    //   transporter.sendMail(mailOptions),
    //   transporter.sendMail(autoReplyOptions),
    // ]);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}