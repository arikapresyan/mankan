const Router = require('express').Router();
const { adminManager } = require('../managers/admin');
const { authAdmin } = require('../services/auth.service');

Router.post('/profile/print', authAdmin, adminManager.printUsers);
Router.post('/profile/all', authAdmin, adminManager.getAllProfiles);
Router.get('/profile/:id', authAdmin, adminManager.getProfileById);

Router.get('/statistic/:id', adminManager.updateStatistics);

Router.get('/download/:path', adminManager.download);

Router.post('/vocation/', authAdmin, adminManager.addVocation);
Router.put('/vocation/:id', authAdmin, adminManager.updateVocation);
Router.delete('/vocation/', authAdmin, adminManager.removeVocation);


Router.post('/usage/', authAdmin, adminManager.addProductUsage);
Router.delete('/usage/', authAdmin, adminManager.removeProductUsage);
Router.put('/usage/:id', authAdmin, adminManager.updateProductUsage);

Router.post('/type', authAdmin, adminManager.addProductType);
Router.delete('/type', authAdmin, adminManager.removeProductType);
Router.put('/type/:id', authAdmin, adminManager.updateProductType);


Router.post('/brand', authAdmin, adminManager.addBrand);
Router.put('/brand/:id', authAdmin, adminManager.updateBrand);
Router.delete('/brand', authAdmin, adminManager.removeBrand);

Router.post('/extraFilter', authAdmin, adminManager.addExtraFilter);
Router.delete('/extraFilter', authAdmin, adminManager.removeExtraFilter);
Router.put('/extraFilter/:id', authAdmin, adminManager.updateExtraFilter);


Router.delete('/product', authAdmin, adminManager.removeProduct);
Router.get('/product/photos/:id', authAdmin, adminManager.getProductPhotos);
Router.put('/product/:id', authAdmin, adminManager.editProduct);
Router.get('/product/:id', authAdmin, adminManager.getProductById);
Router.post('/products', authAdmin, adminManager.getAllProducts);
Router.post('/product/savePhotos/:id', authAdmin, adminManager.saveProductPhotos);
Router.delete('/product/deletePhotos/:id', authAdmin, adminManager.deleteProductPhotos);


Router.post('/orders', authAdmin, adminManager.getAllOrders);
Router.post('/orders/print', authAdmin, adminManager.printOrders);
Router.get('/orders/:id', authAdmin, adminManager.getOrderById);
Router.put('/orders/:id', authAdmin, adminManager.editOrder);
Router.put('/orders/:id/accept', authAdmin, adminManager.acceptOrder);
Router.delete('/orders/:id/delete', authAdmin, adminManager.deleteOrder);


Router.delete('/subscribers', authAdmin, adminManager.removeSubscriber);
Router.post('/subscribers', authAdmin, adminManager.getAllSubscribers);
Router.post('/subscribers/print', authAdmin, adminManager.printSubscribers);

Router.post('/promoCode/print', authAdmin, adminManager.printPromoCodes);
Router.post('/promoCode/create', authAdmin, adminManager.addPromoCode);
Router.post('/promoCode', authAdmin, adminManager.getAllPromoCodes);
Router.put('/promoCode/:id', authAdmin, adminManager.updatePromoCode);
Router.delete('/promoCode', authAdmin, adminManager.removePromoCode);


Router.get('/slider', authAdmin, adminManager.getAllSliders);
Router.post('/slider', authAdmin, adminManager.addSlider);
Router.put('/slider', authAdmin, adminManager.updateSlider);
Router.delete('/slider/:id', authAdmin, adminManager.removeSlider);

Router.post('/addDeliveryWeekTime', authAdmin, adminManager.addDeliveryWeekTime);

Router.post('/mainSlider', authAdmin, adminManager.addMainSlider);
Router.delete('/mainSlider/:id', authAdmin, adminManager.deleteMainSlider);
// Router.put('/mainSlider/:id', authAdmin, adminManager.updateMainSlider);


module.exports = Router;
