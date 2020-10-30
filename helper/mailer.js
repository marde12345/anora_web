const nodemailer = require("nodemailer")
const mustache = require("mustache")
const fs = require("fs")

module.exports = {
    async sendMailRegister(payload) {
        var template = fs.readFileSync('./helper/template_mail_coba.html', 'utf-8');
        const config = {
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        };

        const transporter = await nodemailer.createTransport(config);
        const mail = {
            to: payload.to,
            from: process.env.EMAIL,
            subject: payload.contentSubject,
            html: mustache.render(template, { ...payload })
        };
        transporter.sendMail(mail);
    }
};