import keys from '../constants/keys';

const paths = {

  recoveringPassword: '/api/user/recoverPassword',
  feedback: '/api/user/feedback',
  offer_complaint: '/api/user/complain',
  get_catalog: `${keys.HOST}/get_catalog`,
  get_filter_id_by_name: `${keys.HOST}/get_filter_id_by_name`,
  get_slider_products: `${keys.HOST}/get_home_slider_products`,
  get_menu_list: `${keys.HOST}/get_menu_list`,
  change_password: '/api/user/changePassword',
  subscribe: '/api/user/subscribers',
  change_userInfo: '/api/user/info',
  vacancy: '/api/vocation/createPdf',
  vacancyFile: '/api/vocation/sendAppliersMail',
  removeUserPageOrder: '/api/user/order/remove',
  getPromoCode: '/api/user/promoCode/',
};
export default paths;
