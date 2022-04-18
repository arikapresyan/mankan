const fs = require('fs');
const path = require('path');
const ObjectsToCsv = require('objects-to-csv');
const io = require('../../io');

module.exports = {

  createCsv: async (data, type) => {
    try {
      const d = new Date();

      const date = d.getDate();
      const month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
      const year = d.getFullYear();
      const hour = d.getHours();
      const minutes = d.getMinutes();

      const dateStr = `${date}-${month}-${year}-${hour}-${minutes}.csv`;

      let csvPath;
      if (type === 'orders') {
        csvPath = path.join(__dirname, '../', '../', 'public', 'csv', 'orders', `${dateStr}`);
      } else if (type === 'subscribers') {
        csvPath = path.join(__dirname, '../', '../', 'public', 'csv', 'subscribers', `${dateStr}`);
      } else if (type === 'promoCodes') {
        csvPath = path.join(__dirname, '../', '../', 'public', 'csv', 'promoCodes', `${dateStr}`);
      } else if (type === 'users') {
        csvPath = path.join(__dirname, '../', '../', 'public', 'csv', 'users', `${dateStr}`);
      } else {
        const err = new Error('incorrect type for createCsv');
        err.status = 409;
        throw err;
      }
      const csv = new ObjectsToCsv(data);
      await csv.toDisk(csvPath, { append: false });
      global.io.emit('csv_completed', { path: `${type}+${dateStr}` });
    } catch (err) {
      global.io.emit('csv_create_error', err);
      throw err;
    }
  },


  createCsvOrder: async (data, type) => {
    try {
      const d = new Date();

      const date = d.getDate();
      const month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
      const year = d.getFullYear();
      const hour = d.getHours();
      const minutes = d.getMinutes();

      const dateStr = `${date}-${month}-${year}-${hour}-${minutes}.csv`;

      let csvPath;
      if (type === 'orders') {
        csvPath = path.join(__dirname, '../', '../', 'public', 'csv', 'orders', `${dateStr}`);
      } else {
        const err = new Error('incorrect type for createCsv');
        err.status = 409;
        throw err;
      }
      fs.writeFileSync(csvPath, '');
      const logger = fs.createWriteStream(`${csvPath}`, {
        flags: 'a', // 'a' means appending (old data will be preserved)
      });
      let isHeaderExist = false;

      let currentOrderId;
      let firstOrderId;
      if (data[0].id) {
        firstOrderId = data[0].id;
      }
      const alreadyPrintedIds = [];

      for (let i = 0; i < data.length; i++) {
        currentOrderId = data[i].id;
        if (!isHeaderExist) {
          let str = '';
          for (const key in data[i]) {
            str += `${key},`;
          }
          logger.write(`${str}\n`);
          isHeaderExist = true;
        }
        let str = '';
        if (alreadyPrintedIds.includes(data[i].id)) {
          for (const key in data[i]) {
            if (key === 'userOrderedProds.count' || key === 'userOrderedProds.price' || key === 'userOrderedProds.productName' || key === 'userOrderedProds.xmlBarCode') {
              str += `${data[i][key]},`;
            } else {
              str += ',';
            }
          }
        } else {
          alreadyPrintedIds.push(data[i].id);
          for (const key in data[i]) {
            if (key === 'deliveryAddress') {
              const joined = `${data[i][key]}`;
              str += `${joined.split(',').join('-')},`;
            } else if (key === 'deliveryTime') {
              const joined = `${data[i][key]}`;
              str += `${joined.split(',').join('-')},`;
            } else {
              str += `${data[i][key]},`;
            }
          }
        }

        if (firstOrderId !== currentOrderId) {
          logger.write(',\n');
          firstOrderId = currentOrderId;
        }
        logger.write(`${str}\n`);
      }
      console.log(alreadyPrintedIds);
      global.io.emit('csv_completed', { path: `${type}+${dateStr}` });
    } catch (err) {
      global.io.emit('csv_create_error', err);
      throw err;
    }
  },

};
