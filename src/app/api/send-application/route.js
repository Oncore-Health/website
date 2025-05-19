import nodemailer from 'nodemailer';
import { supabase } from '@/lib/supabase';

export async function POST(req) {
  const formData = await req.formData();
  const email = formData.get('email');
  const name = formData.get('name');
  const phone = formData.get('phone');
  const company = formData.get('company');
  const linkedin = formData.get('linkedin');
  const github = formData.get('github');
  const portfolio = formData.get('portfolio');
  const experience = formData.get('experience');
  const message = formData.get('message');
  const cv = formData.get('cv'); // This is a File object
  const gender = formData.get('gender');
  const ethnicity = formData.get('ethnicity');
  const veteranStatus = formData.get('veteranStatus');
  const disability = formData.get('disability');
  const role = formData.get('role');

  const firstName = name.split(' ')[0];

  try {
    // 1. Save CV to Supabase Storage
    const fileBuffer = await cv.arrayBuffer();
    const fileName = `${Date.now()}-${cv.name}`;
    const { data: fileData, error: fileError } = await supabase.storage
      .from('job-applications')
      .upload(fileName, fileBuffer, {
        contentType: cv.type,
        cacheControl: '3600'
      });

    if (fileError) {
      console.error('Error uploading file:', fileError);
      throw new Error('Failed to upload CV');
    }

    // 2. Save application data to Supabase
    const { data: applicationData, error: dbError } = await supabase
      .from('job_applications')
      .insert([
        {
          name,
          email,
          phone,
          company,
          linkedin,
          github,
          portfolio,
          experience,
          message,
          cv_url: fileData.path,
          gender,
          ethnicity,
          veteran_status: veteranStatus,
          disability,
          role,
          status: 'new',
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (dbError) {
      console.error('Error saving to database:', dbError);
      throw new Error('Failed to save application');
    }

    // 3. Send emails
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sruthi@useoncare.com',
      subject: `${role}: ${name} Application`,
      text: `A new application has been submitted for ${role} on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}.

Please find the candidate's details below and their resume attached.

Name: ${name}
Email: ${email}
Phone: ${phone}
Role: ${role}
Company: ${company}
LinkedIn: ${linkedin}
GitHub: ${github}
Portfolio: ${portfolio}
Experience: ${experience}
Message: ${message}
Gender: ${gender}
Ethnicity: ${ethnicity}
Veteran Status: ${veteranStatus}
Disability Status: ${disability}

Application ID: ${applicationData[0].id}`,
      attachments: [
        {
          filename: cv.name,
          content: Buffer.from(fileBuffer),
        },
      ],
    };

    const mailOptionsToUser = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for your application!',
      text: `Hi ${firstName},

Thank you for submitting your application to Oncare for the role: ${role}. We have received your details and we're excited to take a look at your application and will get back to you as soon as possible!

Best regards,
Oncare Team`,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptionsToUser);
    
    return new Response('Application submitted successfully', { status: 200 });
  } catch (error) {
    console.error('Error processing application:', error);
    return new Response('Failed to process application', { status: 500 });
  }
}
