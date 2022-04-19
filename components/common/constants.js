const localNamesFromPaths = {
  '/about-us': 'local.about_us',
  '/shops': 'local.our_addresses',
  '/wishlist': 'local.wishlist',
  '/payment-delivery-return': 'local.payment_delivery_return',
  '/using-rules': 'local.using-rules',
  '/bonus-promo-code': 'local.bonus-and-promo-code',
  '/vacancy': 'local.vacancies',
  '/cart': 'local.my_basket',
  '/catalog': 'local.catalog',
  '/': 'local.home-page',
};

export const getTextFromPath = (pathname, msg) => {
  const local = localNamesFromPaths[pathname];
  return msg[local];
};
