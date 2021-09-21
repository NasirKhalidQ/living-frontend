const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  const userName = event.queryStringParameters.userName;
  const userEmail = event.queryStringParameters.userEmail;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "accusoft.mailer@gmail.com",
      pass: "lucygray2468A!",
    },
  });

  let info = await transporter.sendMail({
    from: "Nasir Khalid", // sender address
    to: "nasir.khalid.new@gmail.com", // list of receivers
    subject: "Email from Nasir Khalid", // Subject line
    text: `Name registered: ${userName}, email registered: ${userEmail}`,
  });

  console.log("Message sent: %s", info.messageId);

  return {
    statusCode: 200,
    body: JSON.stringify({ previewURL: "message sent" }),
  };
};
