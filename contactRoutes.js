import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

// POST CONTACT FORM
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1. Save to DB
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // 2. Email send setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: "kishcode01@gmail.com",
      subject: subject,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;