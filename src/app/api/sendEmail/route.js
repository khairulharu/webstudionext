import nodemailer from 'nodemailer';



export async function POST(request) {
  try {
    const { email, name, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail', // atau sesuaikan dengan provider email Anda
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL, // Email Anda
      subject: `Pesan dari ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email.' }), { status: 500 });
  }
}