

export const menuItemWithSubmenu = ({ messages }) => [
  {
    href: '/catalog?a=1',
    text: messages['local.all'],
    name: 'all',
    icon: '/images/category/all_hover.png',
    hoverIcon: '/images/category/all.png',
  },
  {
    href: '/catalog?gender=BOY',
    text: messages['local.to_boys'],

    name: 'boys',
    icon: '/images/category/boy.png',
    hoverIcon: '/images/category/boy_hover.png',
  },
  {
    href: '/catalog?gender=GIRL',
    text: messages['local.to_girls'],
    name: 'girls',
    icon: '/images/category/girl.png',
    hoverIcon: '/images/category/girl_hover.png',
  },
  {
    href: '/catalog?age=1',
    text: messages['local.to_infants'],
    icon: '/images/category/baby.png',
    name: 'infants',
    hoverIcon: '/images/category/baby_hover.png',
  },
  {
    href: '/catalog?brand=1',
    text: messages['local.own_products'],
    name: 'own',
    icon: '/images/category/own_product.png',
    hoverIcon: '/images/category/own_product_hover.png',
  },
];
export const onlyClickable = ({ messages }) => [
  {
    href: '/catalog?classification=isNew',
    text: messages['local.news'],
    icon: '/images/category/new.png',
    hoverIcon: '/images/category/new_hover.png',
  },
  {
    href: '/catalog?classification=percent',
    text: messages['local.discounts'],
    icon: '/images/category/discount.png',
    hoverIcon: '/images/category/discount_hover.png',
  },
  {
    href: '/catalog?classification=bestSeller',
    text: messages['local.best_selling'],
    icon: '/images/category/bestsaller.png',
    hoverIcon: '/images/category/bestsaller_hover.png',
  },
];
