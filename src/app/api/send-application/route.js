import nodemailer from 'nodemailer';

export async function POST(req) {
  const formData = await req.formData();
  const email = formData.get('email');
  const name = formData.get('name');
  const experience = formData.get('experience');
  const message = formData.get('message');
  const cv = formData.get('cv'); // This is a file
  const gender = formData.get('gender');
  const ethnicity = formData.get('ethnicity');
  const veteranStatus = formData.get('veteranStatus');
  const disability = formData.get('disability');

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // Your email
      pass: process.env.EMAIL_PASS,  // Your email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'shubham@useoncare.com', // Where the form will be sent
    subject: `New Application from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Experience: ${experience}
      Message: ${message}
      Gender: ${gender}
      Ethnicity: ${ethnicity}
      Veteran Status: ${veteranStatus}
      Disability Status: ${disability}
    `,
    attachments: [
      {
        filename: cv.name,
        path: cv.path,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    return new Response('Email failed to send', { status: 500 });
  }
}