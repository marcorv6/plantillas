require('../config/config');

const send = require('gmail-send')({
  user: process.env.GMAIL,
  pass: process.env.GMAILPASSWORD,
});

const gmail = (subject, to, text) => {
  return new Promise((resolve, reject) => {
    send({ subject, to, text }, (error, result, fullResult) => {
      if (error) reject(error);
      console.log(fullResult);
      resolve(result);
    });
  });
};

module.exports = gmail;
