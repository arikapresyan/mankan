/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

const fs = require('fs');
const path = require('path');
const sequelize = require('sequelize');
const axios = require('axios');
const moment = require('moment');
const { getStringFromDates, customDateForming } = require('../../services/formatDeliveryTime');

const { Op } = sequelize;
const db = require('../../../db');
const multer = require('../../helpers/multer');
const { createCsv, createCsvOrder } = require('../../services/csv');
const mailer = require('../../helpers/mailerHelper');

const op = sequelize.Op;
const ageModel = db.public.common.Age;
const userModel = db.public.users.User;
const brandModel = db.public.common.Brand;
const ageMapModel = db.public.common.AgeMap;
const ordersModel = db.public.common.Orders;
const sliderModel = db.public.common.Sliders;
const typeMapModel = db.public.common.TypeMap;
const weekTimeModel = db.public.common.WeekTime;
const wishListModel = db.public.common.WishList;
const vocationModel = db.public.common.Vocation;
const usageMapModel = db.public.common.UsageMap;
const sexBrandModel = db.public.common.SexBrandMap;
const productModel = db.public.common.ProductModel;
const promoCodesModel = db.public.common.PromoCodes;
const confirmCodeModel = db.public.users.ConfirmCode;
const productLangModel = db.public.common.ProductLang;
const extraFilterModel = db.public.common.ExtraFilter;
const subscribersModel = db.public.common.Subscribers;
const productTypeModel = db.public.common.ProductType;
const vocationLangModel = db.public.common.VocationLang;
const productUsageModel = db.public.common.ProductUsage;
const productPhotosModel = db.public.common.ProductPhotos;
const boughtProductsModel = db.public.common.BoughtProducts;
const orderedProductsModel = db.public.common.OrderedProducts;
const extraFilterLangModel = db.public.common.ExtraFilterLang;
const productTypeLangModel = db.public.common.ProductTypeLang;
const productStatisticModel = db.public.common.ProductStatistic;
const productUsageLangModel = db.public.common.ProductUsageLang;
const extraFilterProductModel = db.public.common.ExtraFilterProduct;
const productAccessoriesMap = db.public.common.ProductAccessoriesMap;
const sexBrandMapModel = db.public.common.SexBrandMap;
const mainSliderModel = db.public.common.MainSlider;

class AdminManager {
  constructor() {
    this.models = {
      ageModel,
      userModel,
      brandModel,
      sliderModel,
      ordersModel,
      ageMapModel,
      typeMapModel,
      productModel,
      wishListModel,
      weekTimeModel,
      sexBrandModel,
      vocationModel,
      usageMapModel,
      promoCodesModel,
      extraFilterModel,
      subscribersModel,
      productLangModel,
      productTypeModel,
      confirmCodeModel,
      productUsageModel,
      vocationLangModel,
      productPhotosModel,
      boughtProductsModel,
      productTypeLangModel,
      extraFilterLangModel,
      orderedProductsModel,
      productStatisticModel,
      productAccessoriesMap,
      productUsageLangModel,
      extraFilterProductModel,
      sexBrandMapModel,
      mainSliderModel,
    };

    this.download = this.download.bind(this);
    this.addBrand = this.addBrand.bind(this);
    this.editOrder = this.editOrder.bind(this);
    this.addSlider = this.addSlider.bind(this);
    this.printUsers = this.printUsers.bind(this);
    this.addVocation = this.addVocation.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.printOrders = this.printOrders.bind(this);
    this.acceptOrder = this.acceptOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.updateBrand = this.updateBrand.bind(this);
    this.removeBrand = this.removeBrand.bind(this);
    this.getOrderById = this.getOrderById.bind(this);
    this.removeSlider = this.removeSlider.bind(this);
    this.removeSlider = this.removeSlider.bind(this);
    this.getAllOrders = this.getAllOrders.bind(this);
    this.addPromoCode = this.addPromoCode.bind(this);
    this.updateSlider = this.updateSlider.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.addExtraFilter = this.addExtraFilter.bind(this);
    this.getAllProducts = this.getAllProducts.bind(this);
    this.getProfileById = this.getProfileById.bind(this);
    this.checkPromoCode = this.checkPromoCode.bind(this);
    this.removeVocation = this.removeVocation.bind(this);
    this.updateVocation = this.updateVocation.bind(this);
    this.removeVocation = this.removeVocation.bind(this);
    this.getAllProfiles = this.getAllProfiles.bind(this);
    this.updateVocation = this.updateVocation.bind(this);
    this.getProductById = this.getProductById.bind(this);
    this.addProductType = this.addProductType.bind(this);
    this.printPromoCodes = this.printPromoCodes.bind(this);
    this.removePromoCode = this.removePromoCode.bind(this);
    this.updatePromoCode = this.updatePromoCode.bind(this);
    this.addProductUsage = this.addProductUsage.bind(this);
    this.getProductPhotos = this.getProductPhotos.bind(this);
    this.getAllPromoCodes = this.getAllPromoCodes.bind(this);
    this.updateStatistics = this.updateStatistics.bind(this);
    this.removeSubscriber = this.removeSubscriber.bind(this);
    this.printSubscribers = this.printSubscribers.bind(this);
    this.updateProductType = this.updateProductType.bind(this);
    this.removeExtraFilter = this.removeExtraFilter.bind(this);
    this.updateExtraFilter = this.updateExtraFilter.bind(this);
    this.removeProductType = this.removeProductType.bind(this);
    this.getAllSubscribers = this.getAllSubscribers.bind(this);
    this.saveProductPhotos = this.saveProductPhotos.bind(this);
    this.updateProductUsage = this.updateProductUsage.bind(this);
    this.removeProductUsage = this.removeProductUsage.bind(this);
    this.getDeliveryWeekTime = this.getDeliveryWeekTime.bind(this);
    this.addDeliveryWeekTime = this.addDeliveryWeekTime.bind(this);
    this.deleteProductPhotos = this.deleteProductPhotos.bind(this);
    this.getAllUsersForPrint = this.getAllUsersForPrint.bind(this);
    this.getAllOrdersForPrint = this.getAllOrdersForPrint.bind(this);
    this.getAllPromoCodesForPrint = this.getAllPromoCodesForPrint.bind(this);
    this.getAllSubscribersForPrint = this.getAllSubscribersForPrint.bind(this);
    this.getOnlyDate = this.getOnlyDate.bind(this);
    this.getAllSliders = this.getAllSliders.bind(this);
    this.addMainSlider = this.addMainSlider.bind(this);
    // this.updateMainSlider = this.updateMainSlider.bind(this);
    this.deleteMainSlider = this.deleteMainSlider.bind(this);
    this.checkZero = this.checkZero.bind(this);
    this.getDeliveryWeekTimeNew = this.getDeliveryWeekTimeNew.bind(this);
  }

  async getOrderById(req, res, next) {
    try {
      const {
        id,
      } = req.params;
      const order = await this.models.ordersModel.findOne({
        where: {
          id,
          paymentAccepted: true,
        },
        include: [
          {
            model: this.models.productModel,
            as: 'prods',
            include: [
              {
                model: this.models.productPhotosModel,
                as: 'photos',
                where: {
                  order: 1,
                },
              },
              {
                model: this.models.productLangModel,
                as: 'langs',
                where: {
                  lang: 'ARM',
                },
              },
            ],
          },
        ],
      });
      if (!order) {
        const err = new Error('invalid id');
        err.status = 409;
        throw err;
      }
      return res.status(200).send({ success: true, result: order });
    } catch (e) {
      return next(e);
    }
  }

  async getDeliveryWeekTime(req, res, next) {
    try {
      const weekTime = await this.models.weekTimeModel.findOne();
      return res.status(200).send({ success: true, result: weekTime });
    } catch (e) {
      return next(e);
    }
  }

  async getDeliveryWeekTimeNew(req, res, next) {
    try {
      const { week: days, time } = await this.models.weekTimeModel.findOne();

      const resp = {
        time: time.filter((day) => day).map((tameStr) => {
          const [hour, min] = tameStr.split(':');
          const start = new Date(new Date().setHours(hour, min));
          const end = new Date(new Date().setHours(+hour >= 23 ? ((+hour + 2) - 24) : +hour + 2, min));
          return {
            start,
            end,
          };
        }),
        days,
      };

      // const date1 = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

      return res.status(200).send({
        success: true,
        date: new Date(),
        resp,
        result: getStringFromDates(
          days,
          resp,
          customDateForming,
          new Date(),
        ),
      });
    } catch (e) {
      return next(e);
    }
  }

  async addDeliveryWeekTime(req, res, next) {
    const transaction = await db.transaction();
    try {
      const {
        time,
        week,
      } = req.body;
      await this.models.weekTimeModel.destroy({
        where: {},
        truncate: true,
      }, { transaction });
      await this.models.weekTimeModel.create({ time, week }, { transaction });
      await transaction.commit();
      return res.status(200).send({ success: true, message: 'you have updated delivery options successfully' });
    } catch (e) {
      await transaction.rollback();
      return next(e);
    }
  }

  async updateStatistics(req, res, next) {
    const { id: orderId } = req.params;
    const products = await this.models.orderedProductsModel.findOne({
      where: {
        orderId,
      },
    });
    for (let i = 0; i < products.length; i++) {
      await this.models.productStatisticModel.update(
        { totalSold: db.literal(`"totalSold"+${products[i].totalPrice}`) }, { where: { productId: products[i].productId } },
      );
    }
  }

