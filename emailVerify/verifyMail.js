import nodemailer from "nodemailer";
import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import handlebars from "handlebars";    


const _fileName = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_fileName)

export const verifyMail = async (token, email) =>{

    const emailTemplateSource = fs.readFileSync(
        path.join(_dirname, "template.hbs"),
        "utf-8"
    )
    const template = handlebars.compile(emailTemplateSource);
    const htmlToSend = template({token: encodeURIComponent(token)});
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })


    const mailConfiguration = {
        from : process.env.MAIL_USER,
        to: email,
        subject: "Email Verification",
        html: htmlToSend
    }


    transporter.sendMail(mailConfiguration, function(error, info){
        if(error){
            throw new Error(error)
        }
        console.log("Email sent Successfully")
        console.log(info);
        
    })

}
