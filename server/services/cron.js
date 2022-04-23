const { CronJob } = require('cron');
const axios = require('axios');
const moment = require('moment');
const { Op } = require('sequelize');
const mailer = require('../helpers/mailer');
const db = require('../../db');

let trashCount = 0;
const opts = {
  host: 'localhost',
  port: 8900,
  timeout: 100, // timeout for connection - optional, will default to 1500ms if undefined
  // logpath: 'log.txt', // optional write openvpn console output to file, can be relative path or absolute
};
const auth = {
  user: 'Onlineshop',
  pass: 'Mankan0777',
};


// get all console logs up to this point
// openvpnmanager.getLog(console.log)
async function insertJsonToDb(jsonData) {
  const transaction = await db.transaction();
  try {
    const productModel = db.public.common.ProductModel;
    const productsInOurDb = await productModel.findAll();
    const arrOfXmlIds = [];
    const prdObj = {};
    for (let i = 0; i < productsInOurDb.length; i++) {
      arrOfXmlIds.push(productsInOurDb[i].xmlId);
      prdObj[productsInOurDb[i].xmlId] = productsInOurDb[i].percent;
    }
    // const arrOfXmlIds = productsInOurDb.map((item) => item.xmlId);
    const arr1 = [];
    const arr2 = [];
    for (let i = 0; i < jsonData.length; i++) {
      if (arrOfXmlIds.includes(jsonData[i].id)) {
        const percent = prdObj[jsonData[i].id];
        let finalPrice = jsonData[i].SalePrice;
        if (percent) {
          finalPrice -= jsonData[i].SalePrice * (percent / 100);
          finalPrice /= 10;
          finalPrice = Math.ceil(finalPrice);
          finalPrice *= 10;
        }
        const one = productModel.update({
          xmlBarCode: jsonData[i].Barcode,
          xmlPrice: jsonData[i].SalePrice,
          price: finalPrice,
          xmlCount: jsonData[i].Count,
          xmlName: jsonData[i].Name,
        }, { where: { xmlId: jsonData[i].id } }, { transaction });
        arr1.push(one);
      } else {
        const two = productModel.create({
          xmlId: jsonData[i].id,
          xmlBarCode: jsonData[i].Barcode,
          xmlPrice: jsonData[i].SalePrice,
          xmlCount: jsonData[i].Count,
          xmlName: jsonData[i].Name,
        }, { transaction });
        arr1.push(two);
      }
    }
    await Promise.all(arr1, arr2);
    await transaction.commit();
  } catch (e) {
    await transaction.rollback();
    throw new Error(e);
  }
}
// async function insertJsonToDb(jsonData) {
//   const transaction = await db.transaction();
//   try {
//     const productModel = db.public.common.ProductModel;
//
//     // console.log(jsonData);
//
//     for (let i = 0; i < jsonData.length; i++) {
//       productModel.upsert({
//         xmlId: jsonData[i].id,
//         xmlBarCode: jsonData[i].Barcode,
//         xmlPrice: jsonData[i].SalePrice,
//         xmlCount: jsonData[i].Count,
//         xmlName: jsonData[i].Name,
//       }, transaction);
//     }
//     await transaction.commit();
//   } catch (e) {
//     await transaction.rollback();
//     throw new Error(e);
//   }
// }
const croneEmail = 'tech@mankan.am';
let successCount = 0;
let errorCount = 0;
async function trash() {
  try {
    const trashedDate = moment().add(-21, 'minutes');
    const yerevanTime = trashedDate.clone().tz('Asia/Yerevan').format();
    const ACCEPT_FORMAT = 'YYYY-MM-DD hh:mm:ss';

    const start = moment.utc(yerevanTime, ACCEPT_FORMAT);
    const trashedData = await db.public.common.Orders.destroy({
      where: {
        paymentAccepted: false,
        updatedAt: {
          [Op.lte]: start,
        },

      },
      limit: 10,
    });
    // console.log(trashedData);
    return trashedData;
  } catch (e) {
    console.log(e);
  }
}
const cronService = new CronJob('*/30 * * * * * ', (async () => {
  trashCount += 1;

  let resultTrash;
  if (trashCount > 4) {
    console.log(('trashWorking'));
    trashCount = 0;
    resultTrash = trash();
  } else {
    console.log(('trashCount doest working'));
  }
  try {
    const response = await axios.get('http://95.140.194.24:8900/api/ReminderByDate?id=16&id2=0', { timeout: 15000 });

    if (successCount === 0) {
      console.log('crone is working');
      mailer.sendCroneInfo(croneEmail, 'success');
    }
    errorCount = 0;
    successCount = 1;
    console.log('#########################################################################CRONE IS WORKING ON SUCCESS#############################################################################################################');
    const start = new Date();
    await insertJsonToDb(response.data);
    const duration = new Date() - start;
    console.log(`Duration &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&: ${duration}`);
  } catch (err) {
    if (errorCount === 0) {
      console.log('crone has failed');
      mailer.sendCroneInfo(croneEmail, 'error');
    }
    successCount = 0;
    errorCount = 1;
    console.log('*************************************************************************CRONE IS WORKING WITHOUT SUCCESS*********************************************************************************************************');
  }
}), null, true, 'Asia/Yerevan');


module.exports = cronService;
