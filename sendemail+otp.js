const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// for testing purpose for now use {} to store
const otpStore = {}; // this is to show like => { "email": { otp: 123456, expires: Date } }

// Nodemailer settings()
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "wkeattea@gmail.com",
        pass: "lqqpktppdsmfvulv" // Change to ur own App Password
    }
});
// generate the six OTp for you(random)
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}
// send OTP to your email
app.post("/send-otp", (req, res) => {
    const { email } = req.body;
    const otp = generateOTP();
    const expires = Date.now() + 5 * 60 * 1000; // 5 mins valid only, can change the time also

    otpStore[email] = { otp, expires };

    const mailOptions = {
        from: "wkeattea@gmail.com",
        to: email,
        subject: "Your 2FA Code from Wei Yang",
        html: `<h2>Your 2FA Code:</h2><h1>${otp}</h1><p>Expires in 5 minutes</p>`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Failed to send email" });
        }
        console.log("Email sent:", info.response);
        return res.json({ message: "OTP sent" });
    });
});

// ensure the input opt is == generate opt and is not expires yet)
app.post("/verify-otp", (req, res) => {
    const { email, otp } = req.body;
    const record = otpStore[email];

    if (!record) return res.status(400).json({ message: "No OTP sent" });
    if (Date.now() > record.expires) return res.status(400).json({ message: "OTP expired" });
    if (Number(otp) !== record.otp) return res.status(400).json({ message: "Incorrect OTP" });


    // delete the otp and allow them to login to next page
    delete otpStore[email];
    res.json({ message: "OTP verified" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
