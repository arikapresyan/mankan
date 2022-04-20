/* eslint-disable no-console */
const nodeMailer = require('nodemailer');
const path = require('path');


const mailer = nodeMailer.createTransport({
  service: 'yandex',
  auth: {
    user: process.env.EMAIL || 'contact@mankan.am',
    pass: process.env.EMAILPASS || 'contactadmin',
  },
});
const mailOptions = {
  from: process.env.EMAIL || 'contact@mankan.am',
  to: '',
  subject: 'Mankan Crone Info',
  secure: false, // use SSL
  port: 25, // port for secure SMTP
  auth: {
    user: process.env.EMAIL || 'contact@mankan.am',
    pass: process.env.EMAILPASS || 'contactadmin',
  },
  tls: {
    rejectUnauthorized: false,
  },
};


class MailerHelper {
  constructor() {
    this.sendCroneInfo = this.sendCroneInfo.bind(this);
    this.mailer = mailer;
    // this.mailOptions = mailOptions;
  }


  async sendCroneInfo(email, type) {
    try {
      mailOptions.to = email;
      // mailOptions.to = "gagik.petrosyan90@gmail.com";

      if (type === 'error') {
        mailOptions.text = 'Mankan Crone is not working';
      } else if (type === 'success') {
        mailOptions.text = 'Mankan Crone is working successfully';
      } else {
        throw new Error('invalid type for email');
      }

      setTimeout(() => {
        this.mailer.sendMail(mailOptions, (error) => {
          if (error) {
            throw error;
          }
        });
      }, 0);


      return true;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new MailerHelper();
