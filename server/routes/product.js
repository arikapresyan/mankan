const Router = require('express').Router();
const { productManager } = require('../managers/product');
const { profileManager } = require('../managers/user');
const { authAdmin } = require('../services/auth.service');

Router.get('/sliders', productManager.getAllSliders);
Router.post('/homePage', productManager.getProductsForHome);
Router.post('/homePage/search', productManager.getProductsHomeSearch);
// Router.post('/navFilters', productManager.getNavFilters);
Router.post('/navFiltersBestSeller', productManager.getOneBestSeller);


Router.post('/byIds', productManager.getProductsByIds);
Router.post('/', productManager.getAllProducts);
Router.post('/bugs', productManager.getAllBugs);
Router.post('/newProducts', productManager.getNewProducts);
Router.post('/bestSellers', productManager.getAllProductsBySells);

Router.post('/fast', productManager.getAllProductsFaster);


Router.get('/type/:id', productManager.getTypeById);
Router.post('/type', productManager.getAllProductTypes);

Router.post('/usage', productManager.getAllProductUsages);
Router.get('/usage/:id', productManager.getUsageById);


Router.post('/escorting', productManager.getEscortProducts);


Router.post('/brand', productManager.getAllBrands);
Router.get('/brand/:id', productManager.getBrandById);

Router.post('/extraFilter', productManager.getAllExtraFilters);
Router.get('/extraFilter/:id', productManager.getExtraFilterById);


Router.get('/mainSlider', productManager.getAllMainSliders);
Router.get('/hoverFilters/all', productManager.getHoverFiltersAll);
Router.get('/hoverFilters/boy', productManager.getHoverFiltersBoy);
Router.get('/hoverFilters/girl', productManager.getHoverFiltersGirl);
Router.get('/hoverFilters/infant', productManager.getHoverFiltersInfant);
Router.get('/hoverFilters/mankan', productManager.getHoverFiltersMankan);

Router.get('/mainSlider/:id', productManager.getMainSliderById);


Router.post('/createOrder', profileManager.createOrder);

Router.post('/:id', productManager.getProductById);


module.exports = Router;
