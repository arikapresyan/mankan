/* eslint-disable no-console */
const nodemailer = require('nodemailer');

const path = require('path');
const fs = require('fs');

const mailer = nodemailer.createTransport({
  service: 'yandex',
  auth: {
    user: process.env.EMAIL || 'contact@mankan.am',
    pass: process.env.EMAILPASS || 'contactadmin',
  },

});


// changed by Gago
const mailOptions = {
  from: process.env.EMAIL || '"www.mankan.am" <contact@mankan.am>',
  to: '',
  subject: 'CV from Mankan webPage',
  text: 'I will change the text in the end',
  secure: false, // use SSL
  port: 25, // port for secure SMTP
  auth: {
    user: process.env.EMAIL || 'contact@mankan.am',
    pass: process.env.EMAILPASS || 'contactadmin',
  },
  // tls: {
  //   rejectUnauthorized: false,
  // },
};

class MailerHelper {
  constructor() {
    this.sendOnlineCV = this.sendOnlineCV.bind(this);
    this.mailer = mailer;
    this.mailOptions = mailOptions;
  }


  async sendOnlineCV(cvPath, title, imgPath, next) {
    try {
      // mailOptions.to = 'gagik.petrosyan90@gmail.com';
      mailOptions.to = 'hr@mankan.am';
      mailOptions.text = title;
      mailOptions.attachments = [{ filename: imgPath, path: cvPath }];
      console.log(mailOptions)
      this.mailer.sendMail(mailOptions, (error, info) => {
        if (error) {
          const err = new Error('error in cv sending');
          err.statusCode = 400;
          throw err;
        }
        if (fs.existsSync(path.join(__dirname, '../', '../', cvPath))) {
          fs.unlinkSync(path.join(__dirname, '../', '../', cvPath));
        }
        return info;
      });

      return true;
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = new MailerHelper();
