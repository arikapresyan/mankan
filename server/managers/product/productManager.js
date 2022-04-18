/* eslint-disable no-console,max-len */
const sequelize = require('sequelize');

const { Op } = sequelize;
const db = require('../../../db');

const brandModel = db.public.common.Brand;
const productModel = db.public.common.ProductModel;
const ordersModel = db.public.common.Orders;
const orderedProductsModel = db.public.common.OrderedProducts;
const productMapModel = db.public.common.ProductMap;
const productLangModel = db.public.common.ProductLang;
const productTypeModel = db.public.common.ProductType;
const productUsageModel = db.public.common.ProductUsage;
const productPhotosModel = db.public.common.ProductPhotos;
const productUsageLangModel = db.public.common.ProductUsageLang;
const boughtProductsModel = db.public.common.BoughtProducts;
const productAccessoriesMap = db.public.common.ProductAccessoriesMap;
const productTypeLangModel = db.public.common.ProductTypeLang;
const extraFilterModel = db.public.common.ExtraFilter;
const sexBrandModel = db.public.common.Brand;
const ageModel = db.public.common.Age;
const sexBrandMapModel = db.public.common.SexBrandMap;
const sliderModel = db.public.common.Sliders;
const extraFilterLangModel = db.public.common.ExtraFilterLang;
const productStatisticModel = db.public.common.ProductStatistic;
const mainSliderModel = db.public.common.MainSlider;

class ProductManager {
  constructor() {
    this.models = {
      brandModel,
      productModel,
      ordersModel,
      productMapModel,
      productLangModel,
      productTypeModel,
      extraFilterModel,
      productUsageModel,
      productPhotosModel,
      boughtProductsModel,
      productUsageLangModel,
      productAccessoriesMap,
      productTypeLangModel,
      sexBrandModel,
      ageModel,
      sexBrandMapModel,
      sliderModel,
      extraFilterLangModel,
      productStatisticModel,
      mainSliderModel,
      orderedProductsModel,
    };

    this.getHoverFiltersAll = this.getHoverFiltersAll.bind(this);
    this.getHoverFiltersBoy = this.getHoverFiltersBoy.bind(this);
    this.getHoverFiltersGirl = this.getHoverFiltersGirl.bind(this);
    this.getHoverFiltersInfant = this.getHoverFiltersInfant.bind(this);
    this.getHoverFiltersMankan = this.getHoverFiltersMankan.bind(this);
    this.getProductById = this.getProductById.bind(this);
    this.getTypeById = this.getTypeById.bind(this);
    this.getUsageById = this.getUsageById.bind(this);
    this.getAllBrands = this.getAllBrands.bind(this);
    this.getBrandById = this.getBrandById.bind(this);
    this.getAllProducts = this.getAllProducts.bind(this);
    this.getAllProductsFaster = this.getAllProductsFaster.bind(this);
    this.getAllNewProducts = this.getAllNewProducts.bind(this);
    this.getNewProducts = this.getNewProducts.bind(this);
    this.getAllExtraFilters = this.getAllExtraFilters.bind(this);
    this.getExtraFilterById = this.getExtraFilterById.bind(this);
    this.getAllProductTypes = this.getAllProductTypes.bind(this);
    this.getAllProductUsages = this.getAllProductUsages.bind(this);
    this.getAllSliders = this.getAllSliders.bind(this);
    this.getAllProductsByAsc = this.getAllProductsByAsc.bind(this);
    this.getAllProductsBySells = this.getAllProductsBySells.bind(this);
    this.getProductsForHome = this.getProductsForHome.bind(this);
    this.ownProduction = this.ownProduction.bind(this);
    this.getProductsByExtraFilter = this.getProductsByExtraFilter.bind(this);
    this.getProductsHomeSearch = this.getProductsHomeSearch.bind(this);
    // this.getNavFilters = this.getNavFilters.bind(this);
    this.getOneBestSeller = this.getOneBestSeller.bind(this);
    this.getProductsByIds = this.getProductsByIds.bind(this);
    this.getEscortProducts = this.getEscortProducts.bind(this);
    this.getAllBugs = this.getAllBugs.bind(this);
    this.getAllMainSliders = this.getAllMainSliders.bind(this);
    this.getMainSliderById = this.getMainSliderById.bind(this);
    this.getProdIdsBySearchWord = this.getProdIdsBySearchWord.bind(this);
  }

  async getProdIdsBySearchWord(searchWord, lang, limit = false, next) {
    try {
      const searchWordNeat = searchWord.trim().replace(/\s+/g, ' ');
      let limitString = '';
      if (limit) {
        limitString += 'limit 10';
      }
      const prodIdsAndNames = await db.query(`
        select distinct p."id" as id,
                        p.name as name
        
             from "Product" as p
        left join "ProductLang" as pl on p."id" = pl."productId" and pl.lang='${lang}'
        left join "SexBrandMap" as sbm on p."id" = sbm."productId"
        left join "Brand" as pb on sbm."brandId" = pb."id"
        left join "TypeMap" as tm on tm."productId" = p."id"
        left join "ProductType" AS pt on pt."id" = tm."typeId"
        left join "ProductTypeLang" as ptl on ptl."productTypeId" = pt."id" and ptl.lang='${lang}'
        left join "UsageMap" as um on um."productId" = p."id"
        left join "ProductUsage" AS pu on pu."id" = um."usageId"
        left join "ProductUsageLang" as pul on pul."productUsageId" = pu."id" and pul.lang='${lang}'
                inner join "ProductPhotos" as pph on p.id = pph."productId"
where p."xmlCount" != 0 and p."visible" = true and (pl."name" ilike '%${searchWordNeat}%' or pb."name" ilike '%${searchWordNeat}%' 
                                                or ptl."name" ilike '%${searchWordNeat}%'  or pul."name" ilike '%${searchWordNeat}%')
                                                ${limitString}
        `,
      { type: db.QueryTypes.SELECT });

      return prodIdsAndNames;
    } catch (e) {
      return next(e);
    }
  }

