// server.js
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/send-email', async(req, res) => {
    const { name, phone } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'romanbiznesssmen@gmail.com',
            pass: 'gpfm qbzg uccv zajf'
        }
    });

    const mailOptions = {
        from: 'romanbiznesssmen@gmail.com',
        to: 'Agent01w12@gmail.com',
        subject: 'Нова заявка з сайту v12-auto.com',
        text: `Ім'я: ${name}\nТелефон: ${phone}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});