  async getProfileById(req, res, next) {
    try {
      const {
        id,
      } = req.params;

      const user = await this.models.userModel.findOne({
        where: {
          id,
        },
        attributes: { exclude: ['password'] },
        include: [
          {
            model: this.models.ordersModel,
            as: 'userOrders',
            include: [
              {
                model: this.models.orderedProductsModel,
                as: 'userOrderedProds',
              },
            ],
          },
        ],
      });
      return res.send({ success: true, result: user });
    } catch (err) {
      return next(err);
    }
  }

  async getAllProfiles(req, res, next) {
    try {
      const {
        searchWord = '',
        limit = 1000,
        offset = 0,

      } = req.body;
      let search = '';
      if (searchWord) {
        search = searchWord.split(' ');
      }
      const searchParams = {
        where: {
          isEmailConfirmed: true,
        },
        limit,
        offset,
        attributes: { exclude: ['password'] },
        order: [
          ['id', 'asc'],
        ],
      };
      if (!search[1] && search[0]) {
        searchParams.where = {
          [Op.or]: [
            { email: { [Op.iLike]: `%${search[0].trim()}%` } },
            { firstName: { [Op.iLike]: `%${search[0].trim()}%` } },
          ],
        };
      } else if (search[1]) {
        searchParams.where = {
          [Op.and]: [
            { firstName: { [Op.iLike]: `%${search[0].trim()}%` } },
            { lastName: { [Op.iLike]: `%${search[1].trim()}%` } },
          ],
        };
      }
      //  searchParams.distinct = true;
      const user = await this.models.userModel.findAndCountAll(searchParams);

      const pages = Math.ceil(user.count / limit);

      return res.send({
        success: true, pages, result: user,
      });
    } catch (err) {
      return next(err);
    }
  }

  async getAllOrdersForPrint(data, next) {
    try {
      const {
        ids = [], to, from, limit = 1000, offset, attributes1,
        attributes2, userId, paymentType, status,
      } = data;
      const searchParams = {
        where: {
          paymentAccepted: true,
        },

        attributes: ['id', ...attributes2],
        raw: true,
        limit,
        offset,
      };
      if (attributes1.length > 0) {
        searchParams.include = [
          {
            model: this.models.orderedProductsModel,
            as: 'userOrderedProds',
            attributes: [...attributes1],
          },
        ];
      }
      if (ids.length > 0) {
        searchParams.where.id = ids;
      } if (userId) {
        searchParams.where.userId = userId;
      }
      if (paymentType) {
        searchParams.where.paymentType = paymentType;
      }
      if (status) {
        searchParams.where.status = status;
      }
      if (!from && to) {
        searchParams.where.createdAt = {

          [op.lte]: to,
        };
      }
      if (from && !to) {
        searchParams.where.createdAt = {

          [op.gte]: from,
        };
      }
      if (to && from) {
        searchParams.where.createdAt = {

          [op.gte]: from,
          [op.lte]: to,

        };
      }
      const orders = await this.models.ordersModel.findAndCountAll(searchParams);
      return { success: true, result: orders };
    } catch (e) {
      return next(e);
    }
  }

  // async getAllOrders(req, res, next) {
  //   try {
  //     const {
  //       to,
  //       from,
  //       limit = 1000,
  //       offset = 0,
  //       userId,
  //       paymentType,
  //       status,
  //       productId,
  //       searchWord = '',
  //       lang = 'ARM',
  //     } = req.body;
  //     const searchParams = {
  //       where: {
  //       },
  //       include: [
  //         {
  //           model: this.models.productModel,
  //           as: 'prods',
  //           include: [
  //             {
  //               model: this.models.productPhotosModel,
  //               as: 'photos',
  //               where: {
  //                 order: 1,
  //               },
  //               required: false,
  //             },
  //             {
  //               model: this.models.productLangModel,
  //               as: 'langs',
  //               where: {
  //                 lang,
  //               },
  //               required: false,
  //             },
  //           ],
  //         },
  //       ],
  //       distinct: true,
  //       limit,
  //       offset,
  //     };
  //     if (userId) {
  //       searchParams.where.userId = userId;
  //     }
  //     if (paymentType) {
  //       searchParams.where.paymentType = paymentType;
  //     }
  //     if (productId) {
  //       searchParams.where.productId = productId;
  //     }
  //     if (status) {
  //       searchParams.where.status = status;
  //     }
  //     if (!from && to) {
  //       searchParams.where.createdAt = {
  //         [op.lte]: to,
  //       };
  //     }
  //     if (from && !to) {
  //       searchParams.where.createdAt = {
  //         [op.gte]: from,
  //       };
  //     }
  //     if (searchWord) {
  //       searchParams.where.email = {
  //         [op.iLike]: `%${searchWord.trim()}%`,
  //       };
  //     }
  //     if (to && from) {
  //       searchParams.where.createdAt = {
  //         [op.gte]: from,
  //         [op.lte]: to,
  //       };
  //     }
  //     const orders = await this.models.ordersModel.findAndCountAll(searchParams);
  //     const pages = Math.ceil(orders.count / limit);
  //     return res.send({ success: true, pages, result: orders });
  //   } catch (e) {
  //     return next(e);
  //   }
  // }

  async getAllOrders(req, res, next) {
    try {
      const {
        limit = 1000,
        offset = 0,
        status = 'pending',
        userId,
        searchWord = '',
        paymentType,
        productId,
        lang = 'ARM',
      } = req.body;
      const searchParams = {
        where: {
          status,
          [op.or]: [
            { email: { [op.iLike]: `%${searchWord.trim()}%` } },
            { firstName: { [op.iLike]: `%${searchWord.trim()}%` } },
            { phone: { [op.iLike]: `%${searchWord.trim()}%` } },

          ],
          paymentAccepted: true,

        },
        include: [
          {
            model: this.models.orderedProductsModel,
            as: 'userOrderedProds',
          },
        ],
        distinct: true,
        order: [
          ['createdAt', 'desc']],
        limit,
        offset,
      };
      if (searchWord && searchWord.slice(0, 5) === 'date:') {
        let date = searchWord.slice(5);
        date = new Date(date);
        const tomorrow = new Date(date);
        tomorrow.setDate(tomorrow.getDate() + 1);
        // console.log(date);
        // console.log(tomorrow);
        searchParams.where = {
          createdAt: { [Op.between]: [date, tomorrow] },
        };
      }

      if (userId) {
        searchParams.where.userId = userId;
      }
      if (paymentType) {
        searchParams.where.paymentType = paymentType;
      }
      if (productId) {
        searchParams.where.productId = productId;
      }
      const orders = await this.models.ordersModel.findAndCountAll(searchParams);
      const pages = Math.ceil(orders.count / limit);

      return res.send({ success: true, pages, result: orders });
    } catch (e) {
      return next(e);
    }
  }
  // async getAllOrders(req, res, next) {
  //    try {
  //      const {
  //        limit = 1000,
  //        offset = 0,
  //        status = 'pending',
  //        userId,
  //        searchWord = '',
  //        paymentType,
  //        productId,
  //        lang = 'ARM',
  //      } = req.body;
  //      const searchParams = {
  //        where: {
  //          status,
  //          [op.or]: [
  //            { email: { [op.iLike]: `%${searchWord.trim()}%` } },
  //            { firstName: { [op.iLike]: `%${searchWord.trim()}%` } },
  //            { phone: { [op.iLike]: `%${searchWord.trim()}%` } },
  //
  //          ],
  //          paymentAccepted: true,
  //
  //        },
  //        include: [
  //          {
  //            model: this.models.productModel,
  //            as: 'prods',
  //            include: [
  //              {
  //                model: this.models.productPhotosModel,
  //                as: 'photos',
  //                where: {
  //                  order: 1,
  //                },
  //                required: false,
  //              },
  //              {
  //                model: this.models.productLangModel,
  //                as: 'langs',
  //                where: {
  //                  lang,
  //                },
  //                required: false,
  //              },
  //            ],
  //          },
  //        ],
  //        distinct: true,
  //        order: [
  //          ['createdAt', 'desc']],
  //        limit,
  //        offset,
  //      };
  //      if (searchWord && searchWord.slice(0, 5) === 'date:') {
  //        let date = searchWord.slice(5);
  //        date = new Date(date);
  //        const tomorrow = new Date(date);
  //        tomorrow.setDate(tomorrow.getDate() + 1);
  //        // console.log(date);
  //        // console.log(tomorrow);
  //        searchParams.where = {
  //          createdAt: { [Op.between]: [date, tomorrow] },
  //        };
  //      }
  //
  //      if (userId) {
  //        searchParams.where.userId = userId;
  //      }
  //      if (paymentType) {
  //        searchParams.where.paymentType = paymentType;
  //      }
  //      if (productId) {
  //        searchParams.where.productId = productId;
  //      }
  //      const orders = await this.models.ordersModel.findAndCountAll(searchParams);
  //      const pages = Math.ceil(orders.count / limit);
  //
  //      return res.send({ success: true, pages, result: orders });
  //    } catch (e) {
  //      return next(e);
  //    }
  //  }

