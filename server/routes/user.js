const Router = require('express').Router();
const { profileManager } = require('../managers/user');
const { adminManager } = require('../managers/admin');
const { authUser, checkCode, authAdmin } = require('../services/auth.service');


Router.get('/promoCode/:code', profileManager.getPromoCode);
Router.get('/checkOrder',profileManager.checkOrder)
Router.put('/changeLang', authUser, profileManager.changeLang);

Router.post('/signUp', profileManager.signUp);
Router.post('/signIn', profileManager.signIn);
Router.delete('/delete', authUser, profileManager.removeUser);
Router.get('/products/:type', authUser, profileManager.getMyProducts);
Router.put('/info', authUser, profileManager.updateUser);
Router.post('/me', authUser, profileManager.getMe);
Router.get('/info/:token',profileManager.getUserInfo);
Router.post('/orders/all', authUser, profileManager.getMyOrders);
Router.post('/orders', authUser, profileManager.createOrder);

Router.get('/changeEmail/:token', checkCode, profileManager.changeEmail);
Router.get('/verifyEmail/:token', checkCode, profileManager.confirmEmail);
Router.put('/changePassword/:token', checkCode, profileManager.changePassword);
Router.post('/recoverPassword', profileManager.forgotPassword);

Router.post('/addWish/byIds', authUser, profileManager.addWishCartByIds);
Router.post('/addWish', authUser, profileManager.addWish);
Router.delete('/removeWish', authUser, profileManager.removeWish);

Router.post('/subscribers', profileManager.addSubscriber);

Router.post('/feedBack', profileManager.feedBack);
Router.post('/complain', profileManager.complain);

Router.get('/deliveryWeekTime', adminManager.getDeliveryWeekTime);
Router.get('/deliveryWeekTimeNew', adminManager.getDeliveryWeekTimeNew);


module.exports = Router;
