const nodemailer = require("nodemailer")

module.exports = {
    async sendMailRegister(payload) {
        const config = {
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        };
        console.log(config);

        const transporter = await nodemailer.createTransport(config);
        const mail = {
            to: payload.to,
            from: process.env.EMAIL,
            subject: payload.contentSubject,
            html: payload.contentMessage
        };
        transporter.sendMail(mail);
    }
};