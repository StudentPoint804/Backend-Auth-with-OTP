import nodemailer from 'nodemailer';
import "dotenv/config";

export const sendOtpMail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })


    const mailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: "Password Reset Otp",
        html: `<p> Your OTP for Password Reset is: <b>${otp}</b>. It is Valid for 30 Mintes </p>`
    }

    await transporter.sendMail(mailOptions)
}