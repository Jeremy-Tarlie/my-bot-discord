

var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
    var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "5b89ebd2adee97",
          pass: "4ce0693f3f1759"
        }
      });

  var mailOptions = {
    from: 'khraii@outlook.fr',
    to: "contact@tarlie.fr",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
};

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}