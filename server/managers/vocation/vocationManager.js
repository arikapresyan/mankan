const path = require('path');
const fs = require('fs');
const seq = require('sequelize');

const { Op } = seq;
const pdf = require('html-pdf');
const db = require('../../../db');
const multer = require('../../helpers/multer');
const CVOnlineMailer = require('../../helpers/CVOnlineMailer');


const options = { format: 'Letter' };
const vocationModel = db.public.common.Vocation;
const vocationLangModel = db.public.common.VocationLang;

class VocationManager {
  constructor() {
    this.models = {
      vocationModel,
      vocationLangModel,
    };

    this.getAllVocations = this.getAllVocations.bind(this);
    this.getById = this.getById.bind(this);
    this.sendAppliersMail = this.sendAppliersMail.bind(this);
    this.createPdf = this.createPdf.bind(this);
  }

  async getAllVocations(req, res, next) {
    try {
      const {
        lang = 'ARM',
        limit = 20,
        offset = 0,
      } = req.body;
      const allVocations = await this.models.vocationModel.findAndCountAll({
        include: [
          {
            model: vocationLangModel,
            as: 'langs',
            where: {
              lang,
            },
          },
        ],
        distinct: true,
        limit,
        offset,
      });
      const pages = Math.ceil(allVocations.count / limit);

      return res.status(200).send({ success: true, pages, result: allVocations });
    } catch (err) {
      return next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const {
        id,
      } = req.params;


      const foundVocation = await this.models.vocationModel.findOne({
        where: {
          id,
        },
        include:
          [{
            model: vocationLangModel,
            as: 'langs',

          }],
      });
      if (!foundVocation) {
        const err = new Error('invalid id');
        err.status = 409; // in profileManager we dont't have this kind of if(), ask to Seroj
        throw err;
      }
      return res.status(200).send({ success: true, result: foundVocation });
    } catch (err) {
      return next(err);
    }
  }

  async sendAppliersMail(req, res, next) {
    try {
      const savedImage = await multer.saveImage(req, res, 'appliersMail');
      const { imgPath } = savedImage;
      const {
        id,
      } = req.body;
      const vocation = await this.models.vocationModel.findOne({
        where: {
          id,
        },
      });
      if (!vocation) {
        const err = new Error('invalid vocation id');
        err.status = 409;
        throw err;
      }
      const vocationTitle = await this.models.vocationLangModel.findOne({
        where: {
          vocationId: id,
          [Op.or]: [{ lang: 'ARM' }, { lang: { [Op.not]: null } }],

        },
      });
      const { title } = vocationTitle;
      const cvPath = path.join('./uploads/appliersMail/', imgPath);
      await CVOnlineMailer.sendOnlineCV(cvPath.toString(), title, imgPath.toString(), next);

      return res.status(200).send({ success: true, msg: 'your mail has been successfully sent' });
    } catch (err) {
      return next(err);
    }
  }

  async createPdf(req, res, next) {
    try {
      const savedImage = await multer.saveImage(req, res, 'PDF');
      const { imgPath } = savedImage;
      if (!imgPath) {
        const err = new Error('loading image is required');
        err.status = 400;
        return next(err);
      }
      const htmlPath = path.join(__dirname, '../../..', '/public/templates/Email_sender_templates/index.html');
      const imgPathString = `http://localhost:3000/${path.join('./PDF/', imgPath.toString())}`;
      const uploadedImage = `uploads/${path.join('./PDF/', imgPath.toString())}`;
      let {
        data,
      } = req.body;
      data = JSON.parse(data);
      if (!data.firstLastNames || !data.phone || !data.email || !data.educations.length > 0) {
        const err = new Error('you have missed required fields');
        err.status = 409;
        throw err;
      }
      const vocation = await this.models.vocationModel.findOne({
        where: {
          id: data.id,
        },
      });
      if (!vocation) {
        const err = new Error('invalid vocation id');
        err.status = 409;
        throw err;
      }
      const vocationTitle = await this.models.vocationLangModel.findOne({
        where: {
          vocationId: data.id,
          [Op.or]: [{ lang: 'ARM' }, { lang: { [Op.not]: null } }],

        },
      });
      const { title } = vocationTitle;
      const nameOfFile = `${new Date().getTime()}.pdf`;
      res.render(htmlPath, {
        imgPathString,
        data,
      }, (error, HTML) => {
        if (error) {
          throw error;
        }
        const fileName = path.join('./uploads/PDF/', nameOfFile);
        pdf.create(HTML, options).toFile(`${fileName}`, async (err, result) => {
          if (err) {
            throw err;
          }
          const cvPath = `${fileName.toString()}`;
          CVOnlineMailer.sendOnlineCV(cvPath, title, nameOfFile, next);
          if (fs.existsSync(uploadedImage)) {
            fs.unlinkSync(uploadedImage);
          }
        });
      });
      return res.status(200).send({ success: true, message: 'Your cv has been successfully sent' });
    } catch (err) {
      return next(err);
    }
  }
}


module.exports = new VocationManager();
