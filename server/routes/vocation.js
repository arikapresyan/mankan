const Router = require('express').Router();
const { vocationManager } = require('../managers/vocation');
const { authAdmin } = require('../services/auth.service');

Router.post('/', vocationManager.getAllVocations);
Router.post('/createPdf', vocationManager.createPdf);

Router.post('/sendAppliersMail', vocationManager.sendAppliersMail);
Router.get('/:id', vocationManager.getById);


module.exports = Router;
