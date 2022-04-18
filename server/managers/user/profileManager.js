/* eslint-disable no-console,max-len */
const jwt = require('jsonwebtoken');
const sequelize = require('sequelize');
const axios = require('axios');

const op = sequelize.Op;
const { verifyHashPassword, hashPassword } = require('../../helpers/crypto/generator');
const db = require('../../../db');
const { jwtHelper } = require('../../helpers/jwtHelper');
const mailerHelper = require('../../helpers/mailerHelper');
const config = require('../../config');


const userModel = db.public.users.User;
const ordersModel = db.public.common.Orders;
const orderedProductsModel = db.public.common.OrderedProducts;
const wishListModel = db.public.common.WishList;
const cartListModel = db.public.common.CartList;
const productModel = db.public.common.ProductModel;
const promoCodesModel = db.public.common.PromoCodes;
const confirmCodeModel = db.public.users.ConfirmCode;
const subscribersModel = db.public.common.Subscribers;
const productPhotosModel = db.public.common.ProductPhotos;
const productLangModel = db.public.common.ProductLang;

class ProfileManager {
  constructor() {
    this.models = {
      userModel,
      ordersModel,
      productModel,
      wishListModel,
      cartListModel,
      subscribersModel,
      promoCodesModel,
      confirmCodeModel,
      orderedProductsModel,
      productPhotosModel,
      productLangModel,
    };
    this.getMe = this.getMe.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    this.addWish = this.addWish.bind(this);
    this.feedBack = this.feedBack.bind(this);
    this.complain = this.complain.bind(this);
    this.changeLang = this.changeLang.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.removeWish = this.removeWish.bind(this);
    this.checkOrder = this.checkOrder.bind(this);
    this.productInfo = this.productInfo.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.getMyOrders = this.getMyOrders.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.getPromoCode = this.getPromoCode.bind(this);
    this.confirmEmail = this.confirmEmail.bind(this);
    this.addSubscriber = this.addSubscriber.bind(this);
    this.getMyProducts = this.getMyProducts.bind(this);
    this.checkPromoCode = this.checkPromoCode.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.addWishCartByIds = this.addWishCartByIds.bind(this);
  }


  async getPromoCode(req, res, next) {
    try {
      const {
        code,
      } = req.params;
      const promo = await this.models.promoCodesModel.findOne({
        where: {
          code,
          isUsed: false,
        },
      });
      if (!promo) {
        const err = new Error('invalid promo code');
        err.status = 409;
        throw err;
      }
      return res.status(200).send({ success: true, result: promo });
    } catch (err) {
      return next(err);
    }
  }

  async checkOrder(req, res, next) {
    try {
      const adminMail = 'orders@mankan.am';
      const {
        orderId,
      } = req.query;
      console.log(1);
      if (!orderId) {
        const err = new Error('invalid Order id code');
        err.status = 409;
        throw err;
      }
      const order = await this.models.ordersModel.findOne({
        where: {
          paymentId: orderId,
        },
      });
      if (!order) {
        const err = new Error('invalid order id');
        err.status = 409;
        throw err;
      }
      const productPriceData = await this.models.orderedProductsModel.findAll({
        where: {
          orderId: order.id,
        },
      });
      const orderInfo = {
        orderId: order.id,
        firstName: order.firstName,
        lastName: order.lastName,
        email: order.email,
        phone: order.phone,
        bonus: order.bonus,
        deliveryAddress: order.deliveryAddress,
        deliveryTime: order.deliveryTime,
        deliveryPrice: order.deliveryPrice,
        totalAmount: order.paymentType === 'bonus' ? order.deliveryPrice : order.totalAmount,
        totalWithOutPromo: order.totalWithOutPromo,
        totalWithPromo: order.totalWithPromo,
        paymentType: 'Քարտային',
        status: order.status,
        promoCode: order.promoCode,
        promoCodePercent: order.promoCodePercent,
        createdAt: order.createdAt,
        products: productPriceData,
      };

      const response = await axios.get(`https://ipay.arca.am/payment/rest/getOrderStatusExtended.do?orderNumber=${order.id}&password=12784596Abcdef!&userName=21532119_api&orderId=${orderId}`, { timeout: 15000 });
      if (response && response.data) {
        if (response.data.actionCode === 0) {
          await order.update({
            paymentAccepted: true,
          });
          mailerHelper.sendToUserOrAdmin(adminMail, orderInfo, 'ForAdmin', res, next);
        } else {
          await this.models.ordersModel.destroy({
            where: {
              id: order.id,
            },
          });
          await this.models.orderedProductsModel.destroy({
            where: {
              orderId: order.id,
            },
          });
          const err = new Error('something is wrong');
          err.status = 409;
          throw err;
        }
      }

      return res.send({ success: true, message: 'payment is successfully ended' });
    } catch (err) {
      return next(err);
    }
  }

  async feedBack(req, res, next) {
    try {
      const {
        userEmail,
        firstLastNames,
        phone,
        description,
      } = req.body;
      const email = 'contact@mankan.am';
      if (!firstLastNames || !phone || !userEmail || !description) {
        const err = new Error('All fields are required!');
        err.status = 409;
        throw err;
      }
      const info = {
        email: userEmail,
        firstLastNames,
        phone,
        description,
      };

      mailerHelper.sendToUserOrAdmin(email, info, 'FeedBack', res, next);
      return res.status(200).send({
        success: true,
        message: 'Your feedBack was successfully sent',
      });
    } catch (err) {
      return next(err);
    }
  }

  async complain(req, res, next) {
    try {
      const {
        userEmail,
        description,
        type = 'complain',
        title = 'complain',
      } = req.body;

      const email = 'contact@mankan.am';
      const info = {
        email: userEmail,
        description,
        title,
      };

      mailerHelper.sendToUserOrAdmin(email, info, type, res, next);
      return res.status(200).send({
        success: true,
        message: `Your ${type} was successfully sent`,
      });
    } catch (err) {
      return next(err);
    }
  }


