const Brand = require('./Brand');
const ProductModel = require('./Product');
const ProductType = require('./ProductType');
const ProductUsage = require('./ProductUsage');
const ProductUsageLang = require('./ProductUsageLang');
const ProductAccessoriesMap = require('./ProductAccessoriesMap');
const OrderedProducts = require('./OrderedProducts');
const Vocation = require('./Vocation');
const VocationLang = require('./VocationLang');
const ProductPhotos = require('./ProductPhotos');
const ProductLang = require('./ProductLang');
const Orders = require('./Orders');
const ProductMap = require('./ProductMap');
const WishList = require('./WishList');
const PromoCodes = require('./PromoCodes');
const BoughtProducts = require('./BoughtProducts');
const ProductStatistic = require('./ProductStatistic');
const Subscribers = require('./Subscribers');
const ProductTypeLang = require('./ProductTypeLang');
const ExtraFilter = require('./ExtraFilter');
const ExtraFilterProduct = require('./ExtraFilterProduct');
const SexBrandMap = require('./SexBrandMap');
const TypeMap = require('./TypeMap');
const UsageMap = require('./UsageMap');
const Age = require('./Age');
const AgeMap = require('./AgeMap');
const Sliders = require('./Sliders');
const ExtraFilterLang = require('./ExtraFilterLang');
const CartList = require('./CartList');
const WeekTime = require('./WeekTime');
const MainSlider = require('./MainSlider');

/**
 *
 * @param seq
 * @returns {{Company}}
 */
module.exports = (seq) => ({

  ProductType: ProductType(seq),
  Orders: Orders(seq),
  ProductUsage: ProductUsage(seq),
  BoughtProducts: BoughtProducts(seq),
  ProductUsageLang: ProductUsageLang(seq),
  Vocation: Vocation(seq),
  VocationLang: VocationLang(seq),
  ProductModel: ProductModel(seq),
  Brand: Brand(seq),
  ProductPhotos: ProductPhotos(seq),
  ProductLang: ProductLang(seq),
  ProductMap: ProductMap(seq),
  WishList: WishList(seq),
  PromoCodes: PromoCodes(seq),
  ProductAccessoriesMap: ProductAccessoriesMap(seq),
  OrderedProducts: OrderedProducts(seq),
  ProductStatistic: ProductStatistic(seq),
  Subscribers: Subscribers(seq),
  ProductTypeLang: ProductTypeLang(seq),
  ExtraFilter: ExtraFilter(seq),
  ExtraFilterProduct: ExtraFilterProduct(seq),
  SexBrandMap: SexBrandMap(seq),
  TypeMap: TypeMap(seq),
  UsageMap: UsageMap(seq),
  AgeMap: AgeMap(seq),
  Age: Age(seq),
  Sliders: Sliders(seq),
  ExtraFilterLang: ExtraFilterLang(seq),
  CartList: CartList(seq),
  WeekTime: WeekTime(seq),
  MainSlider: MainSlider(seq),
});