  async printOrders(req, res, next) {
    try {
      const toPrint = [];
      const {
        ids = [], to, from, orderedProdsInfo = [], orderInfo = [], limit = 1000, status = 'pending',
      } = req.body;
      let off = 0;
      let result = await this.getAllOrdersForPrint({
        ids,
        to,
        from,
        limit,
        offset: off,
        attributes1: orderedProdsInfo,
        attributes2: orderInfo,
        status,
      }, next);

      if (orderInfo.includes('createdAt')) {
        for (let i = 0; i < result.result.rows.length; i += 1) {
          let onlyDate = `${new Date(result.result.rows[i].createdAt).toISOString().substr(0, 19).replace('T', ' ')}`;
          onlyDate = onlyDate.slice(0, 16);
          result.result.rows[i].createdAt = onlyDate;
        }
      }

      toPrint.push(...result.result.rows);

      const count = Math.ceil(result.result.count / 1000);

      for (let i = 1; i < count; i++) {
        off += 1000;
        result = await this.getAllOrdersForPrint({
          ids,
          to,
          from,
          limit,
          offset: off,
          attributes1: orderedProdsInfo,
          attributes2: orderInfo,
          status,
        }, next);
        if (orderInfo.includes('createdAt')) {
          for (let j = 0; j < result.result.rows.length; j += 1) {
            let onlyDate = `${new Date(result.result.rows[i].createdAt).toISOString().substr(0, 19).replace('T', ' ')}`;
            onlyDate = onlyDate.slice(0, 16);
            result.result.rows[j].createdAt = onlyDate;
          }
        }
        toPrint.push(...result.result.rows);
      }
      createCsvOrder(toPrint, 'orders');
      return res.send({ success: true, status: 'in process', toPrint });
    } catch (e) {
      return next(e);
    }
  }

  async checkPromoCode(promoCode, next) {
    try {
      const foundedPromo = await this.models.promoCodesModel.findOne({
        where: {
          code: promoCode,
        },
      });

      const date = new Date();
      if (!foundedPromo || foundedPromo.isUsed || date > foundedPromo.validTill) {
        return {
          isValid: false,
          validUntil: null,
          isUsed: null,

        };
      }
      return {
        isValid: true,
        validUntil: foundedPromo.validTill,
        isUsed: foundedPromo.isUsed,
        percent: foundedPromo.percent,
        id: foundedPromo.id,
      };
    } catch (err) {
      return next(err);
    }
  }

  async acceptOrder(req, res, next) {
    const transaction = await db.transaction();
    try {
      const { id } = req.params;
      const order = await this.models.ordersModel.findOne(
        {
          where: {
            id,
            status: 'pending',
          },
        },
      );
      if (!order) {
        const err = new Error('Incorrect order id');
        err.status = 409;
        throw err;
      }
      const {
        userId, paymentType, bonus, totalAmount, deliveryPrice, promoCodeId,
      } = order;
      let user;
      if (userId) {
        user = await this.models.userModel.findOne({
          where: {
            id: userId,
          },
        });
      }
      if (user && paymentType !== 'bonus') {
        await user.update({
          bonus: db.literal(`"bonus"+${bonus}`),
          boughtSum: db.literal(`"boughtSum"+${totalAmount - deliveryPrice}`),
        }, { returning: true }, { transaction });

        const { boughtSum } = user;
        let bonusPercent;
        if (boughtSum < 200000) {
          bonusPercent = 2;
        } else if (boughtSum >= 200000 && boughtSum < 500000) {
          bonusPercent = 3;
        } else if (boughtSum >= 500000) {
          bonusPercent = 4;
        }
        await user.update({ bonusPercent }, { transaction });
      } else if (user && paymentType === 'bonus') {
        await user.update({
          bonus: db.literal(`"bonus" - ${totalAmount - deliveryPrice}`),
        }, { transaction });
      }
      await order.update({ status: 'completed' });
      await this.models.orderedProductsModel.update({ status: 'completed' }, {
        where: {
          orderId: order.id,
        },
      }, { transaction });

      if (promoCodeId) {
        await this.models.promoCodesModel.update({ isUsed: true, dateOfUse: new Date() },
          { where: { id: promoCodeId } },
          { transaction });
      }

      const orderedProducts = await this.models.orderedProductsModel.findAll({
        where: {
          orderId: order.id,
        },
      });
      const productsForUserEmail = [];
      for (let i = 0; i < orderedProducts.length; i++) {
        const pushObj = {
          xmlId: orderedProducts[i].xmlId,
          productName: orderedProducts[i].productName,
          price: orderedProducts[i].price,
          count: orderedProducts[i].count,
          totalPrice: orderedProducts[i].totalPrice,
        };
        productsForUserEmail.push(pushObj);
      }
      const allStatistic = [];
      for (let i = 0; i < orderedProducts.length; i++) {
        const statistic = this.models.productStatisticModel.increment({
          totalPrice: orderedProducts[i].totalPrice,
          count: orderedProducts[i].count,
        }, {
          where: {
            productId: orderedProducts[i].productId,
          },
        }, { transaction });
        allStatistic.push(statistic);
      }
      await Promise.all(allStatistic);

      await transaction.commit();
      let armPaymentType;
      if (order.paymentType === 'bonus') {
        armPaymentType = 'Բոնուս';
      } else if (order.paymentType === 'non-cash') {
        armPaymentType = 'Քարտային';
      } else if (order.paymentType === 'cash') {
        armPaymentType = 'Կանխիկ';
      }
      const orDate = new Date(order.createdAt);
      let day = `${orDate.getDate()}`;
      let month = `${orDate.getMonth() + 1}`;
      let year = `${orDate.getFullYear()}`;
      let hour = `${orDate.getHours()}`;
      let minutes = `${orDate.getMinutes()}`;

      day = this.checkZero(day);
      month = this.checkZero(month);
      year = this.checkZero(year);
      hour = this.checkZero(hour);
      minutes = this.checkZero(minutes);

      const orderCreatedAtForUser = `${day}.${month}.${year} ${hour}:${minutes}`;

      const infoForUser = {
        orderId: order.id,
        firstName: order.firstName,
        lastName: order.lastName,
        bonus: order.bonus,
        promoCode: order.promoCode,
        promoCodePercent: order.promoCodePercent,
        totalAmount: order.paymentType === 'bonus' ? order.deliveryPrice : order.totalAmount,
        totalWithOutPromo: order.totalWithOutPromo,
        totalWithPromo: order.totalWithPromo,
        paymentType: armPaymentType,
        email: order.email,
        phone: order.phone,
        deliveryAddress: order.deliveryAddress,
        deliveryTime: order.deliveryTime,
        deliveryPrice: order.deliveryPrice,
        createdAt: orderCreatedAtForUser,
        products: productsForUserEmail,
      };
      mailer.sendToUserOrAdmin(order.email, infoForUser, 'OrderCompleted', res, next);
      return res.send({ success: true, message: 'Order Successfully updated' });
    } catch (err) {
      await transaction.rollback();
      return next(err);
    }
  }

  checkZero(data) {
    if (data.length == 1) {
      data = `0${data}`;
    }
    return data;
  }

  async deleteOrder(req, res, next) {
    try {
      const { id } = req.params;
      const order = await this.models.ordersModel.findOne(
        {
          where: {
            id,
          },
        },
      );
      if (!order) {
        const err = new Error('Incorrect order id');
        err.status = 409;
        throw err;
      }
      if (order.paymentType === 'non-cash' && !order.paymentAccepted) {
        const err = new Error('Payment in transaction ... processing ...');
        err.status = 409;
        throw err;
      }
      if (order.userId) {
        if (order.bonus > 0 && order.totalWithPromo > 0 && order.status === 'completed') {
          await this.models.userModel.update(
            {
              bonus: db.literal(`"bonus"-${order.bonus}`),
              boughtSum: db.literal(`"boughtSum"-${order.totalWithPromo}`),
            }, { where: { id: order.userId } },

          );
        }
      }

      // if (order.paymentType === 'non-cash' && order.paymentAccepted) {
      //   console.log(order.id, order.paymentId);
      //   const response = await axios.get(`https://ipay.arca.am/payment/rest/getOrderStatusExtended.do?orderNumber=${order.id}&password=12784596Abcdef!&userName=21532119_api&orderId=${order.paymentId}`, { timeout: 15000 });
      //   if (response && response.data) {
      //     if (response.data.errorCode === '0' && response.data.orderStatus === 4) {
      //       await this.models.orderedProductsModel.destroy({
      //         where: {
      //           orderId: order.id,
      //         },
      //       });
      //       await this.models.ordersModel.destroy({
      //         where: {
      //           id: order.id,
      //         },
      //       });
      //
      //       // mailer.sendToUserOrAdmin(order.email, infoForUser, 'OrderRejected', res, next);
      //
      //       return res.status(200).send({ success: true, message: 'you have deleted order successfully', paymentInfo: 'Payment already refunded' });
      //     } if (response.data.errorCode === '0' && response.data.orderStatus === 2) {
      //       const refund = await axios.get(`https://ipay.arca.am/payment/rest/reverse.do?amount=${order.totalAmount}00&orderNumber=${order.id}&password=12784596Abcdef!&userName=21532119_api&orderId=${order.paymentId}`, { timeout: 15000 });
      //       if (refund && refund.data) {
      //         console.log(refund.data);
      //         if (refund.data.errorCode === '0') {
      //           await this.models.orderedProductsModel.destroy({
      //             where: {
      //               orderId: order.id,
      //             },
      //           });
      //           await this.models.ordersModel.destroy({
      //             where: {
      //               id: order.id,
      //             },
      //           });
      //
      //           // mailer.sendToUserOrAdmin(order.email, infoForUser, 'OrderRejected', res, next);
      //
      //           return res.status(200).send({ success: true, message: 'you have deleted order successfully', paymentInfo: 'Payment  refunded' });
      //         }
      //         const err = new Error('Something went wrong (1)');
      //         err.status = 409;
      //         throw err;
      //       }
      //     } else {
      //       console.log(response.data.errorCode);
      //       console.log(response.data.orderStatus);
      //       const err = new Error('Something went wrong (2)');
      //       err.status = 409;
      //       throw err;
      //     }
      //   }
      //   const err = new Error('Something went wrong (3)');
      //   err.status = 409;
      //   throw err;
      // }
      // mailer.sendToUserOrAdmin(order.email, infoForUser, 'OrderRejected', res, next);
      await this.models.orderedProductsModel.destroy({
        where: {
          orderId: order.id,
        },
      });
      await order.destroy();

      return res.status(200).send({ success: true, message: 'you have deleted order successfully' });
    } catch (err) {
      return next(err);
    }
  }

