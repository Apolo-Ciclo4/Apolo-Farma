const nodemailer = require("nodemailer")

const sendEmail = async options => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "0712cb13affd06",
            pass: "185b652065732b"
        }
    });
    const mensaje={
        from: "Apolo Farma <apolofarma@gmail.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports = sendEmail;