const nodemailer = require("nodemailer");

const sendEmail = async (to, messageContent) => {
  try {
    //create transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "parramexi5@gmail.com",
        pass: "hlon oujy pkzw alvi",
      },
    });
    //message objt
    const message = {
      to,
      subject: "New Message From nodeMailer App",
      html: `
            <h3> You have received anew message from nodemailer APP</h3>
            <p>${messageContent}</p>
            `,
    };

    //send the email
    const info = await transporter.sendMail(message);
    console.log("Message send", info.messageId);
  } catch (error) {
    console.error(error);
    throw new Error("Email coould not be sent");
  }
};

module.exports = sendEmail;