  async getAllBugs(req, res, next) {
    try {
      const {
        offset = 0,
        limit = 12,
        lang = 'ARM',
      } = req.body;
      const bugs = await this.models.productModel.findAll({
        where: {
          visible: true,
          xmlCount: { [Op.gt]: 0 },
          type: 'bug',
        },
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
              lang,
            },
          },
          {
            model: this.models.productStatisticModel,
            as: 'statistic',
          },
        ],
        limit,
        offset,
      });
      return res.status(200).send({ success: true, result: bugs });
    } catch (e) {
      return next(e);
    }
  }

  async getEscortProducts(req, res, next) {
    try {
      const {
        ids,
        lang = 'ARM',
        limit = 20,
        offset = 0,
      } = req.body;
      const findFilters = await this.models.productModel.findAll({
        where: {
          id: ids,
          type: 'product',
          visible: true,
        },
        include: [
          {
            model: this.models.productTypeModel,
            as: 'productType',
          },
          {
            model: this.models.sexBrandMapModel,
            as: 'productSex',
          },
          {
            model: this.models.productStatisticModel,
            as: 'statistic',
          },

        ],
      });
      if (!findFilters) {
        const err = new Error('invalid ids');
        err.status = 409;
        throw err;
      }
      let maxPrice = 0;
      findFilters.forEach((item) => {
        if (item.price > maxPrice) {
          maxPrice = item.price;
        }
      });

      // const priceLimit = maxPrice + (maxPrice / 100) * 30;
      const priceLimit = (maxPrice / 100) * 30;
      const types = {
        productSex: {
          GIRL: 0,
          BOY: 0,
          ALL: 0,
        },
        productType: {},
      };
      const keyof = {
        productSex: 'sex',
        productType: 'id',
      };

      findFilters.forEach((item) => {
        const keys = Object.keys(item);
        keys.forEach((key) => {
          if (key === 'productSex' || key === 'productType') {
            item[key].forEach((keyItem) => {
              types[key][keyItem[keyof[key]]] = (types[key][keyItem[keyof[key]]] || 0) + 1;
            });
          }
        });
      });
      let maxType;
      const maxSex = Object.keys(types.productSex).reduce((a, b) => (types.productSex[a] > types.productSex[b] ? a : b));
      if (Object.keys(types.productType).length > 1) {
        maxType = Object.keys(types.productType).reduce((a, b) => (types.productType[a] > types.productType[b] ? a : b));
      } else if (Object.keys(types.productType).length === 1) {
        maxType = Object.keys(types.productType).reduce((a) => (a));
      }

      const escortingProducts = await this.models.productModel.findAll({
        where: {
          xmlCount: { [Op.gt]: 0 },
          id: { [Op.notIn]: ids },
          price: { [Op.lte]: priceLimit },
          visible: true,
        },
        include: [

          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              lang,
            },
          },
          {
            model: this.models.productPhotosModel,
            as: 'photos',
            where: {
              order: 1,
            },
          },
          {
            model: this.models.productTypeModel,
            as: 'productType',
            where: {
              id: maxType ? parseInt(maxType, 0) : { [Op.not]: null },
            },
            required: !!maxType,
          },
          {
            model: this.models.sexBrandMapModel,
            as: 'productSex',
            where: {
              sex: maxSex,
            },
          },

        ],
        limit,
        offset,
      });
      return res.status(200).send({ success: true, escortingProducts });
    } catch (err) {
      return next(err);
    }
  }

  async getOneBestSeller(req, res, next) {
    try {
      const {
        infant = false,
        ownBrand = false,
        lang = 'ARM',
        sex,
      } = req.body;
      let oppositeSex;
      if (sex) {
        if (sex === 'BOY') {
          oppositeSex = 'GIRL';
        } else {
          oppositeSex = 'BOY';
        }
      }

      const today = new Date();
      const priorDate = new Date().setDate(today.getDate() - 30);
      const monthAgo = new Date(priorDate).toISOString();
      let products;
      if (infant) {
        products = await db.query(`
        select "Product"."id"
        from "Product"
              inner join "ProductStatistic" on "ProductStatistic"."productId" = "Product"."id"
                                     and ("ProductStatistic"."bestSeller"=true or ("ProductStatistic"."totalPrice"!=0 and "ProductStatistic"."updatedAt">='${monthAgo}'))
              inner join "AgeMap" on "AgeMap"."ageId"=1 and "AgeMap"."productId"="Product"."id"
        where "Product"."visible"=true and "Product"."xmlCount"!=0 and "Product"."type"='product' limit 15
        `,
        { type: db.QueryTypes.SELECT });
      } else if (ownBrand) {
        products = await db.query(`
        select "Product"."id"
        from "Product"
              inner join "ProductStatistic" on "ProductStatistic"."productId" = "Product"."id"
                                     and ("ProductStatistic"."bestSeller"=true or ("ProductStatistic"."totalPrice"!=0 and "ProductStatistic"."updatedAt">='${monthAgo}'))
              inner join "SexBrandMap" on "SexBrandMap"."brandId"=1 and "SexBrandMap"."productId"="Product"."id"
        where "Product"."visible"=true and "Product"."xmlCount"!=0 and "Product"."type"='product' limit 15
        `,
        { type: db.QueryTypes.SELECT });
      } else if (sex) {
        products = await db.query(`
        select "Product"."id"
        from "Product"
            inner join "ProductStatistic" on "ProductStatistic"."productId" = "Product"."id"
                                     and ("ProductStatistic"."bestSeller"=true or ("ProductStatistic"."totalPrice"!=0 and "ProductStatistic"."updatedAt">='${monthAgo}'))
            inner join "SexBrandMap" on "SexBrandMap"."sex"!='${oppositeSex}' and "SexBrandMap"."productId"="Product"."id"
        where "Product"."visible"=true and "Product"."xmlCount"!=0 and "Product"."type"='product' limit 15
        `,
        { type: db.QueryTypes.SELECT });
      } else {
        products = await db.query(`
        select "Product"."id"
        from "Product"
                  inner join "ProductStatistic" on "ProductStatistic"."productId" = "Product"."id"
                                     and ("ProductStatistic"."bestSeller"=true or ("ProductStatistic"."totalPrice"!=0 and "ProductStatistic"."updatedAt">='${monthAgo}'))
        where "Product"."visible"=true and "Product"."xmlCount"!=0 and "Product"."type"='product' limit 15
        `,
        { type: db.QueryTypes.SELECT });
      }
      const ids = products.map((item) => item.id);
      console.log(ids);
      const newProducts = await this.getAllProductsBySellsOneRandom(ids, 1, 0, lang);
      return res.status(200).send({
        success: true, result: newProducts.products,
      });
    } catch (err) {
      return next(err);
    }
  }

  async getProductsHomeSearch(req, res, next) {
    try {
      const {
        searchWord = '',
        lang = 'ARM',
      } = req.body;
      let products;
      if (!searchWord || !searchWord.trim()) {
        products = null;
      } else {
        products = await this.getProdIdsBySearchWord(searchWord, lang, true, next);
      }
      return res.status(200).send({
        success: true, result: products,
      });
    } catch (err) {
      return next(err);
    }
  }

  // async getProductsHomeSearch(req, res, next) {
  //   try {
  //     const {
  //       searchWord = '',
  //       lang = 'ARM',
  //     } = req.body;
  //     const searchWordNeat = searchWord.trim().replace(/\s+/g, ' ');
  //     const products = await this.models.productModel.findAll({
  //       where: {
  //         visible: true,
  //         xmlCount: { [Op.gt]: 0 },
  //         [Op.or]: [
  //           { '$langs.name$': { [Op.iLike]: `%${searchWordNeat}%` } },
  //           { '$brand.name$': { [Op.iLike]: `%${searchWordNeat}%` } },
  //           { '$productType.langs.name$': { [Op.iLike]: `%${searchWordNeat}%` } },
  //           { '$productUsage.langs.name$': { [Op.iLike]: `%${searchWordNeat}%` } },
  //         ],
  //       },
  //       include: [
  //
  //         {
  //           model: this.models.productLangModel,
  //           as: 'langs',
  //           where: {
  //             lang,
  //           },
  //         },
  //         {
  //           model: this.models.sexBrandModel,
  //           as: 'brand',
  //         },
  //         {
  //           model: this.models.productUsageModel,
  //           as: 'productUsage',
  //           include: [
  //             {
  //               model: this.models.productUsageLangModel,
  //               as: 'langs',
  //               where: {
  //                 lang,
  //               },
  //             },
  //
  //           ],
  //
  //         },
  //         {
  //           model: this.models.productTypeModel,
  //           as: 'productType',
  //
  //           include: [
  //             {
  //               model: this.models.productTypeLangModel,
  //               as: 'langs',
  //               where: {
  //                 lang,
  //               },
  //             },
  //
  //           ],
  //         },
  //
  //       ],
  //
  //     });
  //
  //     return res.status(200).send({
  //       success: true, result: products, count: products.length,
  //     });
  //   } catch (err) {
  //     return next(err);
  //   }
  // }

  async getProductsForHome(req, res, next) {
    try {
      const {
        // extraFilterIds = [],
        lang = 'ARM',
      } = req.body;
      const sliders = await this.models.sliderModel.findAll({
        where: {
          status: 'on',
        },
      });
      let isNew = false;
      let bestSells = false;
      let ownBrand = false;
      let percent = false;
      let extra = false;
      for (let i = 0; i < sliders.length; i++) {
        if (sliders[i].id === 1) isNew = true;
        if (sliders[i].id === 6) bestSells = true;
        if (sliders[i].id === 4) ownBrand = true;
        if (sliders[i].id === 3) percent = true;
        if (sliders[i].type === 'extraFilter') extra = true;
      }
      let extraSliders;
      let filters;
      const ExtraProducts = [];
      if (extra) {
        extraSliders = await this.models.sliderModel.findAll({
          where: {
            status: 'on',
            type: 'extraFilter',
          },
        });
        const extraIds = extraSliders.map((item) => item.id);
        filters = await this.models.extraFilterModel.findAll({
          where: {
            sliderId: extraIds,
          },

        });
        for (let i = 0; i < filters.length; i++) {
          const extraOne = await this.getProductsByExtraFilter(filters[i].id, 14, 0, lang);
          ExtraProducts.push(extraOne);
        }
        // await Promise.all(ExtraProducts);
      }
      let news;
      let bestSellers;
      let ownProduction;
      let sales;
      if (isNew) {
        news = await this.getAllNewProducts({ [Op.not]: null }, 14, 0, lang);
      }
      if (bestSells) {
        bestSellers = await this.getAllProductsBySells({ [Op.not]: null }, 14, 0, lang);
      }
      if (ownBrand) {
        ownProduction = await this.ownProduction(14, 0, lang);
      }
      if (percent) {
        sales = await this.sales(14, 0, lang);
      }

      return res.status(200).send({
        success: true,
        result: {
          news: {
            sliderId: 1,
            products: news,
          },
          bestSellers: {
            sliderId: 6,
            products: bestSellers,
          },
          ownProduction: {
            sliderId: 4,
            products: ownProduction,
          },
          sales: {
            sliderId: 3,
            products: sales,
          },
          ExtraProducts,
        },
      });
    } catch (err) {
      return next(err);
    }
  }

  async getProductsByExtraFilter(extraId, limit, offset, lang) {
    try {
      const products = await this.models.productModel.findAndCountAll({
        where: {
          visible: true,
          xmlCount: { [Op.gt]: 0 },
          type: 'product',
        },
        include: [
          {
            model: this.models.extraFilterModel,
            as: 'extraFilter',
            where: {
              id: extraId,
            },
            include: [
              {
                model: this.models.extraFilterLangModel,
                as: 'langs',
                where: {
                  lang,
                },
              },
            ],
          },
          {
            model: this.models.productPhotosModel,
            as: 'photos',
            where: {
              order: 1,
            },
            required: true,
          },
          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              lang,
            },
          },
          {
            model: this.models.productStatisticModel,
            as: 'statistic',
          },

        ],
        distinct: true,
        limit,
        offset,

      });
      const slider = await this.models.extraFilterModel.findOne({
        where: {
          id: extraId,
        },
      });
      const pages = Math.ceil(products.count / limit);
      return {
        sliderId: slider.sliderId,
        pages,
        products: { products },
      };
    } catch (err) {
      throw err;
    }
  }

  async ownProduction(limit, offset, lang) {
    try {
      const products = await this.models.productModel.findAndCountAll({
        where: {
          visible: true,
          xmlCount: { [Op.gt]: 0 },
        },
        include: [
          {
            model: this.models.productPhotosModel,
            as: 'photos',
            where: {
              order: 1,
            },
            required: true,
          },
          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              lang,
            },
          },
          {
            model: this.models.sexBrandModel,
            as: 'brand',
            where: {
              id: 1,
            },
          },
          {
            model: this.models.productStatisticModel,
            as: 'statistic',
          },
        ],
        distinct: true,
        limit,
        offset,
        order: [
          ['updatedAt', 'desc'],
        ],

      });
      const pages = Math.ceil(products.count / limit);
      return {
        products,
        pages,
      };
    } catch (err) {
      throw err;
    }
  }

  async sales(limit, offset, lang) {
    try {
      const products = await this.models.productModel.findAndCountAll({
        where: {
          visible: true,
          xmlCount: { [Op.gt]: 0 },
          percent: { [Op.not]: 0 },
        },
        include: [
          {
            model: this.models.productPhotosModel,
            as: 'photos',
            where: {
              order: 1,

            },
            required: true,
          },
          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              lang,
            },
          },
          {
            model: this.models.productStatisticModel,
            as: 'statistic',
          },

        ],
        order: [
          ['percent', 'DESC'],
        ],
        distinct: true,
        limit,
        offset,

      });
      const pages = Math.ceil(products.count / limit);
      return {
        products,
        pages,
      };
    } catch (err) {
      throw err;
    }
  }

  async getProductsByPercent(ids, limit, offset, lang) {
    try {
      const products = await this.models.productModel.findAndCountAll({
        where: {
          id: ids,
          visible: true,
          xmlCount: { [Op.gt]: 0 },
          percent: { [Op.not]: 0 },
        },
        include: [
          {
            model: this.models.productPhotosModel,
            as: 'photos',
            where: {
              order: 1,
            },
            required: true,
          },
          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              lang,
            },
          },
          {
            model: this.models.productStatisticModel,
            as: 'statistic',
          },

        ],
        order: [
          ['percent', 'DESC'],
        ],
        distinct: true,
        limit,
        offset,

      });
      const pages = Math.ceil(products.count / limit);
      return {
        products,
        pages,
      };
    } catch (err) {
      throw err;
    }
  }

  async getNewProducts(req, res, next) {
    try {
      const lastTwoWeeks = new Date(Date.now() - 12096e5);
      const newProducts = await this.models.productModel.findAll({
        where: {
          visible: true,
          xmlCount: { [Op.gt]: 0 },
          type: 'product',
          // updatedAt: { [Op.gte]: lastTwoWeeks },
          [Op.or]: [
            { isNew: true },
            { updatedAt: { [Op.gte]: lastTwoWeeks } },
          ],
        },
        order: [
          ['isNew', 'desc'],
          ['updatedAt', 'desc'],
        ],
      });
      return res.status(200).send({ success: true, result: newProducts });
    } catch (err) {
      return next(err);
    }
  }

  async getAllProductsBySells(ids, limit, offset, lang) {
    try {
      const today = new Date();
      const priorDate = new Date().setDate(today.getDate() - 30);
      const monthAgo = new Date(priorDate);
      const products = await this.models.productModel.findAndCountAll({
        where: {
          id: ids,
          visible: true,
          xmlCount: { [Op.gt]: 0 },
          type: 'product',
        },
        include: [
          {
            model: this.models.productPhotosModel,
            as: 'photos',
            where: {
              order: 1,
            },
            required: true,
          },
          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              lang,
            },
          },
          {
            model: this.models.productStatisticModel,
            as: 'statistic',
            required: true,
            where: {
              [Op.or]: [
                { bestSeller: true },
                {
                  [Op.and]: [
                    { updatedAt: { [Op.gte]: monthAgo } },
                    { totalPrice: { [Op.gt]: 0 } },
                  ],
                },
              ],
            },
          },

        ],
        distinct: true,
        limit,
        offset,
        order: [
          [{ model: this.models.productStatisticModel, as: 'statistic' }, 'bestSeller', 'DESC'],
          [{ model: this.models.productStatisticModel, as: 'statistic' }, 'totalPrice', 'DESC'],

        ],
      });
      const pages = Math.ceil(products.count / limit);
      return {
        products,
        pages,
      };
    } catch (err) {
      throw err;
    }
  }

  async getAllProductsBySellsOneRandom(ids, limit, offset, lang) {
    try {
      const today = new Date();
      const priorDate = new Date().setDate(today.getDate() - 30);
      const monthAgo = new Date(priorDate);
      const products = await this.models.productModel.findAndCountAll({
        where: {
          id: ids,
          visible: true,
          xmlCount: { [Op.gt]: 0 },
          type: 'product',
        },
        include: [
          {
            model: this.models.productPhotosModel,
            as: 'photos',
            where: {
              order: 1,
            },
            required: true,
          },
          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              lang,
            },
          },
          {
            model: this.models.productStatisticModel,
            as: 'statistic',
            required: true,
            where: {
              [Op.or]: [
                { bestSeller: true },
                {
                  [Op.and]: [
                    { updatedAt: { [Op.gte]: monthAgo } },
                    { totalPrice: { [Op.gt]: 0 } },
                  ],
                },
              ],
            },
          },

        ],
        distinct: true,
        limit,
        offset,
        order: [
          [{ model: this.models.productStatisticModel, as: 'statistic' }, 'bestSeller', 'DESC'],
          [{ model: this.models.productStatisticModel, as: 'statistic' }, 'totalPrice', 'DESC'],
          [db.literal('random()')],

        ],
      });
      const pages = Math.ceil(products.count / limit);
      return {
        products,
        pages,
      };
    } catch (err) {
      throw err;
    }
  }

  async getAllNewProducts(ids, limit, offset, lang) {
    try {
      const today = new Date();
      const priorDate = new Date().setDate(today.getDate() - 30);
      const monthAgo = new Date(priorDate);
      const products = await this.models.productModel.findAndCountAll({
        where: {
          id: ids,
          visible: true,
          xmlCount: { [Op.gt]: 0 },
          [Op.or]: [
            { isNew: true },
            { updatedAt: { [Op.gte]: monthAgo } },
          ],
        },
        include: [
          {
            model: this.models.productPhotosModel,
            as: 'photos',
            where: {
              order: 1,
            },
            required: true,
          },
          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              lang,
            },
          },
          {
            model: this.models.productStatisticModel,
            as: 'statistic',
          },

        ],
        distinct: true,
        limit,
        offset,
        order: [
          ['isNew', 'DESC'],
          ['updatedAt', 'DESC'],
        ],
      });
      const pages = Math.ceil(products.count / limit);

      return {
        products,
        pages,
      };
    } catch (err) {
      throw err;
    }
  }

  async getAllProductsByAsc(ids, limit, offset, lang) {
    try {
      const products = await this.models.productModel.findAndCountAll({
        where: { id: ids },
        include: [
          {
            model: this.models.productPhotosModel,
            as: 'photos',
            where: {
              order: 1,
            },
            required: true,
          },
          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              lang,
            },
          },
          {
            model: this.models.productStatisticModel,
            as: 'statistic',
          },

        ],
        distinct: true,
        limit,
        offset,
        order: [
          ['price', 'ASC'],

        ],
      });
      const pages = Math.ceil(products.count / limit);

      return {
        products,
        pages,
      };
    } catch (err) {
      throw err;
    }
  }

  async getAllProducts(req, res, next) {
    try {
      const {
        searchWord = '',
        limit = 10,
        offset = 0,
        extraFilterIds,
        typeIds,
        usageIds,
        ageIds,
        brandIds,
        lang = 'ARM',
        sex,
        minPrice = 0,
        maxPrice = 10000000,
        percent,
        bestSeller = false,
        isNew = false,
        priceByAsc = false,
        type,

      } = req.body;
      let oppositeSex;
      if (sex) {
        if (sex === 'BOY') {
          oppositeSex = 'GIRL';
        } else {
          oppositeSex = 'BOY';
        }
      }

      const today = new Date();
      const priorDate = new Date().setDate(today.getDate() - 30);
      const monthAgo = new Date(priorDate);

      const filtersAndIds = {
        where: {
          visible: true,
          xmlCount: { [Op.gt]: 0 },
          [Op.and]: [{ price: { [Op.gte]: minPrice } }, { price: { [Op.lte]: maxPrice } }],
          percent: percent > 0 ? ({ [Op.not]: 0 }) : ({ [Op.not]: null }),
          type: type || { [Op.not]: null },
          [Op.or]: [
            { isNew: isNew ? true : { [Op.not]: null } },
            { updatedAt: isNew ? { [Op.gte]: monthAgo } : { [Op.not]: null } },
          ],
        },
        attributes: ['id'],

        include: [

          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              name: { [Op.iLike]: `%${searchWord.trim()}%` },
              lang,
            },
          },
          {
            model: this.models.sexBrandModel,
            as: 'brand',
            attributes: ['id', 'name'],
            through: { attributes: ['id', 'sex'] },
            where: {
              id: brandIds || { [Op.not]: null },
            },
            required: !!brandIds,
          },
          {
            model: this.models.sexBrandMapModel,
            as: 'productSex',
            attributes: ['sex'],
            where: {
              sex: oppositeSex ? { [Op.not]: oppositeSex } : { [Op.not]: null },
            },
            required: !!sex,
          },
          {
            model: this.models.extraFilterModel,
            as: 'extraFilter',
            attributes: ['id'],
            through: { attributes: ['id'] },
            where: {
              id: extraFilterIds || { [Op.not]: null },
            },
            include: [
              {
                model: this.models.extraFilterLangModel,
                as: 'langs',
                attributes: ['id', 'name', 'lang'],
                where: {
                  lang,
                },
              },
            ],
            required: !!extraFilterIds,
          },
          {
            model: this.models.ageModel,
            as: 'productAge',
            attributes: ['id', 'minAge', 'maxAge'],
            through: { attributes: ['id'] },
            where: {
              id: ageIds || { [Op.not]: null },
            },
            required: !!ageIds,

          },

          {
            model: this.models.productTypeModel,
            as: 'productType',
            attributes: ['id'],
            through: { attributes: ['id'] },
            where: {
              id: typeIds || { [Op.not]: null },
            },
            include: [
              {
                model: this.models.productTypeLangModel,
                as: 'langs',
                attributes: ['id', 'name', 'lang'],
                where: {
                  lang,
                },
              },

            ],
            required: !!typeIds,
          },

          {
            model: this.models.productUsageModel,
            as: 'productUsage',
            attributes: ['id', 'image'],
            through: { attributes: ['id'] },
            where: {
              id: usageIds || { [Op.not]: null },
            },
            include: [
              {
                model: this.models.productUsageLangModel,
                as: 'langs',
                attributes: ['id', 'name', 'lang'],
                where: {
                  lang,
                },
              },

            ],
            required: !!usageIds,

          },
        ],
        distinct: true,
      };

      if (bestSeller) {
        filtersAndIds.include.push(
          {
            model: this.models.productStatisticModel,
            as: 'statistic',
            required: true,
            where: {
              [Op.or]: [
                { bestSeller: true },
                {
                  [Op.and]: [
                    { updatedAt: { [Op.gte]: monthAgo } },
                    { totalPrice: { [Op.gt]: 0 } },
                  ],
                },
              ],
            },
          },
        );
      }
      const start = new Date();

      const filteredProducts = await this.models.productModel.findAll(filtersAndIds);
      const end = new Date();
      console.log(`start   ${start.toISOString()}`);
      console.log(`end   ${end.toISOString()}`);
      console.log(`duration   ${end - start}`);

      const filters = {
        brand: {},
        productSex: {},
        extraFilter: {},
        productAge: {},
        productType: {},
        productUsage: {},
      };

      filteredProducts.forEach((item) => {
        const keys = Object.keys(item);
        keys.forEach((key) => {
          if (key === 'brand' || key === 'productType' || key === 'productUsage' || key === 'productAge' || key === 'extraFilter') {
            item[key].forEach((keyItem) => {
              filters[key][keyItem.id] = keyItem;
            });
          }
          if (key === 'productSex') {
            item[key].forEach((keyItem) => {
              filters[key][keyItem.sex] = keyItem;
            });
          }
        });
      });
      const ids = filteredProducts.map((item) => item.id);
      if (isNew) {
        const newProducts = await this.getAllNewProducts(ids, limit, offset, lang);
        return res.status(200).send({
          success: true, filters, pages: newProducts.pages, result: newProducts.products,
        });
      }
      if (priceByAsc) {
        const newProducts = await this.getAllProductsByAsc(ids, limit, offset, lang);
        return res.status(200).send({
          success: true, filters, pages: newProducts.pages, result: newProducts.products,
        });
      }
      if (bestSeller) {
        const newProducts = await this.getAllProductsBySells(ids, limit, offset, lang);
        return res.status(200).send({
          success: true, filters, pages: newProducts.pages, result: newProducts.products,
        });
      }
      if (percent) {
        const newProducts = await this.getProductsByPercent(ids, limit, offset, lang);
        return res.status(200).send({
          success: true, filters, pages: newProducts.pages, result: newProducts.products,
        });
      }
      const products = await this.models.productModel.findAndCountAll({
        where: { id: ids },
        include: [
          {
            model: this.models.productPhotosModel,
            as: 'photos',
            where: {
              order: 1,
            },
            required: true,
          },
          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              lang,
            },
          },
          {
            model: this.models.productStatisticModel,
            as: 'statistic',
          },
        ],
        distinct: true,
        limit,
        offset,
        order: [
          ['updatedAt', 'DESC'],
        ],
      });
      const pages = Math.ceil(products.count / limit);

      return res.send({
        success: true, filters, pages, result: products,
      });
    } catch (e) {
      return next(e);
    }
  }

  async getAllProductsFaster(req, res, next) {
    try {
      const {
        limit = 10,
        offset = 0,
        searchWord = '',
        extraFilterIds = [],
        typeIds = [],
        usageIds = [],
        ageIds = [],
        brandIds = [],
        lang = 'ARM',
        sex,
        minPrice = 0,
        maxPrice = 10000000,
        percent,
        bestSeller = false,
        isNew = false,
        priceByAsc = false,

      } = req.body;
      const prodIds = [];
      if (searchWord.trim()) {
        const prodIdsAndNames = await this.getProdIdsBySearchWord(searchWord, lang, false, next);
        prodIdsAndNames.map((item) => prodIds.push(item.id));
      }

      const today = new Date();
      const priorDate = new Date().setDate(today.getDate() - 30);
      const monthAgo = new Date(priorDate).toISOString();

      const filterBy = [];
      let filterQuery = 'where ';
      if (typeIds.length) {
        filterBy.push(`"typeId" in (${typeIds})`);
      }
      if (sex) {
        filterBy.push(`("SexBrandMap"."sex"='${sex}' or "SexBrandMap"."sex"='ALL')`);
      }
      if (brandIds.length) {
        filterBy.push(`"SexBrandMap"."brandId" in (${brandIds})`);
      }
      if (usageIds.length) {
        filterBy.push(`"usageId" in (${usageIds})`);
      }
      if (extraFilterIds.length) {
        filterBy.push(`"ExtraFilterProduct"."extraFilterId" in (${extraFilterIds})`);
      }
      if (ageIds.length) {
        filterBy.push(`"ageId" in (${ageIds})`);
      }
      if (bestSeller) {
        filterBy.push(`("ProductStatistic"."bestSeller" =true or (  "ProductStatistic"."totalPrice" != 0 and "ProductStatistic"."updatedAt">= '${monthAgo}'))`);
      }
      if (minPrice !== 0 || maxPrice) {
        filterBy.push(`("Product"."price" >= ${minPrice}  and "Product"."price" <= ${maxPrice})`);
      }
      if (isNew) {
        filterBy.push(`("Product"."isNew"= true  or "Product"."updatedAt" >= '${monthAgo}')`);
      }
      if (percent) {
        filterBy.push('"Product"."percent"!=0');
      }
      if (prodIds.length) {
        filterBy.push(`"Product"."id" in (${prodIds})`);
      }
      if (!prodIds.length && searchWord.trim()) {
        filterBy.push('"Product"."id" in (0)');
      }
      if (filterBy.length === 0) {
        filterQuery = '';
      } else if (filterBy.length === 1) {
        filterQuery += filterBy[0];
      } else {
        filterQuery = `where ${filterBy.join(' and ')}`;
      }
      const start = new Date();

      const brand = await db.query(`
     select distinct
            "SexBrandMap"."brandId" as "id",
            "Brand"."name" as "name"
     from "SexBrandMap"
        inner join "Brand" on "Brand"."id"="SexBrandMap"."brandId"
        inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
        left join "TypeMap" on "TypeMap"."productId" = "SexBrandMap"."productId"
        left join "UsageMap" on "UsageMap"."productId" = "SexBrandMap"."productId"
        left join "AgeMap" on "AgeMap"."productId" = "SexBrandMap"."productId"
        left join "ProductStatistic" on "ProductStatistic"."productId" = "SexBrandMap"."productId"
        left join "ExtraFilterProduct" on "ExtraFilterProduct"."productId" = "SexBrandMap"."productId"
     ${filterQuery} 
     order by "id"
      `, { type: db.QueryTypes.SELECT });

      const type = await db.query(`
      select distinct
                "TypeMap"."typeId" as "id",
                "ProductTypeLang"."name" as "name"

      from "SexBrandMap"
          inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
          left join "TypeMap" on "TypeMap"."productId" = "SexBrandMap"."productId"
          left join "UsageMap" on "UsageMap"."productId" = "SexBrandMap"."productId"
          left join "AgeMap" on "AgeMap"."productId" = "SexBrandMap"."productId"
          left join "ProductStatistic" on "ProductStatistic"."productId" = "SexBrandMap"."productId"
          left join "ExtraFilterProduct" on "ExtraFilterProduct"."productId" = "SexBrandMap"."productId"
          inner join "ProductTypeLang" on "ProductTypeLang"."productTypeId" = "TypeMap"."typeId" and "ProductTypeLang"."lang"='${lang}'
      ${filterQuery}
      order by "id"
       `, { type: db.QueryTypes.SELECT });
      const usage = await db.query(`
      select distinct
                "UsageMap"."usageId" as "id",
                "ProductUsageLang"."name" as "name"

      from "SexBrandMap"
          inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
          left join "TypeMap" on "TypeMap"."productId" = "SexBrandMap"."productId"
          left join "UsageMap" on "UsageMap"."productId" = "SexBrandMap"."productId"
          left join "AgeMap" on "AgeMap"."productId" = "SexBrandMap"."productId"
          left join "ProductStatistic" on "ProductStatistic"."productId" = "SexBrandMap"."productId"
          left join "ExtraFilterProduct" on "ExtraFilterProduct"."productId" = "SexBrandMap"."productId"
          inner join "ProductUsageLang" on "ProductUsageLang"."productUsageId" = "UsageMap"."usageId" and "ProductUsageLang"."lang"='${lang}'
      ${filterQuery}
      order by "id"
       `, { type: db.QueryTypes.SELECT });
      const extraFilter = await db.query(`
      select distinct
                "ExtraFilterProduct"."extraFilterId" as "id",
                "ExtraFilterLang"."name" as "name"

      from "SexBrandMap"
          inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
          left join "TypeMap" on "TypeMap"."productId" = "SexBrandMap"."productId"
          left join "UsageMap" on "UsageMap"."productId" = "SexBrandMap"."productId"
          left join "AgeMap" on "AgeMap"."productId" = "SexBrandMap"."productId"
          left join "ProductStatistic" on "ProductStatistic"."productId" = "SexBrandMap"."productId"
          left join "ExtraFilterProduct" on "ExtraFilterProduct"."productId" = "SexBrandMap"."productId"
          inner join "ExtraFilterLang" on "ExtraFilterLang"."extraFilterId" = "ExtraFilterProduct"."extraFilterId" and "ExtraFilterLang"."lang"='${lang}'
      ${filterQuery}
      order by "id"
       `, { type: db.QueryTypes.SELECT });
      const age = await db.query(`
     select distinct
         "AgeMap"."ageId" as "id",
          "Age"."minAge" as "minAge",
          "Age"."maxAge" as "maxAge"

      from "SexBrandMap"
          inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
          left join "TypeMap" on "TypeMap"."productId" = "SexBrandMap"."productId"
          left join "UsageMap" on "UsageMap"."productId" = "SexBrandMap"."productId"
          left join "AgeMap" on "AgeMap"."productId" = "SexBrandMap"."productId"
          left join "ProductStatistic" on "ProductStatistic"."productId" = "SexBrandMap"."productId"
          left join "ExtraFilterProduct" on "ExtraFilterProduct"."productId" = "SexBrandMap"."productId"
          inner join "Age" on "Age"."id" = "AgeMap"."ageId"
      ${filterQuery}
      order by "id"
       `, { type: db.QueryTypes.SELECT });
      const productSex = await db.query(`
     select distinct
         "SexBrandMap"."sex" as "sex"
     from "SexBrandMap"
            inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
          left join "TypeMap" on "TypeMap"."productId" = "SexBrandMap"."productId"
          left join "UsageMap" on "UsageMap"."productId" = "SexBrandMap"."productId"
          left join "AgeMap" on "AgeMap"."productId" = "SexBrandMap"."productId"
          left join "ProductStatistic" on "ProductStatistic"."productId" = "SexBrandMap"."productId"
          left join "ExtraFilterProduct" on "ExtraFilterProduct"."productId" = "SexBrandMap"."productId"
      ${filterQuery}
       `, { type: db.QueryTypes.SELECT });
      const productIds = await db.query(`
      select distinct
          "Product"."id" as "id"
      from "SexBrandMap"
          inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
          left join "TypeMap" on "TypeMap"."productId" = "SexBrandMap"."productId"
          left join "UsageMap" on "UsageMap"."productId" = "SexBrandMap"."productId"
          left join "AgeMap" on "AgeMap"."productId" = "SexBrandMap"."productId"
          left join "ProductStatistic" on "ProductStatistic"."productId" = "SexBrandMap"."productId"
          left join "ExtraFilterProduct" on "ExtraFilterProduct"."productId" = "SexBrandMap"."productId"
      ${filterQuery}
       `, { type: db.QueryTypes.SELECT });

      const end = new Date();
      console.log(`duration   ${end - start}`);

      const filters = {
        productSex,
        age,
        type,
        usage,
        brand,
        extraFilter,
      };

      const ids = productIds.map((item) => item.id);
      if (isNew) {
        const newProducts = await this.getAllNewProducts(ids, limit, offset, lang);
        return res.status(200).send({
          success: true, filters, pages: newProducts.pages, result: newProducts.products,
        });
      }
      if (priceByAsc) {
        const newProducts = await this.getAllProductsByAsc(ids, limit, offset, lang);
        return res.status(200).send({
          success: true, filters, pages: newProducts.pages, result: newProducts.products,
        });
      }
      if (bestSeller) {
        const newProducts = await this.getAllProductsBySells(ids, limit, offset, lang);
        return res.status(200).send({
          success: true, filters, pages: newProducts.pages, result: newProducts.products,
        });
      }
      if (percent) {
        const newProducts = await this.getProductsByPercent(ids, limit, offset, lang);
        return res.status(200).send({
          success: true, filters, pages: newProducts.pages, result: newProducts.products,
        });
      }
      const products = await this.models.productModel.findAndCountAll({
        where: { id: ids },
        include: [
          {
            model: this.models.productPhotosModel,
            as: 'photos',
            where: {
              order: 1,
            },
            required: true,
          },
          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              lang,
            },
          },
          {
            model: this.models.productStatisticModel,
            as: 'statistic',
          },
        ],
        distinct: true,
        limit,
        offset,
        order: [
          ['updatedAt', 'DESC'],
        ],
      });
      const pages = Math.ceil(products.count / limit);

      return res.send({
        success: true, filters, pages, result: products,
      });
    } catch (e) {
      return next(e);
    }
  }

  async getBrandById(req, res, next) {
    try {
      const {
        id,
      } = req.params;
      const foundBrand = await this.models.brandModel.findOne({
        where: {
          id,
        },
      });
      if (!foundBrand) {
        return res.status(409).send({ success: false, msg: 'invalid id' });
      }
      return res.status(200).send({ success: true, result: foundBrand });
    } catch (err) {
      return next(err);
    }
  }

  async getAllBrands(req, res, next) {
    try {
      const {
        searchWord = '',
        limit = 200,
        offset = 0,
      } = req.body;
      const allBrands = await this.models.brandModel.findAndCountAll({
        where: {
          name: { [Op.iLike]: `%${searchWord.trim()}%` },
        },
        limit,
        offset,
      });
      const pages = Math.ceil(allBrands.count / limit);

      return res.status(200).send({ success: true, pages, result: allBrands });
    } catch (err) {
      return next(err);
    }
  }

  async getAllSliders(req, res, next) {
    try {
      const allSliders = await this.models.sliderModel.findAll({
        where: {
          status: 'on',
        },
      });

      return res.status(200).send({ success: true, result: { rows: allSliders } });
    } catch (err) {
      return next(err);
    }
  }

  async getAllProductTypes(req, res, next) {
    try {
      const {
        searchWord = '',
        limit = 200,
        offset = 0,
        lang = 'ARM',
      } = req.body;
      const allProductTypes = await this.models.productTypeModel.findAndCountAll({
        attributes: ['id'],
        include: [{
          model: this.models.productTypeLangModel,
          as: 'langs',
          attributes: ['lang', 'name'],
          where: {
            name: { [Op.iLike]: `%${searchWord.trim()}%` },
            lang,
          },
        }],
        distinct: true,
        limit,
        offset,
      });
      const pages = Math.ceil(allProductTypes.count / limit);

      return res.status(200).send({ success: true, pages, result: allProductTypes });
    } catch (err) {
      return next(err);
    }
  }

  async getTypeById(req, res, next) {
    try {
      const {
        id,
        lang,
      } = req.params;

      const found = await this.models.productTypeModel.findOne({
        where: {
          id,
        },
        include: [
          {
            model: this.models.productTypeLangModel,
            as: 'langs',
            where: {
              lang: lang || { [Op.not]: null },
            },

          }],
      });
      if (!found) {
        return res.status(409).send({ success: false, msg: 'invalid id' });
      }
      return res.status(200).send({ success: true, result: found });
    } catch (err) {
      return next(err);
    }
  }

  async getAllProductUsages(req, res, next) {
    try {
      const {
        searchWord = '',
        limit = 200,
        offset = 0,
        lang = 'ARM',
      } = req.body;
      const allProductUsage = await this.models.productUsageModel.findAndCountAll({
        include: [{
          model: this.models.productUsageLangModel,
          as: 'langs',
          attributes: ['lang', 'name', 'description'],
          where: {
            name: { [Op.iLike]: `%${searchWord.trim()}%` },
            lang,
          },
        }],
        distinct: true,
        limit,
        offset,
      });
      const pages = Math.ceil(allProductUsage.count / limit);

      return res.status(200).send({ success: true, pages, result: allProductUsage });
    } catch (err) {
      return next(err);
    }
  }

  async getUsageById(req, res, next) {
    try {
      const {
        id,
      } = req.params;

      const found = await this.models.productUsageModel.findOne({
        where: {
          id,
        },
        include: [{
          model: productUsageLangModel,
          as: 'langs',

        }],
      });
      if (!found) {
        const err = new Error('invalid id');
        err.status = 409;
        throw err;
      }
      return res.status(200).send({ success: true, result: found });
    } catch (err) {
      return next(err);
    }
  }

  async getExtraFilterById(req, res, next) {
    try {
      const {
        id,
      } = req.params;

      const foundExtra = await this.models.extraFilterModel.findOne({
        where: {
          id,
        },
        include: [{
          model: this.models.extraFilterLangModel,
          as: 'langs',

        }],
      });
      if (!foundExtra) {
        const err = new Error('invalid id');
        err.status = 409;
        throw err;
      }
      return res.status(200).send({ success: true, result: foundExtra });
    } catch (err) {
      return next(err);
    }
  }

  async getAllExtraFilters(req, res, next) {
    try {
      const {
        searchWord = '',
        limit = 20,
        offset = 0,
        lang = 'ARM',
      } = req.body;
      const allExtraFilters = await this.models.extraFilterModel.findAndCountAll({

        include: [
          {
            model: this.models.extraFilterLangModel,
            as: 'langs',
            where: {
              name: { [Op.iLike]: `%${searchWord.trim()}%` },
              lang,
            },
          },
        ],
        distinct: true,
        limit,
        offset,
      });
      const pages = Math.ceil(allExtraFilters.count / limit);

      return res.status(200).send({ success: true, pages, result: allExtraFilters });
    } catch (err) {
      return next(err);
    }
  }

  async getProductById(req, res, next) {
    try {
      const {
        id,
      } = req.params;
      const {
        lang = 'ARM',
        limit = 20,
        offset = 0,
      } = req.body;
      const productById = await this.models.productModel.findOne({
        where: {
          id,
          xmlCount: { [Op.gt]: 0 },
          visible: true,
        },
        include: [
          {
            model: this.models.productPhotosModel,
            as: 'photos',
            required: true,
          },
          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              lang,
            },
          },
          {
            model: this.models.productModel,
            as: 'accessories',
          },
          {
            model: this.models.brandModel,
            as: 'brand',
          },
          {
            model: this.models.sexBrandMapModel,
            as: 'productSex',
          },
          {
            model: this.models.productTypeModel,
            as: 'productType',
            include: [
              {
                model: this.models.productTypeLangModel,
                as: 'langs',
                where: {
                  lang,
                },
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
                where: {
                  lang,
                },
              },
            ],
          },
          {
            model: this.models.productStatisticModel,
            as: 'statistic',
          },

        ],
      });
      if (!productById) {
        const err = new Error('invalid id');
        err.status = 409;
        throw err;
      }
      let sameType;
      let sameSex;
      const typeIds = productById.productType.map((item) => item.id);

      if (productById.productType.length > 0) {
        sameType = productById.productType[0].id;
      }
      if (productById.productSex.length > 0) {
        sameSex = productById.productSex[0].sex;
      }

      const similarProducts = await this.models.productModel.findAndCountAll({
        where: {
          id: { [Op.ne]: id },
          visible: true,
          xmlCount: { [Op.gt]: 0 },
        },
        include: [
          {
            model: this.models.productPhotosModel,
            as: 'photos',
            where: {
              order: 1,
            },
            required: true,
          },
          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              lang,
            },
          },
          {
            model: this.models.productTypeModel,
            as: 'productType',
            where: {
              id: typeIds,
            },
            include: [
              {
                model: this.models.productTypeLangModel,
                as: 'langs',
                where: {
                  lang,
                },
              },

            ],
            required: !!sameType,
          },
          {
            model: this.models.sexBrandMapModel,
            as: 'productSex',
            where: {
              sex: sameSex || { [Op.not]: null },
            },
            required: !!sameSex,
          },
        ],
        limit,
        offset,
      });

      const inPendingStatus = await this.models.orderedProductsModel.findAll({
        where: {
          productId: id,
          status: 'pending',
        },
      });

      let orderedCount = 0;

      if (inPendingStatus.length > 0) {
        for (let i = 0; i < inPendingStatus.length; i += 1) {
          orderedCount += inPendingStatus[i].count;
        }
      }
      productById.xmlCount -= orderedCount;
      const priceLimit = (productById.price / 100) * 30;

      const escortingProducts = await this.models.productModel.findAll({
        where: {
          xmlCount: { [Op.gt]: 0 },
          id: { [Op.not]: id },
          price: { [Op.lte]: priceLimit },
          visible: true,
        },
        include: [

          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              lang,
            },
          },
          {
            model: this.models.productPhotosModel,
            as: 'photos',
            where: {
              order: 1,
            },
          },
          {
            model: this.models.productTypeModel,
            as: 'productType',
            where: {
              id: typeIds,
            },
          },
          {
            model: this.models.sexBrandMapModel,
            as: 'productSex',
            where: {
              sex: productById.productSex[0].sex,
            },
          },

        ],
        limit,
        offset,
      });

      return res.status(200).send({ success: true, result: { productById, similarProducts, escortingProducts } });
    } catch (err) {
      return next(err);
    }
  }

  async getProductsByIds(req, res, next) {
    try {
      const {
        ids,
        lang = 'ARM',
        wishList = false,
        limit = 20,
        offset = 0,
      } = req.body;

      const productByIds = await this.models.productModel.findAll({
        where: {
          id: ids,
          xmlCount: wishList ? { [Op.not]: null } : { [Op.gt]: 0 },
          visible: true,
        },
        include: [
          {
            model: this.models.productPhotosModel,
            as: 'photos',
            where: {
              order: 1,
            },
            required: true,
          },
          {
            model: this.models.productLangModel,
            as: 'langs',
            where: {
              lang,
            },
          },
          {
            model: this.models.productStatisticModel,
            as: 'statistic',
          },

        ],
        limit,
        offset,
      });
      if (!productByIds) {
        const err = new Error('invalid id');
        err.status = 409;
        throw err;
      }
      const inPendingStatus = await this.models.orderedProductsModel.findAll({
        where: {
          productId: ids,
          status: 'pending',
        },
      });

      if (inPendingStatus.length > 0) {
        for (let i = 0; i < inPendingStatus.length; i += 1) {
          for (let j = 0; j < productByIds.length; j += 1) {
            if (productByIds[j].id === inPendingStatus[i].productId) {
              productByIds[j].xmlCount -= inPendingStatus[i].count;
            }
          }
        }
      }

      return res.status(200).send({ success: true, result: productByIds });
    } catch (err) {
      return next(err);
    }
  }

  async getMainSliderById(req, res, next) {
    try {
      const {
        id,
      } = req.params;
      const foundSlider = await this.models.mainSliderModel.findOne({
        where: {
          id,
        },
      });
      if (!foundSlider) {
        const err = new Error('invalid id');
        err.status = 409;
        throw err;
      }
      return res.status(200).send({ success: true, result: foundSlider });
    } catch (err) {
      return next(err);
    }
  }

  async getAllMainSliders(req, res, next) {
    try {
      const allSliders = await this.models.mainSliderModel.findAndCountAll();

      return res.status(200).send({ success: true, count: allSliders.count, result: allSliders });
    } catch (err) {
      return next(err);
    }
  }

  async getHoverFiltersAll(req, res, next) {
    try {
      const {

        lang = 'ARM',
      } = req.query;

      const brand = await db.query(`
      select distinct "SexBrandMap"."brandId" as "id",
                "Brand"."name" as "name"
      from "SexBrandMap"
          inner join "Brand" on "Brand"."id" = "brandId"
          inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
          order by "id"
      `, { type: db.QueryTypes.SELECT });
      const type = await db.query(`
      select distinct "TypeMap"."typeId" as "id",
                "ProductTypeLang"."name" as "name"
      from "TypeMap"
          inner join "ProductTypeLang" on "ProductTypeLang"."productTypeId" = "TypeMap"."typeId" and "ProductTypeLang"."lang"='${lang}'
          inner join "Product" on "TypeMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
                    order by "id"

      `, { type: db.QueryTypes.SELECT });
      const usage = await db.query(`
      select distinct "UsageMap"."usageId" as "id",
                "ProductUsageLang"."name" as "name"
      from "UsageMap"
            inner join "ProductUsageLang" on "ProductUsageLang"."productUsageId" = "UsageMap"."usageId" and "ProductUsageLang"."lang"='${lang}'
            inner join "Product" on "UsageMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
                      order by "id"
`,
      { type: db.QueryTypes.SELECT });
      const age = await db.query(`
      select distinct "AgeMap"."ageId" as "id",
                "Age"."minAge" as "minAge",
                "Age"."maxAge" as "maxAge"
      from "AgeMap"
            inner join "Age" on "Age"."id" = "AgeMap"."ageId"
            inner join "Product" on "AgeMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
                      order by "id"

      `,
      { type: db.QueryTypes.SELECT });
      return res.send({
        brand, type, usage, age,
      });
    } catch (err) {
      return next(err);
    }
  }

  async getHoverFiltersBoy(req, res, next) {
    try {
      const {

        lang = 'ARM',
      } = req.query;

      const brand = await db.query(`
      select distinct "SexBrandMap"."brandId" as "id",
                "Brand"."name" as "name"
      from "SexBrandMap"
            inner join "Brand" on "Brand"."id" = "brandId"
            inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
      where "SexBrandMap"."sex" = 'BOY' or "SexBrandMap"."sex" = 'ALL'
      `, { type: db.QueryTypes.SELECT });
      const type = await db.query(`
      select distinct "TypeMap"."typeId" as "id",
                "ProductTypeLang"."name" as "name"
      from "SexBrandMap"
            inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
            inner join "TypeMap" on "TypeMap"."productId" = "Product"."id"
            inner join "ProductTypeLang" on "ProductTypeLang"."productTypeId" = "TypeMap"."typeId" and "ProductTypeLang"."lang" = '${lang}'
      where "SexBrandMap"."sex" = 'BOY' or "SexBrandMap"."sex" = 'ALL'

      `, { type: db.QueryTypes.SELECT });
      const usage = await db.query(`
      select distinct "UsageMap"."usageId" as "id",
                "ProductUsageLang"."name" as "name"
      from "SexBrandMap"
            inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
            inner join "UsageMap" on "UsageMap"."productId" = "Product"."id"
            inner join "ProductUsageLang" on "ProductUsageLang"."productUsageId" = "UsageMap"."usageId" and "ProductUsageLang"."lang" = '${lang}'
      where "SexBrandMap"."sex" = 'BOY' or "SexBrandMap"."sex" = 'ALL'
`,
      { type: db.QueryTypes.SELECT });
      const age = await db.query(`
      select distinct "AgeMap"."ageId" as "id",
                "Age"."minAge" as "minAge",
                "Age"."maxAge" as "maxAge"
      from "SexBrandMap"
            inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
            inner join "AgeMap" on "AgeMap"."productId" = "Product"."id"
            inner join "Age" on "Age"."id" = "AgeMap"."ageId"
      where "SexBrandMap"."sex" = 'BOY' or "SexBrandMap"."sex" = 'ALL'
      `,
      { type: db.QueryTypes.SELECT });
      return res.send({
        brand, type, usage, age,
      });
    } catch (err) {
      return next(err);
    }
  }

  async getHoverFiltersGirl(req, res, next) {
    try {
      const {

        lang = 'ARM',
      } = req.query;

      const brand = await db.query(`
      select distinct "SexBrandMap"."brandId" as "id",
                "Brand"."name" as "name"
      from "SexBrandMap"
          inner join "Brand" on "Brand"."id" = "brandId"
          inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
      where "SexBrandMap"."sex" = 'GIRL' or "SexBrandMap"."sex" = 'ALL'
      `, { type: db.QueryTypes.SELECT });
      const type = await db.query(`
      select distinct "TypeMap"."typeId" as "id",
                "ProductTypeLang"."name" as "name"
      from "SexBrandMap"
          inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
          inner join "TypeMap" on "TypeMap"."productId" = "Product"."id"
          inner join "ProductTypeLang" on "ProductTypeLang"."productTypeId" = "TypeMap"."typeId" and "ProductTypeLang"."lang" = '${lang}'
      where "SexBrandMap"."sex" = 'GIRL' or "SexBrandMap"."sex" = 'ALL'

      `, { type: db.QueryTypes.SELECT });
      const usage = await db.query(`
      select distinct "UsageMap"."usageId" as "id",
                "ProductUsageLang"."name" as "name"
      from "SexBrandMap"
            inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
            inner join "UsageMap" on "UsageMap"."productId" = "Product"."id"
            inner join "ProductUsageLang" on "ProductUsageLang"."productUsageId" = "UsageMap"."usageId" and "ProductUsageLang"."lang" = '${lang}'
      where "SexBrandMap"."sex" = 'GIRL' or "SexBrandMap"."sex" = 'ALL'
`,
      { type: db.QueryTypes.SELECT });
      const age = await db.query(`
      select distinct "AgeMap"."ageId" as "id",
                "Age"."minAge" as "minAge",
                "Age"."maxAge" as "maxAge"
      from "SexBrandMap"
            inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
            inner join "AgeMap" on "AgeMap"."productId" = "Product"."id"
            inner join "Age" on "Age"."id" = "AgeMap"."ageId"
      where "SexBrandMap"."sex" = 'GIRL' or "SexBrandMap"."sex" = 'ALL'
      `,
      { type: db.QueryTypes.SELECT });
      return res.send({
        brand, type, usage, age,
      });
    } catch (err) {
      return next(err);
    }
  }

  async getHoverFiltersInfant(req, res, next) {
    try {
      const {

        lang = 'ARM',
      } = req.query;

      const brand = await db.query(`
     select distinct "SexBrandMap"."brandId" as "id",
                "Brand"."name" as "name"
     from "SexBrandMap"
          inner join "Brand" on "Brand"."id" = "brandId"
          inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
          inner join "AgeMap" on "AgeMap"."productId" = "Product"."id" and "AgeMap"."ageId"=1
      `, { type: db.QueryTypes.SELECT });
      const type = await db.query(`
      select distinct "TypeMap"."typeId" as "id",
                "ProductTypeLang"."name" as "name"
      from "AgeMap"
            inner join "TypeMap" on "TypeMap"."productId" = "AgeMap"."productId"
            inner join "ProductTypeLang" on "ProductTypeLang"."productTypeId" = "TypeMap"."typeId" and "ProductTypeLang"."lang"='ARM'
            inner join "Product" on "TypeMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
    where "AgeMap"."ageId"=1

      `, { type: db.QueryTypes.SELECT });
      const usage = await db.query(`
      select distinct "UsageMap"."usageId" as "id",
                "ProductUsageLang"."name" as "name"
      from "AgeMap"
          inner join "UsageMap" on "UsageMap"."productId" = "AgeMap"."productId"
          inner join "ProductUsageLang" on "ProductUsageLang"."productUsageId" = "UsageMap"."usageId" and "ProductUsageLang"."lang"='ARM'
          inner join "Product" on "UsageMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
      where "AgeMap"."ageId"=1
`,
      { type: db.QueryTypes.SELECT });
      const age = await db.query(`
      select "Age"."id" as "id",
              "Age"."minAge" as "minAge",
              "Age"."maxAge" as "maxAge"
      from "Age"
      where "Age"."id"=1
      `,
      { type: db.QueryTypes.SELECT });
      return res.send({
        brand, type, usage, age,
      });
    } catch (err) {
      return next(err);
    }
  }

  async getHoverFiltersMankan(req, res, next) {
    try {
      const {

        lang = 'ARM',
      } = req.query;

      const brand = await db.query(`
    select distinct "SexBrandMap"."brandId" as "id",
                "Brand"."name" as "name"
    from "SexBrandMap"
        inner join "Brand" on "Brand"."id" = "brandId"
    where "SexBrandMap"."brandId" = 1
      `, { type: db.QueryTypes.SELECT });
      const type = await db.query(`
      select distinct "TypeMap"."typeId" as "id",
                "ProductTypeLang"."name" as "name"
      from "SexBrandMap"
          inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
          inner join "TypeMap" on "TypeMap"."productId" = "Product"."id"
          inner join "ProductTypeLang" on "ProductTypeLang"."productTypeId" = "TypeMap"."typeId" and "ProductTypeLang"."lang" = 'ARM'
      where "SexBrandMap"."brandId" = 1

      `, { type: db.QueryTypes.SELECT });
      const usage = await db.query(`
     select distinct "UsageMap"."usageId" as "id",
                "ProductUsageLang"."name" as "name"
      from "SexBrandMap"
          inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
          inner join "UsageMap" on "UsageMap"."productId" = "Product"."id"
           inner join "ProductUsageLang" on "ProductUsageLang"."productUsageId" = "UsageMap"."usageId" and "ProductUsageLang"."lang" = 'ARM'
     where "SexBrandMap"."brandId"=1
`,
      { type: db.QueryTypes.SELECT });
      const age = await db.query(`
     select distinct "AgeMap"."ageId" as "id",
                "Age"."minAge" as "minAge",
                "Age"."maxAge" as "maxAge"
      from "SexBrandMap"
          inner join "Product" on "SexBrandMap"."productId" = "Product"."id" and "Product"."visible"=true and "Product"."xmlCount"!=0
          inner join "AgeMap" on "AgeMap"."productId" = "Product"."id"
          inner join "Age" on "Age"."id" = "AgeMap"."ageId"
     where "SexBrandMap"."brandId"=1
      `,
      { type: db.QueryTypes.SELECT });
      return res.send({
        brand, type, usage, age,
      });
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = new ProductManager();
