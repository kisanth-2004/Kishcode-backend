// import express from "express";
// import Contact from "../models/Contact.js";
// import nodemailer from "nodemailer";

// const router = express.Router();

// // POST CONTACT FORM
// router.post("/", async (req, res) => {
//   try {
//     const { name, email, subject, message } = req.body;

//     // 1. Save to DB
//     const contact = await Contact.create({
//       name,
//       email,
//       subject,
//       message,
//     });

//     // 2. Email send setup
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: email,
//       to: "kishcode01@gmail.com",
//       subject: subject,
//       text: `
// Name: ${name}
// Email: ${email}
// Message: ${message}
//       `,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Message sent successfully",
//       contact,
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// export default router;





// import express from "express";
// import Contact from "../models/Contact.js";
// import nodemailer from "nodemailer";

// const router = express.Router();

// // POST CONTACT FORM
// router.post("/", async (req, res) => {
//   try {
//     console.log("Contact API Hit");
//     console.log(req.body);

//     const { name, email, subject, message } = req.body;

//     const contact = await Contact.create({
//       name,
//       email,
//       subject,
//       message,
//     });

//     console.log("DB Save Success");

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     console.log("Email User:", process.env.EMAIL_USER);
//     console.log("Email Pass Exists:", !!process.env.EMAIL_PASS);

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       replyTo: email,
//       to: "kishcode01@gmail.com",
//       subject,
//       text: `
// Name: ${name}
// Email: ${email}
// Message: ${message}
// `,
//     });

//     console.log("Email Sent Successfully");

//     res.status(201).json({
//       success: true,
//       message: "Message sent successfully",
//     });
//   } catch (error) {
//     console.error("CONTACT ERROR:", error);

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });
// export default router;



import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

// POST CONTACT FORM
router.post("/", async (req, res) => {
  try {
    console.log("Contact API Hit");
    console.log(req.body);

    const { name, email, subject, message } = req.body;

    // Save to MongoDB
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    console.log("DB Save Success");

    // Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      family: 4, // Force IPv4
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("Email User:", process.env.EMAIL_USER);
    console.log("Email Pass Exists:", !!process.env.EMAIL_PASS);

    // Verify SMTP Connection
    await transporter.verify();
    console.log("SMTP Connected");

    // Send Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: "kishcode01@gmail.com",
      subject: subject,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    console.log("Email Sent Successfully");

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact,
    });
  } catch (error) {
    console.error("CONTACT ERROR:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router;