  async getUserInfo(req, res, next) {
    try {
      const {
        token,
      } = req.params;
      const decoded = await jwt.verify(
        token,
        config.AUTHORIZATION_TOKEN_SECRET,
      );
      const userInfo = await this.models.userModel.findOne({
        where: {
          id: decoded.userId,
        },
        attributes: {
          exclude: ['password', 'isAcceptedRules', 'isEmailConfirmed'],
        },
        include: [
          {
            model: this.models.wishListModel,
            as: 'wishList',
          },
          {
            model: this.models.cartListModel,
            as: 'cartList',
          },
        ],
      });
      return res.status(200).send({
        success: true,
        result: userInfo,
      });
    } catch (e) {
      return next(e);
    }
  }

  async changeEmail(req, res, next) {
    try {
      const { token } = req.params;

      const confCode = await this.models.confirmCodeModel.findOne({
        where: {
          code: token,
        },
      });
      if (!confCode) {
        const err = new Error('access denied');
        err.status = 400;
        throw err;
      }
      const decoded = await jwt.verify(
        token,
        config.AUTHORIZATION_TOKEN_SECRET,
      );

      const updateUser = await this.models.userModel.findOne({
        where: {
          id: decoded.userId,
        },
      });
      await this.models.userModel.destroy({
        where: {
          email: decoded.email,
          isEmailConfirmed: false,
        },
      });
      const findExistingMail = await this.models.userModel.findOne({
        where: {
          email: decoded.email,
          isEmailConfirmed: true,
        },
      });
      if (findExistingMail) {
        await confCode.destroy();
        const err = new Error('Email is already in use with someone else ');
        err.status = 409;
        throw err;
      }
      if (decoded.email === updateUser.email) {
        await confCode.destroy();
        const err = new Error('Your account email is already this email');
        err.status = 409;
        throw err;
      }
      await updateUser.update({
        email: decoded.email,
      });

      await confCode.destroy();
      return res.status(200).send({ success: true, message: 'your email updated successfully' });
    } catch (err) {
      return next(err);
    }
  }


  async removeUser(req, res, next) {
    try {
      const {
        password,
      } = req.body;
      const {
        id: userId,
      } = req.user;
      const user = await this.models.userModel.findOne({
        where: {
          id: userId,
        },
      });
      if (!user) {
        const err = new Error('incorrect user id');
        err.status = 409;
        throw err;
      }
      if (!verifyHashPassword(password, user.password)) {
        const err = new Error('incorrect password');
        err.status = 409;
        throw err;
      }
      await user.destroy();
      return res.status(200).send({ success: true, message: 'user successfully deleted' });
    } catch (e) {
      return next(e);
    }
  }

  async checkPromoCode(promoCode) {
    const foundPromo = await this.models.promoCodesModel.findOne({
      where: {
        code: promoCode,
      },
    });
    if (!foundPromo) {
      const err = new Error('incorrect promo code');
      err.status = 409;
      throw err;
    }
    const isPromoInUseProcess = await this.models.ordersModel.findOne({
      where: {
        promoCodeId: foundPromo.id,
        status: 'pending',
      },

    });

    if (isPromoInUseProcess) {
      return {
        isValid: true,
        inProcess: true,
      };
    }
    const date = new Date();
    if (foundPromo.isUsed || date > foundPromo.validTill) {
      return {
        isUsed: foundPromo.isUsed,
        isValid: !(date > foundPromo.validTill),
        inProcess: false,
      };
    }


    return {
      isValid: true,
      validUntil: foundPromo.validTill,
      isUsed: foundPromo.isUsed,
      percent: foundPromo.percent,
      id: foundPromo.id,
      code: foundPromo.code,
      inProcess: false,
    };
  }

  async productInfo(productId) {
    try {
      const product = await this.models.productModel.findOne({
        where: {
          id: productId,
        },
        raw: true,
      });
      return product;
    } catch (e) {
      throw e;
    }
  }

  async signUp(req, res, next) {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        retryPassword,
        phone,
        lang = 'ARM',
        isAcceptedRules = false,

      } = req.body;
      if (!isAcceptedRules) {
        const err = new Error('You must read and accept our term for registration');
        err.status = 409;
        throw err;
      }
      if (password !== retryPassword) {
        const err = new Error('Passwords does not match');
        err.status = 409;
        throw err;
      }
      const emailToLowerCase = email.toLowerCase();
      const isEmailExist = await this.models.userModel.findOne({
        where: {
          email: emailToLowerCase,
        },
      });
      if (isEmailExist && isEmailExist.isEmailConfirmed) {
        const err = new Error('This email already exists');
        err.status = 409;
        throw err;
      }
      if (isEmailExist) {
        await this.models.userModel.destroy({ where: { id: isEmailExist.id } });
      }
      const user = await this.models.userModel.create({
        firstName,
        lastName,
        email: emailToLowerCase,
        password,
        phone,
        lang,
        role: 1,
        isAcceptedRules: true,

      });

