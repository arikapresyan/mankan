/* eslint-disable no-console */
const nodemailer = require('nodemailer');
const path = require('path');
const db = require('../../db');

const { jwtHelper } = require('./jwtHelper');

const mailer = nodemailer.createTransport({
  service: 'yandex',
  auth: {
    user: 'contact@mankan.am',
    pass: 'contactadmin',
  },
});
const codeModel = db.public.users.ConfirmCode;


class MailerHelper {
  constructor() {
    this.sendCode = this.sendCode.bind(this);
    this.sendToUserOrAdmin = this.sendToUserOrAdmin.bind(this);
    this.mailer = mailer;
    this.models = { codeModel };
    // this.mailOptions = mailOptions;
  }

  async sendToUserOrAdmin(email, info, type, res, next) {
    try {
      const mailOptions = {
        from: process.env.EMAIL || '"www.mankan.am" <contact@mankan.am>',
        to: '',
        subject: 'ConfirmationCode',
        html: '<h1>Welcome</h1><p>That was easy!</p>',
        auth: {
          user: process.env.EMAIL || 'contact@mankan.am',
          pass: process.env.EMAILPASS || 'contactadmin',
        },
        // tls: {
        //   rejectUnauthorized: false,
        // },
      };

      let htmlPath;
      if (type === 'UpdatedUserInfo') {
        mailOptions.subject = 'Անձնական տվյալների փոփոխում';
        mailOptions.to = email;
        htmlPath = path.join(__dirname, '../..', '/public/templates/Email_sender_templates/updatedUserInfo.html');
      } else if (type === 'OrderCompleted') {
        mailOptions.subject = 'Պատվերը հաստատված է';
        mailOptions.to = email;
        htmlPath = path.join(__dirname, '../..', '/public/templates/Email_sender_templates/orderCompleted.html');
      } else if (type === 'OrderRejected') {
        mailOptions.subject = 'Պատվերը մերժված է';
        mailOptions.to = email;
        htmlPath = path.join(__dirname, '../..', '/public/templates/Email_sender_templates/orderRejected.html');
      } else if (type === 'ForAdmin') {
        mailOptions.subject = 'Նոր պատվեր';
        mailOptions.to = email;
        htmlPath = path.join(__dirname, '../..', '/public/templates/Email_sender_templates/sendOrderToAdmin.html');
      } else if (type === 'FeedBack') {
        mailOptions.subject = 'Հետադարձ կապ';
        mailOptions.to = email;
        htmlPath = path.join(__dirname, '../..', '/public/templates/Email_sender_templates/feedBack.html');
      } else if (type === 'complain') {
        let title;
        if (info.title === 'complain') {
          title = 'Բողոք';
        } else {
          title = 'Առաջարկ';
        }
        mailOptions.subject = `Նոր ${title}`;
        mailOptions.to = email;
        htmlPath = path.join(__dirname, '../..', '/public/templates/Email_sender_templates/complains.html');
      } else {
        const err = new Error('unexpected type for email');
        err.status = 400;
        return next(err);
      }

      setTimeout(() => {
        res.render(htmlPath, {
          info,
        }, (err, HTML) => {
          if (err) {
            const error = new Error('Something wrong in email when sending updated info');
            error.status = 400;
            throw error;
          }
          mailOptions.html = HTML;
          this.mailer.sendMail(mailOptions, (error) => {
            if (error) {
              throw error;
            }
          });
        });
      }, 0);


      return true;
    } catch (e) {
      throw e;
    }
  }

  async sendCode(email, userId, type, res, next) {
    try {
      const mailOptions = {
        from: process.env.EMAIL || '"www.mankan.am" <contact@mankan.am>',
        to: '',
        subject: 'Բարի գալուստ Մանկան',
        html: '<h1>Welcome</h1><p>That was easy!</p>',
        auth: {
          user: process.env.EMAIL || 'contact@mankan.am',
          pass: process.env.EMAILPASS || 'contactadmin',
        },
        // tls: {
        //   rejectUnauthorized: false,
        // },
      };

      const auth = {
        userId,
      };
      auth.type = type;
      auth.email = email;
      const token = await jwtHelper(auth, false);

      mailOptions.to = email;
      let htmlPath;
      if (type === 'email') {
        mailOptions.text = `${mailOptions.text}-code: ${token}`;
        htmlPath = path.join(__dirname, '../..', '/public/templates/Email_sender_templates/Confirm_email_address.html');
      } else if (type === 'password') {
        mailOptions.subject = 'Գաղտնաբառի վերականգում';
        htmlPath = path.join(__dirname, '../..', '/public/templates/Email_sender_templates/change_password.html');
      } else if (type === 'changeEmail') {
        mailOptions.subject = 'Փոխել Էլ․հասցեն';
        htmlPath = path.join(__dirname, '../..', '/public/templates/Email_sender_templates/changeEmail.html');
      } else {
        const err = new Error('unexpected type for mail');
        err.status = 400;
        return next(err);
      }


      await this.models.codeModel.upsert({
        userId,
        code: token,
        type,
      });

      setTimeout(() => {
        res.render(htmlPath, {
          token,
        }, (err, HTML) => {
          if (err) {
            const error = new Error('Something wrong in email when sending updated info');
            error.status = 400;
            throw error;
          }
          mailOptions.html = HTML;
          this.mailer.sendMail(mailOptions, (error) => {
            if (error) {
              throw error;
            }
          });
        });
      }, 0);


      // res.render(htmlPath, { token }, (err, HTML) => {
      //   if (err) {
      //     const error = new Error('Something wrong in email');
      //     error.status = 400;
      //     return next(error);
      //   }
      //
      //   mailOptions.html = HTML;
      // });
      // return this.mailer.sendMail(mailOptions, (error, info) => {
      //   if (error) {
      //     return false;
      //   }
      //
      //   return true;
      // });
      return true;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new MailerHelper();
