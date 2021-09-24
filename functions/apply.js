const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  const userName = event.queryStringParameters.userName;
  const userEmail = event.queryStringParameters.userEmail;
  const userPhone = event.queryStringParameters.userPhone;
  const userPosition = event.queryStringParameters.userPosition;
  const userIntro = event.queryStringParameters.userIntro;

  const { USER, PASS } = process.env;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: USER,
      pass: PASS,
    },
  });

  await transporter.sendMail({
    from: `${userName}`, // sender address
    to: "careers@livingsolutions.com.pk", // list of receivers
    subject: `Job Application from ${userName}`, // Subject line
    text: `\nName: ${userName} \n
    Email: ${userEmail} \n
    Phone: ${userPhone} \n
    Position Applied for: ${userPosition} \n
    Brief Intro: ${userIntro} \n`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ previewURL: "message sent" }),
    headers: {
      "access-control-allow-origin": "*",
    },
  };
};