  async editOrder(req, res, next) {
    try {
      const { id: orderId } = req.params;
      const order = await this.models.ordersModel.findOne({
        where: {
          id: orderId,
        },
      });
      if (!order) {
        const err = new Error('Incorrect order id');
        err.status = 409;
        throw err;
      }
      if (order.status === 'completed') {
        const err = new Error('you can\'t edit completed order');
        err.status = 409;
        throw err;
      }
      const {
        deliveryTime = order.deliveryTime,
        phone = order.phone,
        email = order.email,
      } = req.body;

      await order.update({
        deliveryTime,
        phone,
        email,
      });

      return res.status(200).send({ success: true, message: 'Order successfully updated' });
    } catch (e) {
      return next(e);
    }
  }

  async addVocation(req, res, next) {
    const transaction = await db.transaction();
    try {
      const savedImage = await multer.saveImage(req, res, 'vocationImages');
      const { imgPath } = savedImage;
      let {
        names: arr,
      } = req.body;
      arr = JSON.parse(arr);

      const vocation = await this.models.vocationModel.create({ image: imgPath }, { transaction });
      for (let i = 0; i < arr.length; i++) {
        arr[i].vocationId = vocation.id;
      }
      console.log(arr);
      await this.models.vocationLangModel.bulkCreate(arr, { transaction });
      await transaction.commit();
      return res.status(200).send({ success: true, message: 'vocation was created successfully' });
    } catch (err) {
      transaction.rollback();
      return next(err);
    }
  }

  async updateVocation(req, res, next) {
    try {
      const savedImage = await multer.saveImage(req, res, 'vocationImages');
      const { imgPath } = savedImage;

      const { id } = req.params;
      let {
        names,
      } = req.body;
      names = JSON.parse(names);

      const updateVocation = await this.models.vocationModel.findOne({
        where: {
          id,
        },
      });
      if (!updateVocation) {
        const err = new Error('invalid id');
        err.status = 409;
        throw err;
      }
      let imagePath = updateVocation.image;
      if (imagePath && imgPath) {
        const jsonPath = path.join(__dirname, '../../..', 'uploads/vocationImages');
        if (fs.existsSync(path.join(jsonPath, `${imagePath}`))) {
          fs.unlinkSync(path.join(jsonPath, `${imagePath}`));
        }
      }

      if (imgPath) {
        await updateVocation.update({ image: imgPath.toString() });
        imagePath = imgPath;
      }

      await this.models.vocationLangModel.destroy({
        where: {
          vocationId: id,
        },
      });
      for (let i = 0; i < names.length; i++) {
        names[i].vocationId = updateVocation.id;
      }
      console.log(names);
      await this.models.vocationLangModel.bulkCreate(names);
      return res.status(200).send({
        success: true,
        message: 'you have successfully updated vocation',
      });
    } catch (err) {
      return next(err);
    }
  }

  async removeVocation(req, res, next) {
    try {
      const {
        ids,
      } = req.body;

      const removeVocation = await this.models.vocationModel.findAll({
        where: {
          id: ids,
        },
      });
      if (removeVocation.length !== ids.length) {
        const err = new Error('invalid vocation id');
        err.status = 409;
        throw err;
      }
      const imgPaths = [];
      for (let i = 0; i < removeVocation.length; i++) {
        imgPaths.push(removeVocation[i].image);
      }
      for (let i = 0; i < imgPaths.length; i++) {
        const jsonPath = path.join(__dirname, '../../..', 'uploads/vocationImages');
        // console.log(jsonPath);
        if (fs.existsSync(path.join(jsonPath, `${imgPaths[i]}`))) {
          fs.unlinkSync(path.join(jsonPath, `${imgPaths[i]}`));
        }
      }

      await this.models.vocationModel.destroy({
        where: {
          id: ids,
        },
      });
      return res.status(200).send({ success: true, message: 'you have deleted vocation successfully' });
    } catch (err) {
      return next(err);
    }
  }

  async addPromoCode(req, res, next) {
    try {
      const {
        percent,
        validTill,
        count,
      } = req.body;
      if (new Date(validTill) <= new Date()) {
        const err = new Error('you can not create promo code with expired date');
        err.status = 409;
        throw err;
      }
      let code;
      let promoTable;
      const data = [];
      let i = count;
      if (count > 30) {
        const err = new Error('Maximum count is 30');
        err.status = 409;
        throw err;
      }
      do {
        code = Math.floor(100000 + Math.random() * 900000);
        promoTable = await this.models.promoCodesModel.findOne({ where: { code } });

        if (!promoTable) {
          i -= 1;
          data.push({ percent, code, validTill });
        }
      } while (i > 0);

      const result = await this.models.promoCodesModel.bulkCreate(
        data,
      );

      return res.status(200).send({ success: true, result });
    } catch (e) {
      return next(e);
    }
  }

  async updatePromoCode(req, res, next) {
    try {
      const {
        id,
      } = req.params;
      const {
        isUsed,
        dateOfUse,
        validTill,
        percent,
      } = req.body;

      const foundPromo = await this.models.promoCodesModel.findOne({ where: { id } });
      if (!foundPromo) {
        const err = new Error('invalid id');
        err.status = 409;
        return next(err);
      }
      const promosInUse = await this.models.ordersModel.findAll({
        where: {
          status: 'pending',
          promoCodeId: id,
        },
      });
      if (promosInUse.length > 0) {
        const err = new Error('promoCode is in using process');
        err.status = 409;
        throw err;
      }
      await foundPromo.update({
        isUsed,
        dateOfUse,
        validTill,
        percent,
      });
      return res.status(200).send({ success: true, result: foundPromo });
    } catch (e) {
      return next(e);
    }
  }

  async removePromoCode(req, res, next) {
    try {
      const {
        ids,
      } = req.body;
      const found = await this.models.promoCodesModel.findAll({ where: { id: ids } });

      if (!found) {
        const err = new Error('invalid id');
        err.status = 409;
        return next(err);
      }
      const promosInUse = await this.models.ordersModel.findAll({
        where: {
          status: 'pending',
          promoCodeId: ids,
        },
      });
      if (promosInUse.length > 0) {
        const err = new Error('there is,are promoCodes in using process');
        err.status = 409;
        throw err;
      }

      await this.models.promoCodesModel.destroy({ where: { id: ids } });

      return res.status(200).send({ success: true, message: 'promoCodes successfully deleted' });
    } catch (e) {
      return next(e);
    }
  }

  async addProductUsage(req, res, next) {
    const transaction = await db.transaction();
    try {
      const savedImage = await multer.saveImage(req, res, 'ProductUsageImages');
      const { imgPath } = savedImage;

      let {
        names: arr,
      } = req.body;
      arr = JSON.parse(arr);

      const usage = await this.models.productUsageModel.create({ image: imgPath }, { transaction });
      for (let i = 0; i < arr.length; i++) {
        arr[i].productUsageId = usage.id;
      }

      await this.models.productUsageLangModel.bulkCreate(arr, { transaction });

      await transaction.commit();
      return res.status(200).send({ success: true, message: 'product usage created successfully' });
    } catch (err) {
      await transaction.rollback();
      return next(err);
    }
  }

  async updateProductUsage(req, res, next) {
    const transaction = await db.transaction();

    try {
      const savedImage = await multer.saveImage(req, res, 'ProductUsageImages');
      const { imgPath } = savedImage;

      const { id } = req.params;
      let {
        names: arr,
      } = req.body;
      arr = JSON.parse(arr);

      const updateUsage = await this.models.productUsageModel.findOne({
        where: {
          id,
        },
      });
      if (!updateUsage) {
        const err = new Error('there is not a product usage by that id');
        err.status = 409;
        throw err;
      }
      let imagePath = updateUsage.image;
      if (imagePath && imgPath) {
        const jsonPath = path.join(__dirname, '../../..', 'uploads/ProductUsageImages');
        if (fs.existsSync(path.join(jsonPath, `${imagePath}`))) {
          fs.unlinkSync(path.join(jsonPath, `${imagePath}`));
        }
      }

      if (imgPath) {
        await updateUsage.update({ image: imgPath.toString() });
        imagePath = imgPath;
      }

      {
        const resultsArr = [];
        let result = null;
        for (let i = 0; i < arr.length; i++) {
          result = this.models.productUsageLangModel.upsert({
            productUsageId: id,
            lang: arr[i].lang,
            name: arr[i].name,
            description: arr[i].description,
          }, { transaction });
          resultsArr.push(result);
        }

        await Promise.all(resultsArr);
      }
      await transaction.commit();
      // eslint-disable-next-line max-len
      return res.status(200).send({ success: true, result: updateUsage, imagePath: imagePath.toString() });
    } catch (err) {
      await transaction.rollback();
      return next(err);
    }
  }

  async removeProductUsage(req, res, next) {
    try {
      const {
        ids,
      } = req.body;
      const removeUsage = await this.models.productUsageModel.findAll({
        where: {
          id: ids,
        },
      });
      if (removeUsage.length !== ids.length) {
        const err = new Error('invalid Usage id');
        err.status = 409;
        throw err;
      }
      const imgPaths = [];
      for (let i = 0; i < removeUsage.length; i++) {
        imgPaths.push(removeUsage[i].image);
      }
      for (let i = 0; i < imgPaths.length; i++) {
        const jsonPath = path.join(__dirname, '../../..', 'uploads/ProductUsageImages');
        console.log('jsonPath');
        console.log('******************************************************************************************************');
        console.log('******************************************************************************************************');
        console.log(fs.existsSync(path.join(jsonPath, `${imgPaths[i]}`)));
        if (fs.existsSync(path.join(jsonPath, `${imgPaths[i]}`))) {
          fs.unlinkSync(path.join(jsonPath, `${imgPaths[i]}`));
        }
      }

      await this.models.productUsageModel.destroy({
        where: {
          id: ids,
        },
      });
      return res.status(200).send({ success: true, message: 'you have deleted product usages successfully' });
    } catch (err) {
      return next(err);
    }
  }

