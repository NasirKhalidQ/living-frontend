const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  const userName = event.queryStringParameters.userName;
  const userEmail = event.queryStringParameters.userEmail;
  const userPhone = event.queryStringParameters.userPhone;
  const userCategory = event.queryStringParameters.userCategory;
  const userMessage = event.queryStringParameters.userMessage;

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
    from: `${userName}`, // sender address
    to: "nasir.khalid.new@gmail.com", // list of receivers
    subject: `Email from ${userEmail}`, // Subject line
    text: `Name: ${userName} \n
    Email: ${userEmail} \n
    Phone: ${userPhone} \n
    Category: ${userCategory} \n
    Message: ${userMessage} \n`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ previewURL: "message sent" }),
  };
};
