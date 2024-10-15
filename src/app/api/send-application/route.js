import nodemailer from 'nodemailer';

export async function POST(req) {
  const formData = await req.formData();
  const email = formData.get('email');
  const name = formData.get('name');
  const experience = formData.get('experience');
  const message = formData.get('message');
  const cv = formData.get('cv'); // This is a File object, not a path
  const gender = formData.get('gender');
  const ethnicity = formData.get('ethnicity');
  const veteranStatus = formData.get('veteranStatus');
  const disability = formData.get('disability');
  const role = formData.get('role');

  const firstName = name.split(' ')[0];

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // Your email
      pass: process.env.EMAIL_PASS,  // Your email password
    },
  });

  // Convert the file into a buffer (since we don't have a file path)
  const fileBuffer = await cv.arrayBuffer();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'shubham@useoncare.com', // Where the form will be sent
    subject: `New Application from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Role: ${role}
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
        content: Buffer.from(fileBuffer), // Use Buffer to send file content
      },
    ],
  };

  const mailOptionsToUser = {
    from: process.env.EMAIL_USER,
    to: email,  // User's email
    subject: 'Thank you for your application!',
    text: `
      Hi ${firstName},

      Thank you for submitting your application to Oncare for the role: ${role}. We have received your details and we're excited to take a look at your application and will get back to you as soon as possible!

      Best regards,
      Oncare Team
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptionsToUser);
    
    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response('Email failed to send', { status: 500 });
  }
}
