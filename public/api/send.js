

var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
    var transporter = nodemailer.createTransport({
        service: "Outlook365",
        host: "smtp.office365.com",
        port: 2525,
        auth: {
          user: "*******",
          pass: "*******"
        }
      });

  var mailOptions = {
    from: 'test@test.fr',
    to: "test@test.fr",
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