  async addProductType(req, res, next) {
    const transaction = await db.transaction();
    try {
      const {
        names,
      } = req.body;

      const createProType = await this.models.productTypeModel.create({ transaction });
      const namesArr = [];
      for (let i = 0; i < names.length; i++) {
        const obj = {
          productTypeId: createProType.id,
          name: names[i].name,
          lang: names[i].lang,
        };
        namesArr.push(obj);
      }
      await this.models.productTypeLangModel.bulkCreate(namesArr, { transaction });

      await transaction.commit();
      return res.status(200).send({ success: true, message: 'product type was created successfully' });
    } catch (err) {
      await transaction.rollback();
      return next(err);
    }
  }

  async updateProductType(req, res, next) {
    const transaction = await db.transaction();
    try {
      const {
        id,
      } = req.params;
      const {
        names,
      } = req.body;
      const foundProType = await this.models.productTypeModel.findOne({
        where: {
          id,
        },
      });
      if (!foundProType) {
        const err = new Error('invalid id');
        err.status = 409;
        return next(err);
      }

      {
        const resultsArr = [];
        let result = null;
        for (let i = 0; i < names.length; i++) {
          result = this.models.productTypeLangModel.upsert({
            productTypeId: id,
            lang: names[i].lang,
            name: names[i].name,
          }, { transaction });
          resultsArr.push(result);
        }

        await Promise.all(resultsArr);
      }

      await transaction.commit();

      return res.status(200).send({ success: true, message: 'product type updated successfully' });
    } catch (err) {
      await transaction.rollback();
      return next(err);
    }
  }

  async removeProductType(req, res, next) {
    try {
      const {
        ids = [],
      } = req.body;
      const removeProType = await this.models.productTypeModel.findAll({
        where: {
          id: ids,
        },
      });
      if (!removeProType.length > 0) {
        const err = new Error('invalid Usage id');
        err.status = 409;
        throw err;
      }
      await this.models.productTypeModel.destroy({ where: { id: ids } });
      return res.status(200).send({ success: true, message: 'you have deleted the product type successfully' });
    } catch (err) {
      return next(err);
    }
  }

  async addBrand(req, res, next) {
    try {
      const {
        name,
      } = req.body;
      const addedBrand = await this.models.brandModel.create({ name });
      return res.status(200).send({ success: true, result: addedBrand });
    } catch (err) {
      return next(err);
    }
  }

  async updateBrand(req, res, next) {
    try {
      const {
        id,
      } = req.params;
      const {
        name,
      } = req.body;
      const updatedBrand = await this.models.brandModel.findOne({
        where: {
          id,
        },
      });
      if (!updatedBrand) {
        const err = new Error('invalid  id');
        err.status = 409;
        throw err;
      }
      await updatedBrand.update({ name });
      return res.status(200).send({ success: true, result: updatedBrand });
    } catch (err) {
      return next(err);
    }
  }

  async removeBrand(req, res, next) {
    try {
      const {
        ids,
      } = req.body;
      if (ids.includes(1)) {
        const err = new Error('You can not delete Mankan brand');
        err.status = 409;
        throw err;
      }
      const removeBrand = await this.models.brandModel.findAll({
        where: {
          id: ids,
        },
      });
      if (!removeBrand.length > 0) {
        const err = new Error('invalid  id');
        err.status = 409;
        throw err;
      }
      await this.models.brandModel.destroy({
        where: {
          id: ids,
        },
      });
      return res.status(200).send({ success: true, message: 'you have deleted the brand successfully' });
    } catch (err) {
      return next(err);
    }
  }

