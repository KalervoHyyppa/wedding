
const express = require("express");

const app = express();

const PORT = 5001;

app.get("/", (req, res) => {
    sendEmail()
    res.json({ message: "Hello World" });
})

app.get("/health-check", (req, res) => {
    res.json({ message: "Server up and running" });
})

app.post('/rsvp', (req, res) => {

    const requester = '';
    const password = '';

    if (!requester || !password) {
        throw new Error('No requester or password')
    }

    // Check to see password match
    const passwordMatch = true;

    if (!passwordMatch) {
        throw new Error('Wrong Password')
    }



    res.send('RSVP success')
})

app.listen(PORT, () => {
    console.log("Server Running on PORT", PORT);
})


const nodemailer = require("nodemailer");

const sendEmail = async () => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "kalervohyyppa@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}