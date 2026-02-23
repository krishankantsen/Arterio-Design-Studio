# Arterio-Design-Studio

This project uses a Next.js API route to handle contact form submissions. To enable email notifications via SMTP, set the following environment variables in your `.env` file or hosting provider:

```env
# SMTP configuration for nodemailer
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false        # true for port 465
EMAIL_USER=your_smtp_user
EMAIL_PASS=your_smtp_password
EMAIL_FROM="Arterio Design Studio <no-reply@yourdomain.com>"  # optional
EMAIL_TO=dshivam111213@gmail.com  # destination address
```

Replace the values with your provider's credentials. The contact form will POST to `/api/contact` and use these variables to send notification emails.