  async removeProduct(req, res, next) {
    try {
      const {
        ids,
      } = req.body;
      const products = await this.models.productModel.findAll({
        where: {
          id: ids,
        },
      });
      if (!products) {
        const err = new Error('invalid id');
        err.status = 409;
        return next(err);
      }
      if (products.length !== ids.length) {
        const err = new Error('invalid id');
        err.status = 409;
        return next(err);
      }
      for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        const imgArrDir = path.join(__dirname, `../../../uploads/products/${id}`);

        if (fs.existsSync(imgArrDir)) {
          const files = fs.readdirSync(imgArrDir);

          if (files.length > 0) {
            files.forEach((filename) => {
              if (fs.existsSync(path.join(imgArrDir, `${filename}`))) {
                fs.unlinkSync(path.join(imgArrDir, `${filename}`));
              }
            });
            fs.rmdirSync(imgArrDir);
          } else {
            fs.rmdirSync(imgArrDir);
          }
        } else {
          console.log('Directory path not found.');
        }
      }
      const clearProducts = [];
      for (let i = 0; i < products.length; i++) {
        clearProducts.push({
          xmlId: products[i].xmlId,
          xmlName: products[i].xmlName,
          xmlPrice: products[i].xmlPrice,
          xmlCount: products[i].xmlCount,
          xmlBarCode: products[i].xmlBarCode,
          visible: false,
        });
      }
      await this.models.productModel.destroy({
        where: {
          id: ids,
        },
      });
      await this.models.productModel.bulkCreate(clearProducts);

      return res.status(200).send({ success: true, message: 'products was deleted successfully' });
    } catch (e) {
      return next(e);
    }
  }

  async deleteProductPhotos(req, res, next) {
    try {
      const {
        id: productId,
      } = req.params;
      const {
        delImages,
      } = req.body;
      if (delImages && delImages.length > 0) {
        const findImages = await this.models.productPhotosModel.findAll({
          where: {
            id: delImages,
            productId,
          },
        });
        if (findImages.length !== delImages.length) {
          const err = new Error('no images with that ids');
          err.status = 409;
          throw err;
        }
        if (findImages.length > 0) {
          const imgPath = path.join(__dirname, `../../../uploads/products/${productId}`);
          const delArr = [];
          // const delPhotosArr = [];
          for (let i = 0; i < delImages.length; i++) {
            const delPhotoUrl = findImages[i].url;
            if (fs.existsSync(path.join(imgPath, `${delPhotoUrl}`))) {
              fs.unlinkSync(path.join(imgPath, `${delPhotoUrl}`));
            }
            const del = this.models.productPhotosModel.destroy({
              where: {
                id: delImages[i],
              },
            });
            // delPhotosArr.push(delImageFromUploads);
            delArr.push(del);
          }
          await Promise.all(delArr);
          // await Promise.all(delPhotosArr);
        } else {
          const err = new Error('there is no images with that ids');
          err.status = 409;
          throw err;
        }
      } else {
        const err = new Error('you need to provide product id and ids of product photo');
        err.status = 409;
        throw err;
      }

      return res.status(200).send({ success: true, message: 'you have deleted photos successfully' });
    } catch (err) {
      return next(err);
    }
  }

  async saveProductPhotos(req, res, next) {
    try {
      const {
        id: productId,
      } = req.params;
      const product = await this.models.productModel.findOne({ where: { id: productId } });
      if (!product) {
        const err = new Error('Incorrect product id');
        err.status = 409;
        throw err;
      }

      const imageData = await multer.saveProductPhotos(req, res, productId);
      const photosArr = [];
      if (imageData.imgArr.length) {
        for (let i = 0; i < imageData.imgArr.length; i++) {
          const obj = {
            productId,
            url: imageData.imgArr[i],
            type: 'image',
          };
          photosArr.push(obj);
        }
        await this.models.productPhotosModel.bulkCreate(photosArr);
      }

      const savedImages = await this.models.productPhotosModel.findAll({
        where: {
          productId,
        },
      });

      let minOrder = savedImages[0].order;
      let minOrderId = savedImages[0].id;
      for (let i = 0; i < savedImages.length - 1; i++) {
        if (((minOrder > savedImages[i + 1].order) && savedImages[i + 1].order) || !minOrder) {
          minOrder = savedImages[i + 1].order;
          minOrderId = savedImages[i + 1].id;
        }
      }
      if (minOrder !== 1) {
        await this.models.productPhotosModel.update({ order: 1 }, {
          where: {
            id: minOrderId,
          },
        });
      }
      const updatedImages = await this.models.productPhotosModel.findAll({
        where: {
          productId,
        },
      });
      return res.status(200).send({ success: true, result: updatedImages });
    } catch (err) {
      return next(err);
    }
  }

  async editProduct(req, res, next) {
    const transaction = await db.transaction();
    try {
      const { id: productId } = req.params;

      const {
        photosOrder = [],
        langs: info = [],
        percent = 0,
        size,
        boxSize,
        types = [],
        usages = [],
        brandId,
        minAge = 0,
        maxAge = 9,
        extraFilterIds = [],
        accessoryIds = [],
        isNew = false,
        bestSeller = false,
        type = 'product',
      } = req.body;
      const sex = req.body.sex || 'ALL';

      const product = await this.models.productModel.findOne({
        where: {
          id: productId,
        },
        include: [
          {
            model: this.models.productPhotosModel,
            as: 'photos',
          },
          {
            model: this.models.productLangModel,
            as: 'langs',
          },

        ],
      });
      if (!product) {
        const err = new Error();
        err.message = 'Incorrect product id';
        err.status = 409;
        return next(err);
      }
      if (!photosOrder) {
        const err = new Error('you must provide photos orders');
        err.status = 409;
        throw err;
      }
      const orderPhotos = await this.models.productPhotosModel.findAll({ where: { productId } });

      if (photosOrder) {
        if (orderPhotos.length !== photosOrder.length) {
          const err = new Error('you want to order more or less photos that exists in db');
          err.status = 409;
          throw err;
        }
        const resultArr = [];
        for (let i = 0; i < photosOrder.length; i++) {
          const setOrder = this.models.productPhotosModel.update({
            order: photosOrder[i].order,
            alt: photosOrder[i].alt,
            title: photosOrder[i].title,
          },
          {
            where: {
              id: photosOrder[i].id,
            },
          }, { transaction });
          resultArr.push(setOrder);
        }

        await Promise.all(resultArr);
      }
      const foundPhotoNumber1 = await this.models.productPhotosModel.findOne({
        where: {
          productId,
          order: 1,
        },
      });

      let defaultArmTitle;
      let defaultArmAlt;
      for (let i = 0; i < info.length; i += 1) {
        if (info[i].lang === 'ARM') {
          defaultArmAlt = info[i].name;
          defaultArmTitle = info[i].name;
        }
      }
      if (foundPhotoNumber1) {
        if (!foundPhotoNumber1.alt) {
          await foundPhotoNumber1.update({ alt: defaultArmAlt }, { transaction });
        }
        if (!foundPhotoNumber1.title) {
          await foundPhotoNumber1.update({ title: defaultArmTitle }, { transaction });
        }
      }

      {
        const resultsArr = [];
        let result = null;
        for (let i = 0; i < info.length; i++) {
          result = this.models.productLangModel.upsert({
            productId,
            lang: info[i].lang,
            name: info[i].name.replace(/\s+/g, ' '),
            description: info[i].description,
            metaTitle: info[i].metaTitle || info[i].name,
            metaDescription: info[i].metaDescription,
          }, { transaction });
          resultsArr.push(result);
        }
        await Promise.all(resultsArr);
      }
      let updatedAtUpdate = product.updatedAt;
      if (!product.name) {
        updatedAtUpdate = new Date();
      }
      await product.update({
        percent, size, boxSize, isNew, minAge, maxAge, type, updatedAt: updatedAtUpdate,
      }, { transaction });

      const sexBrand = await this.models.sexBrandModel.findAll({ where: { productId } });
      if (sexBrand.length > 0) {
        await this.models.sexBrandModel.destroy({ where: { productId } }, { transaction });
      }
      await this.models.sexBrandModel.create({ productId, sex, brandId }, { transaction });

      const findAgeMap = await this.models.ageMapModel.findAll({ where: { productId } });
      if (findAgeMap.length > 0) {
        await this.models.ageMapModel.destroy({
          where: { productId },
        }, { transaction });
      }
      const ageIds = await this.models.ageModel.findAll({
        where: {
          [Op.and]: [{ maxAge: { [Op.gt]: minAge } }, { minAge: { [Op.lt]: maxAge } }],
        },
      });
      if (!ageIds.length > 0) {
        const err = new Error('you want to set a product age out of range');
        err.status = 409;
        throw err;
      }
      const bulkAgeObj = [];
      for (let i = 0; i < ageIds.length; i++) {
        bulkAgeObj.push({
          productId,
          ageId: ageIds[i].id,
        });
      }
      await this.models.ageMapModel.bulkCreate(bulkAgeObj, { transaction });

      if (usages && usages.length > 0) {
        const productExistsInMap = await this.models.usageMapModel.findAll(
          {
            where: { productId },
          },
        );
        if (productExistsInMap.length > 0) {
          await this.models.usageMapModel.destroy({
            where: { productId },
          }, { transaction });
        }
        const bulkObj = [];
        for (let i = 0; i < usages.length; i++) {
          bulkObj.push({
            productId,
            usageId: usages[i],
          });
        }
        await this.models.usageMapModel.bulkCreate(bulkObj, { transaction });
      } else {
        await this.models.usageMapModel.destroy({
          where: { productId },
        }, { transaction });
      }
      if (types && types.length > 0) {
        const productExistsInMap = await this.models.typeMapModel.findAll({ where: { productId } });
        if (productExistsInMap.length > 0) {
          await this.models.typeMapModel.destroy({
            where: { productId },
          }, { transaction });
        }
        const bulkObj = [];
        for (let i = 0; i < types.length; i++) {
          bulkObj.push({
            productId,
            typeId: types[i],
          });
        }
        await this.models.typeMapModel.bulkCreate(bulkObj, { transaction });
      } else {
        await this.models.typeMapModel.destroy({
          where: { productId },
        }, { transaction });
        const allProTypes = await this.models.productTypeModel.findAll();
        const allProTypeIds = allProTypes.map((item) => item.id);
        if (allProTypeIds.length > 0) {
          const bulkArr = [];
          for (let i = 0; i < allProTypeIds.length; i++) {
            bulkArr.push({
              productId,
              typeId: allProTypeIds[i],
            });
          }
          await this.models.typeMapModel.bulkCreate(bulkArr, { transaction });
        }
      }

      await this.models.extraFilterProductModel.destroy(
        { where: { productId } },
        { transaction },
      );
      if (extraFilterIds && extraFilterIds.length > 0) {
        const extraFilters = await this.models.extraFilterModel.findAll(
          {
            where: {
              id:
                extraFilterIds,
            },
          },
        );
        if (extraFilters.length !== extraFilterIds.length) {
          const err = new Error('invalid extra filter');
          err.status = 409;
          throw err;
        }
        const createMap = [];
        for (let i = 0; i < extraFilterIds.length; i++) {
          createMap.push({
            productId,
            extraFilterId: extraFilterIds[i],
          });
        }

        await this.models.extraFilterProductModel.bulkCreate(createMap);
      }

      // filling product and accessories map table
      if (accessoryIds) {
        // first we need to check is a accessory id is valid one
        const accIds = accessoryIds.map((item) => item.id);
        const foundAccess = await this.models.productModel.findAll({
          where: {
            id: accIds,
            visible: true,
          },
        });

        if (accessoryIds.length !== foundAccess.length) {
          const err = new Error('You can not attach an accessory that does not visible or does not exist');
          err.status = 409;
          throw err;
        }
        await this.models.productAccessoriesMap.destroy({ where: { productId } }, { transaction });
        const accessMap = [];
        for (let i = 0; i < accessoryIds.length; i++) {
          const obj = {
            productId: product.id,
            accessoryId: accessoryIds[i].id,
            count: accessoryIds[i].count || 1,
            type: accessoryIds[i].type || 'bug',
          };
          accessMap.push(obj);
        }
        await this.models.productAccessoriesMap.bulkCreate(accessMap, { transaction });
      }

      await transaction.commit();

      const uptProduct = await this.models.productModel.findOne({
        where: {
          id: productId,
        },
        include: [
          {
            model: this.models.productPhotosModel,
            as: 'photos',
          },
          {
            model: this.models.productLangModel,
            as: 'langs',
          },

        ],
      });

      let price = product.xmlPrice;
      if (percent) {
        price -= price * (percent / 100);
        price /= 10;
        price = Math.ceil(price);
        price *= 10;
      }
      await uptProduct.update({
        visible: !!(uptProduct.photos.length && uptProduct.langs[0].name.length),
        price,
        name: defaultArmTitle,
      });

      // creating Statistic model
      await this.models.productStatisticModel.upsert({
        productId,
        bestSeller,
        price: uptProduct.price,
      });
      return res.send({ success: true, message: 'Product data successfully updated' });
    } catch (e) {
      await transaction.rollback();
      return next(e);
    }
  }

  async getProductById(req, res, next) {
    try {
      const {
        id,
      } = req.params;
      let statisticId = await this.models.productStatisticModel.findAll({
        where: {
          productId: id,
          bestSeller: true,
        },

      });
      statisticId = statisticId.map((item) => item.productId);
      console.log(statisticId);
      // return res.send({statisticId})
      const product = await this.models.productModel.findOne({
        where: {
          id,
        },
        attributes: {
          include: [
            [sequelize.literal(`(CASE WHEN "Product"."id" in (${statisticId.length ? statisticId : -1})  THEN true ELSE false  END)`), 'bestSeller'],
          ],
        },
        include: [
          {
            model: this.models.productPhotosModel,
            as: 'photos',
          },
          {
            model: this.models.brandModel,
            as: 'brand',
          },
          {
            model: this.models.sexBrandMapModel,
            as: 'productSex',
          },
          // {
          //   model: this.models.productStatisticModel,
          //   as: 'statistic',
          //   // attributes: ['bestSeller'],
          // },
          {
            model: this.models.productTypeModel,
            as: 'productType',
            include: [
              {
                model: this.models.productTypeLangModel,
                as: 'langs',
              },
            ],
          },
          {
            model: this.models.productUsageModel,
            as: 'productUsage',
            include: [
              {
                model: this.models.productUsageLangModel,
                as: 'langs',
              },
            ],
          },
          {
            model: this.models.productLangModel,
            as: 'langs',
          },
          {
            model: this.models.productModel,
            as: 'accessories',
          },
          {
            model: this.models.extraFilterModel,
            as: 'extraFilter',
            include: [
              {
                model: this.models.extraFilterLangModel,
                as: 'langs',
              },
            ],
          },

        ],
      });

      return res.status(200).send({ success: true, result: product });
    } catch (e) {
      return next(e);
    }
  }

  async getProductPhotos(req, res, next) {
    try {
      const {
        id: productId,
      } = req.params;
      const productPhotos = await this.models.productPhotosModel.findAndCountAll({
        where: {
          productId,
        },
      });

      return res.status(200).send({ success: true, result: productPhotos });
    } catch (e) {
      return next(e);
    }
  }

  async getAllProducts(req, res, next) {
    try {
      const {
        searchWord = '',
        limit = 100,
        offset = 0,
        type,
      } = req.body;
      let notNumber;
      if (searchWord && Number(searchWord)) {
        notNumber = false;
      } else if (searchWord) {
        notNumber = true;
      }
      const products = await this.models.productModel.findAndCountAll({
        where: {
          type: type || { [Op.not]: null },

          xmlBarCode: notNumber ? { [Op.not]: null } : { [Op.iLike]: `%${searchWord.trim()}%` },

        },
        include: [
          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              name: notNumber ? { [Op.iLike]: `%${searchWord.trim().replace(/\s+/g, ' ')}%` } : { [Op.not]: null },
            },
            required: notNumber || false,
          },
        ],

        order: [
          ['updatedAt', 'desc'],
        ],
        distinct: true,
        limit,
        offset,
      });
      const pages = Math.ceil(products.count / limit);

      return res.status(200).send({ success: true, pages, result: products });
    } catch (e) {
      return next(e);
    }
  }

  async download(req, res, next) {
    try {
      const {
        path: csv,
      } = req.params;
      const info = csv.split('+');
      const pathToCsv = path.join(__dirname, '../', '../', '../', 'public', 'csv', info[0], info[1]);
      console.log(pathToCsv);
      return res.download(pathToCsv, req.param('file'), (err) => {
        if (err) {
          console.log('file downloaded error', err);
          global.io.emit('csv_download_error', err);
        } else {
          console.log(('download completed'));
        }

        // CHECK FOR ERROR
        setTimeout(() => {
          fs.unlink(pathToCsv, (e, res) => {
            if (e) {
              console.log('file deleted error', e);
            }
            console.log(`everything is okay,file in path ${pathToCsv} successfully deleted`);
          });
        }, 10000);
      });
    } catch (e) {
      return next(e);
    }
  }

  async removeSubscriber(req, res, next) {
    try {
      const {
        email,
      } = req.body;

      const findSubscriber = await this.models.subscribersModel.findOne({
        where: {
          email,
        },
      });
      if (!findSubscriber) {
        const err = new Error('invalid email');
        err.status = 409;
        return next(err);
      }
      await findSubscriber.destroy();
      return res.status(200).send({ success: true, message: 'subscriber successfully deleted' });
    } catch (e) {
      return next(e);
    }
  }

  async getAllSubscribers(req, res, next) {
    try {
      const {
        limit = 1000,
        offset = 0,
        searchWord = '',
        from = new Date('2019-02-03'),
        to = new Date(),
      } = req.body;
      let pages = 1;
      const findSubscribers = await this.models.subscribersModel.findAndCountAll({
        where: {
          email: { [Op.iLike]: `%${searchWord.trim()}%` },
          createdAt: { [Op.between]: [from, to] },
        },
        limit,
        offset,
      });
      if (!findSubscribers) {
        const err = new Error('no subscribers');
        err.status = 409;
        return next(err);
      }

      pages = Math.ceil(findSubscribers.count / limit);

      return res.status(200).send({ success: true, pages, result: findSubscribers });
    } catch (e) {
      return next(e);
    }
  }

  async getAllSubscribersForPrint(data, next) {
    try {
      const {
        to, from, limit = 1000, offset,
      } = data;
      const searchParams = {
        where: {
        },
        attributes: {
          exclude: ['updatedAt'],
        },
        raw: true,
        limit,
        offset,
      };

      if (!from && to) {
        searchParams.where.createdAt = {

          [op.lte]: to,
        };
      }
      if (from && !to) {
        searchParams.where.createdAt = {

          [op.gte]: from,
        };
      }
      if (to && from) {
        searchParams.where.createdAt = {

          [op.gte]: from,
          [op.lte]: to,

        };
      }
      const subscribers = await this.models.subscribersModel.findAndCountAll(searchParams);
      return { success: true, result: subscribers };
    } catch (e) {
      return next(e);
    }
  }

  async printSubscribers(req, res, next) {
    try {
      const toPrint = [];
      const {
        to, from, limit = 1000, offset = 0,
      } = req.body;
      let off = offset;
      let result = await this.getAllSubscribersForPrint({
        to, from, limit, off,
      }, next);
      for (let i = 0; i < result.result.rows.length; i += 1) {
        let onlyDate = `${new Date(result.result.rows[i].createdAt)}`;
        onlyDate = onlyDate.slice(0, 16);
        result.result.rows[i].createdAt = onlyDate;
      }
      toPrint.push(...result.result.rows);

      const count = Math.ceil(result.result.count / 1000);

      for (let i = 1; i < count; i++) {
        off += 1000;
        result = await this.getAllSubscribersForPrint({
          to, from, limit, offset: off,
        }, next);
        for (let j = 0; j < result.result.rows.length; j += 1) {
          let onlyDate = `${new Date(result.result.rows[j].createdAt)}`;
          onlyDate = onlyDate.slice(0, 16);
          result.result.rows[j].createdAt = onlyDate;
        }
        toPrint.push(...result.result.rows);
      }
      createCsv(toPrint, 'subscribers');
      return res.send({ success: true, status: 'in process', toPrint });
    } catch (e) {
      return next(e);
    }
  }

  async getAllPromoCodes(req, res, next) {
    try {
      const dateObj = new Date();
      const month = dateObj.getUTCMonth() + 1; // months from 1-12
      const day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();

      let newDate = `${year}-${month}-${day}`;
      newDate = newDate.toString();

      // const currentTime = d();
      const {
        limit = 1000,
        offset = 0,
        percent,
        // code,
        isUsed,
        validTill,
        searchWord,
      } = req.body;
      const searchParams = {
        where: {
        },
        attributes: {
          include: [[sequelize.literal(`CASE WHEN "validTill" < '${newDate}'  THEN true ELSE false  END`), 'expired']],
        },
        limit,
        offset,
      };
      if (validTill) {
        searchParams.where = {
          validTill: { [Op.lte]: validTill },
        };
      }
      if (percent) {
        searchParams.where.percent = percent;
      }
      // if (code) {
      //   searchParams.where.code = code;
      // }
      if (typeof isUsed === 'boolean') {
        searchParams.where.isUsed = isUsed;
      }
      if (searchWord) {
        searchParams.where = sequelize.where(
          sequelize.cast(sequelize.col('code'), 'varchar'),
          { [Op.iLike]: `%${searchWord}%` },
        );
      }

      searchParams.order = [['createdAt', 'DESC']];
      const findPromoCodes = await this.models.promoCodesModel.findAndCountAll(searchParams);
      if (!findPromoCodes) {
        const err = new Error('there is not such promo code');
        err.status = 409;
        return next(err);
      }
      const pages = Math.ceil(findPromoCodes.count / limit);
      return res.status(200).send({ success: true, pages, result: findPromoCodes });
    } catch (e) {
      return next(e);
    }
  }

  async getAllPromoCodesForPrint(data, next) {
    try {
      const {
        to, from, percent, isUsed,
      } = data;
      const searchParams = {
        where: {
        },
        attributes: {
          exclude: ['updatedAt'],
        },
        raw: true,
      };
      if (percent) {
        searchParams.where.percent = percent;
      }
      if (typeof isUsed === 'boolean') {
        searchParams.where.isUsed = isUsed;
      }
      if (!from && to) {
        searchParams.where.createdAt = {

          [op.lte]: to,
        };
      }
      if (from && !to) {
        searchParams.where.createdAt = {

          [op.gte]: from,
        };
      }
      if (to && from) {
        searchParams.where.createdAt = {

          [op.gte]: from,
          [op.lte]: to,

        };
      }
      const promoCodes = await this.models.promoCodesModel.findAll(searchParams);
      return promoCodes;
    } catch (e) {
      return next(e);
    }
  }

  async getOnlyDate(result) {
    try {
      let onlyDate;
      for (let i = 0; i < result.result.rows.length; i += 1) {
        if (result.result.rows[i].dateOfUse) {
          onlyDate = new Date(result.result.rows[i].dateOfUse);
          onlyDate = `${onlyDate.getFullYear()}-${onlyDate.getUTCMonth() + 1}-${onlyDate.getUTCDate()}`;
        }
      }
      return onlyDate;
    } catch (e) {
      throw e;
    }
  }

  async printPromoCodes(req, res, next) {
    try {
      const toPrint = [];
      const {
        to, from, percent, isUsed,
      } = req.body;

      const result = await this.getAllPromoCodesForPrint({
        to, from, percent, isUsed,
      }, next);
      for (let i = 0; i < result.length; i += 1) {
        if (result[i].dateOfUse) {
          let onlyDate = new Date(result[i].dateOfUse);
          onlyDate = `${onlyDate.getFullYear()}-${onlyDate.getUTCMonth() + 1}-${onlyDate.getUTCDate()}`;
          result[i].dateOfUse = onlyDate;
        }
        let onlyDate = new Date(result[i].createdAt);
        onlyDate = `${onlyDate.getFullYear()}-${onlyDate.getUTCMonth() + 1}-${onlyDate.getUTCDate()}`;
        result[i].createdAt = onlyDate;
      }
      console.log(result);

      toPrint.push(...result);
      createCsv(toPrint, 'promoCodes');
      return res.send({ success: true, status: 'in process', toPrint });
    } catch (e) {
      return next(e);
    }
  }

  async addExtraFilter(req, res, next) {
    const transaction = await db.transaction();
    try {
      const {
        names,
      } = req.body;
      const addSlider = await this.models.sliderModel.create({ names, type: 'extraFilter' }, { transaction });
      const addedExtraFilter = await this.models.extraFilterModel.create({
        sliderId: addSlider.id,
      }, { transaction });
      const newObj = [];
      for (let i = 0; i < names.length; i++) {
        const obj = {
          extraFilterId: addedExtraFilter.id,
          name: names[i].name,
          lang: names[i].lang,
        };
        newObj.push(obj);
      }
      await this.models.extraFilterLangModel.bulkCreate(newObj, { transaction });
      await transaction.commit();
      return res.status(200).send({ success: true, message: 'extra filter was added successfully' });
    } catch (err) {
      await transaction.rollback();
      return next(err);
    }
  }

  async updateExtraFilter(req, res, next) {
    const transaction = await db.transaction();
    try {
      const {
        id,
      } = req.params;
      const {
        names,
      } = req.body;
      const extraFilter = await this.models.extraFilterModel.findOne({
        where: {
          id,
        },
      });
      if (!extraFilter) {
        const err = new Error('invalid id');
        err.status = 409;
        return next(err);
      }
      const updateSlider = await this.models.sliderModel.update({ names }, {
        where: {
          id: extraFilter.sliderId,
        },
      }, { transaction });

      {
        const resultsArr = [];
        let result = null;
        for (let i = 0; i < names.length; i++) {
          result = this.models.extraFilterLangModel.upsert({
            extraFilterId: extraFilter.id,
            lang: names[i].lang,
            name: names[i].name,
          }, { transaction });
          resultsArr.push(result);
        }

        await Promise.all(resultsArr);
      }

      await transaction.commit();

      return res.status(200).send({ success: true, message: 'extra filter updated successfully' });
    } catch (err) {
      await transaction.rollback();
      return next(err);
    }
  }

  async removeExtraFilter(req, res, next) {
    try {
      const {
        ids = [],
      } = req.body;
      const removeExtraFilter = await this.models.extraFilterModel.findAll({
        where: {
          id: ids,
        },
      });
      if (!removeExtraFilter) {
        return res.status(409).send({ success: false, message: 'invalid id' });
      }
      const sliderIds = removeExtraFilter.map((item) => item.sliderId);
      await this.models.sliderModel.destroy({
        where: {
          id: sliderIds,
        },
      });
      await this.models.extraFilterModel.destroy({
        where: {
          id: ids,
        },
      });
      return res.status(200).send({ success: true, message: 'you have deleted the extra filters successfully' });
    } catch (err) {
      return next(err);
    }
  }

  async addSlider(req, res, next) {
    try {
      const {
        name,
        order,
        status,
      } = req.body;
      const addSlider = await this.models.sliderModel.create({ name, order, status });
      return res.status(200).send({ success: true, result: addSlider });
    } catch (err) {
      return next(err);
    }
  }

  async updateSlider(req, res, next) {
    try {
      const {
        orderSliders = [],
      } = req.body;
      if (orderSliders.length > 0) {
        const updAll = [];
        for (let i = 0; i < orderSliders.length; i++) {
          const updOne = this.models.sliderModel.update({
            name: orderSliders[i].name,
            order: orderSliders[i].order,
            status: orderSliders[i].status,
          }, {
            where: {
              id: orderSliders[i].id,
            },
          });
          updAll.push(updOne);
        }
        await Promise.all(updAll);
      }
      return res.status(200).send({ success: true, message: 'you have successfully updated sliders' });
    } catch (err) {
      return next(err);
    }
  }

  async removeSlider(req, res, next) {
    try {
      const {
        id,
      } = req.params;
      const removeSlider = await this.models.sliderModel.findOne({
        where: {
          id,
        },
      });
      if (!removeSlider) {
        return res.status(409).send({ success: false, message: 'invalid id' });
      }
      await removeSlider.destroy();
      return res.status(200).send({ success: true, message: 'you have deleted the slider successfully' });
    } catch (err) {
      return next(err);
    }
  }

  async printUsers(req, res, next) {
    try {
      const toPrint = [];
      const {
        to, from, limit = 1000, offset = 0,
      } = req.body;
      let off = offset;
      let result = await this.getAllUsersForPrint({
        to, from, limit, off,
      }, next);
      for (let i = 0; i < result.result.rows.length; i += 1) {
        let onlyDate = `${new Date(result.result.rows[i].createdAt)}`;
        onlyDate = onlyDate.slice(0, 16);
        result.result.rows[i].createdAt = onlyDate;
      }
      toPrint.push(...result.result.rows);

      const count = Math.ceil(result.result.count / 1000);

      for (let i = 1; i < count; i++) {
        off += 1000;
        result = await this.getAllUsersForPrint({
          to, from, limit, offset: off,
        }, next);
        for (let j = 0; i < result.result.rows.length; j += 1) {
          let onlyDate = `${new Date(result.result.rows[j].createdAt)}`;
          onlyDate = onlyDate.slice(0, 16);
          result.result.rows[j].createdAt = onlyDate;
        }
        toPrint.push(...result.result.rows);
      }
      createCsv(toPrint, 'users');
      return res.send({ success: true, status: 'in process', toPrint });
    } catch (e) {
      return next(e);
    }
  }

  async getAllUsersForPrint(data, next) {
    try {
      const {
        limit = 1000, offset, to = new Date(), from = new Date('2020-03-26'),
      } = data;

      const users = await this.models.userModel.findAndCountAll({
        where: {
          createdAt: {
            [op.between]: [from, to],
          },
        },
        attributes: ['email', 'phone', 'bonus', 'boughtSum', 'bonusPercent', 'createdAt'],

        raw: true,
        limit,
        offset,
      });
      return { success: true, result: users };
    } catch (e) {
      return next(e);
    }
  }

  async getAllSliders(req, res, next) {
    try {
      const allSliders = await this.models.sliderModel.findAll();

      return res.status(200).send({ success: true, result: { rows: allSliders } });
    } catch (err) {
      return next(err);
    }
  }

  async addMainSlider(req, res, next) {
    const transaction = await db.transaction();
    try {
      const savedImage = await multer.saveImage(req, res, 'mainSlider');
      const { imgPath } = savedImage;
      let url;
      let image;
      if (path.extname(imgPath) === '.avi'
      || path.extname(imgPath) === '.AVI'
      || path.extname(imgPath) === '.MP4'
      || path.extname(imgPath) === '.mp4'
      || path.extname(imgPath) === '.ogv'
      || path.extname(imgPath) === '.OGV'
      || path.extname(imgPath) === '.FLV'
      || path.extname(imgPath) === '.flv') {
        url = imgPath;
      } else {
        image = imgPath;
      }
      const {
        link,
      } = req.body;
      // if (!url && !imgPath) {
      //   const err = new Error('you must provide an image or url path');
      //   err.status = 409;
      //   throw err;
      // }

      await this.models.mainSliderModel.create({
        image,
        url,
        link,
      }, { transaction });

      await transaction.commit();
      return res.status(200).send({ success: true, message: 'main slider created successfully' });
    } catch (err) {
      await transaction.rollback();
      return next(err);
    }
  }

  // async updateMainSlider(req, res, next) {
  //   try {
  //     const savedImage = await multer.saveImage(req, res, 'mainSlider');
  //     const { imgPath } = savedImage;
  //
  //     const { id } = req.params;
  //     const {
  //       link = '',
  //       imageDeleted = false,
  //     } = req.body;
  //
  //     const updateSlider = await this.models.mainSliderModel.findOne({
  //       where: {
  //         id,
  //       },
  //     });
  //     if (!updateSlider) {
  //       const err = new Error('there is not a slider by that id');
  //       err.status = 409;
  //       throw err;
  //     }
  //
  //     const imagePath = updateSlider.image;
  //     if (((imagePath && imgPath) || imageDeleted)) {
  //       const jsonPath = path.join(__dirname, '../../..', 'uploads/mainSlider');
  //       if (fs.existsSync(`${jsonPath}\\${imagePath}`)) {
  //         fs.unlinkSync(`${jsonPath}\\${imagePath}`);
  //       }
  //     }
  //     let img = updateSlider.image;
  //     if (imageDeleted && imgPath) {
  //       img = imgPath;
  //     } else if (imageDeleted) {
  //       img = null;
  //     }
  //     await updateSlider.update({
  //       image: img,
  //       url,
  //       link,
  //     });
  //
  //
  //     return res.status(200).send({ success: true, result: updateSlider });
  //   } catch (err) {
  //     return next(err);
  //   }
  // }

  async deleteMainSlider(req, res, next) {
    try {
      const {
        id,
      } = req.params;
      if (!id) {
        const err = new Error('you must provide id');
        err.status = 409;
        throw err;
      }
      const removeSliders = await this.models.mainSliderModel.findOne({
        where: {
          id,
        },
      });
      if (!removeSliders) {
        const err = new Error('invalid Slider id');
        err.status = 409;
        throw err;
      }
      const imgPath = removeSliders.image;
      const videoPath = removeSliders.url;

      const jsonPath = path.join(__dirname, '../../..', 'uploads/mainSlider/');
      console.log('***************************************************************************');
      console.log(jsonPath);
      console.log('***************************************************************************');
      console.log(imgPath);
      if (imgPath) {
        console.log(`${jsonPath}${imgPath}`);
        console.log(fs.existsSync(`${jsonPath}${imgPath}`));
        if (fs.existsSync(`${jsonPath}${imgPath}`)) {
          fs.unlinkSync(`${jsonPath}${imgPath}`);
        }
      }
      if (videoPath) {
        if (fs.existsSync(`${jsonPath}${videoPath}`)) {
          fs.unlinkSync(`${jsonPath}${videoPath}`);
        }
      }

      await this.models.mainSliderModel.destroy({
        where: {
          id,
        },
      });
      return res.status(200).send({ success: true, message: 'you have deleted slider,sliders successfully' });
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = new AdminManager();