      mailerHelper.sendCode(email, user.id, 'email', res, next);
      return res.status(200).json({ success: true, message: 'User successfully was created. You will receive email for confirmation' });
    } catch (err) {
      return next(err);
    }
  }

  async signIn(req, res, next) {
    try {
      const {
        userName,
        password,
        rememberMe = false,
      } = req.body;
      if (!userName || !password) {
        const err = new Error('UserName and Password are required');
        err.status = 409;
        throw err;
      }
      const emailToLowerCase = userName.toLowerCase();

      const user = await this.models.userModel.findOne({
        where: {
          email: emailToLowerCase,
        },
      });
      if (!user) {
        const err = new Error('Wrong email or password');
        err.status = 401;
        throw err;
      }
      if (!user.isEmailConfirmed) {
        const err = new Error('Email is not confirmed yet.Please confirm your email for sign in');
        err.status = 409;
        throw err;
      }
      if (!verifyHashPassword(password, user.password)) {
        const err = new Error('Wrong email or password');
        err.status = 401;
        throw err;
      }
      const auth = {
        userId: user.id,
      };
      const userInfo = await this.models.userModel.findOne({
        where: {
          email: emailToLowerCase,
        },
        attributes: {
          exclude: ['password', 'isAcceptedRules', 'isEmailConfirmed'],
        },
        include: [
          {
            model: this.models.wishListModel,
            as: 'wishList',
          },
          {
            model: this.models.cartListModel,
            as: 'cartList',
          },
        ],
      });
      const token = await jwtHelper(auth, rememberMe);
      return res.status(200).send({
        success: true,
        result: userInfo,
        token,
      });
    } catch (err) {
      return next(err);
    }
  }

  async confirmEmail(req, res, next) {
    try {
      console.log('sda');
      console.log(req.params);

      const { token } = req.params;
      const isExist = await this.models.confirmCodeModel.findOne({
        where: {
          code: token,
        },

      });
      if (!isExist) {
        const err = new Error('Confirmation code is wrong ');
        err.status = 400;
        throw err;
      }

      const user = await this.models.userModel.findOne({
        where: {
          id: isExist.userId,
        },
      });
      if (user.isEmailConfirmed) {
        await isExist.destroy();
        const err = new Error('Your Email already confirmed');
        err.status = 401;
        throw err;
      }
      await user.update({ isEmailConfirmed: true });
      await isExist.destroy();

      return res.status(200).send({ success: true, message: 'Your email Successfully confirmed' });
    } catch (err) {
      return next(err);
    }
  }

  async forgotPassword(req, res, next) {
    try {
      let { email } = req.body;
      email = email.toLowerCase();
      const foundUser = await this.models.userModel.findOne({
        where: {
          email,
          isEmailConfirmed: true,
        },
      });

      if (!foundUser) {
        const err = new Error('User with that email doesn\'t exist');
        err.status = 409;
        throw err;
      }

      mailerHelper.sendCode(email, foundUser.id, 'password', res, next);
      return res.status(200).send({
        success: true,
        message: 'You will receive a code to your email for changing password',
      });
    } catch (err) {
      return next(err);
    }
  }


  async changePassword(req, res, next) {
    try {
      const {
        password,
        retryPassword,
      } = req.body;
      const { token } = req.params;

      if (!password || password !== retryPassword) {
        const err = new Error("your passwords doesn't match");
        err.status = 409;
        throw err;
      }
      const confCode = await this.models.confirmCodeModel.findOne({
        where: {
          code: token,
        },
      });
      if (!confCode) {
        const err = new Error('access denied');
        err.status = 400;
        throw err;
      }
      const decoded = await jwt.verify(
        token,
        config.AUTHORIZATION_TOKEN_SECRET,
      );

      const updateUser = await this.models.userModel.findOne({
        where: {
          id: decoded.userId,
        },
      });
      const newHashedPassword = hashPassword(password);
      await updateUser.update({
        password: newHashedPassword,
      });

      await confCode.destroy();
      return res.status(200).send({ success: true, message: 'your password updated successfully' });
    } catch (err) {
      return next(err);
    }
  }

  async changeLang(req, res, next) {
    try {
      const {
        id: userId,
      } = req.user;
      const {
        lang,
      } = req.body;

      const userUpdate = await this.models.userModel.findOne({
        where: {
          id: userId,
        },
      });
      if (!userUpdate) {
        const err = new Error('Incorrect id');
        err.status = 409;
        throw err;
      }

      await userUpdate.update({ lang });

      return res.status(200).send({ success: true, message: 'User lang successfully changed' });
    } catch (err) {
      return next(err);
    }
  }

  async updateUser(req, res, next) {
    try {
      const {
        id: userId,
      } = req.user;
      const {
        email,
        firstName,
        lastName,
        password,
        retryPassword,
        phone,
      } = req.body;

      const userUpdate = await this.models.userModel.findOne({
        where: {
          id: userId,
        },
      });
      if (!userUpdate) {
        const err = new Error('Incorrect id');
        err.status = 409;
        throw err;
      }

      let isPasswordChanged = 'Գաղտաբառը նույն է';
      // let newPassword;
      if (password !== retryPassword) {
        const err = new Error('Passwords does not match');
        err.status = 400;
        throw err;
      }
      let newPassword;
      if (password) {
        newPassword = hashPassword(password);
        isPasswordChanged = 'Գաղտնաբառը փոխված է';
      }
      let changeEmailTxt;
      if (email && (email !== userUpdate.email)) {
        const isEmailInUse = await this.models.userModel.findOne({
          where: {
            email,
            isEmailConfirmed: true,
          },
        });
        if (isEmailInUse) {
          const err = new Error('Email already in use');
          err.status = 400;
          throw err;
        }
        mailerHelper.sendCode(email, userUpdate.id, 'changeEmail', res, next);
        changeEmailTxt = `${email} \n Դուք ցանկացել եք փոխել էլ․ հասցեն, որն նաև մուտքանուն է։ Տեղեկացնում ենք, որ նոր Էլ․ հասցեն հաստատելու դեպքում կունենաք նոր մուտքանուն `;
      }

      await userUpdate.update({
        firstName,
        lastName,
        password: newPassword || userUpdate.password,
        phone,
      });
      const updatedInfo = {
        email: (email && (email !== userUpdate.email)) ? changeEmailTxt : userUpdate.email,
        firstName: userUpdate.firstName,
        lastName: userUpdate.lastName,
        password: isPasswordChanged,
        phone: userUpdate.phone,
      };
      mailerHelper.sendToUserOrAdmin(userUpdate.email, updatedInfo, 'UpdatedUserInfo', res, next);

      return res.status(200).send({ success: true, message: 'User info successfully updated' });
    } catch (err) {
      return next(err);
    }
  }

  async getMe(req, res, next) {
    try {
      const { id } = req.user;
      const {
        lang = 'ARM',
      } = req.body;

      const user = await this.models.userModel.findOne({
        where: {
          id,
        },
        attributes: { exclude: ['password'] },
        include: [
          {
            model: this.models.wishListModel,
            as: 'wishList',

          },
          {
            model: this.models.cartListModel,
            as: 'cartList',

          },

        ],
      });
      return res.status(200).send({ success: true, user });
    } catch (err) {
      return next(err);
    }
  }


  async getMyProducts(req, res, next) {
    try {
      const { id: userId } = req.user;
      const {
        type = 'wish',
      } = req.params;

      const user = await this.models.userModel.findOne({
        where: {
          id: userId,
        },
        attributes: { exclude: ['password'] },
        include: [
          {
            model: this.models.productModel,
            as: 'wishList',
            through: { attributes: ['wishType'], where: { wishType: type } },

          },
        ],
      });
      return res.send({ succesrss: true, result: user.wishList });
    } catch (err) {
      return next(err);
    }
  }


  async addWishCartByIds(req, res, next) {
    try {
      const { id } = req.user;
      const {
        products = [],
        productIds = [],
        type = 'wish',
      } = req.body;

      if (type === 'wish') {
        const deleteWishes = await this.models.wishListModel.findAll({ where: { userId: id } });
        if (deleteWishes.length > 0) {
          await this.models.wishListModel.destroy({ where: { userId: id } });
        }
        const bulkArr = [];
        for (let i = 0; i < productIds.length; i += 1) {
          bulkArr.push({
            productId: productIds[i],
            userId: id,
          });
        }
        await this.models.wishListModel.bulkCreate(bulkArr);
        return res.status(200).send({ success: true, message: 'wishes successfully were saved' });
      }

      if (type === 'cart') {
        const ids = products.map((item) => item.id);
        const productsInDb = await this.models.productModel.findAll({
          where: {
            visible: true,
            id: ids,
          },
        });
        if (products.length && (!productsInDb.length > 0 || productsInDb.length !== products.length)) {
          const err = new Error('Incorrect product id');
          err.status = 409;
          throw err;
        }
        for (let i = 0; i < products.length; i++) {
          for (let j = 0; j < productsInDb.length; j++) {
            if (products[i].id === productsInDb[j].id) {
              if (products[i].count > productsInDb[j].xmlCount) {
                const err = new Error(`Sorry but we can not provide ${productsInDb[j].name} product in that quantity`);
                err.status = 409;
                throw err;
              }
            }
          }
        }
        const deleteOldIds = await this.models.cartListModel.findAll({ where: { userId: id } });
        if (deleteOldIds.length > 0) {
          await this.models.cartListModel.destroy({ where: { userId: id } });
        }
        const cartProducts = [];
        for (let i = 0; i < products.length; i++) {
          const cartOne = this.models.cartListModel.upsert({
            userId: id,
            productId: products[i].id,
            count: products[i].count,
            batteryId: products[i].batteryId ? products[i].batteryId : null,
          });
          cartProducts.push(cartOne);
        }
        await Promise.all(cartProducts);
        return res.status(200).send({ success: true, message: 'products successfully were saved in the cartList' });
      }
    } catch (err) {
      return next(err);
    }
  }

  async addWish(req, res, next) {
    try {
      const { id } = req.user;
      const {
        products = [],
        productId,
        type = 'wish',
      } = req.body;
      const ids = products.map((item) => item.id);
      const productsInDb = await this.models.productModel.findAll({
        where: {
          visible: true,
          id: ids,
        },
      });
      if (products.length && (!productsInDb.length > 0 || productsInDb.length !== products.length)) {
        const err = new Error('Incorrect product id');
        err.status = 409;
        throw err;
      }
      if (type === 'wish') {
        await this.models.wishListModel.upsert({ userId: id, productId });
        return res.status(200).send({ success: true, message: 'wish successfully was saved' });
      }

      if (type === 'cart') {
        for (let i = 0; i < products.length; i++) {
          for (let j = 0; j < productsInDb.length; j++) {
            if (products[i].id === productsInDb[j].id) {
              if (products[i].count > productsInDb[j].xmlCount) {
                const err = new Error(`Sorry but we can not provide ${productsInDb[j].name} product in that quantity`);
                err.status = 409;
                throw err;
              }
            }
          }
        }

        const cartProducts = [];
        for (let i = 0; i < products.length; i++) {
          const cartOne = this.models.cartListModel.upsert({
            userId: id,
            productId: products[i].id,
            count: products[i].count,
            batteryId: products[i].batteryId ? products[i].batteryId : null,
          });
          cartProducts.push(cartOne);
        }
        await Promise.all(cartProducts);
        return res.status(200).send({ success: true, message: 'product successfully was saved in the cartList' });
      }
    } catch (err) {
      return next(err);
    }
  }


  async createOrder(req, res, next) {
    const transaction = await db.transaction();
    try {
      const adminMail = 'orders@mankan.am';

      const {
        promoCode,
        productIds = [],
        paymentType,
        deliveryAddress = {},
        deliveryTime = '',
        email,
        phone,
        firstName,
        lastName,
        isoLang = 'hy',
      } = req.body;


      const deliveryPrice = 800;

      if (!deliveryAddress.street || !deliveryAddress.building) {
        const err = new Error('delivery street, building are required');
        err.status = 409;
        throw err;
      }


      let userId;
      let user;
      let lang = 'ARM';
      if (req.user) {
        userId = req.user.id;
        user = await this.models.userModel.findOne({ where: { id: userId } });
        await user.update({ deliveryAddress });
        lang = user.lang;
      }

      if (!userId && paymentType === 'bonus') {
        const err = new Error('Only signed in users can order products with bonus ');
        err.status = 409;
        throw err;
      }
      const productPriceData = [];
      let totalAmount = 0;
      let totalWithOutPromo = 0;
      let totalWithPromo = 0;

      const obj = {};
      const prodIds = productIds.map((item) => {
        obj[item.id] = item.count;
        return item.id;
      });
      // return res.send({ prodIds:`(${prodIds})` });
      const data = await db.query(`
          select "Product"."id" as "id",
             "Product"."xmlName" as "xmlName",
             "Product"."xmlPrice" as "xmlPrice",
             "Product"."price" as "price",
             "Product"."name" as "name",
             "Product"."percent" as "percent",
             "Product"."xmlId" as "xmlId",
             "Product"."xmlBarCode" as "xmlBarCode",
             "ProductPhotos"."url" as "url",
             "ProductLang"."name" as "nameForUser",
             "Product"."visible" as "visible",
             "xmlCount"-(select COALESCE(SUM("OrderedProducts"."count"),0) from "OrderedProducts" where  "OrderedProducts"."productId" = "Product"."id" and   "OrderedProducts"."status" ='pending' ) as "availableCount"
              from "Product"
  left join "ProductPhotos" on "ProductPhotos"."productId" = "Product"."id" and "ProductPhotos"."order" = 1
  left join "ProductLang" on "ProductLang"."productId" = "Product"."id" and "ProductLang"."lang"= '${lang}'
      where "Product"."id" in (${prodIds})`, { type: db.QueryTypes.SELECT });

      for (let i = 0; i < data.length; i += 1) {
        if (!data[i].visible) {
          const err = new Error('Incorrect product Id');
          err.status = 409;
          throw err;
        }
        if (obj[data[i].id] > data[i].availableCount) {
          const err = new Error(`Product with id ${data[i].id} has only ${data[i].availableCount} available  items`);
          err.status = 409;
          throw err;
        }
      }
      let foundPromo;
      if (promoCode) {
        foundPromo = await this.checkPromoCode(promoCode);
        if (!foundPromo.isValid) {
          const err = new Error('Your promo code date is expired!');
          err.status = 409;
          throw err;
        } else if (foundPromo.isUsed) {
          const err = new Error('Your promoCode is already used!');
          err.status = 409;
          throw err;
        } else if (foundPromo.inProcess) {
          const err = new Error('Your promoCode already in using process!');
          err.status = 409;
          throw err;
        }
      }
      if (!deliveryAddress.entry) { deliveryAddress.entry = ''; }
      const addressString = `${deliveryAddress.street}, բն: ${deliveryAddress.building}, Մուտք: ${deliveryAddress.entry}`;

      if (!deliveryTime) {
        const err = new Error('You must provide delivery time!');
        err.status = 409;
        throw err;
      }
      // let niceDeliveryTimeArr = deliveryTime.trim();
      // niceDeliveryTimeArr = niceDeliveryTimeArr.split(' ');
      // const niceDeliveryTime = niceDeliveryTimeArr[1].trim().split(':', 2);
      // const beginningTime = niceDeliveryTime[0];
      // let endTime = +beginningTime + 1;
      //
      // endTime += `:${niceDeliveryTime[1]}`;
      // const finalDeliveryTime = `${niceDeliveryTimeArr[0]}/${niceDeliveryTime[0]}:${niceDeliveryTime[1]}-${endTime}`;
      // console.log(finalDeliveryTime);

      const order = await this.models.ordersModel.create({
        userId,
        email: email || (user ? user.email : null),
        phone: phone || (user ? user.phone : null),
        firstName: firstName || (user ? user.firstName : null),
        lastName: lastName || (user ? user.lastName : null),
        promoCodeId: promoCode ? foundPromo.id : null,
        promoCode: promoCode ? foundPromo.code : null,
        promoCodePercent: promoCode ? foundPromo.percent : null,
        paymentType,
        deliveryAddress: addressString,
        deliveryTime,
        totalAmount,
        totalWithOutPromo,
        status: 'pending',
      }, { transaction });

      for (let i = 0; i < data.length; i += 1) {
        const orderedProducts = {
          orderId: order.id,
          xmlBarCode: data[i].xmlBarCode,
          productId: data[i].id,
          url: data[i].url,
          nameForUser: data[i].nameForUser,
          userId: userId || null,
          xmlId: data[i].xmlId,
          xmlPrice: data[i].xmlPrice,
          percent: data[i].percent,
          productName: data[i].name,
          price: data[i].price,
          count: obj[data[i].id],
          totalPrice: obj[data[i].id] * data[i].price,
          status: order.status,
        };
        totalWithOutPromo += orderedProducts.totalPrice;
        totalAmount += orderedProducts.totalPrice;
        productPriceData.push(orderedProducts);
      }
      totalWithPromo = totalAmount;
      if (foundPromo) {
        totalAmount -= Math.ceil((totalAmount * foundPromo.percent) / 100);
        totalAmount /= 10;
        totalAmount = Math.ceil(totalAmount);
        totalAmount *= 10;
        totalWithPromo = totalAmount;
      }
      if (totalAmount < 4000) {
        const err = new Error('order minimal sum is 4000 dram');
        err.status = 409;
        throw err;
      }
      await this.models.orderedProductsModel.bulkCreate(productPriceData, { transaction });


      if (userId && paymentType === 'bonus' && totalAmount > user.bonus) {
        const err = new Error('Sorry but your bonus is not enough for this order');
        err.status = 409;
        throw err;
      }
      if (userId && paymentType === 'bonus') {
        const bonusOrders = await this.models.ordersModel.findAll({
          where: {
            userId,
            status: 'pending',
            paymentType: 'bonus',
          },
        });
        let pendingOrdersWithBonus = 0;
        for (let i = 0; i < bonusOrders.length; i++) {
          const eachOrderSum = bonusOrders[i].totalAmount - bonusOrders[i].deliveryPrice;
          pendingOrdersWithBonus += eachOrderSum;
        }
        if ((user.bonus - pendingOrdersWithBonus) < totalAmount) {
          const err = new Error('Sorry but you have pending orders with bonus and now bonus is not enough for this order');
          err.status = 409;
          throw err;
        }
      }
      const onlyProductsTotalAmount = totalAmount;
      if (totalAmount < 20000) {
        totalAmount += deliveryPrice;
      }
      totalAmount /= 10;
      totalAmount = Math.ceil(totalAmount);
      totalAmount *= 10;
      await order.update({
        totalAmount,
        totalWithOutPromo,
        totalWithPromo,
        deliveryPrice: onlyProductsTotalAmount < 20000 ? deliveryPrice : 0,
      }, { transaction });
      let bonus = 0;
      if (user && order.paymentType !== 'bonus') {
        let { boughtSum } = user;

        const currentBoughtSum = order.totalAmount - order.deliveryPrice;
        boughtSum += currentBoughtSum;

        if (boughtSum < 200000) {
          bonus += Math.round(currentBoughtSum / 100) * 2;
        } else if (boughtSum >= 200000 && boughtSum < 500000) {
          bonus += Math.round(currentBoughtSum / 100) * 3;
        } else if (boughtSum >= 500000) {
          bonus += Math.round(currentBoughtSum / 100) * 4;
        }
      }
      if (user) {
        await this.models.cartListModel.destroy({ where: { userId: user.id } }, { transaction });
      }
      await order.update({
        bonus,
      }, { transaction });

      let armPaymentType;
      if (order.paymentType === 'bonus') {
        armPaymentType = 'Բոնուս';
      } else if (order.paymentType === 'non-cash') {
        armPaymentType = 'Քարտային';
      } else if (order.paymentType === 'cash') {
        armPaymentType = 'Կանխիկ';
      }


      const orderInfo = {
        orderId: order.id,
        firstName: order.firstName,
        lastName: order.lastName,
        email: order.email,
        phone: order.phone,
        bonus: order.bonus,
        deliveryAddress: order.deliveryAddress,
        deliveryTime: order.deliveryTime,
        deliveryPrice: order.deliveryPrice,
        totalAmount: order.paymentType === 'bonus' ? order.deliveryPrice : order.totalAmount,
        totalWithOutPromo: order.totalWithOutPromo,
        totalWithPromo: order.totalWithPromo,
        paymentType: armPaymentType,
        status: order.status,
        promoCode: order.promoCode,
        promoCodePercent: order.promoCodePercent,
        createdAt: order.createdAt,
        products: productPriceData,
      };
      let response;
      if (paymentType === 'non-cash') {

        response = await axios.get(`https://ipay.arca.am/payment/rest/register.do?amount=${totalAmount}00&orderNumber=${order.id}&password=12784596Abcdef!&userName=21532119_api&language=${isoLang}&returnUrl=https://mankan.am&jsonParams={"FORCE_3DS2":"true"}`, { timeout: 15000 });

        if (response || response.data) {
          if (response.data.errorCodeString !== '0') {
            const err = new Error('Payment:Duplicated order number');

            err.status = 409;
            throw err;
          }
        }
        await order.update({
          paymentId: response.data.orderId,
          paymentAccepted: false,
        }, { transaction });
      }

      // console.log(response.data);
      await transaction.commit();
      if (paymentType !== 'non-cash') {
        mailerHelper.sendToUserOrAdmin(adminMail, orderInfo, 'ForAdmin', res, next);
      }
      return res.status(200).send({
        success: true,
        message: 'Order completed.Waiting moderator to accept,'
            + ' you will receive mail to your email after moderator accepted your order',
        productPriceData,
        totalAmount,
        order,
        response: response ? response.data : {},
      });
    } catch (e) {

      await transaction.rollback();
      return next(e);
    }
  }
  // async createOrder(req, res, next) {
  //    const transaction = await db.transaction();
  //    try {
  //      const adminMail = 'orders@mankan.am';
  //
  //      const {
  //        promoCode,
  //        productIds = [],
  //        paymentType,
  //        deliveryAddress = {},
  //        deliveryTime = '',
  //        email,
  //        phone,
  //        firstName,
  //        lastName,
  //      } = req.body;
  //
  //
  //      const deliveryPrice = 800;
  //      console.log(deliveryAddress);
  //      if (!deliveryAddress.street || !deliveryAddress.building) {
  //        const err = new Error('delivery street, building are required');
  //        err.status = 409;
  //        throw err;
  //      }
  //
  //
  //      let userId;
  //      let user;
  //      if (req.user) {
  //        userId = req.user.id;
  //        user = await this.models.userModel.findOne({ where: { id: userId } });
  //        await user.update({ deliveryAddress });
  //      }
  //
  //      if (!userId && paymentType === 'bonus') {
  //        const err = new Error('Only signed in users can order products with bonus ');
  //        err.status = 409;
  //        throw err;
  //      }
  //      const productPriceData = [];
  //      let totalAmount = 0;
  //      let totalWithOutPromo = 0;
  //      let totalWithPromo = 0;
  //
  //      const obj = {};
  //      const prodIds = productIds.map((item) => {
  //        obj[item.id] = item.count;
  //        return item.id;
  //      });
  //      // return res.send({ prodIds:`(${prodIds})` });
  //      const data = await db.query(`
  //            select "Product"."id" as "id",
  //             "Product"."xmlName" as "xmlName",
  //             "Product"."xmlPrice" as "xmlPrice",
  //             "Product"."price" as "price",
  //             "Product"."name" as "name",
  //             "Product"."percent" as "percent",
  //             "Product"."xmlId" as "xmlId",
  //             "Product"."xmlBarCode" as "xmlBarCode",
  //             "Product"."visible" as "visible",
  //             "xmlCount"-(select COALESCE(SUM("OrderedProducts"."count"),0) from "OrderedProducts" where  "OrderedProducts"."productId" = "Product"."id" and   "OrderedProducts"."status" ='pending' ) as "availableCount"
  //             from "Product"
  //      where "Product"."id" in (${prodIds})`, { type: db.QueryTypes.SELECT });
  //
  //      for (let i = 0; i < data.length; i += 1) {
  //        if (!data[i].visible) {
  //          const err = new Error('Incorrect product Id');
  //          err.status = 409;
  //          throw err;
  //        }
  //        if (obj[data[i].id] > data[i].availableCount) {
  //          const err = new Error(`Product with id ${data[i].id} has only ${data[i].availableCount} available  items`);
  //          err.status = 409;
  //          throw err;
  //        }
  //      }
  //      let foundPromo;
  //      if (promoCode) {
  //        foundPromo = await this.checkPromoCode(promoCode);
  //        if (!foundPromo.isValid) {
  //          const err = new Error('Your promo code date is expired!');
  //          err.status = 409;
  //          throw err;
  //        } else if (foundPromo.isUsed) {
  //          const err = new Error('Your promoCode is already used!');
  //          err.status = 409;
  //          throw err;
  //        } else if (foundPromo.inProcess) {
  //          const err = new Error('Your promoCode already in using process!');
  //          err.status = 409;
  //          throw err;
  //        }
  //      }
  //      if (!deliveryAddress.entry) { deliveryAddress.entry = ''; }
  //      const addressString = `Փողոց: ${deliveryAddress.street}, Շենք: ${deliveryAddress.building}, Մուտք: ${deliveryAddress.entry}`;
  //
  //      const order = await this.models.ordersModel.create({
  //        userId,
  //        email: email || (user ? user.email : null),
  //        phone: phone || (user ? user.phone : null),
  //        firstName: firstName || (user ? user.firstName : null),
  //        lastName: lastName || (user ? user.lastName : null),
  //        promoCodeId: promoCode ? foundPromo.id : null,
  //        promoCode: promoCode ? foundPromo.code : null,
  //        promoCodePercent: promoCode ? foundPromo.percent : null,
  //        paymentType,
  //        deliveryAddress: addressString,
  //        deliveryTime,
  //        totalAmount,
  //        totalWithOutPromo,
  //        status: 'pending',
  //      }, { transaction });
  //
  //      for (let i = 0; i < data.length; i += 1) {
  //        const orderedProducts = {
  //          orderId: order.id,
  //          xmlBarCode: data[i].xmlBarCode,
  //          productId: data[i].id,
  //          userId: userId || null,
  //          xmlId: data[i].xmlId,
  //          xmlPrice: data[i].xmlPrice,
  //          percent: data[i].percent,
  //          productName: data[i].name,
  //          price: data[i].price,
  //          count: obj[data[i].id],
  //          totalPrice: obj[data[i].id] * data[i].price,
  //          status: order.status,
  //        };
  //        totalWithOutPromo += orderedProducts.totalPrice;
  //        totalAmount += orderedProducts.totalPrice;
  //        productPriceData.push(orderedProducts);
  //      }
  //      totalWithPromo = totalAmount;
  //      if (foundPromo) {
  //        totalAmount -= Math.ceil((totalAmount * foundPromo.percent) / 100);
  //        totalAmount /= 10;
  //        totalAmount = Math.ceil(totalAmount);
  //        totalAmount *= 10;
  //        totalWithPromo = totalAmount;
  //      }
  //      if (totalAmount < 4000) {
  //        const err = new Error('order minimal sum is 4000 dram');
  //        err.status = 409;
  //        throw err;
  //      }
  //      await this.models.orderedProductsModel.bulkCreate(productPriceData, { transaction });
  //
  //
  //      if (userId && paymentType === 'bonus' && totalAmount > user.bonus) {
  //        const err = new Error('Sorry but your bonus is not enough for this order');
  //        err.status = 409;
  //        throw err;
  //      }
  //      if (userId && paymentType === 'bonus') {
  //        const bonusOrders = await this.models.ordersModel.findAll({
  //          where: {
  //            userId,
  //            status: 'pending',
  //            paymentType: 'bonus',
  //          },
  //        });
  //        let pendingOrdersWithBonus = 0;
  //        for (let i = 0; i < bonusOrders.length; i++) {
  //          const eachOrderSum = bonusOrders[i].totalAmount - bonusOrders[i].deliveryPrice;
  //          pendingOrdersWithBonus += eachOrderSum;
  //        }
  //        if ((user.bonus - pendingOrdersWithBonus) < totalAmount) {
  //          const err = new Error('Sorry but you have pending orders with bonus and now bonus is not enough for this order');
  //          err.status = 409;
  //          throw err;
  //        }
  //      }
  //      if (totalAmount < 20000) {
  //        totalAmount += deliveryPrice;
  //      }
  //      totalAmount /= 10;
  //      totalAmount = Math.ceil(totalAmount);
  //      totalAmount *= 10;
  //      await order.update({
  //        totalAmount,
  //        totalWithOutPromo,
  //        totalWithPromo,
  //        deliveryPrice: totalAmount < 20000 ? deliveryPrice : 0,
  //      }, { transaction });
  //      let bonus = 0;
  //      if (user && order.paymentType !== 'bonus') {
  //        let { boughtSum } = user;
  //
  //        const currentBoughtSum = order.totalAmount - order.deliveryPrice;
  //        boughtSum += currentBoughtSum;
  //
  //        if (boughtSum < 200000) {
  //          bonus += Math.round(currentBoughtSum / 100) * 2;
  //        } else if (boughtSum >= 200000 && boughtSum < 500000) {
  //          bonus += Math.round(currentBoughtSum / 100) * 3;
  //        } else if (boughtSum >= 500000) {
  //          bonus += Math.round(currentBoughtSum / 100) * 4;
  //        }
  //      }
  //      if (user) {
  //        await this.models.cartListModel.destroy({ where: { userId: user.id } }, { transaction });
  //      }
  //      await order.update({
  //        bonus,
  //      }, { transaction });
  //
  //      let armPaymentType;
  //      if (order.paymentType === 'bonus') {
  //        armPaymentType = 'Բոնուս';
  //      } else if (order.paymentType === 'non-cash') {
  //        armPaymentType = 'Քարտային';
  //      } else if (order.paymentType === 'cash') {
  //        armPaymentType = 'Կանխիկ';
  //      }
  //      const orderInfo = {
  //        orderId: order.id,
  //        firstName: order.firstName,
  //        lastName: order.lastName,
  //        email: order.email,
  //        phone: order.phone,
  //        bonus: order.bonus,
  //        deliveryAddress: order.deliveryAddress,
  //        deliveryTime: order.deliveryTime,
  //        deliveryPrice: order.deliveryPrice,
  //        totalAmount: order.paymentType === 'bonus' ? order.deliveryPrice : order.totalAmount,
  //        totalWithOutPromo: order.totalWithOutPromo,
  //        totalWithPromo: order.totalWithPromo,
  //        paymentType: armPaymentType,
  //        status: order.status,
  //        promoCode: order.promoCode,
  //        promoCodePercent: order.promoCodePercent,
  //        createdAt: order.createdAt,
  //        products: productPriceData,
  //      };
  //      let response;
  //      if (paymentType === 'non-cash') {
  //        response = await axios.get(`https://ipay.arca.am/payment/rest/register.do?amount=${totalAmount}00&orderNumber=${order.id}&password=123456789Abcdef!&userName=21532119_api&returnUrl=http://api.mankan.am/`, { timeout: 15000 });
  //        if (response || response.data) {
  //          if (response.data.errorCode !== '0') {
  //            const err = new Error('Payment:Duplicated order number');
  //            err.status = 409;
  //            throw err;
  //          }
  //        }
  //        await order.update({
  //          paymentId: response.data.orderId,
  //          paymentAccepted: false,
  //        }, { transaction });
  //      }
  //
  //      // console.log(response.data);
  //      await transaction.commit();
  //      if (paymentType !== 'non-cash') {
  //        mailerHelper.sendToUserOrAdmin(adminMail, orderInfo, 'ForAdmin', res, next);
  //      }
  //      return res.status(200).send({
  //        success: true,
  //        message: 'Order completed.Waiting moderator to accept,'
  //            + ' you will receive mail to your email after moderator accepted your order',
  //        productPriceData,
  //        totalAmount,
  //        order,
  //        response: response ? response.data : {},
  //      });
  //    } catch (e) {
  //      await transaction.rollback();
  //      return next(e);
  //    }
  //  }


  async getMyOrders(req, res, next) {
    try {
      const { id: userId } = req.user;
      const {
        limit = 10,
        offset = 0,
        lang = 'ARM',
      } = req.body;
      const orders = await this.models.orderedProductsModel.findAndCountAll({
        where: {
          userId,
          status: 'completed',
        },

        distinct: true,
        limit,
        offset,
      });
      const pages = Math.ceil(orders.count / limit);

      return res.status(200).send({ success: true, pages, result: orders });
    } catch (e) {
      return next(e);
    }
  }
  // async getMyOrders(req, res, next) {
  //    try {
  //      const { id: userId } = req.user;
  //      const {
  //        limit = 10,
  //        offset = 0,
  //        lang = 'ARM',
  //      } = req.body;
  //      const orders = await this.models.orderedProductsModel.findAndCountAll({
  //        where: {
  //          userId,
  //          status: 'completed',
  //        },
  //        include: [
  //          {
  //            model: this.models.productModel,
  //            as: 'product',
  //
  //            include: [
  //              {
  //                model: this.models.productPhotosModel,
  //                as: 'photos',
  //                where: {
  //                  order: 1,
  //                },
  //              },
  //              {
  //                model: this.models.productLangModel,
  //                as: 'langs',
  //                where: {
  //                  lang,
  //                },
  //              },
  //            ],
  //          },
  //        ],
  //        distinct: true,
  //        limit,
  //        offset,
  //      });
  //      const pages = Math.ceil(orders.count / limit);
  //
  //      return res.status(200).send({ success: true, pages, result: orders });
  //    } catch (e) {
  //      return next(e);
  //    }
  //  }


  async removeWish(req, res, next) {
    try {
      const { id } = req.user;
      const {
        productId,
        type = 'wish',
        removeAll = false,
        removeBatteryId,
      } = req.body;
      console.log(req.body);
      if (type === 'wish') {
        const foundWish = await this.models.wishListModel.findOne({ where: { userId: id, productId } });
        if (!foundWish) {
          const err = new Error('invalid id for product in wish list');
          err.status = 409;
          return next(err);
        }
        await foundWish.destroy({});
        return res.status(200).send({ success: true, message: 'product successfully was deleted from wish list' });
      }
      if (type === 'cart') {
        const foundCart = await this.models.cartListModel.findAll({ where: { userId: id } });
        if (!foundCart) {
          const err = new Error('invalid id for product in cart list');
          err.status = 409;
          return next(err);
        }
        if (!removeAll) {
          await this.models.cartListModel.destroy({
            where: {
              userId: id,
              productId,
            },
          });
          if (removeBatteryId) {
            await this.models.cartListModel.update(
              {
                batteryId: null,
              },
              {
                where: {
                  userId: id,
                  batteryId: removeBatteryId,
                },
              },
            );
          }
        } else if (removeAll) {
          await this.models.cartListModel.destroy({
            where: {
              userId: id,
            },
          });
        }
      }
      return res.status(200).send({ success: true, message: 'product successfully was deleted from cart list' });
    } catch (err) {
      return next(err);
    }
  }

  async addSubscriber(req, res, next) {
    try {
      const {
        email,
      } = req.body;

      const subscriber = await this.models.subscribersModel.findOne({
        where: {
          email,
        },
      });
      if (subscriber) {
        const err = new Error('you have already subscribed');
        err.status = 409;
        return next(err);
      }
      await this.models.subscribersModel.create({ email });
      return res.status(200).send({ success: true, msg: 'you have successfully subscribed to news' });
    } catch (err) {
      return next(err);
    }
  }

  async removeFromCart(req, res, next) {
    try {
      const { id } = req.user;
      const {
        productId,
      } = req.body;
      const foundWish = await this.models.wishListModel.findOne({ where: { userId: id, productId } });
      if (!foundWish) {
        const err = new Error('invalid id for product in wish list');
        err.status = 409;
        return next(err);
      }
      await foundWish.destroy({});
      return res.status(200).send({ success: true, message: 'product successfully deleted from wish list' });
    } catch (err) {
      return next(err);
    }
  }
}


module.exports = new ProfileManager();
