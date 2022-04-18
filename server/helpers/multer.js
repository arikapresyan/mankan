const fs = require('fs');
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');


const imgArr = [];
let imgPath;

const jsonPath = path.join(__dirname, '../../', 'uploads');

let destination;
const stat = async () => {
  try {
    const isExist = !fs.existsSync(jsonPath);
    // console.log(isExist)
    if (isExist) {
      fs.mkdirSync(jsonPath);
      fs.mkdirSync(`${jsonPath}/vocationImages`);
      fs.mkdirSync(`${jsonPath}/appliersMail`);
      fs.mkdirSync(`${jsonPath}/ProductUsageImages`);
      fs.mkdirSync(`${jsonPath}/PDF`);
      fs.mkdirSync(`${jsonPath}/products`);
      fs.mkdirSync(`${jsonPath}/mainSlider`);
    }
    return { msg: 'Directories successfully created' };
  } catch (err) {
    return err;
  }
};


const storage = multer.diskStorage({

  destination(req, file, callback) {
    callback(null, destination);
  },
  filename(req, file, cb) {
    crypto.pseudoRandomBytes(8, (err, raw) => {
      imgPath = raw.toString('hex') + file.originalname;
      imgArr.push(imgPath);
      if (err) return cb(err);
      cb(null, imgPath);
    });
  },
});
const fileFilter = (req, file, cb) => {
  if (
    path.extname(file.originalname) === '.doc'
      || path.extname(file.originalname) === '.DOC'
      || path.extname(file.originalname) === '.docx'
      || path.extname(file.originalname) === '.DOCX'
      || path.extname(file.originalname) === '.png'
      || path.extname(file.originalname) === '.PNG'
      || path.extname(file.originalname) === '.pdf'
      || path.extname(file.originalname) === '.PDF'
      || path.extname(file.originalname) === '.jpg'
      || path.extname(file.originalname) === '.JPG'
      || path.extname(file.originalname) === '.jpeg'
      || path.extname(file.originalname) === '.JPEG'
      || path.extname(file.originalname) === '.gif'
      || path.extname(file.originalname) === '.GIF'
      || path.extname(file.originalname) === '.mp4'
      || path.extname(file.originalname) === '.MP4'
      || path.extname(file.originalname) === '.avi'
      || path.extname(file.originalname) === '.AVI'
      || path.extname(file.originalname) === '.flv'
      || path.extname(file.originalname) === '.FLV'
      || path.extname(file.originalname) === '.ogv'
      || path.extname(file.originalname) === '.OGV'


  ) {
    cb(null, true);
  } else {
    cb(new Error('File format should be PNG,JPG,JPEG,PDF,DOC,DOCX,mp4,flv,ogv,avi'), false); // if validation failed then generate error
  }
};

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 2 * 1024 * 1024 },
// }).array('image', 9);
const upload = multer({
  storage,
  fileFilter,
}).fields([{
  name: 'image',
  maxCount: 9,
  limits: { fileSize: 3 * 1024 * 1024 },
}, {
  name: 'video',
  maxCount: 1,
  limits: { fileSize: 20 * 1024 * 1024 },
}]);


async function saveImage(req, res, type) {
  try {
    await stat();
    switch (type) {
      case 'vocationImages':
        destination = process.env.VocationPictureDestination || './uploads/vocationImages';
        break;
      case 'appliersMail':
        destination = process.env.SuppiersPictureDestination || './uploads/appliersMail';
        break;
      case 'ProductUsageImages':
        destination = process.env.ProductUsagePictureDestination || './uploads/ProductUsageImages';
        break;
      case 'PDF':
        destination = process.env.PDFOnlineDestination || './uploads/PDF';
        break;
      case 'pdfUpload':
        destination = process.env.PDFOnlineDestination || './uploads/PDF/pdfUpload';
        break;
      case 'mainSlider':
        destination = process.env.PDFOnlineDestination || './uploads/mainSlider';
        break;
      default:
        destination = 'uploads';
    }

    return new Promise((resolve, reject) => {
      upload(req, res, (err) => {
        if (err) {
          reject(err);
        }
        resolve({ imgPath, imgArr, directory: `/${type}` });
      });
      imgArr.length = 0;
      imgPath = null;
    });
  } catch (err) {
    return err;
  }
}


async function saveProductPhotos(req, res, productId) {
  try {
    await stat();
    // count = maxCount;
    destination = path.join(jsonPath, '/products', `${productId}`);
    const isExist = !fs.existsSync(destination);
    if (isExist) {
      await fs.mkdirSync(`${jsonPath}/products/${productId}`);
    }


    return new Promise((resolve, reject) => {
      upload(req, res, (err) => {
        if (err) {
          reject(err);
        }
        resolve({ imgPath, imgArr, directory: '/products' });
      });
      imgArr.length = 0;
      imgPath = null;
    });
  } catch (err) {
    return err;
  }
}

module.exports = { saveImage, saveProductPhotos };
