const nodemailer = require('nodemailer');

// Configure the email transport using a SMTP server
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Function to send an email
const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
    };

    return transporter.sendMail(mailOptions)
        .then(info => ({ success: true, info }))
        .catch(error => ({ success: false, error }));
};

module.exports = { sendEmail };