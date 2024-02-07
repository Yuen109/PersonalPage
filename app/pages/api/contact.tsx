// "use server";
// // pages/api/contact.ts
// import type { NextApiRequest, NextApiResponse } from "next";

// type MailData = {
//   subject: string;
//   body: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     try {
//       const { firstName, lastName, email, message } = req.body;

//       // Customize the email subject and body as needed
//       const mailData: MailData = {
//         subject: `${lastName}'s Inquiry`,
//         body: `Hi,\n\nMy name is ${firstName} ${lastName}.\n\nMessage: ${message}\n\nEmail: ${email}`,
//       };

//       // Send the email using a server or API
//       // Example: You can use a third-party service like SendGrid, Nodemailer, etc.
//       // Implement your email sending logic here...

//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// }
// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type MailData = {
  subject: string;
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { firstName, lastName, email, message } = req.body;

      // Customize the email subject and body as needed
      const mailData: MailData = {
        subject: `${lastName}'s Inquiry`,
        body: `Hi,\n\nMy name is ${firstName} ${lastName}.\n\nMessage: ${message}\n\nEmail: ${email}`,
      };

      // Use Nodemailer to send the email
      const transporter = nodemailer.createTransport({
        service: "Gmail", // You can replace it with your email service provider
        auth: {
          user: "yuenwork109@gmail.com", // Replace with your email
          pass: "", // Replace with your email password
        },
      });

      const mailOptions = {
        from: email, // Use the sender's email as 'from'
        to: "yuenwork109@gmail.com", // Replace with the recipient's email
        subject: mailData.subject,
        text: mailData.body,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
