import nodemailer from 'nodemailer'


// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Wrap in an async IIFE so we can use await.
const sendEmail = async ({to,subject,body}) => {
  const response = await transporter.sendMail({
    from: process.env.SENDER_EMAIL,
    to,
    subject,
    html: body, // HTML body
  })
  return response
};

export default sendEmail